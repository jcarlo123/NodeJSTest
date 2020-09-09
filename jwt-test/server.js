const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')

app.use(express.json())

const posts = [
    {
        username: 'jj',
        title: 'post 1'
    },
    {
        username: 'jo',
        title: 'post 2'
    },
    {
        username: 'ja',
        title: 'post 3'
    }
]

app.get('/posts', (req, res) => {
    res.json(posts);
})

app.post('/login', (req, res) => {
    //Authenticate user

    const username = req.body.username
    const user = { username }

    jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
})

app.listen(3000)