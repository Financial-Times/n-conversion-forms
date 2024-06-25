import React from 'react';
import { PaymentType } from './payment-type';

export default {
	title: 'Payment Type',
	component: PaymentType,
};

export const Basic = (args) => <PaymentType {...args} />;
Basic.args = {
	value: 'creditcard',
	enableApplepay: true,
	enableDirectdebit: true,
	enableCreditcard: true,
	enablePaypal: true,
	showPaypalCustomerCareMessage: true,
	enableBankTransfer: true,
	showNewDesign: false,
};
