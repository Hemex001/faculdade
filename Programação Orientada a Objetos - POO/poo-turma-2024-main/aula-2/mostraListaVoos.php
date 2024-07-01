<?php

require_once 'models/Aeroporto.php';
require_once 'models/Voo.php';

$aeroporto = new Aeroporto();

$voo1 = new Voo();
$voo1->status = 'Voando para Londrina';
$voo2 = new Voo();
$voo2->status = 'Retornando de São Paulo';

$aeroporto->setNome('Aeroporto Silvio Name Júnior');
$aeroporto->addVoo($voo1);
$aeroporto->addVoo($voo2);

/*
for ($i = 0; $i < count($aeroporto->getVoos()); $i++){
    $voo = $aeroporto->getVoos()[$i];
    echo $voo->status;
}
*/
foreach ($aeroporto->getVoos() as $key => $voo) {
    echo $voo->status;
}