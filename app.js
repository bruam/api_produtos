/*router - criar arquivo separa para definir rotas

especico para gerenciamento de rotas


npm init para passo a passo de criação de projeto
no package.json adicionar em script
node app.js


depois instalar o express
npm install express --save
*/

const express = require('express')
const app = express()
const appUser = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

appUser.use(express.json());
appUser.use(express.urlencoded({extended: true}));

//Rotas
const produtoRota = require('./rotas/produto_rotas');
app.use('/api/produtos',produtoRota); //apontamento para arquivo de rotas

const usuarioRota = require('./rotas/usuario_rotas');
appUser.use('/api/usuarios',usuarioRota);

app.listen(port, () => {
    console.log(`Executanto servidor em http://localhost:${port}`)
})