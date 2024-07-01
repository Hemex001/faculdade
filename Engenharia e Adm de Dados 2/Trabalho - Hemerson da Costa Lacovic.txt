/*
========================================================================================================
TRABALHO - Hemerson da Costa Lacovic 
========================================================================================================
*/
use hemersonlacovic;

/* Criação da tabela "correcao_valor_produto" */
CREATE TABLE `correcao_valor_produto` (
  `cod_correcao` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(60) DEFAULT NULL,
  `percentual` decimal(11,2) DEFAULT NULL,
  `dt_inicio` date DEFAULT NULL,
  `dt_fim` date DEFAULT NULL,
  `CODIGO_CLASSIFICACAO` varchar(3) DEFAULT NULL,
  PRIMARY KEY (`cod_correcao`),
  KEY `correcao_valor_produto_classificacao_FK` (`CODIGO_CLASSIFICACAO`),
  CONSTRAINT `correcao_valor_produto_classificacao_FK` FOREIGN KEY (`CODIGO_CLASSIFICACAO`) REFERENCES `classificacao` (`CODIGO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci



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
/* Insere dados na tabela `correcao_valor_produto` */
call reajuste ('Reajuste fevereiro ~ março 2024', 40, '2024-02-01', '2024-03-31', '005');

/*
========================================================================================================
2) Criar uma function que retorne o valor do produto atualizado conforme o período da sua venda;
========================================================================================================
*/
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

/* Retorna o resultado com o valor atualizado da função */
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
3.1) criar uma view que traga o valor atualizado do produto na data atual;
========================================================================================================
*/
insert into vendas values (32, '2024-02-29', 3, 1);
insert into itens_venda values (32, 975)

create or replace view vw_reajuste_hoje as
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
where 
v.datavenda = curdate();

/* Seleciona a view */
select * from vw_reajuste_hoje;


/*
========================================================================================================
3.2) criar uma view das vendas com o valor dos produtos atualizados por período;
========================================================================================================
*/
create or replace view vw_reajuste_periodo as
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
where
v.datavenda between '2023-01-01' and '2023-02-29'

/* Seleciona a view */
select * from vw_reajuste_periodo;

/*
========================================================================================================
3.3) criar uma view que retorne o valor total da venda com os produtos atualizado;
========================================================================================================
*/
create or replace view vw_reajuste_vendas as
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

select * from vw_reajuste_vendas;