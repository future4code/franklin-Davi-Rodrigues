import app from "./app";
import connection from "./connection";

const getActorByName = async (name:string) => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name LIKE "${name}%"
    `)

    return result[0][0]
}

const countActorsByGender = async (gender:string) => {
    const result = await connection.raw(`
        SELECT COUNT(*) AS 'qtd' FROM Actor WHERE gender = '${gender}';
    `)

    return result[0][0]
}

const updateSalary =async (salary:number, id:string) => {
    await connection("Actor")
    .update({
        salary: salary
    }).where("id", id)
}

const deleteActor =async (id:string) => {
    await connection("Actor")
    .delete().where("id", id)
}

const avgSalary =async (gender:string) => {
    const result = await connection("Actor")
    .avg("salary as media").where("gender", gender)

    return result[0].media
}

app.get('/actor/:name', async (req, res) => {
    const name:string = req.params.name

    const result = await getActorByName(name)
    res.status(200).send(result)
    
})

app.get('/actor', async (req, res) => {
    const gender:string = req.query.gender as string

    const result = await countActorsByGender(gender)
    res.status(200).send(result)
})

app.put('/actor/update', async (req, res) => {
    const id:string = req.body.id
    const salary:number = Number(req.body.salary)

    await updateSalary(salary, id)
    res.status(200).send('foi')
})

app.delete('/actor/:id',async (req, res) => {
    const id:string = req.params.id
    deleteActor(id)

    res.send('foi')
})

app.get('/actors/salary/:gender',async (req, res) => {
    const gender = req.params.gender

    const result = await avgSalary(gender)
    
    res.send({"result": result})
})