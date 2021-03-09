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

		it('should return undefined when other country than custom messages', () => {
			expect(getDeliveryOption(sixDaysProductCode, stubOption, 'AAA')).toBeUndefined();
		});

		it('should return undefined when invalid distributor type code', () => {
			const option = { ...stubOption, value: 'ZZ' };
			expect(getDeliveryOption(sixDaysProductCode, option, 'USA')).toBeUndefined();
		});

		it('should return undefined when mailDelivery is false and not other required props are setup', () => {
			stubOption.deliveryOnPublicationDate = undefined;
			stubOption.flightMarket = undefined;
			expect(getDeliveryOption(sixDaysProductCode, stubOption, 'AAA')).toBeUndefined();
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
				description: 'Enjoy delivery of the newspaper daily to your home or office address.',
			};

			const deliveryOption = getDeliveryOption(sixDaysProductCode, stubOption, 'USA');

			expect(deliveryOption).toEqual(expected);
		});

		it('returns a weekend HD option when mailDelivery is set to false', () => {
			stubOption.deliveryOnPublicationDate = false;
			stubOption.flightMarket = false;
			const expected = {
				title: 'Hand delivery',
				description: 'Enjoy delivery of the newspaper daily to your home or office address. \nPlease note: Your FT Weekend will be delivered on Sunday.',
			};

			const deliveryOption = getDeliveryOption(weekendProductCode, stubOption, 'USA');

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
				description: 'We can only deliver the newspaper to your location by postal mail. This will result in delivery of the newspaper at least 3 business days after the date of publication. We also fly the newspaper to your location which means delivery is subject to flight delays/cancellations outside the FT\'s control. Please note: HTSI is not included with mail delivery. If you prefer to read the printed content on the day of publication, please proceed to subscribe to the FT ePaper - a digital replica of the print edition.',
			};

			const deliveryOption = getDeliveryOption(sixDaysProductCode, stubOption, 'USA');

			expect(deliveryOption).toEqual(expected);
		});

		it('returns a weekend MAIL option when mailDelivery is set to true', () => {
			const expected = {
				title: 'Mail',
				customId: 'ML',
				description: 'We can only deliver the FT Weekend newspaper to your location by postal mail. This will result in delivery of the newspaper at least 3 business days after the date of publication. We also fly the newspaper to your location which means delivery is subject to flight delays/cancellations outside the FT\'s control. Please note: HTSI is not included with mail delivery. If you prefer to read the printed content on the day of publication, please proceed to subscribe to the FT ePaper - a digital replica of the print edition.',
			};

			const deliveryOption = getDeliveryOption(weekendProductCode, stubOption, 'CAN');

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

			const deliveryOption = getDeliveryOption(sixDaysProductCode, { value: 'EV' }, 'GBR');

			expect(deliveryOption).toEqual(expected);
		});
	});
});
