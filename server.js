const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/contact', (req, res) => {
    if (!req.body.name){
        return res.status(400).send('Name is required')
    }

    // Database stuff
    res.status(201).send(`Thank you ${req.body.name}`)
})

app.post('/login', (req, res) => {
    if(!req.header('x-auth-token')){
        return res.status(400).send('No Token')
    }

    if(req.header('x-auth-token') !== '123456'){
        return res.status(401).send('Not authorized')
    }

    res.send('Logged in')
})

app.put('/post/:id', (req, res) => {
    // Database stuff to update the POST

    res.json({
        id: req.params.id,
        title: req.body.title
    })
})

app.delete('/post/:id', (req, res) => {
    // Database stuff to update the POST

    res.json({ msg: `Post ${req.params.id} deleted`})
})

// We can have a static folder
app.use(express.static('public'))



app.listen(5000, () => console.log(`Server started on 5000`))

























