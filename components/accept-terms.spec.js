import { AcceptTerms } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('AcceptTerms', () => {
	it('renders with default props', () => {
		const props = {};

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders with an error', () => {
		const props = { hasError: true };

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders a component matching snapshot when withPrivacyPolicyTerms is true', () => {
		const props = { withPrivacyPolicyTerms: true };

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders a component matching snapshot when `withB2BTerms` is true', () => {
		const props = { withB2BTerms: true };

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if a signup', () => {
		const props = { isSignup: true };

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if a signup for the print product', () => {
		const props = { isSignup: true, isPrintProduct: true };

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if a signup for the print product and is embedded', () => {
		const props = { isSignup: true, isPrintProduct: true, isEmbedded: true };

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if a signup for the print product and is not embedded', () => {
		const props = { isSignup: true, isPrintProduct: true, isEmbedded: false };

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if a signup not for the print product', () => {
		const props = { isSignup: true, isPrintProduct: false };

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if a signup not for the print product and is embedded', () => {
		const props = { isSignup: true, isPrintProduct: false, isEmbedded: true };

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if a signup not for the print product and is not embedded', () => {
		const props = { isSignup: true, isPrintProduct: false, isEmbedded: false };

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if input is checked', () => {
		const props = { isChecked: true };

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if is B2B', () => {
		const props = { isB2b: true };

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if is not B2B (i.e. default terms display)', () => {
		const props = { isB2b: false };

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if is not B2B (i.e. default terms display) and custom age restriction is provided', () => {
		const props = { isB2b: false, ageRestriction: '21' };

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if is not B2B (i.e. default terms display) and is embedded', () => {
		const props = { isB2b: false, isEmbedded: true };

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if is not B2B (i.e. default terms display) and is not embedded', () => {
		const props = { isB2b: false, isEmbedded: false };

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if is corporate signup', () => {
		const props = { isCorpSignup: true };

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if is corporate signup and trial', () => {
		const props = { isCorpSignup: true, isTrial: true };

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if is corporate signup and not trial', () => {
		const props = { isCorpSignup: true, isTrial: false };

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if is transition', () => {
		const props = { isTransition: true };

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if is transition with transition type of immediate', () => {
		const props = { isTransition: true, transitionType: 'immediate' };

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if is transition with transition type other than immediate', () => {
		const props = { isTransition: true, transitionType: 'foobar' };

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if is transition with transition type other than immediate and is single term', () => {
		const props = {
			isTransition: true,
			transitionType: 'foobar',
			isSingleTerm: true,
		};

		expect(AcceptTerms).toRenderCorrectly(props);
	});

	it('renders appropriately if is B2C Partnership', () => {
		const props = { isB2cPartnership: true };

		expect(AcceptTerms).toRenderCorrectly(props);
	});
});
