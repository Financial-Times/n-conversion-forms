import React from 'react';
import { GraduationDate, Compliance } from './graduation-date';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

expect.extend(expectToRenderCorrectly);
Enzyme.configure({ adapter: new Adapter() });

describe('GraduationDate', () => {
	it('renders with default props', () => {
		expect(GraduationDate).toRenderCorrectly({});
	});

	it('renders graduation date compliance component', () => {
		const wrapper = shallow(<GraduationDate />);
		expect(wrapper.find(Compliance).exists()).toBe(true);
		expect(
			wrapper
				.find(Compliance)
				.shallow()
				.find('#graduationDateCompliance')
				.exists()
		).toBe(true);
	});

	it('should display graduationDateMonth options as English month names', () => {
		const wrapper = shallow(<GraduationDate />);
		const values = wrapper
			.find('#graduationDateMonth option')
			.map((node) => node.text());
		expect(values).toEqual([
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		]);
	});

	it('should store graduationDateMonth values as two-digit numbers', () => {
		const wrapper = shallow(<GraduationDate />);
		const values = wrapper
			.find('#graduationDateMonth option')
			.map((node) => node.prop('value'));
		expect(values).toEqual([
			'01',
			'02',
			'03',
			'04',
			'05',
			'06',
			'07',
			'08',
			'09',
			'10',
			'11',
			'12',
		]);
	});

	it('populates the graduationDateYear options with current year, +/- 4 years', () => {
		const stubDate = new Date('2020-08-26T00:00:00.000Z');
		jest.spyOn(global, 'Date').mockImplementation(() => stubDate);

		const wrapper = shallow(<GraduationDate />);
		const values = wrapper
			.find('#graduationDateYear option')
			.map((node) => node.prop('value'));

		expect(values).toEqual([
			2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
		]);

		jest.restoreAllMocks();
	});

	describe('given a valid value prop is passed', () => {
		const wrapper = shallow(<GraduationDate value="2020-08-28" />);

		it('should set the default month', () => {
			expect(wrapper.find('#graduationDateMonth').prop('defaultValue')).toEqual(
				'08'
			);
		});

		it('should set the default year', () => {
			expect(wrapper.find('#graduationDateYear').prop('defaultValue')).toEqual(
				'2020'
			);
		});
	});

	describe('given an invalid value prop is passed', () => {
		const wrapper = shallow(<GraduationDate value="invalid" />);

		it('should not set any default values', () => {
			expect(
				wrapper.find('#graduationDateMonth').prop('defaultValue')
			).toBeFalsy();
			expect(
				wrapper.find('#graduationDateYear').prop('defaultValue')
			).toBeFalsy();
		});
	});

	describe('given the isDisabled prop is set to true', () => {
		const wrapper = shallow(<GraduationDate isDisabled={true} />);

		it('should disable both select fields', () => {
			expect(
				wrapper.find('#graduationDateMonth').prop('disabled')
			).toBeTruthy();
			expect(wrapper.find('#graduationDateYear').prop('disabled')).toBeTruthy();
		});
	});

	describe('given the isRequired prop is set to true', () => {
		const wrapper = shallow(<GraduationDate isRequired={true} />);

		it('should make both fields required', () => {
			expect(
				wrapper.find('#graduationDateMonth').prop('required')
			).toBeTruthy();
			expect(wrapper.find('#graduationDateYear').prop('required')).toBeTruthy();
		});
	});

	describe('given the hasError prop is set to true', () => {
		const wrapper = shallow(<GraduationDate hasError={true} />);

		it('should add an invalid modifier class', () => {
			expect(wrapper.find('div.o-forms-input').prop('className')).toMatch(
				'o-forms-input--invalid'
			);
		});
	});
});
