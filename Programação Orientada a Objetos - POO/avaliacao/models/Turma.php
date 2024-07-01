<?php
require_once 'Aluno.php'; 
require_once 'Professor.php'; 

class Turma
{
    private int $ano;
    private string $curso;
    private int $idadeMinimaCurso;
    private array $alunos;

    public function __construct(int $ano, string $curso, int $idade)
    {
        $this->idadeMinimaCurso = $idade;
        $this->ano = $ano;
        $this->curso = $curso;
    }

    private function validarMatricula(Aluno $aluno) : bool
    {
        if ($aluno->getIdade() < $this->idadeMinimaCurso) {
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

    public function getCurso() : string
    {
        return $this->curso;
    }

    public function getIdadeMinimaCurso() : int
    {
        return $this->idadeMinimaCurso;
    }
}