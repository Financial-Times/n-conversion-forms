import { Province } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';
import { canadianProvinces } from 'n-common-static-data';
const defaultProvinces = canadianProvinces.provinces;

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

expect.extend(expectToRenderCorrectly);

describe('Province', () => {
	it('render a select with a label', () => {
		const props = {
			provinces: defaultProvinces
		};

		expect(Province).toRenderCorrectly(props);

	});

	it('can render an initial selected value', () => {
		const props = {
			provinces: defaultProvinces,
			value: 'AB',
		};

		expect(Province).toRenderCorrectly(props);
	});

	it('can render a disabled select', () => {
		const props = {
			provinces: defaultProvinces,
			isDisabled: true
		};

		expect(Province).toRenderCorrectly(props);
	});

	it('can render an error message', () => {
		const props = {
			provinces: defaultProvinces,
			hasError: true,
		};

		expect(Province).toRenderCorrectly(props);
	});

	it('can apply class to hide the component', () => {
		const props = {
			provinces: defaultProvinces,
			isHidden: true,
		};

		expect(Province).toRenderCorrectly(props);
	});

	it('can override ID for field', () => {
		const props = {
			fieldId: 'fieldID',
		};
		const component = mount(Province(props));
		const field = component.find('#fieldID');

		expect(field.exists()).toBe(true);
	});

	it('can override ID for select', () => {
		const props = {
			selectId: 'selectId'
		};
		const component = mount(Province(props));
		const select = component.find('select#selectId');

		expect(select.exists()).toBe(true);
	});

	it('applies context-specific name if is billing province', () => {
		const props = {
			isBillingProvince: true
		};
		const component = mount(Province(props));
		const selectElementName = component.find('select#province').prop('name');

		expect(selectElementName).toBe('billingProvince');
	});

	it('applies context-specific name if is not billing province', () => {
		const props = {
			isBillingProvince: false
		};
		const component = mount(Province(props));
		const selectElementName = component.find('select#province').prop('name');

		expect(selectElementName).toBe('province');
	});
});
