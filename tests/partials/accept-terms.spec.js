const { expect } = require('chai');
const {
	fetchPartial,
	shouldError
} = require('../helpers');

const SELECTOR_STANDARD_TERMS = 'label p#terms-default';
const SELECTOR_PRINT_TERMS = 'label p#terms-print';
const SELECTOR_SIGNUP_TERMS = 'label p#terms-signup';
const SELECTOR_CANCELLATION_TERMS = 'label p#terms-cancellation';
const SELECTOR_SPECIAL_TERMS = 'label p#terms-special';
const SELECTOR_B2B_TERMS = 'label p#terms-b2b';
const SELECTOR_CORP_TERMS = 'label p#terms-corp';
const SELECTOR_ACCEPT_TERMS_FIELD = '#acceptTermsField';
const SELECTOR_USA_TERMS = 'label p#terms-usa';
const SELECTOR_CHECKBOX = 'input';
const SELECTOR_ANCHOR = 'a';

let context = {};
const offer = {
	ageRestriction: 18,
	hasSpecialTerms: false,
	specialTerms: '',
	isPrintProduct: false
};

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
		const ageRestrictionText = '18 years';

		const $ = context.template({
			offer: offer
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
			isSignup: true,
			offer: offer
		};

		it('should use the signup data tracking if the isSignup is true', () => {
			const $ = context.template(params);

			expect($(SELECTOR_ACCEPT_TERMS_FIELD).data('trackable')).to.equal('sign-up-terms');
		});

		it('should have default, signup, cancellation and marketing terms by default', () => {
			const $ = context.template(params);

			expectTerms($, {standard:1, cancellation:1, signup:1});
		});

		it('should have print related copy if a print product', () => {
			const $ = context.template({...params, offer: {...offer, isPrintProduct: true}});

			expectTerms($, {standard:1, cancellation:1, print:1});
		});

		it('should only show the USA terms when isUsa set', () => {
			const $ = context.template({...params, offer: {...offer}, isUsa: true});

			expectTerms($, {standard:1, cancellation:1, usa:2});
		});

		it('should have special offer terms copy if supplied', () => {
			const specialTerms = 'These are some special terms that an offer supplies';
			const $ = context.template({...params, offer: {...offer, hasSpecialTerms: true, specialTerms: specialTerms}});

			expect($(SELECTOR_SPECIAL_TERMS).text().trim()).to.contain(specialTerms);
			expectTerms($, {standard:1, cancellation:1, signup:1, special:1});
		});
	});

	describe('b2b', () => {
		const params = {
			isB2b: true
		};

		it('should have just the b2b terms', () => {
			const $ = context.template(params);

			expectTerms($, {b2b:1});
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

function expectTerms ($, { standard=0, print=0, signup=0, cancellation=0, special=0, b2b=0, corp=0, usa=0 }) {
	expect($(SELECTOR_STANDARD_TERMS).length).to.equal(standard);
	expect($(SELECTOR_PRINT_TERMS).length).to.equal(print);
	expect($(SELECTOR_SIGNUP_TERMS).length).to.equal(signup);
	expect($(SELECTOR_CANCELLATION_TERMS).length).to.equal(cancellation);
	expect($(SELECTOR_SPECIAL_TERMS).length).to.equal(special);
	expect($(SELECTOR_B2B_TERMS).length).to.equal(b2b);
	expect($(SELECTOR_CORP_TERMS).length).to.equal(corp);
	expect($(SELECTOR_USA_TERMS).length).to.equal(usa);
}
