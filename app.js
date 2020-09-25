let currentImageIndex = 0
const images = ['images/Bird.jpg','images/abstract_paint.jpg','images/Bear.jpg','images/Mom_Toon_Me.jpeg','images/bubble_sketch.jpg','images/Dusky.JPG','images/denver_paint.jpg','images/Gabe_Toon_Me.png','images/Something_Rad_.png','images/triangle_paint.jpg','images/Somethin_Rad.jpg']
let image = document.getElementById('image')
let next = document.getElementById('next')
if(next) {
next.addEventListener('click',() => {
    if (currentImageIndex == images.length-1) {
        currentImageIndex = 0
        image.src = images[currentImageIndex]
    } else {
        currentImageIndex += 1
        image.src = images[currentImageIndex]
        }
    })
}
let prev = document.getElementById('prev')
if(prev){
prev.addEventListener('click',() => {
    if (currentImageIndex <= 0){
        currentImageIndex = images.length-1
    } else {
        currentImageIndex -= 1
        image.src = images[currentImageIndex]   
        }
    })
}










