import { Phone } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('Phone', () => {
	it('render a phone input with a label', () => {
		const props = {
			pattern: 'whatever',
		};

		expect(Phone).toRenderCorrectly(props);
	});

	it('render a phone input with a label for B2B', () => {
		const props = {
			pattern: 'whatever',
			isB2b: true,
		};

		expect(Phone).toRenderCorrectly(props);
	});

	it('render default label if B2B and educational licence', () => {
		const props = {
			pattern: 'whatever',
			isB2b: true,
			educationalLicence: true,
		};

		expect(Phone).toRenderCorrectly({}, props);
	});

	it('render a disabled phone input', () => {
		const props = {
			pattern: 'whatever',
			isDisabled: true,
		};

		expect(Phone).toRenderCorrectly(props);
	});

	it('render a phone input with error styling', () => {
		const props = {
			pattern: 'whatever',
			hasError: true,
		};

		expect(Phone).toRenderCorrectly(props);
	});
});
