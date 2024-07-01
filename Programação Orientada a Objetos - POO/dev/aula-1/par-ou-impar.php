<?php
$numero = readline('Informe um numero inteiro: ');
$par = $numero % 2 == 0;

$parOuImpar = $par ? 'par' : 'impar';
echo "O número $numero é $parOuImpar";

/*
if($par){
    echo 'O número é par!';
} else {
    echo 'O número é impar!';
}
*/



