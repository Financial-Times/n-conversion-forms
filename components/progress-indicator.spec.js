import ProgressIndicator from './progress-indicator';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('ProgressIndicator', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('progress-indicator.html');
	});

	it('renders with default props', () => {
		const props = {
			items: [
				{
					url: 'https://foo.com',
					name: 'Item name'
				}
			]
		};

		expect(ProgressIndicator).toRenderAs(context, props);
	});

	it('renders items that are complete', () => {
		const props = {
			items: [
				{
					url: 'https://foo.com',
					name: 'Item name',
					isComplete: true,
					isCurrent: false
				}
			]
		};

		expect(ProgressIndicator).toRenderAs(context, props);
	});

	it('renders items that are not complete and not current', () => {
		const props = {
			items: [
				{
					url: 'https://foo.com',
					name: 'Item name',
					isComplete: false,
					isCurrent: false
				}
			]
		};

		expect(ProgressIndicator).toRenderAs(context, props);
	});

	it('renders items that are not complete and current', () => {
		const props = {
			items: [
				{
					url: 'https://foo.com',
					name: 'Item name',
					isComplete: false,
					isCurrent: true
				}
			]
		};

		expect(ProgressIndicator).toRenderAs(context, props);
	});
});
