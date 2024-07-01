<?php

require_once 'Voo.php';

class Aeroporto {
    
    private string $nome;
    private string $codigoIATA;
    private string $cep;
    private string $endereco;
    private int $numPistas;
    private int $pistaDisponivel;
    private Cidade $cidade;
    private Porte $porte;
    private array $voos;


    public function __construct() {
        $this->voos = [];
    }

    private function reservarPista():void {

    }

    private function cancelarReservaPista():void {

    }

    public function setNome(string $nome) : void
    {
        $this->nome = $nome;
    }

    public function getNome(): string
    {
        return $this->nome;
    }

    public function setCodigoIATA(string $codigoIATA) : void
    {
        $this->codigoIATA = $codigoIATA;
    }

    public function getCodigoIATA(): string
    {
        return $this->codigoIATA;
    }

    public function setCEP(string $cep) : void
    {
        $this->cep = $cep;
    }

    public function getCEP() : string
    {
        return $this->cep;
    }

    public function setEndereco($endereco) : void
    {
        $this->endereco = $endereco;
    }

    public function getEndereco() : string
    {
        return $this->endereco;
    }

    public function setNumPistas(int $numPistas) : void
    {
        $this->numPistas = $numPistas;
    }

    public function getNumPistas() : int
    {
        return $this->numPistas;
    }

    public function setCidade(Cidade $cidade) : void
    {
        $this->cidade = $cidade;
    }

    public function getCidade() : Cidade
    {
        return $this->cidade;
    }

    public function setPorte (Porte $porte) : void
    {
        $this->porte = $porte;
    }

    public function getPorte() : Porte
    {
        return $this->porte;
    }

    public function addVoo(Voo $voo) : void
    {
        array_push($this->voos, $voo);
    }

    public function getVoos() : array
    {
        return $this->voos;
    }
}