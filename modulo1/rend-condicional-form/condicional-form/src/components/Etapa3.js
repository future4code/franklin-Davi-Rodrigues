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

function Etapa3(props) {
  const [stateInputEmail, setStateInputEmail] = useState("");
  const [stateInputEnsino, setStateInputEnsino]= useState("");

  const onChangeInputEmail = (evento) => {
    setStateInputEmail(evento.target.value);
  };

  const onChangeInputEnsino = (evento) => {
    setStateInputEnsino(evento.target.value);
  };

  return (
    <Tela>
      <h2>Etapa 3 - Informações gerais de ensino</h2>
      <Form>
        <p>7. Por que você não terminou um curso de graduação?</p>
        <input value={stateInputEmail} onChange={onChangeInputEmail} />

        <p>8. Você fez algum curso complementar?</p>
        <select value={stateInputEnsino} onChange={onChangeInputEnsino}>
            <option value={'emi'}>Curso técnico</option>
            <option value={'emc'}>Curso de ingês</option>
        </select>
        <br/>
        <button onClick={props.func}>Próxima Etapa</button>
      </Form>
    </Tela>
  );
}

export default Etapa3;
