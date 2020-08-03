import { Email } from './index';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};
expect.extend(expectToRenderAs);

describe('Email with confirmation', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('email.html');
	});

	it('render a email input with default params', () => {
		const props = {
		};

		expect(Email).toRenderAs(context, props);
	});

	it('render a email input with email error', () => {
		const props = {
			hasError: true,
		};

		expect(Email).toRenderAs(context, props);
	});

	it('render a email input with default value', () => {
		const props = {
			value: 'test@example.com'
		};

		expect(Email).toRenderAs(context, props);
	});

	it('render a email input for B2B', () => {
		const props = {
			isB2b: true,
		};

		expect(Email).toRenderAs(context, props);
	});

	it('render default label if B2B and educational licence', () => {
		const props = {
			pattern: 'whatever',
			isB2b: true,
			educationalLicence: true,
		};

		expect(Email).toRenderAs(context, props);
	});

	it('render default label if isB2cPartnershipLicence', () => {
		const props = {
			pattern: 'whatever',
			isB2cPartnershipLicence: true,
		};

		expect(Email).toRenderAs(context, props);
	});

	it('render a email input with given description', () => {
		const props = {
			description: 'some description',
			isB2b: false,
		};

		expect(Email).toRenderAs(context, props);
	});

	it('render a email input with read only fields', () => {
		const props = {
			isB2b: false,
			readonly: true,
		};

		expect(Email).toRenderAs(context, props);
	});

	it('render a email input with disabled fields', () => {
		const props = {
			isB2b: false,
			isDisabled: true
		};

		expect(Email).toRenderAs(context, props);
	});
});
