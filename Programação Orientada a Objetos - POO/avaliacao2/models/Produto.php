<?php
class Produto
{
    private int $codigo;
    private Marca $marca;
    private float $preco;

    public function __construct(int $codigo, Marca $marca, float $preco)
    {
        $this->codigo = $codigo;
        $this->marca = $marca;
        $this->preco = $preco;
    }

    public function getCodigo(): int
    {
        return $this->codigo;
    }

    public function getMarca(): Marca
    {
        return $this->marca;
    }

    public function getPreco(): float
    {
        return $this->preco;
    }

    public function setCodigo(int $codigo): void
    {
        $this->codigo = $codigo;
    }

    public function setMarca(Marca $marca): void
    {
        $this->marca = $marca;
    }

    public function setPreco(float $preco): void
    {
        $this->preco = $preco;
    }

    public function aplicarDesconto(): float
    {
        return $this->preco * 0.95; //desconto 5% padrao
    }
}
