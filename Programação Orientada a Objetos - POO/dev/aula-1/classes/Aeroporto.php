<?php

class Voo
{
    public string $aeroportoOrigem;
    public string $aeroportoDestino;
    public string $escalas;
    public string $rota;
    public string $aeronave;
    public string $tempoDeVoo;
    
    public function __construct() 
    {
        $this->tempoDeVoo = 0;
    }

    public function definirRota(): void 
    {

    }

    public function gerenciarEscalas(): void 
    {

    }

    public function calcularTempoDeVoo(): void 
    {

    }

    public function atribuirAeronave(): void 
    {

    }
}

class Tripulante
{
    private string $nome;
    private string $cargo;
    private string $tipo;
    
    public function __construct()
    {

    }

    public function setNome(string $nome): void
    {
        $this->nome = $nome;
    }

    public function getNome(): string
    {
        return $this->nome;
    }

    public function setCargo(string $cargo): void
    {
        $this->cargo = $cargo;
    }

    public function getCargo(): string
    {
        return $this->cargo;
    }

    public function setTipo(string $tipo): void
    {
        $this->tipo = $tipo;
    }

    public function getTipo(): string
    {
        return $this->tipo;
    }
}

class Aeronave
{
    private int $capacidade;
    private string $modelo;
    private string $status;
    
    public function __construct() 
    {

    }

    public function setModelo(string $modelo): void
    {
        $this->modelo = $modelo;
    }

    public function getModelo(): string 
    {
        return $this->modelo;
    }

    public function setCapacidade(int $capacidade): void
    {
        $this->capacidade = $capacidade;
    }

    public function getCapacidade(): int 
    {
        return $this->capacidade;
    }

    public function setStatus(string $status): void
    {
        $this->status = $status;
    }

    public function getStatus(): string 
    {
        return $this->status;
    }
}

class ControleDeAcesso
{
    public string $listaDePassageiros;
    public string $listaDePilotos;
    public string $listaDeComissarios;

    public function __construct() {
        /*$this->var = $var;*/
    }

    public function adicionarPassageiro(): void 
    {

    }

    public function removerPassageiro(): void 
    {

    }

    public function verificarAcesso(): void 
    {

    }
}