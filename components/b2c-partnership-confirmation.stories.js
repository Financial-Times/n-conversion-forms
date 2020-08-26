import React from 'react';
import { B2CPartnershipConfirmation } from './b2c-partnership-confirmation';

export default {
	title: 'B2C Partnership Confirmation',
	component: B2CPartnershipConfirmation
};

export const Basic = (args) => <B2CPartnershipConfirmation {...args} />;
Basic.parameters = {
	controls: { hideNoControlsWarning: true },
};
