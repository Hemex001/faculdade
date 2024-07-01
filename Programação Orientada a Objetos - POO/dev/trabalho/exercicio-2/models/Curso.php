<?php

class Curso
{
    private string $nome;
    private array $turmas;

    public function __construct(string $nome)
    {
        $this->nome = $nome;
        $this->turmas = [];
    }

    public function adicionarTurma(Turma $turma)
    {
        $this->turmas[] = $turma;
    }

    public function getNome() : string
    {
        return $this->nome;
    }

    public function getTurmas() : array
    {
        return $this->turmas;
    }
}
