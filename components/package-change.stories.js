import React from 'react';
import { PackageChange } from './package-change';

export default {
	title: 'Package Change',
	component: PackageChange,
};

export const Basic = (args) => <PackageChange {...args} />;
Basic.args = {
	currentPackage: 'Premium Digital',
	changePackageUrl: 'https://ft.com/products',
};

export const WithPackageDescription = (args) => <PackageChange {...args} />;
WithPackageDescription.args = {
	currentPackage: 'Premium Digital',
	changePackageUrl: 'https://ft.com/products',
	packageDescription: 'Personalised email briefings and alerts',
};
