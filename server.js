const server = require('http').createServer(require('./server/app'));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`listening on port ${PORT}`))
