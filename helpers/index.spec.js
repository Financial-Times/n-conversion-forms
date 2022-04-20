const helpers = require('.');

describe('helpers', () => {
	it('exports a "ncf-common-data" helper', () => {
		expect(helpers).toHaveProperty('ncf-common-data');
	});

	it('exports a "ncf-countries" helper', () => {
		expect(helpers).toHaveProperty('ncf-countries');
	});
});
