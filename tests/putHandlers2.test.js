// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {}

test('Changing the kit', async () => {
	let response
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/4`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	const requestBody = await response.json();
	} catch (error) {
		console.error(error);
	}
});
