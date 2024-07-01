<?php
class Voo {
    private $numeroVoo;
    private $origem;
    private $destino;
    private $horaPartida;
    private $horaChegada;
    private $passageiros = [];
    private $tripulacao = [];
    private $escalas = [];

    public function __construct($numeroVoo, $origem, $destino, $horaPartida, $horaChegada) {
        $this->numeroVoo = $numeroVoo;
        $this->origem = $origem;
        $this->destino = $destino;
        $this->setHorarioVoo($horaPartida, $horaChegada);
    }

    public function setHorarioVoo($horaPartida, $horaChegada) {
        $this->horaPartida = new DateTime($horaPartida);
        $this->horaChegada = new DateTime($horaChegada);
    }

    public function calcularTempoVoo() {
        if ($this->horaPartida > $this->horaChegada) {
            $this->horaChegada->modify('+1 dia');
        }

        $intervalo = $this->horaPartida->diff($this->horaChegada);
        return $intervalo->format('%h horas e %i minutos');
    }

    public function adicionarPassageiro(Passageiro $passageiro) {
        $this->passageiros[] = $passageiro;
    }

    public function getPassageiros() {
        return $this->passageiros;
    }

    public function listarPassageiros() {
        foreach ($this->passageiros as $passageiro) {
            echo "\nPassageiro: " . $passageiro->getNome();
        }
    }

    public function adicionarTripulante(Tripulacao $tripulante) {
        $this->tripulacao[] = $tripulante;
    }

    public function getTripulantes() {
        return $this->tripulacao;
    }

    public function listarTripulantes() {
        foreach ($this->tripulacao as $tripulante) {
            echo "\nTripulante: " . $tripulante->getNome();
        }
    }

    public function getOrigem() {
        return $this->origem;
    }

    public function getDestino() {
        return $this->destino;
    }
}