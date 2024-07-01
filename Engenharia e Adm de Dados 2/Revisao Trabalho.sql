/* Revisao trabalho - 28/02/2024 */
use hemersonlacovic;
select * from correcao_valor_produto cvp;
select * from produto p;
select * from itens_venda iv;
/*
========================================================================================================
1) Criar uma Procedure onde, ao serem informados os parâmetros da tabela acima, grave o registro. 
O mesmo será utilizado para determinar o valor do produto com seu reajuste em um determinado período da sua venda.
Ex: produto X 10 reais em janeiro 2023 e fevereiro o mesmo custa 11;
========================================================================================================
*/
DELIMITER $$
create or replace
procedure reajuste(in descricao varchar(60), in perc decimal, in dt_inicio date, in dt_fim date, in classificacao varchar(3))
begin
	
	insert into correcao_valor_produto values (null, descricao, perc, dt_inicio, dt_fim, classificacao);
	select * from correcao_valor_produto cvp;

end $$
DELIMITER ;

/* Insere dados na tabela `correcao_valor_produto` */
call reajuste ('Reajuste janeiro 2023', 10, '2023-01-01', '2023-01-31', '005');
/* Insere dados na tabela `correcao_valor_produto` */
call reajuste ('Reajuste fevereiro 2023', 20, '2023-02-01', '2023-02-28', '005');
/* Insere dados na tabela `correcao_valor_produto` */
call reajuste ('Reajuste março 2023', 30, '2023-03-01', '2023-03-31', '005');


/******************************/
DELIMITER $$
create or replace function valor_atualizado(produto_id int, venda_id int)
returns decimal
begin
	declare valor_reajustado decimal;
   
	select (p.VALOR + (p.VALOR * cvp.percentual / 100)) * p.QUANTIDADE into valor_reajustado
	from produto p
	inner join itens_venda iv on iv.codproduto = p.CODIGO 
	inner join vendas v on v.codvenda = iv.codvenda 
	left join correcao_valor_produto cvp on cvp.CODIGO_CLASSIFICACAO = p.CODIGO_CLASSIFICACAO 
	where 
	produto_id = p.CODIGO and 
	venda_id = v.codvenda and
	v.datavenda between cvp.dt_inicio and cvp.dt_fim;

    return valor_reajustado;
end $$
DELIMITER ; 

select
	v.codvenda, 
	v.datavenda, 
	p.CODIGO, 
	p.DESCRICAO, 
	p.QUANTIDADE, 
	p.VALOR, 
	(p.QUANTIDADE * p.VALOR) as 'total', 
	case
		when cvp.percentual is null then p.VALOR * p.QUANTIDADE 
		else valor_atualizado(p.CODIGO, v.codvenda)                                                                      
	end as 'Total Ajustado'
	from vendas v
inner join itens_venda iv on v.codvenda = iv.codvenda 
inner join produto p on iv.codproduto = p.CODIGO
left join correcao_valor_produto cvp on cvp.CODIGO_CLASSIFICACAO = p.CODIGO_CLASSIFICACAO  
and v.datavenda between cvp.dt_inicio and cvp.dt_fim




/*
========================================================================================================
2) Criar uma function que retorne o valor do produto atualizado conforme o período da sua venda;
========================================================================================================
*/
DELIMITER $$
create or replace function obter_valor_atualizado(produto_id int, produto_classificacao int, data_venda date)
returns decimal
begin
    declare percentual_reajuste decimal;
	declare valor_original decimal;
	declare valor_reajustado decimal;
   
    -- obtém o valor percentual da tabela correcao_valor_produto e armazena na variavel percentual_reajuste
    select cvp.percentual into percentual_reajuste
    from correcao_valor_produto cvp
    where data_venda between cvp.dt_inicio and cvp.dt_fim
    and cvp.CODIGO_CLASSIFICACAO = produto_classificacao;
   
    -- obtém o valor original do produto e armazena na variavel valor_original
    select p.VALOR into valor_original
	from produto p
	left join correcao_valor_produto cvp on p.CODIGO_CLASSIFICACAO = cvp.CODIGO_CLASSIFICACAO
	where p.CODIGO = produto_id
	and cvp.CODIGO_CLASSIFICACAO = produto_classificacao;
   
    -- calcula o novo valor do produto
    set valor_reajustado = valor_original + (valor_original * percentual_reajuste / 100);

    return valor_reajustado;
end $$
DELIMITER ;

/* Seleciona o reajuste dos produtos da categoria 003 no dia 15/01/2023 */
select *
from (
    select p.*, obter_valor_atualizado(p.CODIGO, 005, '2023-01-15') as VALOR_REAJUSTADO
    from produto p
) AS subquery
where VALOR_REAJUSTADO is not null;

/* Seleciona o reajuste dos produtos da categoria 005 no dia 01/03/2023 */
select *
from (
    select p.*, obter_valor_atualizado(p.CODIGO, 005, '2023-03-01') as VALOR_REAJUSTADO
    from produto p
) AS subquery
where VALOR_REAJUSTADO is not null;

