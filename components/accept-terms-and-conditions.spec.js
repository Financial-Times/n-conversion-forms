import React from 'react';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';
import { AcceptTermsAndConditions } from './index';
expect.extend(expectToRenderCorrectly);

describe('AcceptTermsAndConditions', () => {
	it('renders with default props', () => {
		const props = {};
		//TODO
		expect(AcceptTermsAndConditions).toRenderCorrectly(props);
	});
});
