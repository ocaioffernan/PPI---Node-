const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true})) // USAR POST request
app.use(express.static('public'))

app.get('/', (req, res) => {
    //carregar lista
    res.render('index')
})

app.post('/', (req, res) => {
    //CAREGAR LISTA
    // ADICIONAR A TAREFA NOVA NA LISTA
    console.log(req.body.description)
    res.render('index')
})

app.get('/novaTarefa', (req, res) => {
    res.render('cadastro')
})

app.post('/update', (req, res) => {
    //caregar lista
    //buscar a terefa na lista
    // modificar o item
    res.redirect('/')
})

app.post('/delete', (req, res) => {
    //caregar lista
    //buscar a tarefa na lista
    // remover o item
    res.redirect('/')
})

app.listen(3030, (err) => { 
    if (err){
        console.error(err)
    }
    return console.log('Servidor rodando')
})

