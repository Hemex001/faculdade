import "./BotaoContador.css";
import Button from "./components/Button";
import Contador from "./components/Contador";

function BotaoContador() {

  const handleCliqueAqui = () => {
    console.log("O botão 'Clique Aqui' foi acionado");
  }

  const handleOutroTexto = () => {
    console.log("O botão 'Outro Texto' foi acionado");
  }

  return (
    <div>
      <h1 className="title">Primeiro projeto em ReactJS</h1>
      <h3>Criando os primeiros componentes</h3>
      <Button texto="Clique Aqui" onClickButton={handleCliqueAqui}/>
      <Button texto="Outro Texto" onClickButton={handleOutroTexto} />
      <Contador />
    </div>
  );
}

export default BotaoContador;
