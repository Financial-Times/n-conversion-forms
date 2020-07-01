import React from 'react';
import * as ncf from '../dist/index';
import ReactDOM from 'react-dom';

const toKebabCase = str =>
	str &&
	str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
		.map(x => x.toLowerCase())
		.join('-');

function initDemo () {
	const demoContainer = document.querySelector('#demoContent');
	const sidebarContainer = document.querySelector('#demoSidebar');
	const demoContent = [];
	const sidebarContent = [];

	try {
		Object.keys(ncf).forEach(comp => {
			comp = toKebabCase(comp);
			demoContent.push((
				<div key={comp}>
					<h2 id={comp}><a href={'/component/' + comp} target="_blank" rel="noopener noreferrer">{comp}</a></h2>
					<iframe className="demo__iframe" src={'/component/' + comp}></iframe>
				</div>
			));
			sidebarContent.push((
				<li>
					<a href={'#' + comp}>{comp}</a>
				</li>
			));
		});
	} catch (e) {
		// eslint-disable-next-line no-console
		console.log('error::', e);
	}

	const demoElement =
		<React.Fragment>
			<h1>Demos</h1>
			{demoContent}
		</React.Fragment>;

	const sidebarElement =
		<React.Fragment>
			<ul>
				{sidebarContent}
			</ul>
		</React.Fragment>;

	ReactDOM.render(demoElement, demoContainer);
	ReactDOM.render(sidebarElement, sidebarContainer);
}

initDemo();
