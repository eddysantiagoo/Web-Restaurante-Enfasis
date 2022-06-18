// Menu responsive

let menubar = document.querySelector('#menu-bar')
let nav = document.querySelector('.navbar')

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    nav.classList.toggle('active')
  
}

// Validaciones formulario

let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');


function validateName(){
    let name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match (/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    let phone = document.getElementById('contact-phone').value

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone is required';
        return false;
    }

    if (phone.length !== 10) {
       phoneError.innerHTML = 'Phone no should be 10 digits'
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Write only digits please'
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    let email = document.getElementById('contact-email').value
    
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if(!email.match (/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email is invalid'
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;

}

function validateMessage(){
    let message = document.getElementById('contact-message').value
    let required = 30;
    let left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' More characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;

}

function validateForm(){
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.innerHTML = 'Check the errors and resolve to submit please :)'
        swal("Oops!", "Check the errors and resolve to submit please :)", "error");
        return false;
    } else {
        swal("Perfect!", "Thank you, the form has been sent perfectly :)", "success");
    }
}


// Efecto scroll reveal

const sr = ScrollReveal ({
    distance : '15px',
    duration : 3200,
    reset : true,
  })

  sr.reveal('.home-content',{ delay:200, origin:'left' })
  sr.reveal('.home-text-content',{ delay:350, origin:'right' })
  sr.reveal('.inner-services',{ delay:500, origin:'bottom' })
  sr.reveal('.inner-company',{ delay:500, origin:'top' })
  sr.reveal('.company-text',{ delay:500, origin:'left' })
  sr.reveal('.company-text-2',{ delay:500, origin:'right' })
  sr.reveal('.contact',{ delay:500, origin:'bottom' })
