<?php

require_once 'models/Produto.php';
require_once 'models/Informatica.php';
require_once 'models/Marca.php';
require_once 'models/MaterialEscolar.php';
require_once 'models/Monitor.php';


$marca1 = new Marca("Samsung", "Fornecedor 1");
$marca2 = new Marca("Acer", "Fornecedor 2");
$marca3 = new Marca("Bic", "Fornecedor 3");
$marca4 = new Marca("Chevrolet", "Fornecedor 4");


//informatica
$informatica = new Informatica(2, $marca1, 100.00, 220);
echo "Preço produto Informática (desconto 10%): " . $informatica->aplicarDesconto() . PHP_EOL;

//material escolar com idade acima de 3 anos
$materialEscolar = new MaterialEscolar(3, $marca3, 100.00, 4);
echo "Preço material escolar (idade > 3, desconto 20%): " . $materialEscolar->aplicarDesconto() . PHP_EOL;

//material escolar com idade de 3 anos ou menos
$materialEscolar2 = new MaterialEscolar(4, $marca3, 100.00, 2);
echo "Preço material escolar (idade <= 3, desconto 5%): " . $materialEscolar2->aplicarDesconto() . PHP_EOL;

//produto aleatorio
$produtoAleatorio = new Produto(1, $marca4, 100.00);
echo "Preço produto aleatorio (desconto padrão): " . $produtoAleatorio->aplicarDesconto() . PHP_EOL;