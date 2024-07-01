<?php

class Professor
{
    private string $nome;
    private string $materia;

    public function __construct(string $nome, string $materia)
    {
        $this->nome = $nome;
        $this->materia = $materia;
    }

    public function getNomeProfessor() : string
    {
        return $this->nome;
    }

    public function getMateriaProfessor() : string
    {
        return $this->materia;
    }

}