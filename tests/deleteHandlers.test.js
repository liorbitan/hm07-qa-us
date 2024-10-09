// eslint-disable-next-line no-undef
const config = require('../config');

test('The kit should be deleted', async () => {
	let response
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
	const data = await response.json();
	} catch (error) {
		console.error(error);
	}
});
