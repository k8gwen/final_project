const thankYou = document.querySelector('#thank-you')
const form = document.getElementById('contact-form')

form.addEventListener('submit',(event) => {
    event.preventDefault()
    thankYou.style.display= 'block'
})






