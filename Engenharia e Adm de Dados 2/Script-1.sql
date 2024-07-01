select * from produto p;

select * from classificacao c;

/*
1) retornar os produtos da Classificação 003 e que a unidade de medida não seja 'UN'
R: 139 registros;
*/
select * from produto p 
where CODIGO_CLASSIFICACAO = 003 
and UNIDADE <> 'UN';

/*
2) Retornar os produtos da Classificação 003, com a unidade de medida 'UN' em que a quantidade seja entre 5 e 7 com o valor menor que 10;
R: 27 registros;
*/
select * from produto p 
where CODIGO_CLASSIFICACAO = 003 
and unidade = 'UN' 
and QUANTIDADE between 5 and 7 
and valor < 10;

/*
3) Valor total dos 'biscoito' da base de dados;
R: 3021;
*/
select sum(p.QUANTIDADE * p.VALOR) from produto p
where p.DESCRICAO like '%biscoito%'



/*
4) Validar se existe algum 'martelo' que não pertença a classificação material de Construção;
*/
select * from produto p
inner join classificacao c on c.CODIGO = p.CODIGO_CLASSIFICACAO 
where c.DESCRICAO not like '%constru%'
and p.DESCRICAO like '%martelo%';

/*
5) Retornar os produtos da classificação EPI que estejam em menos de 5 caixas;
R: 2 registros;
*/
select * from produto p
inner join classificacao c on c.CODIGO = p.CODIGO_CLASSIFICACAO 
where c.DESCRICAO like '%EPI%'
and p.UNIDADE = 'CX' 
and p.QUANTIDADE < 5;

/*
6) Retornar os produtos da Classificação EPI que NÃO ESTEJA em caixas e sua quantidade esteja em 10 e 50;
R:9 registros;
*/
select * from produto p
inner join classificacao c on c.CODIGO = p.CODIGO_CLASSIFICACAO 
where c.DESCRICAO like '%EPI%'
and p.UNIDADE <> 'CX' 
and p.QUANTIDADE between 10 and 50;

/*
7) Retornar todos registros da classificação UNIFORMES com o nome 'camiseta' e todos os produtos da classificação MATERIAL ESPORTIVO e com nome 'bola'
R: 11 registros;
*/
select * from produto p
inner join classificacao c on c.CODIGO = p.CODIGO_CLASSIFICACAO 
where (c.DESCRICAO like '%uniforme%' or c.DESCRICAO like '%esportivo%')
and (p.DESCRICAO like '%camiseta%' or p.DESCRICAO like '%bola%');

/*
8) Retornar a média do valor dos produtos que a quantidade esteja entre 2 e 4, com valor inferior a 50, que não seja material de construção e que não seja um 'copo';
R: 18.8688
*/
select AVG(valor) from produto p
inner join classificacao c on c.CODIGO = p.CODIGO_CLASSIFICACAO 
where (p.QUANTIDADE between 2 and 4)
and (p.VALOR < 50)
and (p.DESCRICAO not like '%constru%')
and (p.DESCRICAO not like '%copo%');

/*
9) Retornar a quantidade total de pacotes ( PCT) dos produtos alimenticios
R: 1165;
*/
select SUM(QUANTIDADE) from produto p
inner join classificacao c on c.CODIGO = p.CODIGO_CLASSIFICACAO 
where (p.UNIDADE  like '%PCT%')
and (c.DESCRICAO like '%alimen%');

/*
10) Retornar apenas o numero total de produtos cadastrados com unidade pacote e que seja da classificação de alimentos
R: 23 produtos;
*/
select count(*) as Total from produto p
inner join classificacao c on c.CODIGO = p.CODIGO_CLASSIFICACAO 
where (p.UNIDADE  like '%PCT%')
and (c.DESCRICAO like '%alimen%');

/*
11) Retornar qual é o maior valor de um produto do estoque, este deve ser o produto que sua quantidade * valor seja o maior
R: 14832;
*/
select *, (quantidade*valor) as totalProduto from produto p
where p.tipo = 'P'
order by totalProduto desc;

/*
12) Retornar o menor valor de um produto que a quantidade seja maior que 0 e que a unidade seja ‘UN’ e classificação alimentos
R: 1;
*/
select SUM (*, MIN(quantidade*valor) as totalProduto from produto p
inner join classificacao c on c.CODIGO = p.CODIGO_CLASSIFICACAO 
where p.quantidade > 0
and p.UNIDADE = 'UN'
and c.DESCRICAO like '%aliment%';


/*
13) Retornar o valor total dos produtos da categoria ‘Material Hospitalares’
R: 406355;
*/
select SUM(quantidade*valor) as valorTotal from produto p
inner join classificacao c on c.CODIGO = p.CODIGO_CLASSIFICACAO 
where c.DESCRICAO like '%hospital%';

/*
14) Retornar TODOS os valores totais por categoria e ordenar por categoria
*/
select c.DESCRICAO as Categoria, SUM(p.QUANTIDADE * p.VALOR) as valorTotal from produto p
inner join classificacao c on c.CODIGO = p.CODIGO_CLASSIFICACAO 
group by c.DESCRICAO 
order by c.DESCRICAO asc;


/*
15) Retornar todos os tipos de ‘UNIDADE’ da classificação Veterinária
R: 12;
*/
select p.UNIDADE from produto p
inner join classificacao c on c.CODIGO = p.CODIGO_CLASSIFICACAO 
where c.DESCRICAO like '%veterin%'
group by p.UNIDADE;


/*
16) Contar Quantos produtos são da categoria de Aviamentos por unidade. 
EX: (20 produtos - UN; 2 PRODUTOS - PCT)
*/
select COUNT(*) as QuantidadeDeProdutos, p.UNIDADE
from produto p
inner join classificacao c on c.CODIGO = p.CODIGO_CLASSIFICACAO
where c.DESCRICAO like '%Aviamentos%'
group by p.UNIDADE;
