import React from 'react';
import { DecisionMaker } from './decision-maker';

export default {
	title: 'Decision Maker',
	component: DecisionMaker,
};

export const Basic = (args) => <DecisionMaker {...args} />;
