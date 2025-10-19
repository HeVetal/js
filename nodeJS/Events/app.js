const EventEmmiter = require('events')

const myEmitter = new EventEmmiter()

const logDbConnection = () => {
    console.log('Connected to DB')
}

// myEmitter.addListener('connected', logDbConnection)
// myEmitter.on('connected', logDbConnection)
// myEmitter.emit('connected')

// myEmitter.removeListener('connected', logDbConnection)
// myEmitter.off('connected', logDbConnection)
// myEmitter.removeAllListeners('connected')
// myEmitter.emit('connected')

myEmitter.on('msg', (data) => {
    console.log(`Got: ${data}`)
});

myEmitter.emit('msg', 'Hello! Get my message')

// myEmitter.once('off', () => {
//     console.log('I got one times and delete')
// })
//
// myEmitter.emit('off')
// myEmitter.emit('off')

// console.log(myEmitter.getMaxListeners())
// myEmitter.setMaxListeners(1)
// console.log(myEmitter.getMaxListeners())
// console.log(myEmitter.listenerCount('msg')) // get count listener this event
// myEmitter.prependListener() //add listener to the beginning of the list
// myEmitter.prependOneListener()
//
// console.log(myEmitter.listeners('msg')) // get name listener
console.log(myEmitter.eventNames())

// Errors
myEmitter.on('error', (err) => {
    console.log(`Get Error: ${err.message}`)
})

myEmitter.emit('error', new Error('Boom'))

const target = new EventEmmiter()

const logTarget = () => {
    console.log('connected to target')
}

target.addEventListener('connected', logTarget)
target.dispatchEvent(new Event('connected'))
