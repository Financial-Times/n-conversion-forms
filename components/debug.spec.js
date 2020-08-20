import { Debug } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('Debug', () => {
	it('renders with default props', () => {
		const props = {};

		expect(Debug).toRenderCorrectly(props);
	});

	it('renders with isTest', () => {
		const props = {
			isTest: true
		};

		expect(Debug).toRenderCorrectly(props);
	});

	it('renders with showHelpers', () => {
		const props = {
			showHelpers: true
		};

		expect(Debug).toRenderCorrectly(props);
	});

	it('renders with links', () => {
		const props = {
			links: {
				'test': 'https://www.ft.com'
			}
		};

		expect(Debug).toRenderCorrectly(props);
	});
});
