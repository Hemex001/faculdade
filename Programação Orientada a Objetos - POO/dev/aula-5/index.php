<?php

require_once 'classes/Aluno.php';
require_once 'classes/Turma.php';
require_once 'classes/Curso.php';

$curso = new Curso('TADS', 18);
$turma = new Turma(2024,$curso);

$turma->matricular(new Aluno('Hemerson', 28));
$turma->matricular(new Aluno('Teste', 17));

foreach($turma->getAlunos() as $aluno) {
    echo $aluno->getNome() . "\n";
}


