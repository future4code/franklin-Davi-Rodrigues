import app from "./app"
import { createUser } from "./createUser";
import { AuthenticationData, generateToken } from "./generateToken";
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
