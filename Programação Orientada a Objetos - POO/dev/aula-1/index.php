<?php

require_once 'classes/Carro.php';

$carro = new Carro();
$carro->nome = 'Ranger';
$carro->modelo = 'Limited';
$carro->cor = 'Branca';


do {
    $opcao = readline("Informe uma opção:\n1 - Acelerar\n2- Frear\n3- Desligar");
    if ($opcao == 1) $carro->acelerar();
    if ($opcao == 2) $carro->frear();
    
    $velocidade = $carro->getVelocidadeAtual();
    echo "A velocidade do carro é: $velocidade km/h\n";
} while ($opcao != 3);


/*
echo "Nome do veículo: $carro->nome\n";
echo "Modelo do veículo: $carro->modelo\n";
echo "Cor do veículo: $carro->cor\n";
echo "Velocidade inicial do veículo: $velocidade km/h\n";
$carro->acelerar();
$carro->acelerar();
echo "Velocidade do veículo após acelerar 2x: $velocidade km/h\n";
$carro->frear();
$carro->frear();
$carro->frear();
echo "Velocidade do veículo após frear 3x: $velocidade km/h\n";
*/