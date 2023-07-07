import React from 'react';
import { mount } from 'enzyme';
import { AcceptTermsBusiness } from './index';

describe('AcceptTermsPrivacyPolicy', () => {
	it('renders with "o-forms-input--invalid" class when hasError prop is true', () => {
		const props = { hasError: true };

		const component = mount(<AcceptTermsBusiness {...props} />);

		const labelElement = component.find('label');
		expect(labelElement.hasClass('o-forms-input--invalid')).toBe(true);
	});

	it('renders the B2B terms when isB2b prop is true', () => {
		const props = {
			isB2b: true,
		};

		const component = mount(<AcceptTermsBusiness {...props} />);

		const b2bTerms = component.find('.terms-b2b');
		expect(b2bTerms.exists()).toBe(true);
	});

	it('renders the external link with target="_blank" when isEmbedded prop is false', () => {
		const props = {
			isEmbedded: false,
		};

		const component = mount(<AcceptTermsBusiness {...props} />);

		const externalLink = component.find('.ncf__link--external');
		expect(externalLink.prop('target')).toBe('_blank');
	});

	it('renders the trial terms when isTrial prop is true', () => {
		const props = {
			isTrial: true,
		};

		const component = mount(<AcceptTermsBusiness {...props} />);

		const trialTerms = component.find('.terms-corp-signup');
		expect(trialTerms.exists()).toBe(true);
	});
});
