import express from 'express'

const app = express()

app.get('/games', (request, response) => {
    return response.json([])
})

app.post('/ads', (request, response) => {
    return response.json([])
})

app.get('/games/:id/ads', (request, response) => {
    // const gameId = request.params.id;

    return response.json([
        {id: 1, name: 'nome 01'},
        {id: 2, name: 'nome 02'},
        {id: 3, name: 'nome 03'},
        {id: 4, name: 'nome 04'},
    ])
})

app.get('/ads/:id/discord', (request, response) => {
    return response.json([
        {id: 1, name: 'nome 01'},
        {id: 2, name: 'nome 02'},
        {id: 3, name: 'nome 03'},
        {id: 4, name: 'nome 04'},
    ])
})

app.listen(3333) //localhost:3333/ads

// 43:07 