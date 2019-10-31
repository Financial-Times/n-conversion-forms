import Submit from './submit';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('Submit', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('submit.html');
	});

	it('renders a submit element with default props', () => {
		const props = {};

		expect(Submit).toRenderAs(context, props);
	});

	it('renders a submit element with a custom button ID', () => {
		const props = { id: 'foo' };

		expect(Submit).toRenderAs(context, props);
	});

	it('renders a submit element with a style class to enable centre alignment', () => {
		const props = { isCentered: true };

		expect(Submit).toRenderAs(context, props);
	});

	it('renders a submit element with a disabled button', () => {
		const props = { isDisabled: true };

		expect(Submit).toRenderAs(context, props);
	});

	it('renders a submit element with a back button link', () => {
		const props = { backButtonUrl: 'http://bar.com' };

		expect(Submit).toRenderAs(context, props);
	});

	it('renders a submit element with a custom button label', () => {
		const props = { label: 'Baz' };

		expect(Submit).toRenderAs(context, props);
	});
});
