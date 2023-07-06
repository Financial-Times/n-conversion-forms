import { AcceptTermsBusiness } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';
import { mount } from 'enzyme';
import React from 'react';

expect.extend(expectToRenderCorrectly);

describe('AcceptTermsPrivacyPolicy', () => {
	it('renders b2b terms when isB2b prop is true', () => {
		const props = {
			isB2b: true,
		};

		const wrapper = mount(<AcceptTermsBusiness {...props} />);

		const b2bTermsElement = wrapper.find('.terms-b2b');
		expect(b2bTermsElement.exists()).toBe(true);
		expect(b2bTermsElement.text()).toBe(
			'By submitting this form, you indicate your consent to also being contacted by Financial Times by email, post, or phone about our other products, services or special offers unless you untick this box.'
		);

		const defaultTermsElement = wrapper.find('.terms-default');
		expect(defaultTermsElement.exists()).toBe(false);

		const corpSignupTermsElement = wrapper.find('.terms-corp-signup');
		expect(corpSignupTermsElement.exists()).toBe(true);
	});

	it('does not render trial terms when isTrial prop is false', () => {
		const props = {
			isTrial: false,
		};

		const wrapper = mount(<AcceptTermsBusiness {...props} />);

		const trialTermsElement = wrapper.find('.terms-trial');
		expect(trialTermsElement.exists()).toBe(false);

		const corpSignupTermsElement = wrapper.find('.terms-corp-signup');
		expect(corpSignupTermsElement.exists()).toBe(true);
	});
});
