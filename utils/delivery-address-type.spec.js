const DeliveryAdressTypeUtil = require('./delivery-address-type');
import React from 'react';
import { DeliveryAddressType, Form } from '../components/index';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const { JSDOM } = require('jsdom');

describe('Delivery Address Type - Util', () => {
	describe('Get an instance of the util class', () => {
		it('should throw an error since the component is not found', () => {
			const component = mount(<Form ></Form>);
			const jsdom = JSDOM.fragment(component.html());

			expect(() => {
				new DeliveryAdressTypeUtil(jsdom);
			}).toThrow();
		});
	});
	describe('Get option selected', () => {
		it('should return the default option', () => {
			const props = {};
			const component = mount(<Form ><DeliveryAddressType {...props} /></Form>);
			const jsdom = JSDOM.fragment(component.html());

			const deliveryAdressTypeUtilInstance = new DeliveryAdressTypeUtil(jsdom);
			expect(deliveryAdressTypeUtilInstance.getSelected()).toEqual('home');
		});

		it('should return the option selected different than the default', () => {
			const props = { value: 'pobox' };
			const component = mount(<Form ><DeliveryAddressType {...props} /></Form>);
			const jsdom = JSDOM.fragment(component.html());

			const deliveryAdressTypeUtilInstance = new DeliveryAdressTypeUtil(jsdom);
			expect(deliveryAdressTypeUtilInstance.getSelected()).toEqual(props.value);
		});
	});
});
