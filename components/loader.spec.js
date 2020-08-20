import React from 'react';
import { Loader } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

const CHILDREN = <div>Foo Bar</div>;

expect.extend(expectToRenderCorrectly);

describe('Loader', () => {
	it('renders with default props', () => {
		const props = {
			children: CHILDREN
		};

		expect(Loader).toRenderCorrectly(props);
	});

	it('renders with showLoader', () => {
		const props = {
			children: CHILDREN,
			showLoader: true
		};

		expect(Loader).toRenderCorrectly(props);
	});

	it('renders with title', () => {
		const props = {
			children: CHILDREN,
			title: 'TITLE'
		};

		expect(Loader).toRenderCorrectly(props);
	});
});
