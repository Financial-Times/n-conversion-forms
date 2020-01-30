import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ErrorPage } from './index';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const CHILDREN = <div id="children">Children</div>;
const CHILDREN_STRING = renderToStaticMarkup(CHILDREN);

const context = {};

expect.extend(expectToRenderAs);

describe('ErrorPage', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('error-page.html', CHILDREN_STRING);
	});

	it('renders with default props', () => {
		const props = {
			children: CHILDREN
		};

		expect(ErrorPage).toRenderAs(context, props);
	});

	it('renders with header', () => {
		const props = {
			children: CHILDREN,
			header: 'HEADER'
		};

		expect(ErrorPage).toRenderAs(context, props);
	});

	it('renders with message', () => {
		const props = {
			children: CHILDREN,
			message: 'MESSAGE'
		};

		expect(ErrorPage).toRenderAs(context, props);
	});
});
