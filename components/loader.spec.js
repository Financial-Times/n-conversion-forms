import React from 'react';
import Loader from './loader';
import { registerPartial, unregisterPartial } from '../test/helpers.js';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};
const CHILDREN = <div>Foo Bar</div>;
const CHILDREN_STRING = '<div>Foo Bar</div>';

expect.extend(expectToRenderAs);

describe('Loader', () => {
	beforeAll(async () => {
		registerPartial('@partial-block', CHILDREN_STRING);
		context.template = await fetchPartialAsString('loader.html');
	});

	afterAll(() => {
		unregisterPartial('@partial-block');
	});

	it('renders with default props', () => {
		const props = {
			children: CHILDREN
		};

		expect(Loader).toRenderAs(context, props);
	});

	it('renders with showLoader', () => {
		const props = {
			children: CHILDREN,
			showLoader: true
		};

		expect(Loader).toRenderAs(context, props);
	});

	it('renders with title', () => {
		const props = {
			children: CHILDREN,
			title: 'TITLE'
		};

		expect(Loader).toRenderAs(context, props);
	});
});
