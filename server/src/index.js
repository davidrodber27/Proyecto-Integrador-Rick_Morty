var http = require('http');
const data = require('./utils/data.js');

const PORT = 3001;

http.createServer(function(req,res){


    res.setHeader('Access-Control-Allow-Origin', '*');

    try {
        const { url } = req;
        if (url.includes('/rickandmorty/character')){
            const id = url.split("/").pop();
            const character = data.find((char)=>char.id == id)
            console.log(character);
            res.writeHead(200, { 'Content-Type': 'application/json'});
            res.end(JSON.stringify(character));
        }
    }catch (error) {
        console.log(error);
        throw new Error(error);
    } 

}).listen (PORT, () => {
    console.log(`server on port ${PORT}`);
});