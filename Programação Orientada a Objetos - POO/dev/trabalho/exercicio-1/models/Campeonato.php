<?php

class Campeonato {
    private string $nome;
    private int $ano;
    private array $times;
    private Time $campeao;
    private int $capacidadeMinimaEstadio;

    public function __construct(string $nome, int $ano, int $capacidadeMinimaEstadio) {
        $this->nome = $nome;
        $this->ano = $ano;
        $this->times = [];
        $this->capacidadeMinimaEstadio = $capacidadeMinimaEstadio;
    }

    public function inscrever($time) 
    {
        if ($this->validarInscricao($time)) {
            $this->times[] = $time;
            return true;
        } else {
            return false;
        }
    }

    private function validarInscricao(Time $time) 
    {
        if ($time->getCapacidadeEstadio() >= $this->capacidadeMinimaEstadio) {
            foreach ($this->times as $inscrito) {
                if ($inscrito === $time) {
                    return false; // Time ja esta inscrito
                }
            }
            return true; // Capacidade minima do estadio atende aos requisitos
        } else {
            echo "O time não atende os requisitos de capacidade minima do estadio." . "\n";
            return false; // Capacidade minima do estadio não atende aos requisitos
        }
    }

    public function setCampeao(Time $time) 
    {
        $this->campeao = $time;
    }

    public function getNome(): string 
    {
        return $this->nome;
    }

    public function getAno(): int 
    {
        return $this->ano;
    }

    public function getTimes(): array 
    {
        return $this->times;
    }
}