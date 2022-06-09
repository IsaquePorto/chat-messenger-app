const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const server = require('http').createServer(app);

const io = require('socket.io')(server);

app.use(express.static(path.join('../', 'front-end')))
app.set('views', path.join('../', 'front-end'))

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use('/', (req, res) => {
    res.render('index.html')
})

let messages = []

io.on('connection', socket => {
    console.log(`Socket conectado: ${socket.id}`)

    socket.on('sendMessage', data => {
        console.log(data)

        messages.push(data);

    axios.post('http://localhost:8080', data);

    socket.broadcast.emit('receivedMessage', data)
    })
})

server.listen(3000);
