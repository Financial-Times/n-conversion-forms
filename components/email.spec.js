import { Email } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('Email with confirmation', () => {
	it('render a email input with default params', () => {
		const props = {
		};

		expect(Email).toRenderCorrectly(props);
	});

	it('render a email input with email error', () => {
		const props = {
			hasError: true,
		};

		expect(Email).toRenderCorrectly(props);
	});

	it('render a email input with default value', () => {
		const props = {
			value: 'test@example.com'
		};

		expect(Email).toRenderCorrectly(props);
	});

	it('render a email input for B2B', () => {
		const props = {
			isB2b: true,
		};

		expect(Email).toRenderCorrectly(props);
	});

	it('render default label if B2B and educational licence', () => {
		const props = {
			pattern: 'whatever',
			isB2b: true,
			educationalLicence: true,
		};

		expect(Email).toRenderCorrectly({}, props);
	});

	it('render default label if isB2cPartnershipLicence', () => {
		const props = {
			pattern: 'whatever',
			isB2cPartnershipLicence: true,
		};

		expect(Email).toRenderCorrectly(props);
	});

	it('render a email input with given description', () => {
		const props = {
			description: 'some description',
			isB2b: false,
		};

		expect(Email).toRenderCorrectly(props);
	});

	it('render a email input with read only fields', () => {
		const props = {
			isB2b: false,
			readonly: true,
		};

		expect(Email).toRenderCorrectly(props);
	});

	it('render a email input with disabled fields', () => {
		const props = {
			isB2b: false,
			isDisabled: true
		};

		expect(Email).toRenderCorrectly(props);
	});
});
