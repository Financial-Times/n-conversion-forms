import React from 'react';
import { Form } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

const TEST_FIELDS_ID = 'fields_test';

expect.extend(expectToRenderCorrectly);

describe('Form', () => {
	it('renders a form element with default props', () => {
		const props = {
			children: (<div id={TEST_FIELDS_ID}></div>)
		};

		expect(Form).toRenderCorrectly(props);
	});

	it('renders a form element with custom form action value', () => {
		const props = {
			children: (<div id={TEST_FIELDS_ID}></div>),
			action: 'http://foo.com/search'
		};

		expect(Form).toRenderCorrectly(props);
	});

	it('renders a form element with custom form method value', () => {
		const props = {
			children: (<div id={TEST_FIELDS_ID}></div>),
			method: 'GET'
		};

		expect(Form).toRenderCorrectly(props);
	});
});
