const fs = require('fs')
fs.writeFile('arquivo.txt', 'novo texto', function(err){
    if (err) throw (err)
    console.log('atualizado')
})