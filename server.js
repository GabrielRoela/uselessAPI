const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let pessoas = {
    'gabriel': {
        'age': 29,
        'birthName': 'Gabriel Roela',
        'birthdate': '24 October 1992', 
        'birthLocation': 'Belo Horizonte, Brazil',
        'occupation': 'Full-stack Software Engineer, when my time permits',
        'children': 'jesus lord, not yet',
        'lazy': true
    },
    'unknown':{
        'age': 'Não sei',
        'birthName': 'Também não sei',
        'birthdate': 'Não faço idéia', 
        'birthLocation': 'Nao dou a mínima',
        'occupation': 'nope, nada',
        'children': '0? 1? 2? 3? Vai saber',
        'lazy': false,
        'explicação': 'A única coisa que eu sei é que essa pessoa não é preguiçosa porque ela não é o Gabriel!'
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if(pessoas[rapperName]){
        response.json(pessoas[rapperName])
    }else{
        response.json(pessoas['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})