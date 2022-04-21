'use strict';

const oExpanderMock = jest.createMockFromModule('@financial-times/o-forms');

const createElement = (name, type, required = false) => {
	let el = document.createElement('input');
	el.name = name;
	el.required = required;
	el.type = type;
	el.addEventListener = jest.fn();
	el.checkValidity = jest.fn().mockReturnValue(true);

	const parent = document.createElement('div');
	parent.insertBefore = jest.fn();
	parent.removeChild = jest.fn();

	jest.spyOn(el, 'parentNode', 'get').mockReturnValue(parent);

	return {
		input: el,
		name,
		setCustomValidity: jest.fn(),
		parentNode: parent,
	};
};

oExpanderMock.default = {
	init: jest.fn(() => {
		return {
			formInputs: [
				createElement('foo', 'hidden'),
				createElement('baz', 'input', true),
				createElement('qoo', 'input', true),
				createElement('checkbox', 'checkbox', true),
			],
		};
	}),
};

module.exports = oExpanderMock;
