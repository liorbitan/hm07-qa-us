// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {}

test('Check the response body should be 175', async () => {
	let response
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	const requestBody = await response.json(175);
	} catch (error) {
		console.error(error);
	}
});
