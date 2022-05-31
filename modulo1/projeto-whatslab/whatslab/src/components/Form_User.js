import React, {useState} from "react";
import styled from "styled-components";
import Mensagem from "./Mensagem";

const Form_Input = styled.form`
  width: 100%;
  display: flex;
`;

const Input_User = styled.input`
    width: 20%;
`
const Input_Msg = styled.input`
    width: 80%;
`
const Input_Sub = styled.input`
    width: 20%;
`


let msgs = []
function Form_User() {
    const [state, setState] = useState(msgs)
    function envia(event){
        event.preventDefault();
        const user = document.querySelector(Input_User)
        const msg = document.querySelector(Input_Msg)
        msgs.push({
            "user": user.value,
            "msg": msg.value,
        })
        console.log(msgs)
        setState(msgs)
        //const teste = document.getElementById("teste")
        //teste.innerHTML = "<Mensagem props={msgs}></Mensagem>"
    }

  return (
    <div>
        <div id="teste"></div>
        <Mensagem props={state}></Mensagem>
      <Form_Input>
        <Input_User type="text" name="user"></Input_User>
        <Input_Msg type="text" name="msg"></Input_Msg>
        <Input_Sub onClick={envia} type="submit" name="enviar"></Input_Sub>
      </Form_Input>
    </div>
  );
}

export default Form_User;
