import React from 'react';
import { B2CPartnershipConfirmation } from './b2c-partnership-confirmation';

export default {
	title: 'B2C Partnership Confirmation',
	component: B2CPartnershipConfirmation,
};

const goToMyFtElement = (
	<p className="ncf__paragraph ncf__center">
		<a className="ncf__button ncf__button--submit" href="/myft">Go to myFT</a>
	</p>
);

export const Basic = (args) => <B2CPartnershipConfirmation {...args} />;
Basic.args = {
	ctaElement: goToMyFtElement,
};
