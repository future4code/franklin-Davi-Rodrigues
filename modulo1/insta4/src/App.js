import React, { useState } from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
  padding: 5px;
  padding-left: 8px;
  border: none;
  border-right: 1px solid gray;
  &:focus {
    outline: none;
  }
`

const Form = styled.form`
  margin: 20px 0;
  border: 1px solid gray;
  border-radius: 20px;
  padding: 5px;
`

const Botao = styled.button`
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`

function App() {

  const [post, setPost] = useState([
    {
      usuario: "paulinha",
      fotoUsuario: "https://picsum.photos/50/50?random=1",
      fotoPost: "https://picsum.photos/200/150?random=2",
    },
    {
      usuario: "cleitin_dos_pneus",
      fotoUsuario: "https://picsum.photos/50/50?random=3",
      fotoPost: "https://picsum.photos/200/150?random=4",
    },
    {
      usuario: "astor",
      fotoUsuario: "https://picsum.photos/50/50?random=5",
      fotoPost: "https://picsum.photos/200/150?random=6props-labedinprops-labedin",
    },

  ])

  const [valueInputUser, setValueInputUser] = useState("")
  const [valueInputFotoUser, setValueInputFotoUser] = useState("")
  const [valueInputFotoPost, setValueInputFotoPost] = useState("")

  const onChangeUser = (evento) => {
    setValueInputUser(evento.target.value)
  }

  const onChangeFotoUser = (evento) => {
    setValueInputFotoUser(evento.target.value)
  }

  const onChangeFotoPost = (evento) => {
    setValueInputFotoPost(evento.target.value)
  }

  const showPosts = post.map((dado) => {
    return <Post 
      nomeUsuario={dado.usuario}
      fotoUsuario={dado.fotoUsuario}
      fotoPost={dado.fotoPost}
    />
  })

  const adicionaPost = (evento) => {
    evento.preventDefault()
    const novoPost = {
      usuario: valueInputUser,
      fotoUsuario: valueInputFotoUser,
      fotoPost: valueInputFotoPost,
    }
    setPost([novoPost, ...post])
    setValueInputFotoPost("");
    setValueInputFotoUser("");
    setValueInputUser("");
  }

return(
  <MainContainer>
           <Form>
            <Input value={valueInputUser} onChange={onChangeUser} placeholder="Usuário"></Input>
            <Input value={valueInputFotoUser} onChange={onChangeFotoUser} placeholder="Link foto do usuário"></Input>
            <Input value={valueInputFotoPost} onChange={onChangeFotoPost} placeholder="Link foto do post"></Input>
            <Botao onClick={adicionaPost}>Postar</Botao>
           </Form>
           {showPosts}
        </MainContainer>
)

}


export default App;
