import React from 'react';
import { Fieldset } from './fieldset';
import { PaymentTerm } from './payment-term';

export default {
	title: 'Payment Term',
	component: PaymentTerm,
};

export const Basic = (args) => (
	<div className="ncf">
		<Fieldset>
			<PaymentTerm {...args} />
		</Fieldset>
	</div>
);
Basic.args = {
	options: [
		{
			name: 'monthly',
			price: '£49.99',
			value: 49.99,
			isTrial: false,
			discount: '33%',
			selected: false,
		},
		{
			name: 'annual',
			price: '£299.99',
			value: 299.99,
			isTrial: false,
			discount: null,
			selected: true,
		},
	],
};

export const FixedTermOffer = (args) => <div className="ncf"><Fieldset><PaymentTerm {...args} /></Fieldset></div>;
FixedTermOffer.args = {
	options: [
		{
			name: 'monthly',
			price: '$5.00',
			value: 5.00,
		}
	],
	isFixedTermOffer: true,
};
