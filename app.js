let currentImageIndex = 0
const images = ['/images/Bird.png','images/abstract_paint.jpg','images/Bear.jpg','images/Mom_Toon_Me.jpeg','images/bubble_sketch.jpg','images/Dusky.jpg','images/denver_paint.jpg','images/dream_doodle.png','images/Gabe_Toon_Me.png','images/Something_Rad_.png','images/triangle_paint.jpg','images/Somethin_Rad.png',]

let next = document.getElementById('next')
// console.log(next)
let image = document.getElementById('image')
next.addEventListener('click', () => {
    if (currentImageIndex == images.length-1) {
        currentImageIndex = 0
        image.src = images[currentImageIndex]
    } else {
        currentImageIndex += 1
        image.src = images[currentImageIndex]
    }
})

let prev = document.getElementById('prev')
// console.log(prev)
prev.addEventListener('click',() => {
    if (currentImageIndex <= 0){
        currentImageIndex = images.length-1
    } else {
        currentImageIndex -= 1
        image.src = images[currentImageIndex]   
    }    
})







