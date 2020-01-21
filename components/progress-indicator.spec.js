import { ProgressIndicator } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('ProgressIndicator', () => {
	it('renders with default props', () => {
		const props = {
			items: [
				{
					url: 'https://foo.com',
					name: 'Item name'
				}
			]
		};

		expect(ProgressIndicator).toRenderCorrectly(props);
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

		expect(ProgressIndicator).toRenderCorrectly(props);
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

		expect(ProgressIndicator).toRenderCorrectly(props);
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

		expect(ProgressIndicator).toRenderCorrectly(props);
	});
});
