<?php
require_once 'models/Campeonato.php';
require_once 'models/Time.php';

$time1 = new Time('Flamengo', 'Fla', 'Maracanã', 78838);
$time2 = new Time('Fluminense', 'Flu', 'Maracanã', 78838);
$campeonato = new Campeonato('Brasileirão', 2024, 50000);

$campeonato->inscrever($time1);
$campeonato->inscrever($time2);

echo "\nTimes inscritos para o campeonato: " . $campeonato->getNome() . " " . $campeonato->getAno() . "\n";
foreach($campeonato->getTimes() as $time) {
 
    echo "- " . $time->getNome() . "\n";
}