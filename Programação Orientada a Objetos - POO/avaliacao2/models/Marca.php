<?php

class Marca
{
    private string $nome;
    private string $fornecedor;

    public function __construct(string $nome, string $fornecedor)
    {
        $this->nome = $nome;
        $this->fornecedor = $fornecedor;
    }

    public function getNome(): string
    {
        return $this->nome;
    }

    public function getFornecedor(): string
    {
        return $this->fornecedor;
    }

    public function setNome(string $nome): void
    {
        $this->nome = $nome;
    }

    public function setFornecedor(string $fornecedor): void
    {
        $this->fornecedor = $fornecedor;
    }
}
