const DeliveryOptionUtil = require('./delivery-option');
import React from 'react';
import { DeliveryOption, Form } from '../components/index';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const { JSDOM } = require('jsdom');

describe('Delivery Option - Util', () => {
	describe('Get an instance of the util class', () => {
		it('should return an instance of the util properly', () => {
			const props = {
				country: 'GBR',
				options: [
					{ value: 'HD', isSelected: true, isValidDeliveryOption: true },
					{ value: 'PV', isSelected: false, isValidDeliveryOption: true }
				]
			};
			const component = mount(<Form ><DeliveryOption {...props} /></Form>);
			const dom = new JSDOM(`
				<!DOCTYPE html>
				<html>
				<head></head>
				<body>${component.html()}</body>
				</html>
			`);
			const document = dom.window.document;

			const deliveryoptionUtilInstance = new DeliveryOptionUtil(document);
			expect(deliveryoptionUtilInstance).toBeDefined();
		});
		it('should throw an error since the component is not found', () => {
			const dom = new JSDOM(`
				<!DOCTYPE html>
				<html>
				<head></head>
				<body></body>
				</html>
			`);
			const document = dom.window.document;

			expect(() => {
				new DeliveryOptionUtil(document);
			}).toThrow();
		});
	});
	describe('Show/Hide Items for Delivery Option Change', () => {
		it('should swap between hide an show two items by adding and removing the related classes', () => {
			const props = {
				country: 'GBR',
				options: [
					{ value: 'HD', isSelected: true, isValidDeliveryOption: true },
					{ value: 'PV', isSelected: false, isValidDeliveryOption: true }
				]
			};
			const component = mount(<Form ><DeliveryOption {...props} /></Form>);
			const dom = new JSDOM(`
				<!DOCTYPE html>
				<html>
				<head></head>
				<body>${component.html()}</body>
				</html>
			`);
			const document = dom.window.document;

			const deliveryoptionUtilInstance = new DeliveryOptionUtil(document);
			expect(deliveryoptionUtilInstance).toBeDefined();
			deliveryoptionUtilInstance.hideItem('HD');
			deliveryoptionUtilInstance.showItem('PV');
			expect(document.querySelector('.ncf__hidden #HD')).toBeDefined();
			expect(document.querySelector('#PV')).toBeDefined();
			expect(document.querySelector('.ncf__hidden #PV')).toBe(null);
			deliveryoptionUtilInstance.showItem('HD');
			deliveryoptionUtilInstance.hideItem('PV');
			expect(document.querySelector('.ncf__hidden #PV')).toBeDefined();
			expect(document.querySelector('#HD')).toBeDefined();
			expect(document.querySelector('.ncf__hidden #HD')).toBe(null);
		});
	});
});
