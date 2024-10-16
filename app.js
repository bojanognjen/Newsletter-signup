let form = document.querySelector('.form');
let errorMsg = document.querySelector('.errorMessage');
let email = document.querySelector('#email');
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let successEmail = document.querySelector('.successEmail');
let successButton = document.querySelector('.success__button');

function switchPage() {
    let main = document.querySelector('.glavni');
    let success = document.querySelector('.success');

    console.log('Switching to success message');

    successEmail.innerText = `${email.value}`;

    success.classList.toggle('hidden');
    main.classList.toggle('hidden');
    
}

form.addEventListener('submit', handleEvent);
successButton.addEventListener('click', ()=> {
    switchPage();
    location.reload();
});

function handleEvent(e) {
        e.preventDefault();
        if(!email.value) {
            errorMsg.innerText = "Required";
            email.style.borderColor = "hsl(4, 100%, 67%)";
            email.style.backgroundColor = "hsla(4, 100%, 67%, 0.1)";
            email.classList.add('error-placeholder');
        }
        else if (!emailPattern.test(email.value)) {
            errorMsg.innerText = 'Valid email required';
            email.style.borderColor = "hsl(4, 100%, 67%)";
            email.style.backgroundColor = "hsla(4, 100%, 67%, 0.1)";
            email.style.color = "hsl(4, 100%, 67%)";
            }

          
        else {
            errorMsg.innerText = "";
            switchPage();
            email.value = "";
        }
    }

   
        email.addEventListener('input', ()=> {
                email.style.borderColor = "#aaaaaa";
                email.style.backgroundColor = "#fff";
                email.style.color = "#000";
            });




