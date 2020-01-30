import React from 'react';
import { shallow } from 'enzyme';
import { DeliverySecurityInstructions } from './delivery-security-instructions.jsx';

describe('DeliverySecurityInstructions', () => {
	describe('renders component', () => {
		let wrapper;

		beforeEach(() => {
			wrapper = shallow(
				<DeliverySecurityInstructions />
			);
		});

		test('contains textAreaProps id set to default: deliverySecurityInstructionsField ', () => {
			expect(wrapper.prop('id')).toBe('deliverySecurityInstructionsField');
		});

		test('contains id set to foo', () => {
			wrapper = shallow(
				<DeliverySecurityInstructions fieldId='foo'/>
			);
			expect(wrapper.prop('id')).toBe('foo');
		});

		test('contains htmlFor set to default: deliverySecurityInstructions', () => {
			expect(wrapper.prop('htmlFor')).toBe('deliverySecurityInstructions');
		});

		test('contains htmlFor set to foo', () => {
			wrapper = shallow(
				<DeliverySecurityInstructions inputId='foo'/>
			);
			expect(wrapper.prop('htmlFor')).toBe('foo');
		});

		test('containing o-forms-input--invalid when hasError is set to true', () => {
			wrapper = shallow(
				<DeliverySecurityInstructions hasError={true}/>
			);
			const secondChildProps = wrapper.props().children[1].props;

			expect(secondChildProps.className).toContain('o-forms-input--invalid');
		});

		test('does not contain o-forms-input--invalid when hasError is false', () => {
			const secondChildProps = wrapper.props().children[1].props;
			expect(secondChildProps.className).not.toContain('o-forms-input--invalid');
		});

		describe('sets default props for textarea', () => {
			const wrapper = shallow(<DeliverySecurityInstructions />);
			const textAreaProps = wrapper.find('textarea').props();

			it('sets the `id` property to deliverySecurityInstructions', () => {
				expect(textAreaProps.id).toBe('deliverySecurityInstructions');
			});

			it('sets the `name` property to deliverySecurityInstructions', () => {
				expect(textAreaProps.name).toBe('deliverySecurityInstructions');
			});

			it('does not set maxLength when no value is given', () => {
				expect(textAreaProps.maxLength).toBeUndefined;
			});

			it('does not set rows when no value is given', () => {
				expect(textAreaProps.rows).toBeUndefined;
			});

			it('sets data-trackable to field-deliverySecurityInstructions', () => {
				expect(textAreaProps['data-trackable']).toBe('field-deliverySecurityInstructions');
			});

			it('sets the `placeholder` property to:', () => {
				expect(textAreaProps.placeholder).toBe('Please enter any secure information here, e.g. security gate access codes');
			});

			it('sets disabled to false', () => {
				expect(textAreaProps.disabled).toBeFalse;
			});

			it('does not set value when no value is given', () => {
				expect(textAreaProps.defaultValue).toBeUndefined;
			});
		});

		describe('sets props for textarea based on values given', () => {
			const wrapper = shallow(
				<DeliverySecurityInstructions
					inputId='inputId'
					maxlength={10}
					rows={3}
					isDisabled={true}
					placeholder='placeholder'
					value={'value'}
				/>
			);
			const textAreaProps = wrapper.find('textarea').props();

			it('sets id property', () => {
				expect(textAreaProps.id).toBe('inputId');
			});

			it('sets name property', () => {
				expect(textAreaProps.name).toBe('inputId');
			});

			it('set maxLength to 10', () => {
				expect(textAreaProps.maxLength).toBe(10);
			});

			it('set rows to 3', () => {
				expect(textAreaProps.rows).toBe(3);
			});

			it('sets placeholder to: placeholder', () => {
				expect(textAreaProps.placeholder).toBe('placeholder');
			});

			it('sets disabled to true', () => {
				expect(textAreaProps.disabled).toBeTrue;
			});

			it('set value', () => {
				expect(textAreaProps.defaultValue).toBe('value');
			});
		});
	});
});
