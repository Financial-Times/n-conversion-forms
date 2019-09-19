const { expect } = require('chai');
const {
	fetchPartial,
	shouldError
} = require('../helpers');

const SELECTOR_STANDARD_TERMS = 'label p#terms-default';
const SELECTOR_PRINT_TERMS = 'label p.terms-print';
const SELECTOR_SIGNUP_TERMS = 'label p.terms-signup';
const SELECTOR_SPECIAL_TERMS = 'label p#terms-special';
const SELECTOR_B2B_TERMS = 'label p#terms-b2b';
const SELECTOR_CORP_TERMS = 'label p.terms-corp-signup';
const SELECTOR_TRANSITION_TERMS = 'label p.terms-transition';
const SELECTOR_ACCEPT_TERMS_FIELD = '#acceptTermsField';
const SELECTOR_CHECKBOX = 'input';
const SELECTOR_ANCHOR = 'a';

let context = {};

describe('accept-terms template', () => {
	before(async () => {
		context.template = await fetchPartial('accept-terms.html');
	});

	it('should be 16 age restriction by default', () => {
		const ageRestrictionText = '16 years';
		const $ = context.template({});

		expect($(SELECTOR_STANDARD_TERMS).text().trim()).to.contain(ageRestrictionText);
	});

	it('should use the given restricted age in the copy', () => {
		const ageRestriction = 18;
		const ageRestrictionText = `${ageRestriction} years`;

		const $ = context.template({
			ageRestriction
		});

		expect($(SELECTOR_STANDARD_TERMS).text().trim()).to.contain(ageRestrictionText);
	});

	describe('not register or signup', () => {
		const params = {};

		it('should use no div data tracking', () => {
			const $ = context.template(params);

			expect($(SELECTOR_ACCEPT_TERMS_FIELD).data('trackable')).to.be.undefined;
		});

		it('should have default terms and nothing else', () => {
			const $ = context.template(params);

			expectTerms($, {standard: 1});
		});
	});

	describe('register', () => {
		const params = {
			isRegister: true
		};

		it('should use the register data tracking if isRegister is true', () => {
			const $ = context.template(params);

			expect($(SELECTOR_ACCEPT_TERMS_FIELD).data('trackable')).to.equal('register-up-terms');
		});

		it('should have default terms', () => {
			const $ = context.template(params);

			expectTerms($, {standard: 1});
		});
	});

	describe('signup', () => {
		const params = {
			isSignup: true
		};

		it('should use the signup data tracking if the isSignup is true', () => {
			const $ = context.template(params);

			expect($(SELECTOR_ACCEPT_TERMS_FIELD).data('trackable')).to.equal('sign-up-terms');
		});

		it('should have default and signup terms by default', () => {
			const $ = context.template(params);

			expectTerms($, {standard:1, signup:3});
		});

		it('should have print related copy if a print product', () => {
			const $ = context.template({
				...params,
				isPrintProduct: true
			});

			expectTerms($, {standard:1, print:2});
		});

		it('should have special terms copy if supplied', () => {
			const specialTerms = 'These are some special terms can be supplied';
			const $ = context.template({
				...params,
				specialTerms
			});

			expect($(SELECTOR_SPECIAL_TERMS).text().trim()).to.contain(specialTerms);
			expectTerms($, {standard:1, signup:3, special:1});
		});
	});

	describe('b2b', () => {
		const params = {
			isB2b: true
		};

		it('should have just the b2b terms', () => {
			const $ = context.template(params);

			expectTerms($, { b2b:1 });
		});
	});

	describe('transition', () => {
		const params = {
			isTransition: true
		};

		it('should have the default and transtion terms', () => {
			const $ = context.template(params);
			expectTerms($, { standard:1, transition: 3 });
		});

		it('should show immediate terms if transitionType immediate', () => {
			const $ = context.template({...params, transitionType: 'immediate' });
			expect($('label p.terms-transition--immediate').length).to.equal(1);
		});

		it('should show other terms if transitionType not immediate', () => {
			const $ = context.template({...params, transitionType: 'endOfTerm' });
			expect($('label p.terms-transition--other').length).to.equal(1);
		});
	});

	describe('Corp Signup', () => {
		const params = {
			isCorpSignup: true
		};

		it('should have default and corp-signup terms', () => {
			const $ = context.template(params);
			expectTerms($, { standard: 1, corp: 3 });
		});

		describe('isTrial', () => {
			it('should have disclaimer if isTrial is TRUE', () => {
				const params = {
					isCorpSignup: true,
					isTrial: true
				};

				const $ = context.template(params);

				expectTerms($, { standard: 1, corp: 4 });
			});

			it('should have NOT have disclaimer if isTrial is FALSE', () => {
				const params = {
					isCorpSignup: true,
					isTrial: false
				};

				const $ = context.template(params);

				expectTerms($, { standard: 1, corp: 3 });
			});
		});
	});

	it('should be required by default', () => {
		const $ = context.template({});

		expect($(SELECTOR_CHECKBOX).attr('required')).to.equal('required');
	});

	it('should be unchecked by default', () => {
		const $ = context.template({});

		expect($(SELECTOR_CHECKBOX).attr('checked')).to.be.undefined;
	});

	it('should be checked if set', () => {
		const $ = context.template({
			isChecked: true
		});

		expect($(SELECTOR_CHECKBOX).attr('checked')).to.equal('checked');
	});

	it('should have link targets of _blank', () => {
		const $ = context.template({});

		$(SELECTOR_ANCHOR).each((i, a) => {
			expect(a.attribs.target).to.equal('_blank');
		});
	});

	shouldError(context);
});

function expectTerms ($, { standard=0, print=0, signup=0, special=0, b2b=0, corp=0, transition=0 }) {
	expect($(SELECTOR_STANDARD_TERMS).length).to.equal(standard);
	expect($(SELECTOR_PRINT_TERMS).length).to.equal(print);
	expect($(SELECTOR_SIGNUP_TERMS).length).to.equal(signup);
	expect($(SELECTOR_SPECIAL_TERMS).length).to.equal(special);
	expect($(SELECTOR_B2B_TERMS).length).to.equal(b2b);
	expect($(SELECTOR_CORP_TERMS).length).to.equal(corp);
	expect($(SELECTOR_TRANSITION_TERMS).length).to.equal(transition);
}
