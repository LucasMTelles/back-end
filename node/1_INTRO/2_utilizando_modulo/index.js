//importar os módulos
//fs = core modules

//const fs = require('fs') //file system
//console.log(fs);
//fs.readFile('arquivo.txt', 'utf8', (err, data) =>{
    //console.log(err)
    //console.log(data.length)
//})

/*
//importar os modulos

const fs = require('fs')
fs.appendFile('arquivo2.txt', 'Hello content', function(err){
    if (err) throw err;
    console.log('saved')
});*/

/*const fs = require('fs')
fs.open ('arquivo3.txt', 'w', function(err){
    if(err) throw(err)
    console.log('saved')
})*/

/*const fs = require('fs')
fs.writeFile('arquivo4.txt', 'Hello content', function(err){
    if (err) throw (err)
    console.log('saved')
})*/

/*const fs = require('fs')
fs.unlink('arquivo3.txt', function(err){
    if(err) throw(err)
    console.log('File deleted!')
})*/

const fs = require('fs')
fs.rename('arquivo2.txt', 'novoarquivo.txt', function(err){
    if(err) throw(err)
    console.log('Arquivo renomeado!')
})