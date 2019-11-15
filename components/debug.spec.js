import { Debug } from './index';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('Debug', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('debug.html');
	});

	it('renders with default props', () => {
		const props = {};

		expect(Debug).toRenderAs(context, props);
	});

	it('renders with isTest', () => {
		const props = {
			isTest: true
		};

		expect(Debug).toRenderAs(context, props);
	});

	it('renders with showHelpers', () => {
		const props = {
			showHelpers: true
		};

		expect(Debug).toRenderAs(context, props);
	});

	it('renders with links', () => {
		const props = {
			links: {
				'test': 'https://www.ft.com'
			}
		};

		expect(Debug).toRenderAs(context, props);
	});
});
