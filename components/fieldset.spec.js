import React from 'react';
import { Fieldset } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

const HEADER_TEXT = 'Header text';
const TEST_FIELDS_ID = 'fields_test';

expect.extend(expectToRenderCorrectly);

describe('Fieldset', () => {
	it('renders a fieldset element with default props', () => {
		const props = {
			children: (<div id={TEST_FIELDS_ID}></div>)
		};

		expect(Fieldset).toRenderCorrectly(props);
	});

	it('renders a fieldset element with a custom name value', () => {
		const props = {
			children: (<div id={TEST_FIELDS_ID}></div>),
			name: 'customise-experience'
		};

		expect(Fieldset).toRenderCorrectly(props);
	});

	it('renders a custom legend', () => {
		const props = {
			children: (<div id={TEST_FIELDS_ID}></div>),
			legend: 'Customise your experience'
		};

		expect(Fieldset).toRenderCorrectly(props);
	});

	it('renders a custom legend which is visually hidden', () => {
		const props = {
			children: (<div id={TEST_FIELDS_ID}></div>),
			legend: 'Customise your experience',
			hideLegend: true
		};

		expect(Fieldset).toRenderCorrectly(props);
	});

	it('renders a custom header in specific heading level tags', () => {
		const props = {
			children: (<div id={TEST_FIELDS_ID}></div>),
			headingLevel: 'h2',
			header: (<div>{HEADER_TEXT}</div>)
		};

		expect(Fieldset).toRenderCorrectly(props);
	});

	it('renders a custom descriptor paragraph', () => {
		const props = {
			children: (<div id={TEST_FIELDS_ID}></div>),
			descriptor: 'Descriptor text'
		};

		expect(Fieldset).toRenderCorrectly(props);
	});

	it('renders a custom header containing markup', () => {
		const props = {
			children: (<div id={TEST_FIELDS_ID}></div>),
			headingLevel: 'h2',
			header: (<div>{HEADER_TEXT}<span className="test">Test</span></div>)
		};

		expect(Fieldset).toRenderCorrectly(props);
	});
});
