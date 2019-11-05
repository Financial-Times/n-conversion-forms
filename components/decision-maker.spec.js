import DecisionMaker from './decision-maker';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('DecisionMaker', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('decision-maker.html');
	});

	it('renders with default props', () => {
		const props = { value: 'yes' };

		expect(DecisionMaker).toRenderAs(context, props);
	});

	it('renders with an error', () => {
		const props = { value: 'yes', hasError: true };

		expect(DecisionMaker).toRenderAs(context, props);
	});

	it('renders with \'no\' as default state for radio buttons', () => {
		const props = { value: 'no' };

		expect(DecisionMaker).toRenderAs(context, props);
	});
});
