<?php
require_once 'classes/Aeroporto.php';
$aeronave = new Aeronave();
$aeronave->setModelo('Boing 777-800');
$aeronave->setCapacidade(600);
$aeronave->setStatus('EM VOO');

$tripulante = new Tripulante();
$tripulante->setNome('Hemerson da Costa');
$tripulante->setCargo('Aeromoço');
$tripulante->setTipo('Trainee');
?>

<html>
    <head>
        <title>Minha página HTML</title>
    </head>
    <body>
        <h2>Título da página</h2>
        <strong>Modelo: </strong> <?= $aeronave->getModelo(); ?>
        <br />
        <strong>Capacidade: </strong> <?= $aeronave->getCapacidade(); ?>
        <br />
        <strong>Status: </strong> <?= $aeronave->getStatus(); ?>
        <br />
        <h2>Tripulação</h2>
        <strong>Nome: </strong> <?= $tripulante->getNome(); ?>
        <br />
        <strong>Cargo: </strong> <?= $tripulante->getCargo(); ?>
        <br />
        <strong>Tipo: </strong> <?= $tripulante->getTipo(); ?>
        <br />
    </body>
</html>