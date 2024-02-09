const CompanyNameUtil = require('./company-name');
import React from 'react';
import { CompanyName, Form } from '../components/index';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Company Name - Util', () => {
	describe('Make Optional/Required using the methods inherited from FormElements', () => {
		it('switches between required and optional the input by adding and removing the related classes', () => {
			const props = {};
			const component = mount(
				<Form>
					<CompanyName {...props} />
				</Form>
			);
			document.body.innerHTML = `
				<!DOCTYPE html>
				<html>
				<head></head>
				<body>${component.html()}</body>
				</html>`;

			const companyNameUtilInstance = new CompanyNameUtil(document);
			expect(companyNameUtilInstance).toBeDefined();
			companyNameUtilInstance.makeOptional();
			expect(
				document.querySelector('.o-forms-field--optional #companyNameField')
			).toBeDefined();
			companyNameUtilInstance.makeRequired();
			expect(document.querySelector('#companyNameField')).toBeDefined();
			expect(
				document.querySelector('.o-forms-field--optional #companyNameField')
			).toBeNull();
		});
	});
});
