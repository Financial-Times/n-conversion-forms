import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ErrorPage from './error-page';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';
import { registerPartial, unregisterPartial } from '../test/helpers';

const CHILDREN = <div id="children">Children</div>;
const CHILDREN_STRING = renderToStaticMarkup(CHILDREN);

const context = {};

expect.extend(expectToRenderAs);

describe('ErrorPage', () => {
	beforeAll(async () => {
		registerPartial('@partial-block', CHILDREN_STRING);
		context.template = await fetchPartialAsString('error-page.html');
	});

	afterAll(() => {
		unregisterPartial('@partial-block');
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
