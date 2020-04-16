const createElement = (config, sandbox) => {
	let el = document.createElement('input');

	Object.keys(config).forEach((key) => {
		if (key !== 'addEventListener') {
			el[key] = config[key];
		} else {
			sandbox.stub(el, 'addEventListener').value(config[key]);
		}
	});

	return el;
};

module.exports = {
	createElement,
};
