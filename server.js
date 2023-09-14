import http from 'http';

const PORT = 3000;

const rotas = {
    '/':"Hello world",
    '/livros': "entrei na rota livros",
    '/autores': "entrei na rota autores"
}

//Informações do server
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(rotas[req.url]);
})
//Escuta a porta 3000 (.listen())
server.listen(PORT, ()=>{
    console.log('listening on port 3000')
})