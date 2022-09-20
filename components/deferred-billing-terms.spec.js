import { DeferredBillingTerms } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('DeferredBillingTerms', () => {
	it('renders with default props', () => {
		const props = {};

		expect(DeferredBillingTerms).toRenderCorrectly(props);
	});

	it('renders with an error', () => {
		const props = { hasError: true };

		expect(DeferredBillingTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if a isDeferredBilling', () => {
		const props = { isDeferredBilling: true };

		expect(DeferredBillingTerms).toRenderCorrectly(props);
	});

	it('renders appropriately and checked', () => {
		const props = { isChecked: true };

		expect(DeferredBillingTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if all props are set to false - no rendering of the component', () => {
		const props = { isChecked: false, isDeferredBilling: false, hasError: false };

		expect(DeferredBillingTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if all props are set to true -  rendering of the component', () => {
		const props = { iisChecked: true, isDeferredBilling: true, hasError: true };

		expect(DeferredBillingTerms).toRenderCorrectly(props);
	});
});
