<?php
namespace Hemex\Aula6;
require_once 'vendor/autoload.php';

$pessoa = new Pessoa('Hemerson', 'hemersonlacovic@hotmail.com');

$passageiro = new Passageiro('gol-1234', new Bagagem());

$passageiro->setNome('Camila');
$passageiro->setEmail('camila@grupointegrado.br');

echo PHP_EOL;
echo "PESSOA:\n";
echo $pessoa->getNome() . "\n";
echo $pessoa->getEmail() . PHP_EOL; /* PHP_EOL é uma quebra de linha */

echo PHP_EOL;
echo "PASSAGEIRO:\n";
echo $passageiro->getNome() . PHP_EOL;
echo $passageiro->getEmail() . PHP_EOL;
echo $passageiro->getIdentificador() . PHP_EOL;

$tripulante = new Tripulante('Hamilton', 'hamilton@gol.com', 13599, 'Comandante Hamilton');

echo PHP_EOL;
echo "TRIPULANTE:\n";
echo $tripulante->getNome() . PHP_EOL;
echo $tripulante->getEmail() . PHP_EOL;
echo $tripulante->getSalario() . PHP_EOL;
echo $tripulante->getAlcunha() . PHP_EOL;


$passagem = new Passagem($passageiro);

echo PHP_EOL;
echo "PASSAGEM:\n";
echo $passagem->getPassageiro()->getNome() . PHP_EOL;


