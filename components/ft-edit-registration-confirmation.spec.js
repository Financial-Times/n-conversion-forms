import { FTEditRegistrationConfirmation } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

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
		const props = { email: 'test@example.com' };

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
