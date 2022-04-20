'use strict';

const oInputMock = jest.createMockFromModule(
	'@financial-times/o-forms/src/js/input'
);

oInputMock.default = jest.fn(() => {
	return { validate: jest.fn() };
});

module.exports = oInputMock;
