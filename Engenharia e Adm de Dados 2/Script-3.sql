/********* TRABALHO - Hemerson da Costa Lacovic *********/

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
1) Criar uma Procedure onde, ao serem informados os parâmetros da tabela acima, grave o registro. O mesmo será utilizado para determinar o valor do produto com seu reajuste em um determinado período da sua venda.
Ex: produto X 10 reais em janeiro 2023 e fevereiro o mesmo custa 11;
*/
DELIMITER $$
create or replace
procedure correcao_produto(in p_descricao varchar(50), in p_percentual decimal, in p_dt_inicio date, in p_dt_fim date, in p_cod_classificacao varchar(3))
begin

	insert into correcao_valor_produto (descricao, percentual, dt_inicio, dt_fim, CODIGO_CLASSIFICACAO)
	values (p_descricao, p_percentual, p_dt_inicio, p_dt_fim, p_cod_classificacao);
	
end $$
DELIMITER ;

call correcao_produto ('Demanda', 10, '2023-01-01', '2023-01-31', '003');

select * from correcao_valor_produto c;

/*
2) Criar uma function que retorne o valor do produto atualizado conforme o período da sua venda;
*/
DELIMITER $$
CREATE FUNCTION valor_atualizado_produto (p_valor_produto decimal, p_dt_inicio date, p_dt_fim date)
RETURNS decimal
DETERMINISTIC
begin
	
	declare ultimo int;
	select max(c.codcidade)+1 into ultimo from cidades c;

RETURN ultimo;
END $$
DELIMITER ;

