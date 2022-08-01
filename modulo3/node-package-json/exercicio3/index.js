const tasks = [
    "Estudar node",
    "Passear com o cachorro"
]

const newTask = process.argv[2]
tasks.push(newTask)

console.log("Tarefas: ", tasks)