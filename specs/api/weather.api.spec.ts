import { getByCity } from '../../api/methods';

describe('Weather for Bacon', () => {
	it('gets result by city', async () => {
		const response = await getByCity('Bacon');
		expect(response.data.coord.lat).toBe(13.0378);
		expect(response.data.coord.lon).toBe(124.0411);
		expect(response.status).toBe(200);
	});
});
