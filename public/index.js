const app = require('express')();
const server = require('http').server(app);
const io= require('socket.io') (server);
const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res){
    res.sendFile(__dirname + '/public')
}) 