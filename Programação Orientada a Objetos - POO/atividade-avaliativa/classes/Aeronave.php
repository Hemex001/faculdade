<?php
class Aeronave {
    private $modelo;
    private $capacidade;
    private $numeroRegistro;

    public function __construct($modelo, $capacidade, $numeroRegistro) {
        $this->modelo = $modelo;
        $this->capacidade = $capacidade;
        $this->numeroRegistro = $numeroRegistro;
    }
}