let birds = ['owl', 'rabin', 'Eagle']
console.log(birds)

birds.forEach(function (bird, index)  {

    console.log(index, bird.toUpperCase())

})
for (let x = 0 ; x < birds.length; x++){
    let bird = birds[x]
    console.log(x, bird.toUpperCase())
}



