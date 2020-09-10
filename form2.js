const scriptURL = 'https://script.google.com/macros/s/AKfycbzQuq2hy6ImyJAwst1Cb8yc2KmVROu_5CQVFfVNS3ffOSNbIk5s/exec'
const form2 = document.querySelector('#contact-form')

form.addEventListener('submit',(e) => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .then(() => {
            const email = document.getElementById('email')
            email.value = ""
        })
        .catch(error => console.error('Error!', error.message))
})

