<?php

require_once 'classes/Pessoa.php';
require_once 'classes/Passageiro.php';
require_once 'classes/Tripulacao.php';
require_once 'classes/Voo.php';
require_once 'classes/Aeronave.php';

// criando passageiros
$passageiro1 = new Passageiro("Elon Musk", "123456789", "001", "12A");
$passageiro2 = new Passageiro("Mark Zuckerberg", "987654321", "002", "12B");
$passageiro3 = new Passageiro("Alexandre de Moraes", "987654321", "003", "12C");
$passageiro4 = new Passageiro("Jair Bolsonaro", "987654321", "004", "13A");
$tripulante1 = new Tripulacao("Piloto Will Smith", "1122334455", "Piloto", "PL123");
$tripulante2 = new Tripulacao("Co-Piloto Chris Rock", "5544332211", "Co-Piloto", "CPL456");

// criando voo
$voo = new Voo("1234", "Aeroporto Internacional de Guarulhos", "Aeroporto Internacional de Fortaleza", "2023-04-10 10:00:00", "2023-04-10 14:30:00");

// adicionando passageiros e tripulantes ao voo
$voo->adicionarPassageiro($passageiro1);
$voo->adicionarPassageiro($passageiro2);
$voo->adicionarPassageiro($passageiro3);
$voo->adicionarPassageiro($passageiro4);
$voo->adicionarTripulante($tripulante1);
$voo->adicionarTripulante($tripulante2);

// exibindo informações sobre o voo
echo "\nInformações do Voo:";
echo "\nOrigem do voo: " . $voo->getOrigem();
echo "\nDestino do voo: " . $voo->getDestino();
echo "\nDuração do voo: " . $voo->calcularTempoVoo();
echo "\n";

// Executando check-in dos passageiros
echo "\nCheck-in de passageiros:\n";
$passageiro1->checkIn();
$passageiro2->checkIn();
$passageiro3->checkIn();
$passageiro4->checkIn();

// Listando passageiros do voo
echo "\nLista de Passageiros e tripulantes:";
$voo->listarTripulantes();
$voo->listarPassageiros();


?>
