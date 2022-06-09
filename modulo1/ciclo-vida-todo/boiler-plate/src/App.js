import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

function App() {
  const [tarefas, setTarefa] = useState([
    {
      id: Date.now(), // Explicação abaixo
      texto: 'Passear com o cachorro',
      completa: false // Indica se a tarefa está completa (true ou false)
    },

    {
      id: Date.now(), // Explicação abaixo
      texto: 'Comprar ração para o gato',
      completa: true // Indica se a tarefa está completa (true ou false)
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [filtro, setFiltro] = useState("")
    
  // useEffect() => {
  //   () => {

  //   },
  //   []
  // };

  // useEffect() => {
  //   () => {

  //   },
  //   []
  // };

  const onChangeInput = (event) => {
    setInputValue(event.target.value)
  }

  const criaTarefa = () => {
    setTarefa([...tarefas, {id: Date.now(), texto: inputValue, completa: false}])
  }

  const selectTarefa = (id) => {

    const novaLista = tarefas.map((tarefa) => {
      if(tarefa.id === id){
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefa
      }else{
        return tarefa
      }
    })

    setTarefa(novaLista)

  }

   const onChangeFilter = (event) => {
    console.log(filtro)
    setFiltro(event.target.value)
    console.log(filtro)
  }

 
    const listaFiltrada = tarefas.filter(tarefa => {
      switch (filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    });
    

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={inputValue} onChange={onChangeInput}/>
          <button onClick={criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={filtro} onChange={onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }


export default App
