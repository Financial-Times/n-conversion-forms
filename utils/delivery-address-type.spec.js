const DeliveryAdressTypeUtil = require('./delivery-address-type');
import React from 'react';
import { DeliveryAddressType, Form } from '../components/index';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Delivery Address Type - Util', () => {
	describe('Get an instance of the util class', () => {
		it('throws an error since the component is not found', () => {
			const component = mount(<Form></Form>);
			document.body.innerHTML = `
				<!DOCTYPE html>
				<html>
				<head></head>
				<body>${component.html()}</body>
				</html>`;

			expect(() => {
				new DeliveryAdressTypeUtil(document);
			}).toThrow();
		});
	});
	describe('Get option selected', () => {
		it('returns the default option', () => {
			const props = {};
			const component = mount(
				<Form>
					<DeliveryAddressType {...props} />
				</Form>
			);
			document.body.innerHTML = `
				<!DOCTYPE html>
				<html>
				<head></head>
				<body>${component.html()}</body>
				</html>`;

			const deliveryAdressTypeUtilInstance = new DeliveryAdressTypeUtil(
				document
			);
			expect(deliveryAdressTypeUtilInstance.getSelected()).toBe('home');
		});

		it('returns the option selected different than the default', () => {
			const props = { value: 'pobox' };
			const component = mount(
				<Form>
					<DeliveryAddressType {...props} />
				</Form>
			);
			document.body.innerHTML = `
				<!DOCTYPE html>
				<html>
				<head></head>
				<body>${component.html()}</body>
				</html>`;

			const deliveryAdressTypeUtilInstance = new DeliveryAdressTypeUtil(
				document
			);
			expect(deliveryAdressTypeUtilInstance.getSelected()).toEqual(props.value);
		});
	});
});
