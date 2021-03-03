import { DeliveryInstructions } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const spanMessageByCountry = {
	GBR: 'For newspaper delivery, we can only deliver to the ground floor, so if you live in an apartment, we’ll leave the newspaper at reception or by the entrance. We deliver in the early hours of the morning so our drivers won’t be able to contact you or ring your doorbell.',
	USA: 'Please note we cannot guarantee delivery of the newspaper to a specific location on your property, which also includes delivery to a specific floor/suite in a building. US Federal Law prohibits delivery of newspapers into a mailbox, except via a USPS mail carrier. If you prefer delivery to a mailbox, please either select the "PO Box" delivery option from the top of this form, or contact. FT Customer Care',
	CAN: 'Please note we cannot guarantee delivery of the newspaper to a specific location on your property, which also includes delivery to a specific floor/suite in a building. If you prefer delivery by Canada Post, please either select the "PO Box" delivery option from the top of this form, or contact. FT Customer Care',
};

expect.extend(expectToRenderCorrectly);

describe('DeliveryInstructions', () => {
	it('renders with default props', () => {
		const props = { placeholder: 'test', country: 'GBR' };

		expect(DeliveryInstructions).toRenderCorrectly(props);
	});

	it('renders with an error', () => {
		const props = { placeholder: 'test', hasError: true, country: 'GBR' };

		expect(DeliveryInstructions).toRenderCorrectly(props);
	});

	it('renders with maxlength', () => {
		const props = { placeholder: 'test', maxlength: 200, country: 'GBR' };

		expect(DeliveryInstructions).toRenderCorrectly(props);
	});

	it('renders with rows', () => {
		const props = { placeholder: 'test', rows: 20, country: 'GBR' };

		expect(DeliveryInstructions).toRenderCorrectly(props);
	});

	it('renders with a custom value', () => {
		const props = { placeholder: 'test', value: 'foobar', country: 'GBR' };

		expect(DeliveryInstructions).toRenderCorrectly(props);
	});

	it('renders with a disabled input element', () => {
		const props = { placeholder: 'test', isDisabled: true, country: 'GBR' };

		expect(DeliveryInstructions).toRenderCorrectly(props);
	});

	it('renders with a USA span message', () => {
		const props = { placeholder: 'test', country: 'USA' };

		expect(DeliveryInstructions).toRenderCorrectly(props);
	});

	it('renders with a CAN span message', () => {
		const props = { placeholder: 'test', country: 'CAN' };

		expect(DeliveryInstructions).toRenderCorrectly(props);
	});

	it('renders as with a GBR span message and check the text', () => {
		const props = { isRequired: false, country: 'GBR' };

		const component = mount(DeliveryInstructions(props));

		const element = component.find('.o-forms-title__prompt').first();
		expect(element.text()).toBe(spanMessageByCountry['GBR']);
	});

	it('renders as with a USA span message and check the text', () => {
		const props = { isRequired: false, country: 'USA' };

		const component = mount(DeliveryInstructions(props));

		const element = component.find('.o-forms-title__prompt').first();
		expect(element.text()).toBe(spanMessageByCountry[props.country]);
	});

	it('renders as with a CAN span message and check the text', () => {
		const props = { isRequired: false, country: 'CAN' };

		const component = mount(DeliveryInstructions(props));

		const element = component.find('.o-forms-title__prompt').first();
		expect(element.text()).toBe(spanMessageByCountry[props.country]);
	});
});
