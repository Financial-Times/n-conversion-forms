import AcceptTerms from './accept-terms';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('AcceptTerms', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('accept-terms.html');
	});

	it('renders with default props', () => {
		const props = {};

		expect(AcceptTerms).toRenderAs(context, props);
	});

	it('renders with an error', () => {
		const props = { hasError: true };

		expect(AcceptTerms).toRenderAs(context, props);
	});

	it('renders appropriately if a signup', () => {
		const props = { isSignup: true };

		expect(AcceptTerms).toRenderAs(context, props);
	});

	it('renders appropriately if a signup for the print product', () => {
		const props = { isSignup: true, isPrintProduct: true };

		expect(AcceptTerms).toRenderAs(context, props);
	});

	it('renders appropriately if a signup for the print product and is embedded', () => {
		const props = { isSignup: true, isPrintProduct: true, isEmbedded: true };

		expect(AcceptTerms).toRenderAs(context, props);
	});

	it('renders appropriately if a signup for the print product and is not embedded', () => {
		const props = { isSignup: true, isPrintProduct: true, isEmbedded: false };

		expect(AcceptTerms).toRenderAs(context, props);
	});

	it('renders appropriately if a signup not for the print product', () => {
		const props = { isSignup: true, isPrintProduct: false };

		expect(AcceptTerms).toRenderAs(context, props);
	});

	it('renders appropriately if a signup not for the print product and is embedded', () => {
		const props = { isSignup: true, isPrintProduct: false, isEmbedded: true };

		expect(AcceptTerms).toRenderAs(context, props);
	});

	it('renders appropriately if a signup not for the print product and is not embedded', () => {
		const props = { isSignup: true, isPrintProduct: false, isEmbedded: false };

		expect(AcceptTerms).toRenderAs(context, props);
	});

	it('renders appropriately if a signup and has special terms', () => {
		const props = {
			isSignup: true,
			specialTerms: 'Special terms text'
		};

		expect(AcceptTerms).toRenderAs(context, props);
	});

	it('renders appropriately if a registration', () => {
		const props = { isRegister: true };

		expect(AcceptTerms).toRenderAs(context, props);
	});

	it('renders appropriately if input is checked', () => {
		const props = { isChecked: true };

		expect(AcceptTerms).toRenderAs(context, props);
	});

	it('renders appropriately if is B2B', () => {
		const props = { isB2b: true };

		expect(AcceptTerms).toRenderAs(context, props);
	});

	it('renders appropriately if is not B2B (i.e. default terms display)', () => {
		const props = { isB2b: false };

		expect(AcceptTerms).toRenderAs(context, props);
	});

	it('renders appropriately if is not B2B (i.e. default terms display) and custom age restriction is provided', () => {
		const props = { isB2b: false, ageRestriction: '21' };

		expect(AcceptTerms).toRenderAs(context, props);
	});

	it('renders appropriately if is not B2B (i.e. default terms display) and is embedded', () => {
		const props = { isB2b: false, isEmbedded: true };

		expect(AcceptTerms).toRenderAs(context, props);
	});

	it('renders appropriately if is not B2B (i.e. default terms display) and is not embedded', () => {
		const props = { isB2b: false, isEmbedded: false };

		expect(AcceptTerms).toRenderAs(context, props);
	});

	it('renders appropriately if is corporate signup', () => {
		const props = { isCorpSignup: true };

		expect(AcceptTerms).toRenderAs(context, props);
	});

	it('renders appropriately if is corporate signup and trial', () => {
		const props = { isCorpSignup: true, isTrial: true };

		expect(AcceptTerms).toRenderAs(context, props);
	});

	it('renders appropriately if is corporate signup and not trial', () => {
		const props = { isCorpSignup: true, isTrial: false };

		expect(AcceptTerms).toRenderAs(context, props);
	});

	it('renders appropriately if is transition', () => {
		const props = { isTransition: true };

		expect(AcceptTerms).toRenderAs(context, props);
	});

	it('renders appropriately if is transition with transition type of immediate', () => {
		const props = { isTransition: true, transitionType: 'immediate' };

		expect(AcceptTerms).toRenderAs(context, props);
	});

	it('renders appropriately if is transition with transition type other than immediate', () => {
		const props = { isTransition: true, transitionType: 'foobar' };

		expect(AcceptTerms).toRenderAs(context, props);
	});
});
