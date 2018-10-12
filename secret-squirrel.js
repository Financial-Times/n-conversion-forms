module.exports = {
	files: {
		allow: [],
		allowOverrides: []
	},
	strings: {
		deny: [],
		denyOverrides: [
			'test@example\\.com' // demos/data.json:90, tests/partials/confirmation.spec.js:12
		]
	}
};
