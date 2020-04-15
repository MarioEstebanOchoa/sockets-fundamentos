const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    })

    // Escuchar cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {

        //     callback({
        //         resp: 'Todo salio BIEN'
        //     });

        // } else {

        //     callback({
        //         resp: 'Todo salio MAL'
        //     });
        // }
    })
})