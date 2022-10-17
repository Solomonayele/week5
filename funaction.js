function shout (text) {
    let shouty_text = text.toUpperCase() + '!!!'
    return shouty_text
}

console.log(shout('hollow world'))
let message = shout('hello web programmers')
console.log(message)


function f_to_c (f, decimalplaces){
    let  celsius = (f - 32) * 5 / 9
    if (decimalplaces) {
        return celsius.toFixed(decimalplaces)
    }else{
        return celsius
    }
}

let todayTemp = 75

console.log('Today\s temperature is ' + todayTemp + 'f')

todayCelsio = f_to_c(todayTemp, 1)
console.log(todayCelsio)

