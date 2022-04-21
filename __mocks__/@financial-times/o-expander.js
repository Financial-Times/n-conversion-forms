'use strict';

const oExpanderMock = jest.createMockFromModule('@financial-times/o-expander');

oExpanderMock.default = {
	init: jest.fn().mockReturnValue('expanderInstance'),
};

module.exports = oExpanderMock;
