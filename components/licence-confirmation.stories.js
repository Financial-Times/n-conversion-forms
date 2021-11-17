import React from 'react';
import { LicenceConfirmation } from './licence-confirmation';

export default {
	title: 'Licence Confirmation',
	component: LicenceConfirmation,
};

const goToMyFtElement = (
	<p className="ncf__paragraph ncf__center">
		<a className="ncf__button ncf__button--submit" href="/myft">
			Go to myFT
		</a>
	</p>
);

export const Basic = (args) => <LicenceConfirmation {...args} />;
Basic.args = {
	ctaElement: goToMyFtElement,
};
