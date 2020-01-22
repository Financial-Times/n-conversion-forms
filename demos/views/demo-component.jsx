import React from 'react';

export function DemoComponent({ name, data }) {
	const component = require(`../../components/${name}.jsx`);
	const componentName = Object.keys(component)[0];
	let Component = component[componentName];

	return (
		<html lang="en">
			<head>
				<title>{componentName}</title>
				<link rel="stylesheet" href="/public/main.css" />
				<link rel="stylesheet" href="/public/component.css" />
			</head>

			<body style={{backgroundColor:'#fff1e5'}} id="demo-page">
				<div className="ncf" id="demoContent">
					<Component {...data} />
				</div>
			</body>
		</html>
	);
}
