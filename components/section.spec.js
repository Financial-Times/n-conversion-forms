import React from 'react';
import Section from './section';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const {
	registerPartial,
	unregisterPartial,
} = require('../test/helpers');

const TEST_MESSAGE = <div id="message">Message Text</div>;
const TEST_MESSAGE_STRING = '<div id="message">Message Text</div>';

const context = {};

expect.extend(expectToRenderAs);

describe('Section', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('section.html');
		registerPartial('message', TEST_MESSAGE_STRING);
	});

	afterAll(() => {
		unregisterPartial('message');
	});

	it('renders with default props', () => {
		const props = {
			children: (TEST_MESSAGE)
		};

		expect(Section).toRenderAs(context, props);
	});
});
