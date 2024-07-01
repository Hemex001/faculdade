use hemersonlacovic;

-- ====================================================================================
/* 1) Fazer uma procedure para Cadastrar vendedores 
 * A Mesma deve incluir o codigo do vendedor automaticamente 
 * deve criar uma function que retorne o codigo do vendedor a ser gravado */
-- ====================================================================================
/*FUNÇÃO QUE RETORNA O ULTIMO CODIGO DA TABELA VENDEDORES*/
DELIMITER $$
create or replace function ultimo_cod_vendedor()
returns int
deterministic
begin
	
	declare ultimo int;
	select max(v.codvendedor)+1 into ultimo from vendedores v;

return ultimo;
end $$
DELIMITER ;

/*PROCEDURE PARA CADASTRAR VENDEDOR*/
DELIMITER $$
create or replace procedure cadastra_vendedor(in nome varchar(50))
begin 
	
	insert into vendedores values (ultimo_cod_vendedor(), nome);
	select * from vendedores;

end $$
DELIMITER ;

call cadastra_vendedor('HEMERSON'); 


-- ====================================================================================
/* Criar a tabela seguinte: */
CREATE or replace TABLE total_vendas_MES (
CODIGO int(11) NOT NULL AUTO_INCREMENT,
NR_VENDAS INT,
MES_ANO varchar(7) DEFAULT NULL,
DT_REGISTRO date DEFAULT NULL,
PRIMARY KEY (CODIGO)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci

-- ====================================================================================
/* 2) Fazer uma procedure que ira gravar na tabela total_vendas_MES, o NUMERO total de vendas, 
 * MES_ANO (01-2023), e data do resgitro (data atual) */
-- ====================================================================================
DELIMITER $$
create or replace procedure total_vendas_mes (in mes_ano varchar(7))
begin
	insert into total_vendas_mes values 
	(
	null, 
	(select count(*) from vendas v where mes_ano = DATE_FORMAT(datavenda, '%m-%Y')),
	mes_ano,
	now()
	);

	select * from total_vendas_mes tvm;
end $$
DELIMITER ;

call total_vendas_mes('12-2023');

select * from total_vendas_mes tvm;


-- ====================================================================================
/* 3) Fazer uma Function que retorne o valor total das vendas do vendedor */
-- ====================================================================================

DELIMITER $$
create or replace function retorna_total_vendedor(vendedor_id int)
returns decimal(11,2)
deterministic 
begin
	declare vl_total decimal(11,2);

	select
	sum(p.VALOR * p.QUANTIDADE) as 'Total das Vendas' into vl_total
	from vendas v
	inner join vendedores vd on vd.codvendedor = v.codvendedor 
	inner join itens_venda iv on iv.codvenda = v.codvenda 
	inner join produto p on p.CODIGO = iv.codproduto 
	where v.codvendedor = vendedor_id
	group by v.codvendedor;
	
	return vl_total;
end $$
DELIMITER ;

-- retorna_total_vendedor(vendedor_id);
select retorna_total_vendedor(1);


-- ====================================================================================
/* 4) Fazer uma function que retorne o total das vendas por cidade */
-- ====================================================================================
DELIMITER $$
create or replace function retorna_total_cidade(cod_cidade int)
returns decimal(11,2)
deterministic 
begin
	declare vl_total decimal(11,2);


	select 
	sum(p.VALOR * p.QUANTIDADE) as 'Total das Vendas por cidade' into vl_total
	from vendas v
	inner join cliente c on c.codcliente = v.codcliente 
	inner join itens_venda iv on iv.codvenda = v.codvenda 
	inner join produto p on p.CODIGO = iv.codproduto 
	inner join cidades ci on ci.codcidade = c.codcidade 
	where ci.codcidade = cod_cidade
	group by ci.codcidade;
	
	return vl_total;
end $$
DELIMITER ;

-- retorna_total_cidade(cidade_id)
select retorna_total_cidade(3);




-- ====================================================================================
/* 5) Fazer uma function que retorne a DESCRICAO da classificacao de um produto */
-- ====================================================================================
DELIMITER $$
create or replace function desc_classificacao(produto_id int)
returns varchar(200)
deterministic 
begin
	declare descricao varchar(200);

	select c.DESCRICAO into descricao
	from produto p
	inner join classificacao c on c.CODIGO = p.CODIGO_CLASSIFICACAO 
	where p.CODIGO = produto_id;
	
	return descricao;
end $$
DELIMITER ;

-- desc_classificacao(produto_id)
select desc_classificacao(900);



-- ====================================================================================
/* 6) Fazer uma function que retorne a DESCRICAO da cidade de um cliente */
-- ====================================================================================
DELIMITER $$
create or replace function desc_cidade(cliente_id int)
returns varchar(60)
deterministic 
begin
	declare descricao varchar(60);

	select c.DESCRICAO into descricao
	from cidades c
	inner join cliente cli on cli.codcidade  = c.codcidade  
	where cli.codcliente = cliente_id;
	
	return descricao;
end $$
DELIMITER ;

-- desc_cidade(cliente_id)
select desc_cidade(2);