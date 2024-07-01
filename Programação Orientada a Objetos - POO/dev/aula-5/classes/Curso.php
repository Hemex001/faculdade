<?php

class Curso
{
    private string $nome;
    private int $idadeMinima;

    public function __construct(string $nome, int $idadeMinima)
    {
        $this->nome = $nome;
        $this->idadeMinima = $idadeMinima;
    }

    public function getNome(): string
    {
        return $this->nome;
    }

    public function getIdadeMinima(): int
    {
        return $this->idadeMinima;
    }

}