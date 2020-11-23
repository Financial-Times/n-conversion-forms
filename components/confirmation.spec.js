import { Confirmation } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

const OFFER_TEXT = 'Offer text';
const nextActionTop = ['i might take you to tailor your experience'];
const nextActionBottom = ['i might take you to the ePaper'];

describe('Confirmation', () => {
	it('renders with default props', () => {
		const props = { offer: OFFER_TEXT };

		expect(Confirmation).toRenderCorrectly(props);
	});

	it('renders appropriately if is trial', () => {
		const props = { offer: OFFER_TEXT, isTrial: true };

		expect(Confirmation).toRenderCorrectly(props);
	});

	it('renders appropriately if is B2C Partnership', () => {
		const props = { isB2cPartnership: true };

		expect(Confirmation).toRenderCorrectly(props);
	});

	it('renders with custom email', () => {
		const props = { offer: OFFER_TEXT, email: 'test@example.com' };

		expect(Confirmation).toRenderCorrectly(props);
	});

	it('renders with complete details', () => {
		const props = {
			offer: OFFER_TEXT,
			details: [
				{
					title: 'Details title text',
					data: 'Details title data',
					description: 'Details title description',
				},
			],
		};

		expect(Confirmation).toRenderCorrectly(props);
	});

	it('renders with details missing a description', () => {
		const props = {
			offer: OFFER_TEXT,
			details: [
				{
					title: 'Details title text',
					data: 'Details title data',
				},
			],
		};

		expect(Confirmation).toRenderCorrectly(props);
	});

	it('renders with direct debit mandate URL', () => {
		const props = {
			offer: OFFER_TEXT,
			directDebitMandateUrl: 'https://foo.com',
		};

		expect(Confirmation).toRenderCorrectly(props);
	});

	it('renders appropriately if nextActionTop is supplied', () => {
		const props = { offer: OFFER_TEXT, nextActionTop };

		expect(Confirmation).toRenderCorrectly(props);
	});

	it('renders appropriately if nextActionTop is not supplied', () => {
		const props = { offer: OFFER_TEXT };

		expect(Confirmation).toRenderCorrectly(props);
	});

	it('renders appropriately if nextActionBottom is supplied', () => {
		const props = { offer: OFFER_TEXT, nextActionBottom };

		expect(Confirmation).toRenderCorrectly(props);
	});

	it('renders appropriately if nextActionBottom is not supplied', () => {
		const props = { offer: OFFER_TEXT };

		expect(Confirmation).toRenderCorrectly(props);
	});
});
