<?php

class Informatica extends Produto
{
    private int $voltagem;

    public function __construct(int $codigo, Marca $marca, float $preco, int $voltagem)
    {
        parent::__construct($codigo, $marca, $preco);
        $this->voltagem = $voltagem;
    }

    public function getVoltagem(): int
    {
        return $this->voltagem;
    }

    public function setVoltagem(int $voltagem): void
    {
        $this->voltagem = $voltagem;
    }

    public function aplicarDesconto(): float
    {
        return $this->getPreco() * 0.90; //desconto 10%
    }
}
