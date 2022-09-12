import express from "express"
import cors from "cors"


const app = express()

type Account = {
    id:number,
    accountNumber:number,
    userid:number,
    balace:number,
}

type Transaction = {
    id:number,
    userid:number
    trasactioType:string,
    transactionOrigin:string,
    transactionDestination:string,

}

type User = {
    id:number,
    name:string,
    account:Account,
    transactions: Array<Transaction>,
}


const users:Array<User> = [
    {
        id: 1,
        name: 'Roberval',
        account: {
            id: 1,
            accountNumber: 2345,
            userid: 1,
            balace: 300,
        },
        transactions: []
    },
    {
        id: 2,
        name: 'Adamastor',
        account: {
            id: 2,
            accountNumber: 3456,
            userid: 2,
            balace: 3000,
        },
        transactions: []
    }
]

app.use(cors())
app.use(express.json())

app.post('/cadastro', (req, res) => {
    const {id, name, accountNumber, age} = req.body
    const newUser:User = {
        id: Number(id),
        name: name,
        account: {
            id: Number(id),
            accountNumber: Number(accountNumber),
            userid: Number(id),
            balace: 0
        },
        transactions: []
    }

    if(age < 18){
        res.status(400).send('É necessário ter pelo menos 18 anos para abrir uma conta no Labe Bank')
    }else{
        users.push(newUser)
        res.status(200).send('Usuário cadastrado com sucesso')
    }
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(3003, () => console.log("Servidor disponível em 3003"))

