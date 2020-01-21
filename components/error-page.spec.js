import React from 'react';
import { ErrorPage } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

const CHILDREN = <div id="children">Children</div>;

expect.extend(expectToRenderCorrectly);

describe('ErrorPage', () => {
	it('renders with default props', () => {
		const props = {
			children: CHILDREN
		};

		expect(ErrorPage).toRenderCorrectly(props);
	});

	it('renders with header', () => {
		const props = {
			children: CHILDREN,
			header: 'HEADER'
		};

		expect(ErrorPage).toRenderCorrectly(props);
	});

	it('renders with message', () => {
		const props = {
			children: CHILDREN,
			message: 'MESSAGE'
		};

		expect(ErrorPage).toRenderCorrectly(props);
	});
});
