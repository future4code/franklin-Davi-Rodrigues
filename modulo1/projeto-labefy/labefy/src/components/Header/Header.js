import React from "react"
import {Cabecalho, Titulo, Menu, ItemMenu, Button} from './styles'

function Header (props) {
    const teste = () => {
        alert("foi")
    }
    return (
        <div>
            <Cabecalho>
                <Titulo onClick={props.home}>Labefy</Titulo>
                <Menu>
                    <ItemMenu onClick={props.criar}>Criar playlist</ItemMenu>
                    <ItemMenu onClick={props.playlists}>Minhas playlists</ItemMenu>
                    <Button onClick={props.login}>Login</Button>
                </Menu>
            </Cabecalho>
        </div>
    )
}

export default Header