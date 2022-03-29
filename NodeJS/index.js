const http = require("http");
const status = require('./pcRamUsage');

const server = http.createServer((req,res) => {
    let url = req.url;

    if(url === '/status'){
        res.end(JSON.stringify(status, null, 2));
    }else{
        res.end("<h1>Bem vindo a pagina Inicial!</h1>");
    }
    
}).listen(3000, () => {
    console.log("Servidor esta Rodando!");
})

