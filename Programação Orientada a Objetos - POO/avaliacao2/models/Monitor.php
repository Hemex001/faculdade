<?php
class Monitor extends Informatica
{
    private int $tamanho;
    private int $resolucaoX;
    private int $resolucaoY;

    public function __construct(int $codigo, Marca $marca, float $preco, int $voltagem, int $tamanho, int $resolucaoX, int $resolucaoY)
    {
        parent::__construct($codigo, $marca, $preco, $voltagem);
        $this->tamanho = $tamanho;
        $this->resolucaoX = $resolucaoX;
        $this->resolucaoY = $resolucaoY;
    }

    public function getTamanho(): int
    {
        return $this->tamanho;
    }

    public function getResolucaoX(): int
    {
        return $this->resolucaoX;
    }

    public function getResolucaoY(): int
    {
        return $this->resolucaoY;
    }

    public function setTamanho(int $tamanho): void
    {
        $this->tamanho = $tamanho;
    }

    public function setResolucaoX(int $resolucaoX): void
    {
        $this->resolucaoX = $resolucaoX;
    }

    public function setResolucaoY(int $resolucaoY): void
    {
        $this->resolucaoY = $resolucaoY;
    }
}
