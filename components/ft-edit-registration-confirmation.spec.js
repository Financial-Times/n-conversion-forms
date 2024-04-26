import { FTEditRegistrationConfirmation } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

/***
 * This component has been created for a trial feature for the FT Edit app to be used inside
 * next-subscribe. This can be removed after the trial. The trial is beginning May 2024, please
 * reach out to light-apps channel if we dont reach out first, as to when this can be deleted.
 */

expect.extend(expectToRenderCorrectly);

describe('RegistrationConfirmation', () => {
	it('renders with default props', () => {
		const props = {};

		expect(FTEditRegistrationConfirmation).toRenderCorrectly(props);
	});

	it('renders with a custom email', () => {
		const props = { email: 'test@example.com' };

		expect(FTEditRegistrationConfirmation).toRenderCorrectly(props);
	});

	it('renders an explore hub button always', () => {
		const props = { email: 'test@example.com', hubUrl: 'http://thing-hub' };

		expect(FTEditRegistrationConfirmation).toRenderCorrectly(props);
	});

	it('renders a continue reading button when an articleUrl is provided', () => {
		const props = {
			email: 'test@example.com',
			articleUrl:
				'https://www.ft.com/content/9141eee7-825a-41d7-913d-49e8c12e76db',
		};

		expect(FTEditRegistrationConfirmation).toRenderCorrectly(props);
	});
});
