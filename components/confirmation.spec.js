import Confirmation from './confirmation';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

const OFFER_TEXT = 'Offer text';

describe('Confirmation', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('confirmation.html');
	});

	it('renders with default props', () => {
		const props = { offer: OFFER_TEXT };

		expect(Confirmation).toRenderAs(context, props);
	});

	it('renders appropriately if is trial', () => {
		const props = { offer: OFFER_TEXT, isTrial: true };

		expect(Confirmation).toRenderAs(context, props);
	});

	it('renders with custom email', () => {
		const props = { offer: OFFER_TEXT, email: 'test@example.com' };

		expect(Confirmation).toRenderAs(context, props);
	});

	it('renders with complete details', () => {
		const props = {
			offer: OFFER_TEXT,
			details: [{
				title: 'Details title text',
				data: 'Details title data',
				description: 'Details title description'
			}]
		};

		expect(Confirmation).toRenderAs(context, props);
	});

	it('renders with details missing a description', () => {
		const props = {
			offer: OFFER_TEXT,
			details: [{
				title: 'Details title text',
				data: 'Details title data'
			}]
		};

		expect(Confirmation).toRenderAs(context, props);
	});

	it('renders with direct debit mandate URL', () => {
		const props = { offer: OFFER_TEXT, directDebitMandateUrl: 'https://foo.com' };

		expect(Confirmation).toRenderAs(context, props);
	});

	it('renders with hidden Call To Action (CTA)', () => {
		const props = { offer: OFFER_TEXT, hideCta: true };

		expect(Confirmation).toRenderAs(context, props);
	});

	it('renders Call To Action (CTA) for print-only', () => {
		const props = { offer: OFFER_TEXT, isPrintOnly: true };

		expect(Confirmation).toRenderAs(context, props);
	});

	it('renders Call To Action (CTA) for non-print-only', () => {
		const props = { offer: OFFER_TEXT, isPrintOnly: false };

		expect(Confirmation).toRenderAs(context, props);
	});
});
