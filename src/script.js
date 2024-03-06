const form = document.querySelector('#form')
const email = document.querySelector('#email')
const btn = document.querySelector('#btn')
const error = document.querySelector('#error')

function formValidation(event) {
    event.preventDefault()
    
    if (!email.checkValidity()) {
        email.classList.add('invalid')
        email.setCustomValidity('Please provide a valid email')
        email.value = 'janeappleseed@email.com'
        error.innerText = email.validationMessage
    } else {
        email.classList.remove('invalid')
        email.setCustomValidity('')
        error.innerText = ''
    }
}

btn.addEventListener('click', formValidation)