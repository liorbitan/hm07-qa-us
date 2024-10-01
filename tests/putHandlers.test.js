// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {}

test('', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	const data = await response.json();
	} catch (error) {
		console.error(error);
	}
});
