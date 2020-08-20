import { CustomerCare } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('CustomerCare', () => {
	it('renders with default props', () => {
		const props = {};

		expect(CustomerCare).toRenderCorrectly(props);
	});

	it('renders with custom header text', () => {
		const props = { header: 'Header text' };

		expect(CustomerCare).toRenderCorrectly(props);
	});

	it('renders in compact mode', () => {
		const props = { isCompact: true };

		expect(CustomerCare).toRenderCorrectly(props);
	});

	it('renders with custom message text', () => {
		const props = { message: 'Message text' };

		expect(CustomerCare).toRenderCorrectly(props);
	});
});
