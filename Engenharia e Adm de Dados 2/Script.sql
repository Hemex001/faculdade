/*
 * Aula 14/02/2024
 */

SELECT *
FROM produto p
join classificacao c on p.CODIGO_CLASSIFICACAO = c.CODIGO
 
 
 SELECT
 c.nome as 'cliente',
 ci.descricao as 'cidade',
 p.CODIGO as 'cod.prod',
 p.DESCRICAO as 'desc.prod',
 p.QUANTIDADE as 'qt.prod',
 P.VALOR AS 'vl.prod',
 cla.DESCRICAO as 'desc.classificao',
 vd.nome as 'vendedor',
 p.QUANTIDADE * p.VALOR as 'TOTAL'
FROM vendas v
 JOIN cliente c on v.codcliente = c.codcliente
 JOIN cidades ci on ci.codcidade = c.codcidade
 JOIN itens_venda iv on iv.codvenda = v.codvenda
 JOIN produto p on iv.codproduto = p.CODIGO
 join classificacao cla on cla.CODIGO = p.CODIGO_CLASSIFICACAO
 join vendedores vd on vd.codvendedor = v.codvendedor
 
 select * from vendas

 select * from itens_venda
 
 select * from vendedores
 
 select * from produto
         
 /*
 1) Quantidade de produtos vendidos ?
 */
 select SUM(p.quantidade) from itens_venda iv 
 inner join produto p on p.CODIGO = iv.codproduto 
 
 
 /*
 2) Quantidade de vendas por vendedor ?
 */
 select ven.nome, count(v.codvenda) as quantidadeVendas from vendedores ven
 left join vendas v on v.codvendedor = ven.codvendedor 
 group by ven.codvendedor 
 order by quantidadeVendas desc
 
 
 /*
 3) Melhor vendedor nos 3 primeiros meses do ano ? 
 */
 select ven.nome, count(v.codvenda) as quantidadeVendas from vendedores ven
 left join vendas v on v.codvendedor = ven.codvendedor 
 	where v.datavenda >= '2023-01-01' and v.datavenda <= '2023-03-31'
 group by ven.codvendedor 
 having count(v.codvenda) = (select count(v.codvenda) as quantidadeVendas from vendedores ven
 							 left join vendas v on v.codvendedor = ven.codvendedor 
 							 	where v.datavenda >= '2023-01-01' and v.datavenda <= '2023-03-31'
 							 group by ven.codvendedor 
 							 order by 1 desc limit 1)


 
 /*
 4) A melhor venda ( valor mais alto) ?
 */
 select *, p.QUANTIDADE * p.VALOR as valorTotalVenda from itens_venda iv 
 inner join produto p on p.CODIGO = iv.codproduto 
 group by iv.codvenda
 order by valorTotalVenda desc
 limit 1


 /*
 5) Qual é o valor da Média de vendas por mês ? 
 */
 
 
 
 
 
 
 /* AULA 20/02/2024 */
 /* FUNCTION */
 
DELIMITER $$
CREATE FUNCTION nome_function (parâmetros)
RETURNS tipo_dado
DETERMINISTIC
begin
	
/*CORPO DA FUNÇÃO*/
	
RETURN retorna_valor
END $$
DELIMITER ;


 

create function OLAR (NOME CHAR(20)) returns CHAR(50)
return CONCAT('OLAAARRR, ',nome,' !');

select OLAR("HEMERSON");


create function desc_tipo(tp char(1)) returns char(7)
return
case
	when tp = 'P' then 'PRODUTO'
	else 'SERVICO'
end;


select p.*,
desc_tipo(p.TIPO)
from produto p




select * from produto p
where p.CODIGO_CLASSIFICACAO = '003'
and QUANTIDADE >= 4 and QUANTIDADE <= 6



/* PROCEDURES */
DELIMITER $$
CREATE PROCEDURE nome_procedimento (parâmetros)
BEGIN
	
/*CORPO DO PROCEDIMENTO */

END $$
DELIMITER ;


/*criando procedure*/
create procedure Selecionar_Produtos (in quantidade INT, in categoria varchar(3), out saldo decimal)
/*executando procedure*/
call Selecionar_Produtos(10,'003',@SALDO);



DELIMITER $$
create or REPLACE
procedure teste()
begin
	select 'hello world';
end $$
DELIMITER ;

call teste;



/****************************************/

select * from cidades 

/****************************************/
DELIMITER $$
create or REPLACE
procedure cadastra_cidade(in acao int, in nome_cidade varchar(60))
begin
	declare cod_cidade int;
	
	if acao = 1 then
		select codcidade into cod_cidade from cidades where descricao like concat('%', nome_cidade, '%');
		if cod_cidade is null then
			insert into cidades values (ultimo_cod_cidade(), nome_cidade);
			select * from cidades;
		else
			select 'CIDADE JÁ CADASTRADA';
		end if;
	end if;

