let form = document.querySelector('.form');
let errorMsg = document.querySelector('.errorMessage');
let email = document.querySelector('#email');
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let successEmail = document.querySelector('.successEmail');

function switchPage() {
    let main = document.querySelector('.newsletter');
    let success = document.querySelector('.success');

    successEmail.innerText = `${email.value}`;

    success.classList.toggle('hidden');
    main.classList.toggle('hidden');
}

form.addEventListener('submit', handleEvent);

function handleEvent(e) {
        e.preventDefault();
        if(!email.value) errorMsg.innerText = "Obavezan unos mejla.";
        else if (!emailPattern.test(email.value)) {
            errorMsg.innerText = 'Molim te unesi pravilnu mejl adresu.';
          }
        else {
            errorMsg.innerText = "";
            switchPage();
            email.value = "";
    
        }
}





