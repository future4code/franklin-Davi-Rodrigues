import express from 'express'
import cors from 'cors'

const app = express()
const porta = 3000

app.use(cors())
app.use(express.json())

const users = [
    {
        id: 1,
        name: 'Claeiton Rasta',
        phone: '4002-8922',
        email: 'cabecadegelo@yahoo.com.br',
        website: 'cleitonrasta.com',
    },
    {
        id: 2,
        name: 'Ednaldo Pereira',
        phone: '0800 3001',
        email: 'ednaldo.chance@yahoo.com.br',
        website: 'ednaldopereira.com.br',
    },
    {
        id: 3,
        name: 'Demervaldo Batista da Silva',
        phone: '4003-8933',
        email: 'demervaldo.poliglota@hotmail.com',
        website: 'opoliglota.com.br',
    },
]

// Preferi fazer assim pois fica mais fácil caso o usuário queira obter apenas os posts ou os usuários separadamente.
const posts = [
    {
        id: 1,
        title: "Cabeça de gelo",
        body: "Cleiton Rasta fazendo a galera debochar legal ao som do cabeça de gelo, olha a pedra!",
        userid: 1,
    },
    {
        id: 2,
        title: "Omae wa yowai",
        body: "Omae wa yowai. Naze yowai ka? tarinai karada... nikushimi ga.",
        userid: 3,
    },
    {
        id: 3,
        title: "Vale nada",
        body: "vale tudo",
        userid: 2,
    },
    {
        id: 4,
        title: "Pokémon",
        body: "Cebolinha, tartaruga, cabeça de fLôr, laranja, cuca, jacaré de chifre, cabeça azul, tatu, Alfredo, estranho, túlio, asa, larga-tixa, amarelinho, maribondo, KELVIN, gavião, pássaro sem bico, Bruno, ratinho, PIO, pássaro bicudo, Cobra, Jéfiter, buzerá, Bagaço, quelho, gato do mato, pinguim, Monalisa, dino – o coelho, jacaré bocão, Felipe, lebre, Dinossáuro, lobo, cabeça de estrela, Assis, Milene Demko, lolô, dedé, morcego, boca aberta, cabeça de braços, bocão peidão, flô, aranha, tartaruga, cabeça de antena, Adriano, bola de prato, Os redondos, ET, gato do mato, gato, pica pau, macaco sem pescoço, esponja, DOOOOG, agamemnom, bolinha, sapo, sapo de mão, cabeça de gato, o máscara, zero, boneco, joca, Geraldo, galha, peixe bocão, seu cuca, chapéu, barata, bração, josias, tartarugabola, cospe-fogo, pôni, aldomiro, caré bocão, férru, os três cabeças, pica-pau, duas cabeças, terceiro, Irian, peixe de cauda, AS-TRONAUTA, Fantasma de Linguagem, cabeça oval, cara de morcego, Pedro, largata, tromba, bico, carangueijo, carangueijo de patas, cabeça sem pescoço, bola rosa, os bonecus, sem pescoço, Valdomiro, jacaré de osso, pernado, balboa, Gabriel, palhaço bola, Júnior, elefante, bixo de pontas, chance, bola azul, era, formiga, urubu, lã, peixe espada, trela, jato, Benedito, gafanhoto, estranho beje, espantalho, calda de fogo, batatinha, Exú de calda, isca, lagarta de espinho, Silva, Ilson, ratinho, peixe, amanda, Editá Poupress, robô, côco, toupeira, cágado, mosquito, jacaré, napa, morcego mijão, pinto bico fino, bico fino, cobra de pescoço, assombração, hugo alexandre, tinho, esqueleto, Fleig.",
        userid: 2,
    },
]

app.get('/', (req, res) => {
    res.write('Essa eh a home')
    res.send()
})

app.get('/users', (req, res) => {
    // Endpoint com opção de busca por nome
    const {name} = req.query
    console.log(name);
    
    if(name){
        const result = users.filter((user) => {
            return user.name == name
            
        })
        res.send(result)
    }else {
        res.send(users)
    }
})

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)
    
    const result = users.filter((user) => {
        return user.id === id
    })

    res.send(result)
})

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.get('/posts/:userid', (req, res) => {
    const id = Number(req.params.userid)
    const result = posts.filter((post) => {
        return post.userid === id
    })
    res.send(result)
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})
