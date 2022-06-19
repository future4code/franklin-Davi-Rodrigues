import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Playlist from "./Playlist";

function Playlists(props) {

    const [playlists, setPlaylists] = useState([])
    const [musicas, setMusicas] = useState([])
    const [id, setId] = useState('')

    const pegarPlaylist = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: props.user
            }
        }).then((response) => {
            console.log(response.data.result.list)
            setPlaylists(response.data.result.list)
        })
    }

    const pegarMusicas = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
            headers: {
                Authorization: props.user
            }
        }).then((response) => {
            console.log(response)
            setMusicas(response.data.result.tracks)
        })
    }

    const removerPlaylist = () => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {   
            headers: {
                    Authorization: props.user
                },
        }).then((r) => {
            pegarPlaylist()
        })

    }
    const mostrarMusicas = musicas.map((musica) => {
        return <p key={musica.id}>{musica.name}</p>
    })
    const mostraPlaylist = playlists.map((playlists) => {
        return <Playlist 
                estado={id} 
                key={playlists.id} 
                nome={playlists.name} 
                id={playlists.id} 
                setId={setId} 
                func={removerPlaylist}
                verMusicas={pegarMusicas}
                mostrarMusicas={mostrarMusicas}
                />
    })

    return (
        <div>
            {props.user ? pegarPlaylist() : alert("Você não está logado")}
            {mostraPlaylist}
        </div>
    )
}

export default Playlists