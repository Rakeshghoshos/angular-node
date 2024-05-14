const {Server} = require("socket.io");

const socket=(server)=>{
    const io = new Server(server, {
        cors: {
            origin: "http://localhost:4200",  // Allow your Angular app's domain
            allowedHeaders: '*',
          methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            credentials: true  // Allow cookies (if you use them)
        }
    });

    io.on('connect', () => {
        console.log('socket server attached');
      });
    
    
}

module.exports = socket;