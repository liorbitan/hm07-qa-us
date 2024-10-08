// eslint-disable-next-line no-undef
const config = require('../config');

test('The response code should be 200, ok', async () => {
	let actualStatus
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});
