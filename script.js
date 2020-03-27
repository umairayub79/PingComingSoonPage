const form = document.getElementById('form');
const email = document.getElementById('email')

form.addEventListener('submit', e => {
	e.preventDefault();

	const emailVal = email.value;
	const small = form.querySelector('small');

	if (!emailVal) {
		email.classList.add('error');
		small.innerText = 'Please Enter your Email';
		small.style.display = 'inline-block';
	} else if (!validEmail(emailVal)) {
		// say it's invalid
		email.classList.add('error');
		small.innerText = 'Email is invalid!';
		small.style.display = 'inline-block';
	} else {
		// submit it
		email.classList.remove('error');
		small.innerText = '';
		small.style.display = 'none';
	}
});

function validEmail(email){
    var regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    return regex.test(String(email).toLocaleLowerCase());
}