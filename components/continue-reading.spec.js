import ContinueReading from './continue-reading';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('ContinueReading', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('continue-reading.html');
	});

	it('renders with default props', () => {
		const props = {};

		expect(ContinueReading).toRenderAs(context, props);
	});

	it('renders with a link', () => {
		const props = { link: 'https://foo.com' };

		expect(ContinueReading).toRenderAs(context, props);
	});

	it('renders with a link and is embedded', () => {
		const props = { link: 'https://foo.com', isEmbedded: true };

		expect(ContinueReading).toRenderAs(context, props);
	});

	it('renders with a link and is not embedded', () => {
		const props = { link: 'https://foo.com', isEmbedded: false };

		expect(ContinueReading).toRenderAs(context, props);
	});

	it('renders with a custom quote', () => {
		const props = { quote: 'Foobar' };

		expect(ContinueReading).toRenderAs(context, props);
	});
});
