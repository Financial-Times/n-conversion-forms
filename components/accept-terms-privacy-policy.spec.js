import { AcceptTermsPrivacyPolicy } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';
import { mount } from 'enzyme';
import React from 'react';

expect.extend(expectToRenderCorrectly);

describe('AcceptTermsPrivacyPolicy', () => {
	it('renders with "o-forms-input--invalid" class when hasError prop is true', () => {
		const props = { hasError: true };

		const component = mount(<AcceptTermsPrivacyPolicy {...props} />);

		const labelElement = component.find('label');
		expect(labelElement.hasClass('o-forms-input--invalid')).toBe(true);
	});

	it('renders children when children prop is provided', () => {
		const props = {
			children: <div className="child-component">Child Component</div>,
		};

		const component = mount(<AcceptTermsPrivacyPolicy {...props} />);

		const childElement = component.find('.child-component');
		expect(childElement.exists()).toBe(true);
		expect(childElement.text()).toBe('Child Component');
	});
});
