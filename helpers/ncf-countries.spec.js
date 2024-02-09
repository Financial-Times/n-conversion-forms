let mockCountries = generateCountryArray(100, { includeAllFrequent: true });
jest.mock('n-common-static-data', () => {
	return {
		billingCountries: { countries: mockCountries },
	};
});
jest.mock('n-common-static-data');
const helper = require('./ncf-countries');

describe('ncf-countries', () => {
	let stub;

	beforeEach(() => {
		stub = jest.fn();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('filter', () => {
		it('does not filter if not present', () => {
			helper({ hash: {}, fn: stub });
			const context = stub.mock.calls[0][0];

			expect(context.countries[1].countries).toEqual(mockCountries);
		});

		it('does not filter if not an array', () => {
			helper({ hash: { filterList: 'C-1' }, fn: stub });
			const context = stub.mock.calls[0][0];

			expect(context.countries[1].countries).toEqual(mockCountries);
		});

		it('filters and return only countries in array', () => {
			helper({ hash: { filterList: ['C-1'] }, fn: stub });
			const context = stub.mock.calls[0][0];

			expect(context.countries).toEqual([{ code: 'C-1' }]);
		});
	});

	describe('select', () => {
		it('does not mark any countries selected if no value passed', () => {
			helper({ hash: {}, fn: stub });
			const context = stub.mock.calls[0][0];

			expect(
				context.countries.find((country) => country.selected)
			).toBeUndefined();
		});

		it('does not mark any countries selected if incorrect value passed', () => {
			helper({ hash: { value: 'Test' }, fn: stub });
			const context = stub.mock.calls[0][0];

			expect(
				context.countries.find((country) => country.selected)
			).toBeUndefined();
		});

		it('marks a country as selected if value matches code', () => {
			const value = 'C-2';
			helper({ hash: { value }, fn: stub });
			const context = stub.mock.calls[0][0];

			expect(
				context.countries[1].countries.find((country) => country.code === value)
			).toBeDefined();
		});
	});

	describe('group', () => {
		it('does not group if frequently used countries under limit', () => {
			helper({ hash: { filterList: ['CAN', 'FRA', 'JPN', 'USA'] }, fn: stub });
			const context = stub.mock.calls[0][0];

			expect(context.countries[0]).not.toHaveProperty('label');
		});

		it('groups countries over limits', () => {
			helper({ hash: {}, fn: stub });
			const context = stub.mock.calls[0][0];

			expect(context.countries[0]).toHaveProperty('label');
		});

		it('sorts the group of frequently used countries', () => {
			helper({ hash: {}, fn: stub });
			const context = stub.mock.calls[0][0];
			const correctOrder = ['GBR', 'USA', 'JPN', 'FRA', 'CAN'];
			const frequentlyUsed = context.countries[0].countries;

			frequentlyUsed.forEach((item, index) => {
				expect(correctOrder[index]).toEqual(item.code);
			});
		});

		it('selects only one country if it exists in two places', () => {
			const value = 'GBR';
			helper({ hash: { value }, fn: stub });
			const context = stub.mock.calls[0][0];
			const frequentlyUsed = context.countries[0].countries;
			const alphabetical = context.countries[1].countries;

			expect(frequentlyUsed.find((item) => item.code === value)).toEqual(
				expect.objectContaining({
					selected: true,
				})
			);
			expect(alphabetical.find((item) => item.code === value)).toEqual(
				expect.objectContaining({
					selected: false,
				})
			);
		});
	});
});

function generateCountryArray(length, { includeAllFrequent = true } = {}) {
	return Array.from(Array(length), (item, index) => ({
		code: `C-${index}`,
	})).concat(
		// prettier-ignore
		includeAllFrequent
			? [
				{ code: 'JPN' },
				{ code: 'FRA' },
				{ code: 'USA' },
				{ code: 'CAN' },
				{ code: 'GBR' },
			]
			: []
	);
}
