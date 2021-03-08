import { BillingCity } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';
expect.extend(expectToRenderCorrectly);

describe('BillingCity', () => {
	it('renders with default props', () => {
		const props = {};

		expect(BillingCity).toRenderCorrectly(props);
	});

	it('renders with an error', () => {
		const props = { hasError: true };

		expect(BillingCity).toRenderCorrectly(props);
	});

	it('renders with a custom value', () => {
		const props = { value: 'foobar' };

		expect(BillingCity).toRenderCorrectly(props);
	});

	it('renders with a disabled input element', () => {
		const props = { isDisabled: true };

		expect(BillingCity).toRenderCorrectly(props);
	});

	it('render different styles', () => {
		const props = {
			hasError: true,
			isHidden: true,
		};

		expect(BillingCity).toRenderCorrectly(props);
	});
});
