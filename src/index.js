var express  = require('express')
var cors  = require('cors')
var { prisma } = require('./prisma.service')

app = express()

app.use(cors())
app.use(express.json())

app.get('/', async function(req, res){
  const usuario = await prisma.usuarios.findMany()
  res.status(200).json({
    message: usuario ? usuario : 'Opss.. Ninguém foi registrado ainda'
  })
})

app.post('/', async function(req, res){
  // criar um usuários
})

app.listen(3001, async function(){
  const usuario = await prisma.usuarios.findMany()
  console.log(usuario)
  console.log('Servidor rodando em 3001')
})