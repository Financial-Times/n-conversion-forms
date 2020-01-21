import { EducationJobTitle } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

const context = {};

expect.extend(expectToRenderCorrectly);

describe('Education job title', () => {
	it('renders an select element with default params', () => {
		expect(EducationJobTitle).toRenderCorrectly(context, {});
	});

	it('renders a select element with a selected option', () => {
		const props = { value: 'Faculty' };
		expect(EducationJobTitle).toRenderCorrectly(context, props);
	});

	it('renders a disabled select element', () => {
		const props = { isDisabled: true };
		expect(EducationJobTitle).toRenderCorrectly(context, props);
	});

	it('renders an error message', () => {
		const props = { hasError: true };
		expect(EducationJobTitle).toRenderCorrectly(context, props);
	});
});
