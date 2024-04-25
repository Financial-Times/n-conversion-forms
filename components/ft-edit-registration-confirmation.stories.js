import React from 'react';
import { FTEditRegistrationConfirmation } from './ft-edit-registration-confirmation';

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
