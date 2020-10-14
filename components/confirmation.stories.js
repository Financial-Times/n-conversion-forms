import React from 'react';
import { Confirmation } from './confirmation';

export default {
	title: 'Confirmation',
	component: Confirmation,
	argTypes: {
		details: { control: 'array' },
	},
};

const nextActionTop = <p className="ncf__center">
	<a href="/myft/" className="ncf__button ncf__button--submit ncf__button--margin">An example child: this is the tailor my experience button</a>
</p>;

const nextActionBottom = <div className="ncf__field--center">
	<div>
		<a href={'/contentuuid'} className="ncf__button ncf__button--submit ncf__button--margin">Return to your article</a>
	</div>
	<div>
		<a href="/" className="ncf__link">Explore the FT</a>
	</div>
</div>;

export const Basic = (args) => <Confirmation {...args} />;
Basic.args = {
	offer: 'Premium Digital',
	details: [
		{
			title: 'Renewal Cost',
			description: 'The price your subscription will auto renew',
			data: '£100,000,000.00',
		},
		{
			title: 'Renewal Date',
			description: 'The date your subscription will auto renew',
			data: 'Dec 25, 2020',
		}
	],
	nextActionTop,
	nextActionBottom
};
