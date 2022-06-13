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

function Etapa1(props) {
  const [stateInputNome, setStateInputNome] = useState("");
  const [stateInputIdade, setStateInputIdade] = useState("");
  const [stateInputEmail, setStateInputEmail] = useState("");
  const [stateInputEnsino, setStateInputEnsino]= useState("");

  const onChangeInputNome = (evento) => {
    setStateInputNome(evento.target.value);
  };

  const onChangeInputIdade = (evento) => {
    setStateInputIdade(evento.target.value);
  };

  const onChangeInputEmail = (evento) => {
    setStateInputEmail(evento.target.value);
  };

  const onChangeInputEnsino = (evento) => {
    setStateInputEnsino(evento.target.value);
  };

  return (
    <Tela>
      <h2>Etapa 1 - Dados Gerais</h2>
      <Form>
        <p>1. Qual o seu nome?</p>
        <input value={stateInputNome} onChange={onChangeInputNome} />

        <p>2. Qual a sua idade?</p>
        <input value={stateInputIdade} onChange={onChangeInputIdade} />

        <p>3. Qual o seu email?</p>
        <input value={stateInputEmail} onChange={onChangeInputEmail} />

        <p>4. Qual a sua escolaridade?</p>
        <select value={stateInputEnsino} onChange={onChangeInputEnsino}>
            <option value={'emi'}>Ensino médio incompleto</option>
            <option value={'emc'}>Ensino médio completo</option>
            <option value={'esi'}>Ensino superior incompleto</option>
            <option value={'esc'}>Ensino superio completo</option>
        </select>
        <br/>
        <button onClick={props.func}>Próxima Etapa</button>
      </Form>
    </Tela>
  );
}

export default Etapa1;