end $$
DELIMITER ;

call cadastra_cidade(1, 'ARARUNA');
call cadastra_cidade(1, 'RONCADOR');

select max(c.codcidade)+1 from cidades c 

/******* ultimo codigo cidade *******/
DELIMITER $$
CREATE FUNCTION ultimo_cod_cidade()
RETURNS int
DETERMINISTIC
begin
	
	declare ultimo int;
	select max(c.codcidade)+1 into ultimo from cidades c;

RETURN ultimo;
END $$
DELIMITER ;

select ultimo_cod_cidade()

 
/**************************************/
DELIMITER $$
create or REPLACE
procedure simulacao_reajuste(in classificacao varchar(3), in reajuste decimal)
begin
	
	select p.*,
	(p.VALOR * reajuste)/100 + p.VALOR as reajuste from produto p 
	where p.CODIGO_CLASSIFICACAO = classificacao;

end $$
DELIMITER ;
 
call simulacao_reajuste('003', 10)
 
 start transaction
 delete from cidades c where c.codcidade = 6
 
 
 
 
 
 /************** AULA 21/02/2024 - VIEW ***********/
 
 create view vw_ajuste as select p.*,
	(p.VALOR*10)/100 + p.VALOR as reajuste from produto p
	where p.CODIGO_CLASSIFICACAO = '003';
 

 	select * from vw_ajuste;

 
 /****************************************************/
 
 /* função para ver se o numero é par ou impar - mod retorna o resto da divisao */
 select mod(10,2)
 
 
DELIMITER $$
CREATE FUNCTION numero_par(numero int) /*passamos um valor inteiro*/
RETURNS varchar(5) /*vai retornar uma string (par ou impar)*/
DETERMINISTIC
begin
	
	if mod(numero,2) = 0 then
		return 'PAR';
	else
		return 'ÍMPAR';
	end if;

END $$
DELIMITER ;
 
select numero_par(1);


select p.*, numero_par(p.QUANTIDADE) from produto p
where numero_par(p.QUANTIDADE) = 'PAR'






/* ====================================================== */
/* AULA 26/02 */
/* ====================================================== */

use hemersonlacovic; 

select * from correcao_valor_produto cvp 

SELECT * FROM produto p

select * from classificacao c 

select * from vendas v

select * from itens_venda iv

/*
1) Criar uma view “vw_aviamento_estoque_baixo, onde deve se exibir sua descrição,
sua quantidade, valor e descrição da classificação, seu “TIPO” deve ser exibido como
“produto”. Os produtos da classificação aviamento são considerados “estoque baixo”
se atender a seguinte situação:
- Quantidade inferior a 5;
- Valor menor que 10;
- Ter sua medida unitaria “un”;
- Ser um produto.
*/

create or replace view vw_aviamento_estoque_baixo as
 select p.DESCRICAO as desc_produto,
	 case 
	 	when p.TIPO = 'P' then 'produto'
	 	else 'serviço'
	 end as tipo, 
	 p.QUANTIDADE as quantidade,
	 p.VALOR as valor, 
	 c.DESCRICAO as desc_classificação
	 from produto p
	 inner join classificacao c on c.CODIGO = p.CODIGO_CLASSIFICACAO
		 where c.DESCRICAO like '%aviam%'
		 and p.QUANTIDADE < 5
		 and p.VALOR < 10
		 and p.UNIDADE = 'UN'
		 and p.TIPO = 'P'

 
select * from vw_aviamento_estoque_baixo vaeb;

 
 

/* TRIGGERS ----------------------------------
Triggers (“gatilhos” em português) são objetos do banco de dados que, relacionados a
certa tabela, permitem a realização de processamentos em consequência de uma
determinada ação como, por exemplo, a inserção de um registro.

Os triggers podem ser executados ANTES ou DEPOIS das operações de INSERT,
UPDATE e DELETE de registros.

CREATE TRIGGER <nome> <momento> <evento>
ON tabela
FOR EACH ROW
BEGIN
/* corpo do código *
END

● nome: nome do gatilho, segue as mesmas regras de nomeação dos demais objetos do banco.
● momento: quando o gatilho será executado. Os valores válidos são BEFORE (antes) e AFTER (depois).
● evento: evento que vai disparar o gatilho. Os valores possíveis são INSERT, UPDATE e DELETE. 
Vale salientar que os comandos LOAD DATA e REPLACE também disparam os eventos de inserção e exclusão de registros, com isso, os gatilhos também são executados.
● tabela: nome da tabela a qual o gatilho está associado.

---
Os registros NEW e OLD
Como os triggers, são executados em conjunto com operações de inclusão e exclusão, énecessário poder acessar os registros que estão sendo incluídos ou removidos. 
Isso pode ser feito através das palavras NEW e OLD.
Em gatilhos executados após a inserção de registros, a palavra reservada NEW dá acesso ao novo registro. 
Pode-se acessar as colunas da tabela como atributo do registro NEW.
O operador OLD funciona de forma semelhante, porém em gatilhos que são executados com a exclusão de dados, o OLD dá acesso ao registro que está sendo removido.
*/

