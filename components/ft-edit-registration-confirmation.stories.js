import React from 'react';
import { FTEditRegistrationConfirmation } from './ft-edit-registration-confirmation';

/***
 * This component has been created for a trial feature for the FT Edit app to be used inside
 * next-subscribe. This can be removed after the trial. The trial is beginning May 2024, please
 * reach out to light-apps channel if we dont reach out first, as to when this can be deleted.
 */

export default {
	title: 'FT Edit Registration Confirmation',
	component: FTEditRegistrationConfirmation,
};

export const Basic = (args) => <FTEditRegistrationConfirmation {...args} />;
Basic.args = {
	email: 'hello',
};

export const WithArticleUrl = (args) => (
	<FTEditRegistrationConfirmation {...args} />
);
Basic.args = {
	email: 'hello',
	articleUrl: 'http://read-this-article.com',
};
