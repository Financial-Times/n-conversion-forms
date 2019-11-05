import DeliveryInstructions from './delivery-instructions';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('DeliveryInstructions', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('delivery-instructions.html');
	});

	it('renders with default props', () => {
		const props = {};

		expect(DeliveryInstructions).toRenderAs(context, props);
	});
});
