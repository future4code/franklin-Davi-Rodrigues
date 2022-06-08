import { useState } from 'react';
import styled from 'styled-components'
import './App.css';
import Mensagem from './components/Mensagem';
import MensagemUser from './components/MensagemUser';

const AreaTexto = styled.div`
  background-color: white;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 20px;
  margin: 20px 8px;
  flex-grow: 4;
  width: max-content;
`

const Input = styled.input`
  padding: 5px;
  border: none;
  flex-grow: 1;
  width: 100px;
  border-right: 1px solid gray;
  &:focus {
    outline: none;
  }
`

const InputMsg = styled.input`
  height: 20px;
  width: calc(100% - 130px);
  flex-grow: 2;
  padding: 5px;
  border: none;
  &:focus {
    outline: none;
  }
`

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
const Botao = styled.button`
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #075e54;
  font-size: 25px;
  color: white;
  font-weight: 700;
  margin-right: 5px;
  background-repeat: no-repeat;
  box-sizing: border-box;
`

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  
`

const TelaMensagens = styled.div`
  background-color: #ece5dd;
  width: 700px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .user {
    align-items: flex-end;
  }
`

function App() {
  const [valueInputUser, setInputUser] = useState('');
  const [valueInputMsg, setInputMsg] = useState('');

  const [msg, setMsg] = useState([])

  const onChangeInputMsg = (evento) => {
    setInputMsg(evento.target.value)
  }

  const onChangeInputUser = (evento) => {
    setInputUser(evento.target.value)
  }

  const envia = (evento) => {
    evento.preventDefault()
    setMsg([...msg, {user: valueInputUser, msg: valueInputMsg}])
    setInputMsg('')
  }

  const showMsg = msg.map((dado, index) => {
    if(dado.user !== ''){
      return <Mensagem tipoMsg={'userMsg'} user={dado.user} msg={dado.msg} key={index}></Mensagem>
    }else {
      return <MensagemUser user={dado.user} msg={dado.msg} key={index}></MensagemUser>
    }
  })

  return (
    <div className="app">
      <TelaMensagens>
        {showMsg}
        <Box>
          <Form>
            <AreaTexto>
            <Input placeholder='Usuário' value={valueInputUser} onChange={onChangeInputUser}></Input>
            <InputMsg placeholder='Mensagem' value={valueInputMsg} onChange={onChangeInputMsg}></InputMsg>
            </AreaTexto>
            <Botao onClick={envia}> { '>' } </Botao>
          </Form>
        </Box>
      </TelaMensagens>
    </div>
  );
}

export default App;
