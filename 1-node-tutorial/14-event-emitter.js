const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data received ${name} with id:${id} here`);
})

customEmitter.on('response', () => {
    console.log('Some other logic here')
})

customEmitter.emit('response', 'john', 34)