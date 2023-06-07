module.exports = {
    mult(a, b){
        console.log(`${a*b}`)
    },
    div(a, b){
        // let divisao = b>=0? 'erro': `${a/b}`
        // console.log(divisao)
        if(b <= 0){
            console.log('error')
        }else{
            console.log(`${a/b}`)
        }
    }
}