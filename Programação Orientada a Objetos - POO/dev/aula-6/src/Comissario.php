<?php

namespace Hemex\Aula6;

class Comissario extends Tripulante
{
    private array $idiomas;
    private bool $treinamentoEmergencia;
    private int $anosDeExperiencia;

    public function __construct(bool $treinamentoEmergencia, int $anosDeExperiencia, float $salario, string $alcunha, string $nome, string $email)
    {
        $this->idiomas = [];
        $this->treinamentoEmergencia = $treinamentoEmergencia;
        $this->anosDeExperiencia = $anosDeExperiencia;

        parent::__construct($salario, $alcunha, $nome, $email);
        /*
        parent::setSalario($salario);
        parent::setAlcunha($alcunha);
        parent::setNome($nome);
        parent::setEmail($email);
        */
    }

    public function getIdiomas(): array
    {
        return $this->idiomas;
    }

    public function getTreinamentoEmergencia(): bool
    {
        return $this->treinamentoEmergencia;
    }

    public function getAnosDeExperiencia(): int
    {
        return $this->anosDeExperiencia;
    }

    public function addIdiomas(string $idioma): void
    {
        array_push($this->idiomas, $idioma);
    }

    public function setTreinamentoEmergencia(bool $treinamentoEmergencia): void
    {
        $this->treinamentoEmergencia = $treinamentoEmergencia;
    }

    public function setAnosDeExperiencia(int $anosDeExperiencia): void
    {
        $this->anosDeExperiencia = $anosDeExperiencia;
    }
}
