<?php
// php -S localhost:80

$saudacao = 'Hello';
$nome = readline('Informe o seu nome: ');
$idade = readline('Informe sua idade: ');
$horaAtual = date_create();
$dataFormatada = date_format($horaAtual, 'd/m/Y');

$maioridade = $idade >= 18 ? 'maior de idade' : 'menor de idade';
echo "$saudacao $nome, hoje é $dataFormatada. Você é $maioridade";

