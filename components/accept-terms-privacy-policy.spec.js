import React from 'react';
import { mount } from 'enzyme';
import { AcceptTermsPrivacyPolicy } from './index';

describe('AcceptTermsPrivacyPolicy', () => {
	it('renders with "o-forms-input--invalid" class when hasError prop is true', () => {
		const props = { hasError: true };

		const component = mount(<AcceptTermsPrivacyPolicy {...props} />);

		const labelElement = component.find('label');
		expect(labelElement.hasClass('o-forms-input--invalid')).toBe(true);
	});

	it('renders the external link with target="_top" when isEmbedded prop is true', () => {
		const props = {
			isEmbedded: true,
		};

		const component = mount(<AcceptTermsPrivacyPolicy {...props} />);

		const externalLink = component.find('.ncf__link--external').first();
		expect(externalLink.prop('target')).toBe('_top');
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
