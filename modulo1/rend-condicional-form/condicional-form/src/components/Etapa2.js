import { useState } from "react";
import styled from "styled-components";

const Tela = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Ask = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

function Etapa2(props) {
  const [stateInputCurso, setStateInputCurso] = useState("");
  const [stateInputEnsino, setStateInputEnsino]= useState("");

  const onChangeInputCurso = (evento) => {
    setStateInputCurso(evento.target.value);
  };

  const onChangeInputEnsino = (evento) => {
    setStateInputEnsino(evento.target.value);
  };

  return (
    <Tela>
      <h2>Etapa 2 - Informações do ensino superior</h2>
      <Form>
        <p>5. Qual o Curso?</p>
        <input value={stateInputCurso} onChange={onChangeInputCurso} />

        <p>6. Qual a unidade de ensno?</p>
        <input value={stateInputEnsino} onChange={onChangeInputEnsino} />

        <br/>
        <button onClick={props.func}>Próxima Etapa</button>
      </Form>
    </Tela>
  );
}

export default Etapa2;
