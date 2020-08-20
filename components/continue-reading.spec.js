import { ContinueReading } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('ContinueReading', () => {
	it('renders with default props', () => {
		const props = {};

		expect(ContinueReading).toRenderCorrectly(props);
	});

	it('renders with a link', () => {
		const props = { link: 'https://foo.com' };

		expect(ContinueReading).toRenderCorrectly(props);
	});

	it('renders with a link and is embedded', () => {
		const props = { link: 'https://foo.com', isEmbedded: true };

		expect(ContinueReading).toRenderCorrectly(props);
	});

	it('renders with a link and is not embedded', () => {
		const props = { link: 'https://foo.com', isEmbedded: false };

		expect(ContinueReading).toRenderCorrectly(props);
	});

	it('renders with a custom quote', () => {
		const props = { quote: 'Foobar' };

		expect(ContinueReading).toRenderCorrectly(props);
	});
});
