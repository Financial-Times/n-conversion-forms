const DeliveryOptionUtil = require('./delivery-option');
import React from 'react';
import { DeliveryOption, Form } from '../components/index';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Delivery Option - Util', () => {
	describe('Get an instance of the util class', () => {
		it('throws an error if document element isn not passed in', () => {
			expect(() => {
				new DeliveryOptionUtil();
			}).toThrow();
		});

		it('throws an error since the component is not found', () => {
			expect(() => {
				new DeliveryOptionUtil(document);
			}).toThrow();
		});
	});

	describe('Show/Hide Items for Delivery Option Change', () => {
		it('swapes between hide and show two items by adding and removing the related classes', () => {
			const props = {
				country: 'GBR',
				options: [
					{ value: 'HD', isSelected: true, isValidDeliveryOption: true },
					{ value: 'PV', isSelected: false, isValidDeliveryOption: true },
				],
			};
			const component = mount(
				<Form>
					<DeliveryOption {...props} />
				</Form>
			);
			document.body.innerHTML = `
				<!DOCTYPE html>
				<html>
				<head></head>
				<body>${component.html()}</body>
				</html>
			`;

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

	describe('handleDeliveryOptionChange', () => {
		let deliveryOption1Listener;
		let deliveryOption2Listener;
		let formStub;

		beforeEach(() => {
			deliveryOption1Listener = jest.fn();
			deliveryOption2Listener = jest.fn();

			formStub = {
				elements: {
					deliveryOption: [
						{ addEventListener: deliveryOption1Listener },
						{ addEventListener: deliveryOption2Listener },
					],
				},
			};

			document.querySelector = jest.fn(() => formStub);
			document.querySelectorAll = jest.fn(() => []);
		});

		afterEach(() => {
			jest.clearAllMocks();
		});

		describe('can handle an array', () => {
			it('binds the given callback to the change event on the delivery option fields', async () => {
				let deliveryOptionUtil = new DeliveryOptionUtil(document);
				let callback = jest.fn();
				deliveryOptionUtil.handleDeliveryOptionChange(callback);

				expect(deliveryOption1Listener).toHaveBeenCalledWith(
					'change',
					callback
				);
				expect(deliveryOption2Listener).toHaveBeenCalledWith(
					'change',
					callback
				);
			});
		});

		describe('can handle a single node element', () => {
			let deliveryOptionUtil;
			let callback;

			beforeEach(() => {
				const props = {
					country: 'GBR',
					options: [
						{ value: 'HD', isSelected: true, isValidDeliveryOption: true },
						{ value: 'PV', isSelected: false, isValidDeliveryOption: true },
					],
				};
				const component = mount(
					<Form>
						<DeliveryOption {...props} />
					</Form>
				);
				document.body.innerHTML = `
					<!DOCTYPE html>
					<html>
					<head></head>
					<body>${component.html()}</body>
					</html>
				`;

				document.querySelector = jest.fn(() => formStub);

				deliveryOptionUtil = new DeliveryOptionUtil(document);
				callback = jest.fn();
			});

			it('can handle having only one form element', () => {
				expect(() => {
					deliveryOptionUtil.handleDeliveryOptionChange(callback);
				}).not.toThrow();
			});

			it('adds the event listener', () => {
				jest.spyOn(formStub.elements.deliveryOption[0], 'addEventListener');
				deliveryOptionUtil.handleDeliveryOptionChange(callback);
				expect(
					formStub.elements.deliveryOption[0].addEventListener
				).toHaveBeenCalledWith('change', callback);
			});
		});
	});
});
