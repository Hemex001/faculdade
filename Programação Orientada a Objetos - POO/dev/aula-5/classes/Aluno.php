<?php

class Aluno
{
    private int $idade;
    private string $nome;

    public function __construct(string $nome, int $idade)
    {
        $this->nome = $nome;
        $this->idade = $idade;
    }

    public function getIdade(): int
    {
        return $this->idade;
    }

    public function getNome(): string
    {
        return $this->nome;
    }

}

