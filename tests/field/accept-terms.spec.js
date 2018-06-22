const { expect } = require('chai');
const {
	fetchPartial,
	shouldError
} = require('../helpers');

let context = {};
const offer = {
	ageRestriction: 18,
	hasSpecialTerms: false,
	specialTerms: '',
	isPrintProduct: false
};

describe('field/accept-terms template', () => {
	before(async () => {
		context.template = await fetchPartial('field/accept-terms.html');
	});

	it('should be 16 age restriction by default', () => {
		const ageRestrictionText = '16 years';
		const $ = context.template({});

		expect($('label').text().trim()).to.contain(ageRestrictionText);
	});

	it('should use the given restricted age in the copy', () => {
		const ageRestrictionText = '18 years';

		const $ = context.template({
			offer: offer
		});

		expect($('label').text().trim()).to.contain(ageRestrictionText);
	});

	describe('not register or signup', () => {
		const params = {};

		it('should use no div data tracking', () => {
			const $ = context.template(params);

			expect($('#acceptTermsField').data('trackable')).to.be.undefined;
		});

		it('should have default terms and nothing else', () => {
			const $ = context.template(params);

			expect($('label p#terms-default').length).to.equal(1);
			expect($('label p#terms-print').length).to.equal(0);
			expect($('label p#terms-signup').length).to.equal(0);
			expect($('label p#terms-cancellation').length).to.equal(0);
			expect($('label p#terms-special').length).to.equal(0);
		});
	});

	describe('register', () => {
		const params = {
			isRegister: true
		};

		it('should use the register data tracking if isRegister is true', () => {
			const $ = context.template(params);

			expect($('#acceptTermsField').data('trackable')).to.equal('register-up-terms');
		});

		it('should have default terms', () => {
			const $ = context.template(params);
			expect($('label p#terms-default').length).to.equal(1);
			expect($('label p#terms-print').length).to.equal(0);
			expect($('label p#terms-signup').length).to.equal(0);
			expect($('label p#terms-cancellation').length).to.equal(0);
			expect($('label p#terms-special').length).to.equal(0);
		});
	});

	describe('signup', () => {
		const params = {
			isSignup: true,
			offer: offer
		};

		it('should use the signup data tracking if the isSignup is true', () => {
			const $ = context.template(params);

			expect($('#acceptTermsField').data('trackable')).to.equal('sign-up-terms');
		});

		it('should have default, signup, cancellation and marketing terms by default', () => {
			const $ = context.template(params);

			expect($('label p#terms-default').length).to.equal(1);
			expect($('label p#terms-print').length).to.equal(0);
			expect($('label p#terms-signup').length).to.equal(1);
			expect($('label p#terms-cancellation').length).to.equal(1);
			expect($('label p#terms-special').length).to.equal(0);
		});

		it('should have print related copy if a print product', () => {
			const $ = context.template({...params, offer: {...offer, isPrintProduct: true}});

			expect($('label').text().trim()).to.contain('hand-delivered subscriptions');
			expect($('label p#terms-default').length).to.equal(1);
			expect($('label p#terms-print').length).to.equal(1);
			expect($('label p#terms-signup').length).to.equal(0);
			expect($('label p#terms-cancellation').length).to.equal(1);
			expect($('label p#terms-special').length).to.equal(0);
		});

		it('should have special offer terms copy if supplied', () => {
			const specialTerms = 'These are some special terms that an offer supplies';
			const $ = context.template({...params, offer: {...offer, hasSpecialTerms: true, specialTerms: specialTerms}});

			expect($('label').text().trim()).to.contain(specialTerms);
			expect($('label p#terms-default').length).to.equal(1);
			expect($('label p#terms-print').length).to.equal(0);
			expect($('label p#terms-signup').length).to.equal(1);
			expect($('label p#terms-cancellation').length).to.equal(1);
			expect($('label p#terms-special').length).to.equal(1);
		});
	});

	it('should be required by default', () => {
		const $ = context.template({});

		expect($('input').attr('required')).to.equal('required');
	});

	it('should be unchecked by default', () => {
		const $ = context.template({});

		expect($('input').attr('checked')).to.be.undefined;
	});

	it('should have link targets of _blank', () => {
		const $ = context.template({});

		$('a').each((i, a) => {
			expect(a.attribs.target).to.equal('_blank');
		});
	});

	shouldError(context);
});
