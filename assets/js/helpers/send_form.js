const formDOM = document.querySelector('#form');
const modal = document.querySelector('#modal');
const closeButton = document.querySelector('#btn_close-modal');

function openModal() {
	modal.open = true;
}

function closeModal() {
	modal.open = false;
}

function sendEmail() {
	formDOM.addEventListener('submit', (e) => {
		e.preventDefault();//evita que se recarge la pagina al enviarlo 
		const params = {
			name: document.getElementById('name').value,
			email: document.getElementById('email').value,
			subject: document.getElementById('subject').value,
			message: document.getElementById('message').value,
		};

		if (params.name && params.email && params.subject && params.message) {
			emailjs
				.send('service_lzkg5vv', 'template_aeufl0b', params)
				.then(openModal());
		}
	});
}

closeButton.addEventListener('click', closeModal);
export default sendEmail;
