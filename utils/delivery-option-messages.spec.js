const { getDeliveryOption } = require('./delivery-option-messages');

describe('Find Custom Delivery Option', () => {
	const stubOption = { value: 'HD' };
	const sixDaysProductCode = 'P2N6D';
	const weekendProductCode = 'NWE';

	describe('Invalid Delivery Option', () => {
		beforeEach(() => {
			stubOption.deliveryOnPublicationDate = true;
			stubOption.flightMarket = true;
			stubOption.mailDelivery = false;
		});

		it('returns undefined when other country than custom messages', () => {
			expect(
				getDeliveryOption(sixDaysProductCode, stubOption, 'AAA')
			).toBeUndefined();
		});

		it('returns undefined when invalid distributor type code', () => {
			const option = { ...stubOption, value: 'ZZ' };
			expect(
				getDeliveryOption(sixDaysProductCode, option, 'USA')
			).toBeUndefined();
		});

		it('returns undefined when mailDelivery is false and not other required props are setup', () => {
			stubOption.deliveryOnPublicationDate = undefined;
			stubOption.flightMarket = undefined;
			expect(
				getDeliveryOption(sixDaysProductCode, stubOption, 'AAA')
			).toBeUndefined();
		});
	});

	describe('Find USA Hand Delivery Option', () => {
		beforeEach(() => {
			stubOption.mailDelivery = false;
		});

		it('returns a 5/6 days HD option when mailDelivery is set to false', () => {
			stubOption.deliveryOnPublicationDate = true;
			stubOption.flightMarket = false;
			const expected = {
				title: 'Hand delivery',
				description:
					'Enjoy delivery of the newspaper daily to your home or office address.',
			};

			const deliveryOption = getDeliveryOption(
				sixDaysProductCode,
				stubOption,
				'USA'
			);

			expect(deliveryOption).toEqual(expected);
		});

		it('returns a weekend HD option when mailDelivery is set to false', () => {
			stubOption.deliveryOnPublicationDate = false;
			stubOption.flightMarket = false;
			const expected = {
				title: 'Hand delivery',
				description:
					'Enjoy delivery of the newspaper daily to your home or office address. \nPlease note: Your FT Weekend will be delivered on Sunday.',
			};

			const deliveryOption = getDeliveryOption(
				weekendProductCode,
				stubOption,
				'USA'
			);

			expect(deliveryOption).toEqual(expected);
		});
	});

	describe('Find USA/CAN Mail Delivery Option', () => {
		beforeEach(() => {
			stubOption.mailDelivery = true;
		});

		it('returns a 5/6 days MAIL option when mailDelivery is set to true', () => {
			const expected = {
				title: 'Mail',
				customId: 'ML',
				description:
					"We can only deliver the newspaper to your location by postal mail which means your delivery will arrive up to 5 business days after the date of publication and will not include the HTSI Magazine. We also fly the newspaper to your location which means delivery is subject to flight delays/cancellations outside the FT's control. If you prefer to read the printed content on the day of publication, please proceed to subscribe to the FT ePaper - a digital replica of the print edition.",
			};

			const deliveryOption = getDeliveryOption(
				sixDaysProductCode,
				stubOption,
				'USA'
			);

			expect(deliveryOption).toEqual(expected);
		});

		it('returns a weekend MAIL option when mailDelivery is set to true', () => {
			const expected = {
				title: 'Mail',
				customId: 'ML',
				description:
					"We can only deliver the FT Weekend newspaper to your location by postal mail which means your delivery will arrive up to 5 business days after the date of publication and will not include the HTSI Magazine. We also fly the newspaper to your location which means delivery is subject to flight delays/cancellations outside the FT's control. If you prefer to read the printed content on the day of publication, please proceed to subscribe to the FT ePaper - a digital replica of the print edition.",
			};

			const deliveryOption = getDeliveryOption(
				weekendProductCode,
				stubOption,
				'CAN'
			);

			expect(deliveryOption).toEqual(expected);
		});
	});

	describe('Find UK Delivery Option', () => {
		it('returns UK EV delivery option', () => {
			const expected = {
				title: 'Electronic vouchers',
				description:
					'Delivered via email and card, redeemable at retailers nationwide.',
			};

			const deliveryOption = getDeliveryOption(
				sixDaysProductCode,
				{ value: 'EV' },
				'GBR'
			);

			expect(deliveryOption).toEqual(expected);
		});
	});

	describe('Find CEMEA/APAC Delivery Option', () => {
		it('returns CEMEA/APAC HD delivery option', () => {
			stubOption.flightMarket = true;
			stubOption.deliveryOnPublicationDate = false;
			stubOption.mailDelivery = false;
			const expected = {
				title: 'Hand Delivery',
				description:
					'Enjoy the delivery of the newspaper to your home or office address. Please note we fly the newspaper to your location which means delivery is subject to flight delays/cancellations outside of the FT’s control. In those circumstances, your newspaper will be delivered the next delivery day. Please also be aware that your FT weekend will be delivered on Sunday.',
			};

			const deliveryOption = getDeliveryOption('N6D', stubOption, 'CEMEA_V1');

			expect(deliveryOption).toEqual(expected);
		});

		it('returns CEMEA/APAC ML delivery option', () => {
			stubOption.mailDelivery = true;

			const expected = {
				title: 'Mail Delivery',
				customId: 'ML',
				description:
					'Enjoy delivery of the newspaper to your home or office address. Note this is a postal delivery - expect delivery after the day of publication. If you would prefer to read the newspaper on the day of publication, purchase an FT ePaper subscription, our digital replica of the each daily edition.',
			};

			const deliveryOption = getDeliveryOption('N6D', stubOption, 'APAC');

			expect(deliveryOption).toEqual(expected);
		});
	});
});
