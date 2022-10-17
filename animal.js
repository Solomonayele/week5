let animals = ['lion', 'tiger', 'cheetah']

animals[1]= 'zebras'
console.log(animals)

animals.push('elephant')
console.log(animals)
animals.unshift('dear')
console.log(animals)


animals.reverse()
console.log(animals)

animals.sort()
console.log(animals)
let numberofaAniamls = animals.length
console.log(numberofaAniamls)

console.log(animals.indexOf('walrus'))
if (animals.indexOf('walrus') == -1 ){
    console.log('walrus is not in the array ')

}

if (animals.includes('cheetah')){
    console.log('cheetah  is in the arrray')
}

console.log(animals. join('* '))

animals.forEach(function (animal) {
    console.log(animal.toUpperCase())

})

animals.forEach(function (animal ){
    console.log(animal.length)
})
animals.push('solomon')

let animalNameLenght= []
animals.forEach(function (animal){
    let length = animal.length
    animalNameLenght.push(length)

})
console.log(animalNameLenght)











