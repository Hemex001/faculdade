<?php

namespace Hemex\Aula6;

class Piloto extends Tripulante
{
    private int $horasDeVoo;
    private TipoAeronave $tipoDeAeronave;
    private Cidade $baseDeOperacoes;

    public function __construct(int $horasDeVoo, TipoAeronave $tipoDeAeronave, Cidade $baseDeOperacoes, float $salario, string $alcunha, string $nome, string $email)
    {
        $this->horasDeVoo = $horasDeVoo;
        $this->tipoDeAeronave = $tipoDeAeronave;
        $this->baseDeOperacoes = $baseDeOperacoes;

        parent::__construct($salario, $alcunha, $nome, $email);
        /*
        parent::setSalario($salario);
        parent::setAlcunha($alcunha);
        parent::setNome($nome);
        parent::setEmail($email);
        */
    }

    public function getHorasDeVoo(): int
    {
        return $this->horasDeVoo;
    }

    public function getTipoDeAeronave(): TipoAeronave
    {
        return $this->tipoDeAeronave;
    }

    public function getBaseDeOperacoes(): Cidade
    {
        return $this->baseDeOperacoes;
    }

    public function setHorasDeVoo(int $horasDeVoo): void
    {
        $this->horasDeVoo = $horasDeVoo;
    }

    public function setTipoDeAeronave(TipoAeronave $tipoDeAeronave): void
    {
        $this->tipoDeAeronave = $tipoDeAeronave;
    }

    public function setBaseDeOperacoes(Cidade $baseDeOperacoes): void
    {
        $this->baseDeOperacoes = $baseDeOperacoes;
    }
}
