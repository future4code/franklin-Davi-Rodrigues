import app from "./app"
import { createUser } from "./createUser";
import { findUserByEmail } from "./findUserByEmail";
import { AuthenticationData, generateToken } from "./generateToken";
import { getDataOfToken } from "./getDataOfToken";
import { getUserById } from "./getUserById";
// import editUser from './endpoints/editUser'
// import createUser from './endpoints/createUser'

// app.post('/user/signup', createUser)
// app.put('/user/edit/:id', editUser)


import { idGenerator } from "./idGenerator"

console.log(idGenerator());

app.post('/user/signup',async (req, res) => {
    try {
        const {email, password} = req.body
        if(!email || email.indexOf('@') === -1){
            throw new Error('Email inválido')
        }
        
        if(password.length < 6){
            throw new Error('Senha inválida')
        }
        const id = idGenerator()
        
        createUser(id, email, password)

        const authentication : AuthenticationData = {id}
        const token = generateToken(authentication)

        res.send(token)
    }catch(erro){
        console.log(erro);
    }
})

app.post('/user/login',async (req, res) => {
    try {
        const {email, password} = req.body
        if(!email || email.indexOf('@') === -1){
            throw new Error('Email inválido')
        }
        
        const user = await findUserByEmail(email)

        if(user.password !== password){
            throw new Error("Sua senha não é essa não, meu parceiro")
        }

        const authentication : AuthenticationData = {id: user.id}
        const token = generateToken(authentication)

        res.send(token)
    }catch(erro){
        console.log(erro);
    }
})


app.get('/user/profile', async (req, res) => {
    const token = req.headers.authorization as string

    const { id } = getDataOfToken(token)
    const { email } = await getUserById(id)

    res.send({
        "id": id,
        "email": email
    })

})

