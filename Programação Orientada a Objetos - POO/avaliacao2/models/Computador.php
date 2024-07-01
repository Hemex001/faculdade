<?php

class Computador extends Informatica
{
    private string $processador;
    private string $memoriaRam;

    public function __construct(int $codigo, Marca $marca, float $preco, int $voltagem, string $processador, string $memoriaRam)
    {
        parent::__construct($codigo, $marca, $preco, $voltagem);
        $this->processador = $processador;
        $this->memoriaRam = $memoriaRam;
    }

    public function getProcessador(): string
    {
        return $this->processador;
    }

    public function getMemoriaRam(): string
    {
        return $this->memoriaRam;
    }

    public function setProcessador(string $processador): void
    {
        $this->processador = $processador;
    }

    public function setMemoriaRam(string $memoriaRam): void
    {
        $this->memoriaRam = $memoriaRam;
    }
}
