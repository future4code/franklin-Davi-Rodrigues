# Exercícios Knex
---

### Exercício 1
a) Explique como é a resposta que temos quando usamos o `raw`.
> Quando utilizamos o `raw`, nos é retornado um array, onde na primeira posição esta o resultado da query.

b) Faça uma função que busque um ator pelo nome;
```
const getActorByName = async (name:string) => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name LIKE "${name}%"
    `)

    return result[0][0]
}
```

c) Faça uma função que receba um gender retorne a quantidade de itens na tabela 
```
const countActorsByGender = async (gender:string) => {
    const result = await connection.raw(`
        SELECT COUNT(*) AS 'qtd' FROM Actor WHERE gender = '${gender}';
    `)

    return result[0][0]
}
```

### Exercício 2
a) Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão
```
const updateSalary =async (salary:number, id:string) => {
    await connection("Actor")
    .update({
        salary: salary
    }).where("id", id)
}
```

b) Uma função que receba um id e delete um ator da tabela
```
const deleteActor =async (id:string) => {
    await connection("Actor")
    .delete().where("id", id)
}
```

c) Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender
```
const avgSalary =async (gender:string) => {
    const result = await connection("Actor")
    .avg("salary as media").where("gender", gender)

    return result[0].media
}
```

### Exercício 3
a) Crie um endpoint com as especificações acima
```
app.get('/actor/:id', async (req, res) => {
    const id:string = req.params.id

    const result = await getActorByName(id)
    res.status(200).send(result)
})
```

b) Crie um endpoint agora com as seguintes especificações:
- Deve ser um GET (`/actor`)
- Receber o gênero como um *query param* (`/actor?gender=`)
- Devolver a quantidade de atores/atrizes desse gênero
- 
```
app.get('/actor', async (req, res) => {
    const gender:string = req.query.gender as string

    const result = await countActorsByGender(gender)
    res.status(200).send(result)
})
```