<?php
require_once 'models/Turma.php'; 
require_once 'models/Aluno.php'; 
require_once 'models/Curso.php'; 

$curso = new Curso('TADS');

$turma = new Turma(2024, 'TADS', 18);

$aluno1 = new Aluno('Hemerson', 28);
$aluno2 = new Aluno('Pedro', 17);
$aluno3 = new Aluno('Carlos', 22);

$turma->matricular($aluno1);
$turma->matricular($aluno2);
$turma->matricular($aluno3);

$curso->adicionarTurma($turma);

foreach($curso->getTurmas() as $turma) {
    
    echo "- " . $turma->getCurso() . "\n";
}