CREATE TABLE `cidade_deletada` (
`cod_cidade` int(11) NOT NULL AUTO_INCREMENT,
`cod_cidade_antigo` int(11),
`descricao` varchar(60),
PRIMARY KEY (`cod_cidade`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci


/**************************/
DELIMITER $$
create trigger cidade_deletada after delete
on cidades
for each row 
begin 
	insert into cidade_deletada values (null, old.codcidade, old.descricao);
end $$
DELIMITER ;

insert into cidades values (ultimo_cod_cidade(), 'MOREIRA SALES');

select * from cidade_deletada;

select * from cidades;

select * from cidades where codcidade = 8;

delete from cidades where codcidade > 5;

select now();




/* ====================================================== */
/* AULA 27/02 */
/* ====================================================== */


/* EXERCICIOS */
/*
1) Ao selecionar todas as cidades, sua descrição vem despadronizada (algumas
maiusculas ou minusculas, ou até mesmo sem um padrão) a ideia é ajustar da
seguinte maneira:
- Ajustar a descrição para que a primeira letra será maiúscula e as demais
minúsculas.
- Usar:
- CONCAT
- SUBSTR
- UCASE
- LCASE
- LENGTH
*/

select * from cidades;

insert into cidades values (ultimo_cod_cidade(), 'farol');

-- lcase(c.descricao) -- Deixa tudo minusculo
-- substr(c.descricao,1,1) -- Pega a primeira letra
-- ucase(substr(c.descricao,1,1)) -- Pega a primeira letra e deixa tudo maiusculo
-- length(c.descricao) -- pega o tamanho da string

create view vw_cidade as
select
concat(
ucase(substr(c.descricao,1,1)),
substr(lcase(c.descricao),2,length(c.descricao)))
from cidades c;

select * from vw_cidade;



/*
2) Transformar o exercício anterior em uma function que retorne a descrição ajustada;
*/
DELIMITER $$
create or replace function ajusta_descricao(descricao varchar(50))
returns varchar(50)
deterministic 
begin
    return  concat(
			ucase(substr(descricao,1,1)),
			substr(lcase(descricao),2,length(descricao)));
end $$
DELIMITER ;

select *, ajusta_descricao(c.descricao) from cidades c;


/*
3) Criar uma Trigger para que sempre que for realizado um insert mesmo que com
informações erradas Ex: “ARARUNA, morera sales” seja gravado de forma correta
*/

DELIMITER $$
create or replace trigger corrige_cidade before insert
on cidades
for each row 
begin 
	set new.descricao = concat(
							ucase(substr(new.descricao,1,1)),
							substr(lcase(new.descricao),2,length(new.descricao)));
end $$
DELIMITER ;

select * from cidades;

insert into cidades values (ultimo_cod_cidade(), 'iVaiLandIA');

/*
4) Criar uma consulta que traga todas as vendas ( codigo da venda, mes, ano, total e seu
total ajustado) e ordenar pelo codigo da venda.
- 01/2023 = 10% de desconto no total;
- 02/2023 = 10% de aumento no total;
- 03/2023 = 20% de aumento no total;
- 04/2023 = 30% de aumento no total;
- 05/2023 = 40% de aumento no total;
- 06/2023 = 50% de desconto no total.
UTILIZAR:
● CASE
● SUM
● MONTH
● YEAR
● GROUP BY
● ORDER BY
*/

select v.codvenda,
	month(v.datavenda) as 'mes',
	year(v.datavenda) as 'ano',
	sum(p.QUANTIDADE * p.VALOR) as 'total',
case 
	when month(v.datavenda) = 1 and year(v.datavenda) = 2023 then sum(p.QUANTIDADE * p.VALOR) * 0.9
	when month(v.datavenda) = 2 and year(v.datavenda) = 2023 then sum(p.QUANTIDADE * p.VALOR) * 1.1
	when month(v.datavenda) = 3 and year(v.datavenda) = 2023 then sum(p.QUANTIDADE * p.VALOR) * 1.2
	when month(v.datavenda) = 4 and year(v.datavenda) = 2023 then sum(p.QUANTIDADE * p.VALOR) * 1.3
	when month(v.datavenda) = 5 and year(v.datavenda) = 2023 then sum(p.QUANTIDADE * p.VALOR) * 1.4
	when month(v.datavenda) = 6 and year(v.datavenda) = 2023 then sum(p.QUANTIDADE * p.VALOR) * 0.5
end as 'total ajustado'
from vendas v
inner join itens_venda iv on iv.codvenda = v.codvenda 
inner join produto p on iv.codproduto = p.CODIGO
group by v.codvenda
order by v.codvenda


