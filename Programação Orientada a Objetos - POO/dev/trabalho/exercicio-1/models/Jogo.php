<?php

class Jogo
{
    private Time $timeCasa;
    private Time $timeVisitante;
    private int $placarCasa;
    private int $placarVisitante;
    private bool $encerrado;

    public function __construct(Time $timeCasa, Time $timeVisitante)
    {
        $this->timeCasa = $timeCasa;
        $this->timeVisitante = $timeVisitante;
        $this->placarCasa = 0;
        $this->placarVisitante = 0;
        $this->encerrado = false;
    }

    public function registrarPlacar(int $placarCasa, int $placarVisitante)
    {
        if (!$this->encerrado) {
            $this->placarCasa = $placarCasa;
            $this->placarVisitante = $placarVisitante;
            $this->encerrado = true;
        } else {
            echo "O jogo já foi encerrado.";
        }
    }

    public function getTimeCasa(): Time
    {
        return $this->timeCasa;
    }

    public function getTimeVisitante(): Time
    {
        return $this->timeVisitante;
    }

    public function getPlacarCasa(): int
    {
        return $this->placarCasa;
    }

    public function getPlacarVisitante(): int
    {
        return $this->placarVisitante;
    }

    public function getEncerrado(): bool
    {
        return $this->encerrado;
    }
}
?>
