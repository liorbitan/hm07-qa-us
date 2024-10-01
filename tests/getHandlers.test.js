// eslint-disable-next-line no-undef
const config = require('../config');

test('', async () => {
	let actualStatus
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});
