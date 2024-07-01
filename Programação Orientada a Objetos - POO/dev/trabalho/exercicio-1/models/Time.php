<?php

class Time 
{
    private string $nome;
    private string $apelido;
    private string $nomeEstadio;
    private int $capacidadeEstadio;

    public function __construct(string $nome, string $apelido, string $nomeEstadio, int $capacidadeEstadio) {
        $this->nome = $nome;
        $this->apelido = $apelido;
        $this->nomeEstadio = $nomeEstadio;
        $this->capacidadeEstadio = $capacidadeEstadio;
    }

    public function getNome(): string 
    {
        return $this->nome;
    }

    public function getApelido(): string 
    {
        return $this->apelido;
    }

    public function getNomeEstadio(): string 
    {
        return $this->nomeEstadio;
    }

    public function getCapacidadeEstadio(): int 
    {
        return $this->capacidadeEstadio;
    }
}