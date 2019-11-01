import React from 'react';
import Form from './form';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const {
	registerPartial,
	unregisterPartial,
} = require('../test/helpers');

const TEST_FIELDS_ID = 'fields_test';

const context = {};

expect.extend(expectToRenderAs);

describe('Form', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('form.html');
		registerPartial('fields', `<div id="${TEST_FIELDS_ID}"></div>`);
	});

	afterAll(() => {
		unregisterPartial('fields');
	});

	it('renders a form element with default props', () => {
		const props = {
			children: (<div id={TEST_FIELDS_ID}></div>)
		};

		expect(Form).toRenderAs(context, props);
	});

	it('renders a form element with custom form action value', () => {
		const props = {
			children: (<div id={TEST_FIELDS_ID}></div>),
			action: 'http://foo.com/search'
		};

		expect(Form).toRenderAs(context, props);
	});

	it('renders a form element with custom form method value', () => {
		const props = {
			children: (<div id={TEST_FIELDS_ID}></div>),
			method: 'GET'
		};

		expect(Form).toRenderAs(context, props);
	});
});
