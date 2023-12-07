import React from 'react';
import { Position } from './position';
import { demographics } from 'n-common-static-data';

const positionsData = demographics.positions.positions;

export default {
	title: 'Position',
	component: Position,
};

export const Basic = (args) => <Position {...args} />;
Basic.args = {
	options: positionsData,
};
