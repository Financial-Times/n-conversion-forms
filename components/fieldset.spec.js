import React from 'react';
import Fieldset from './fieldset';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const {
	registerPartial,
	unregisterPartial,
} = require('../test/helpers');

const HEADER_TEXT = 'Header text';
const TEST_FIELDS_ID = 'fields_test';

const context = {};

expect.extend(expectToRenderAs);

describe('Fieldset', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('fieldset.html');
		registerPartial('header', `<div>${HEADER_TEXT}</div>`);
		registerPartial('fields', `<div id="${TEST_FIELDS_ID}"></div>`);
	});

	afterAll(() => {
		unregisterPartial('fields');
	});

	it('renders a fieldset element with default props', () => {
		const props = {
			children: (<div id={TEST_FIELDS_ID}></div>)
		};

		expect(Fieldset).toRenderAs(context, props);
	});

	it('renders a fieldset element with a custom name value', () => {
		const props = {
			children: (<div id={TEST_FIELDS_ID}></div>),
			name: 'customise-experience'
		};

		expect(Fieldset).toRenderAs(context, props);
	});

	it('renders a custom legend', () => {
		const props = {
			children: (<div id={TEST_FIELDS_ID}></div>),
			legend: 'Customise your experience'
		};

		expect(Fieldset).toRenderAs(context, props);
	});

	it('renders a custom legend which is visually hidden', () => {
		const props = {
			children: (<div id={TEST_FIELDS_ID}></div>),
			legend: 'Customise your experience',
			hideLegend: true
		};

		expect(Fieldset).toRenderAs(context, props);
	});

	it('renders a custom header in specific heading level tags', () => {
		const props = {
			children: (<div id={TEST_FIELDS_ID}></div>),
			headingLevel: 'h2',
			header: (<div>{HEADER_TEXT}</div>)
		};

		expect(Fieldset).toRenderAs(context, props);
	});

	it('renders a custom descriptor paragraph', () => {
		const props = {
			children: (<div id={TEST_FIELDS_ID}></div>),
			descriptor: 'Descriptor text'
		};

		expect(Fieldset).toRenderAs(context, props);
	});
});
