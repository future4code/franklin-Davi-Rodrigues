import express from "express"
import cors from "cors"


const app = express()

type Task = {
    userid:number,
    id:number,
    title:string,
    completed:boolean,
}

const tasks:Task[] = [
    {
        userid: 1,
        id: 1,
        title: 'testar o teste',
        completed: true
    },
    {
        userid: 1,
        id: 2,
        title: 'Mussum Ipsum, cacilds vidis litro abertis',
        completed: true
    },
    {
        userid: 1,
        id: 3,
        title: 'Sapien in monti palavris qui num significa nadis i pareci latim',
        completed: true
    },
    {
        userid: 2,
        id: 4,
        title: 'Quem num gosta di mé, boa gentis num é.',
        completed: false
    },
    {
        userid: 2,
        id: 5,
        title: 'Manduma pindureta quium dia nois paga',
        completed: true
    },
    {
        userid: 3,
        id: 6,
        title: 'Cevadis im ampola pa arma uma pindureta.',
        completed: false
    },
    {
        userid: 3,
        id: 7,
        title: 'Detraxit consequat et quo num tendi nada.',
        completed: true
    },
    
]

app.use(cors())
app.use(express.json())

app.get('/ping', (req, res) => {
    res.send("Pong 🏓")
})

app.post('/tasks', (req, res) => {
    const body:Task = req.body
    tasks.push(body)
    res.send(tasks)

})

app.put('/tasks/:id', (req, res) => {
    const id = Number(req.params.id)

    const result = tasks.findIndex((task) => {
        return task.id === id
    })

    tasks[result].completed = !tasks[result].completed

    res.send(tasks)
})

app.delete('/tasks/:id', (req, res) => {
    const id = Number(req.params.id)

    const result = tasks.findIndex((task) => {
        return task.id === id
    })

    tasks.splice(result, 1)

    res.send(tasks)
})

app.get('/tasks/:completed', (req, res) => {
    const completed = Number(req.params.completed)
    if(completed){
        const result = tasks.filter((task) => {
            return task.completed
        })
        res.send(result)
    }else {
        const result = tasks.filter((task) => {
            return !task.completed
        })
        res.send(result)
    }
})

app.get('/:userid/tasks', (req, res) => {
    const userid = Number(req.params.userid)

    const results = tasks.filter((task) => {
        return task.userid === userid
    })

    if(results.length < 1){
        res.send('Usuário não encontrado')
    }else{
        res.send(results)
    }

})

app.listen(3003, () => console.log("Servidor disponível em 3003"))

