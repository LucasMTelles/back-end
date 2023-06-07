//node index.js --nome=carlos --idade=31
const minimist = require('minimist')

const args = minimist(process.argv.slice(2))
console.log(args)

const nome = args['nome']
console.log(nome)