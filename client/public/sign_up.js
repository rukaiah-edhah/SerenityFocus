// sign up form submission 
document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('signup-form').addEventListener('submit', function(event) {
			event.preventDefault();

			const formData = {
					firstName: document.getElementById('signup_first_name').value,
					lastName: document.getElementById('signup_last_name').value,
					username: document.getElementById('signup_username').value,
					email: document.getElementById('signup_email').value,
					password: document.getElementById('signup_password').value,
			};

			fetch('/api/signup', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(formData),
			})
			.then(response => {
					if(response.ok) {
							return response.json();
					}
					throw new Error('Signup failed');
			})
			.then(data => {
					console.log('Success:', data);
			})
			.catch((error) => {
					console.error('Error:', error);
			});
	});
}); 