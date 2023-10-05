module.exports = {
	files: {
		allow: [],
		allowOverrides: [],
	},
	strings: {
		deny: [],
		denyOverrides: [
			'foo@bar\\.com', // components/__snapshots__/confirmation.spec.js.snap:184, components/confirmation.spec.js:10, components/confirmation.stories.js:44
			'test@example\\.com', // components/__snapshots__/confirmation.spec.js.snap:529, components/__snapshots__/email.spec.js.snap:90, components/__snapshots__/registration-confirmation.spec.js.snap:12, components/confirmation.spec.js:33, components/email.spec.js:23, components/registration-confirmation.spec.js:14, utils/email.spec.js:153|165|176|190|204
			'd19dc7a6\\x2dc33b\\x2d4931\\x2d9a7e\\x2d4a74674da29a', // components/__snapshots__/licence-confirmation.spec.js.snap:28, components/licence-confirmation.spec.js:37
			'addressLine3MaxLength', // components/delivery-address-map.jsx:63|138|198, components/delivery-address.jsx:132
			'createB2cDiscountCopy', // components/payment-term.jsx:196|308
		],
	},
};
