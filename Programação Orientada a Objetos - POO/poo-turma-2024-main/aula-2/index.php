<?php
require_once 'models/Aeronave.php';
require_once 'models/Tripulante.php';
require_once 'models/Aeroporto.php';
require_once 'models/Porte.php';


$aeronave = new Aeronave();
$aeronave->setModelo('Boing 777-800');
$aeronave->setCapacidade(600);
$aeronave->editarStatus('LIVRE');

$tripulante = new Tripulante('João da silva', 'Fraldinha', 'Piloto Treinee');

$aeroporto = new Aeroporto();
$aeroporto->setNome('Aeroporto de Guarulhos');
$aeroporto->setPorte(Porte::MEDIO);

$mensagem = $aeroporto->getPorte() == Porte::MEDIO ? 'Passou' : 'Rodou';

$voo1 = new Voo();
$voo2 = new Voo();

$aeroporto->addVoo($voo1);
$aeroporto->addVoo($voo2);

$aeroporto->getVoos();

?>

<html>
    <head>
        <title>Minha página HTML</title>
    </head>
    <body>
        <h2>Aeronave</h2>
        <strong>Modelo: </strong> <?= $aeronave->getModelo() ?> 
        <strong>Capacidade: </strong> <?= $aeronave->getCapacidade() ?>
        <strong>Status: </strong> <?= $aeronave->getStatus() ?>
        <h2>Tripulação</h2>
        <strong>Nome: </strong> <?= $tripulante->getNome() ?> 
        <strong>Cargo: </strong> <?= $tripulante->getCargo() ?>
        <strong>Licença: </strong> <?= $tripulante->getLicenca() ?>
        <h2>Aeroporto</h2>
        <strong>Nome: </strong> <?= $aeroporto->getNome() ?> 
    </body>
</html>