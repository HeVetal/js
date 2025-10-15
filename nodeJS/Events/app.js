const EventEmmiter = require('events')

const myEmitter = new EventEmmiter()

const logDbConnection = () => {
    console.log('Connected to DB')
}

// myEmitter.addListener('connected', logDbConnection)
myEmitter.on('connected', logDbConnection)
myEmitter.emit('connected')

// myEmitter.removeListener('connected', logDbConnection)
// myEmitter.off('connected', logDbConnection)
// myEmitter.removeAllListeners('connected')
// myEmitter.emit('connected')

// myEmitter.on('msg', (data) => {
//     console.log(`Got: ${data}`)
// });
//
// myEmitter.emit('msg', 'Hello! Get my message')

myEmitter.once('off', () => {
    console.log('I got one times and delete')
})

myEmitter.emit('off')
myEmitter.emit('off')