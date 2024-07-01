<?php

class Turma
{
    private int $ano;
    private Curso $curso;
    private array $alunos;

    public function __construct(int $ano, Curso $curso)
    {
        $this->ano = $ano;
        $this->curso = $curso;
    }

    private function validarMatricula(Aluno $aluno) : bool
    {
        if ($aluno->getIdade() < $this->ano) {
            return false;
        } else {
            return true;
        }
    }

    public function matricular(Aluno $aluno)
    {
        if ($this->validarMatricula($aluno)) {
            $this->alunos[] = $aluno;
            echo "O aluno foi matricuado!!!";
        } else {
            echo "O aluno nao tem idade o suficiente para se matricular";
        }
    }

    public function getAlunos() : array
    {
        return $this->alunos;
    }

    public function getCurso() : Curso
    {
        return $this->curso;
    }

    public function getIdadeMinimaCurso() : int
    {
        return $this->ano;
    }

}