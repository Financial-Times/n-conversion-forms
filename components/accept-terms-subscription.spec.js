import React from 'react';
import { mount } from 'enzyme';
import { AcceptTermsSubscription } from './index';

describe('AcceptTermsSubscription', () => {
	it('renders with "o-forms-input--invalid" class when hasError prop is true', () => {
		const props = { hasError: true };

		const component = mount(<AcceptTermsSubscription {...props} />);

		const labelElement = component.find('label');
		expect(labelElement.hasClass('o-forms-input--invalid')).toBe(true);
	});

	it('renders without data-trackable attribute when isSignup prop is false', () => {
		const props = {
			isSignup: false,
		};

		const component = mount(<AcceptTermsSubscription {...props} />);

		const labelElement = component.find(
			'label[data-trackable="sign-up-terms"]'
		);
		expect(labelElement.exists()).toBe(false);
	});

	it('renders the external link with target="_top" when isEmbedded prop is true', () => {
		const props = {
			isEmbedded: true,
		};

		const component = mount(<AcceptTermsSubscription {...props} />);

		const externalLink = component.find('.ncf__link--external').first();
		expect(externalLink.prop('target')).toBe('_top');
	});

	it('does not render the trial-specific terms when isTrial prop is false', () => {
		const props = {
			isTrial: false,
		};

		const component = mount(<AcceptTermsSubscription {...props} />);

		const trialTerms = component.find('.terms-print');
		expect(trialTerms.exists()).toBe(false);
	});

	it('renders the print-specific terms when isPrintProduct prop is true', () => {
		const props = {
			isPrintProduct: true,
		};

		const component = mount(<AcceptTermsSubscription {...props} />);

		const printTerms = component.find('.terms-print');
		expect(printTerms.exists()).toBe(true);
	});

	it('renders the transition terms when isSingleTerm prop is true and isTransition prop is true', () => {
		const props = {
			isSingleTerm: true,
			isTransition: true,
		};

		const component = mount(<AcceptTermsSubscription {...props} />);

		const transitionTerms = component.find('.terms-transition');
		expect(transitionTerms.exists()).toBe(true);
	});

	it('does not render the transition terms when transitionType prop is null', () => {
		const props = {
			transitionType: null,
		};

		const component = mount(<AcceptTermsSubscription {...props} />);

		const transitionTerms = component.find('.terms-transition');
		expect(transitionTerms.exists()).toBe(false);
	});

	it('renders the deferred billing terms when isDeferredBilling prop is true', () => {
		const props = {
			isDeferredBilling: true,
		};

		const component = mount(<AcceptTermsSubscription {...props} />);

		const deferredBillingTerms = component.find('.terms-deferred');
		expect(deferredBillingTerms.exists()).toBe(true);
	});
});
