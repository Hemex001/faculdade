<?php
class Passageiro extends Pessoa {
    private $numeroBilhete;
    private $assento;

    public function __construct($nome, $documento, $numeroBilhete, $assento) {
        parent::__construct($nome, $documento);
        $this->numeroBilhete = $numeroBilhete;
        $this->assento = $assento;
    }

    public function checkIn() {
        echo "Passageiro " . $this->nome . " fez check-in.\n";
    }
}