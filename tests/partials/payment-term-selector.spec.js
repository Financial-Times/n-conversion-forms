const { expect } = require('chai');
const {
    fetchPartial,
} = require('../helpers');

let context = {};

describe('payment-term-selector', () => {
    before(async () => {
        context.template = await fetchPartial('payment-term-selector.html');
    });

    it('should have a name and description', () => {
        const $ = context.template({ buttonOptions: [{ displayName: 'mock', description: 'mock', selected: true }] });

        expect($('.ncf__payment-term-select__label--title')).to.exist;
        expect($('.ncf__payment-term-select__label--description')).to.exist;
    });

    it('should contain terms and conditions copy', () => {
        const $ = context.template({});
        const terms = 'With all subscription types, we will automatically renew your subscription';

        expect($('.ncf__payment-term-select__legal').text().trim()).to.contain(terms);
    });

    it('should contain link to more terms and conditions', () => {
        const $ = context.template({});
        const termsLink = 'https://help.ft.com/help/legal-privacy/terms-conditions/';

        expect($('.ncf__payment-term-select__legal').html()).to.contain(termsLink);
    });

});
