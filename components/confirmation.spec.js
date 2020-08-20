import { Confirmation } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

const OFFER_TEXT = 'Offer text';

describe('Confirmation', () => {
	it('renders with default props', () => {
		const props = { offer: OFFER_TEXT };

		expect(Confirmation).toRenderCorrectly(props);
	});

	it('renders appropriately if is trial', () => {
		const props = { offer: OFFER_TEXT, isTrial: true };

		expect(Confirmation).toRenderCorrectly(props);
	});

	it('renders with custom email', () => {
		const props = { offer: OFFER_TEXT, email: 'test@example.com' };

		expect(Confirmation).toRenderCorrectly(props);
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

		expect(Confirmation).toRenderCorrectly(props);
	});

	it('renders with details missing a description', () => {
		const props = {
			offer: OFFER_TEXT,
			details: [{
				title: 'Details title text',
				data: 'Details title data'
			}]
		};

		expect(Confirmation).toRenderCorrectly(props);
	});

	it('renders with direct debit mandate URL', () => {
		const props = { offer: OFFER_TEXT, directDebitMandateUrl: 'https://foo.com' };

		expect(Confirmation).toRenderCorrectly(props);
	});

	it('renders with hidden Call To Action (CTA)', () => {
		const props = { offer: OFFER_TEXT, hideCta: true };

		expect(Confirmation).toRenderCorrectly(props);
	});

	it('renders Call To Action (CTA) for print-only', () => {
		const props = { offer: OFFER_TEXT, isPrintOnly: true };

		expect(Confirmation).toRenderCorrectly(props);
	});

	it('renders Call To Action (CTA) for non-print-only', () => {
		const props = { offer: OFFER_TEXT, isPrintOnly: false };

		expect(Confirmation).toRenderCorrectly(props);
	});
});
