import express from "express";
import cors from "cors";
import { users as usersList } from "./users";

const app = express()

app.use(express.json())
app.use(cors())

const users = usersList

app.post('/user', (req, res) => {
    const {name, nickname, email} = req.body
    const id:number = users[users.length - 1].id
    const user = {
        id,
        name,
        nickname,
        email
    }

    users.push(user)
    res.status(200).send('Usuário cadastrado')
    
})

app.get('/user/:id', (req, res) => {
    const param:number = Number(req.params.id)

    const [{id, nickname}] = users.filter((user) => {
        return user.id === param
    })

    res.status(200).send({'id': id, 'nickname': nickname})
    
})

app.put('/user/edit/:id', (req, res) => {
    const id:number = Number(req.params.id)
    const {name, nickname} = req.body

    const index = users.findIndex((user) => {
        return user.id === id
    })

    users[index].name = name
    users[index].nickname = nickname

    res.status(200).send(users[index])
})

app.listen('3003', () => {
    console.log('servidor rodando na porta 3000');
})

