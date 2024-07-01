<?php
class Tripulacao extends Pessoa {
    private $funcao;
    private $numeroLicenca;

    public function __construct($nome, $documento, $funcao, $numeroLicenca) {
        parent::__construct($nome, $documento);
        $this->funcao = $funcao;
        $this->numeroLicenca = $numeroLicenca;
    }
}