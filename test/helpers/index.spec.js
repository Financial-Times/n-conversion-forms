const { expect } = require('chai');
const helpers = require('../../helpers/');

describe('helpers', () => {
	it('should export a "ncf-common-data" helper', () => {
		expect(helpers).to.have.property('ncf-common-data');
	});

	it('should export a "ncf-countries" helper', () => {
		expect(helpers).to.have.property('ncf-countries');
	});
});
