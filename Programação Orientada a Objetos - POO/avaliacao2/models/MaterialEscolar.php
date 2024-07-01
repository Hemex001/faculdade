<?php

class MaterialEscolar extends Produto
{
    private int $idadeMinimaRecomendada;

    public function __construct(int $codigo, Marca $marca, float $preco, int $idadeMinimaRecomendada)
    {
        parent::__construct($codigo, $marca, $preco);
        $this->idadeMinimaRecomendada = $idadeMinimaRecomendada;
    }

    public function getIdadeMinimaRecomendada(): int
    {
        return $this->idadeMinimaRecomendada;
    }

    public function setIdadeMinimaRecomendada(int $idadeMinimaRecomendada): void
    {
        $this->idadeMinimaRecomendada = $idadeMinimaRecomendada;
    }


    public function aplicarDesconto(): float
    {
        if ($this->idadeMinimaRecomendada > 3) {
            return $this->getPreco() * 0.80; //desconto 20%
        } else {
            return $this->getPreco() * 0.95; //desconto 5%
        }
    }
}
