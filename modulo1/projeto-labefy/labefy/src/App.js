import './App.css';
import Logo from './logo-labenu.png'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Playlists from './components/Playlists/Playlists';
import { useState } from 'react';
import Criar from './components/Criar/Criar';

function App() {
  const [tela, setTela] = useState('home')
  const [user, setUser] = useState('')

  const mostraTela = () => {
    if(tela === 'home'){
      return <Home></Home>
    }
    else if(tela === 'playlists'){
      return <Playlists user={user}></Playlists>
    }
    else if(tela === 'login'){
      return <Login setUser={setUser} user={user}></Login>
    }
    else if(tela === 'criar'){
      return <Criar user={user}></Criar>
    }
  }
  const home = () => {
    setTela('home')
  }

  const playlists = () => {
    setTela('playlists')
  }

  const login = () => {
    setTela('login')
  }

  const criar = () => {
    setTela('criar')
  }

   return (
    <div className='App'>
      <Header playlists={playlists} login={login} home={home} criar={criar}></Header>
      {/* <Home></Home> */}
      {/* <Login></Login> */}
      {/* <Playlists/> */}
      {mostraTela()}
    </div>
  );
}

export default App;
