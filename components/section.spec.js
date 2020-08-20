import React from 'react';
import { Section } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

const TEST_MESSAGE = <div id="message">Message Text</div>;
expect.extend(expectToRenderCorrectly);

describe('Section', () => {
	it('renders with default props', () => {
		const props = {
			children: (TEST_MESSAGE)
		};

		expect(Section).toRenderCorrectly(props);
	});
});
