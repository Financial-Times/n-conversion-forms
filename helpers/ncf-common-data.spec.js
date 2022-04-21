const mockCommonModule = {
	example: 'example',
	another: 'sample',
	nested: {
		property: 'no-problem',
	},
};
jest.mock('n-common-static-data', () => mockCommonModule);
const helper = require('./ncf-common-data');

describe('ncf-common-data', () => {
	let stub;

	beforeEach(() => {
		stub = jest.fn();
	});

	it('imports and exports the properties as defined', () => {
		const hash = { import: 'example', export: 'whatever' };
		helper({ hash, fn: stub });
		const context = stub.mock.calls[0][0];
		expect(context).toHaveProperty(hash.export, mockCommonModule[hash.import]);
	});

	it('can import nested properties', () => {
		const hash = { import: 'nested.property', export: 'whatever' };
		helper({ hash, fn: stub });
		const context = stub.mock.calls[0][0];
		expect(context).toHaveProperty(
			hash.export,
			mockCommonModule.nested.property
		);
	});
});
