const express = require("express")

const app = express()

app.get('/', (request, response)=>{
    console.log("Был запрос")

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    response.send(`Id:${request.params['id']}`)
})

app.use("/about", function(request, response){
      
    let id = request.query.id;
    let userName = request.query.name;

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    response.send(`id:${id} name:${userName}`);
});

app.listen(3000)