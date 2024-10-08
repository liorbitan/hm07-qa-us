// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
        "products": [
        {
            "id": 1,
            "quantity": 3
        },
        {
            "id": 4,
            "quantity": 1
        },
        {
            "id": 9,
            "quantity": 3
        }
    ],
    "deliveryTime": 7
}

test('The response code should be 5', async () => {
	let response
    try {
			response = await fetch(`${config.API_URL}/api/v1/couriers/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
	}
	const costCheck = await response.json();
	expect (costCheck['Order and Go']['deliveryPrice']).toBe(5);
});
