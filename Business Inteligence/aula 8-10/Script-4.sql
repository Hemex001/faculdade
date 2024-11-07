use hemerson_lacovic

/* fVenda */
select
	CONCAT(iv.codvenda, iv.codproduto) as venda_sk,
	v.codvenda,
	v.datavenda,
	v.codcliente,
	v.codvendedor,
	iv.codproduto,
	p.VALOR as 'valor'
FROM vendas v
inner join itens_venda iv on v.codvenda = iv.codvenda 
inner join produto p on iv.codproduto = p.CODIGO
;


/* dProduto */
select 
	p.CODIGO as codProduto,
	p.DESCRICAO as DESCRICAO,
	case p.TIPO 
		when 'P' then 'Produto'
		when 'S' then 'Serviço'
		else 'Outros'
	end as 'tipo',
	IFNULL(c.DESCRICAO, 'Não classificado') as 'classificacao',
	p.UNIDADE as unidade,
	p.QUANTIDADE as quantidade,
	p.VALOR as valor
from produto p
left join classificacao c on p.CODIGO_CLASSIFICACAO  = c.CODIGO 
;


/* dCliente */
select
	c.codcliente,
	c.nome,
	c2.descricao as cidade
from cliente c
inner join cidades c2 on c2.codcidade = c.codcidade;



/* dVendedor */
select 
	v.codvendedor,
	v.nome 
from vendedores v;



