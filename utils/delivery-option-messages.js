const { printRegions } = require('../helpers/constants');

// Delivery Frequency codes
const ONLY_WEEKEND_DELIVERY_FREQ = 'A1';
const FIVE_DAYS_WEEK_DELIVERY_FREQ = 'A5';
const SIX_DAYS_WEEK_DELIVERY_FREQ = 'A6';

// Delivery Frequency & Product Codes Pattern Mapping. Partial matches on product codes NWE, N5D, N6D
//   - A1 => ONLY_WEEKEND
//   - A5 => FIVE_DAYS_WEEK
//   - A6 => SIX_DAYS_WEEK
const deliveryFrequencyProductsMapping = {
	A1: 'NWE',
	A5: 'N5D',
	A6: 'N6D',
};

// Distributor Type codes
const HAND_DELIVERY = 'HD';
const MAIL = 'ML';

// Country codes
const CAN_COUNTRY_CODE = 'CAN';
const UK_COUNTRY_CODE = 'GBR';
const JPN_COUNTRY_CODE = 'JPN';
const USA_COUNTRY_CODE = 'USA';

const customCountries = [UK_COUNTRY_CODE, JPN_COUNTRY_CODE];
const customCountriesDeliveryOptions = {
	GBR: {
		PV: {
			title: 'Paper vouchers',
			description:
				'13-week voucher pack delivered quarterly and redeemable at retailers nationwide.',
		},
		HD: {
			title: 'Hand delivery',
			description: 'Free delivery to your home or office before 7am.',
		},
		EV: {
			title: 'Electronic vouchers',
			description:
				'Delivered via email and card, redeemable at retailers nationwide.',
		},
	},
	JPN: {
		HD: {
			title: 'Hand delivery',
			description:
				'Enjoy delivery of the newspaper to your home or office address.',
		},
		ML: {
			title: 'Mail Delivery',
			description:
				'Enjoy delivery of the newspaper to your home or office address.',
		},
	},
};

/**
 * This is a static list of messages for delivery options. The items are created by the combination of some distributor properties:
 * - deliveryFrequency (A1, A5, A6) - is defined based on the selected product (codes containing NWE, N5D, N6D).
 *   -> Product, containing N6D as print part (e.g. P2N6D, P1N6D, N6D) corresponds to delivery frequency A6.
 *   -> Product, containing N5D as print part corresponds to frequency A5.
 *   -> Product, containing NWE as print part (e.g. NWE and P2NWE) corresponds to frequency A1.
 * - distributorType - 'Mail' if the distributor fulfilment type is mail, otherwise is 'Hand Delivery'
 * - deliveryOnPublicationDate - true if the distributor can deliver on the publication date, otherwise there will be 1-3 days delay in deliveries
 * - flightMarket: if the distributor is in a fly market or not (newspapers shipping may be affected by flight schedule changes)
 * - country
 */
const deliveryOptionMessages = [
	{
		deliveryFrequency: [
			FIVE_DAYS_WEEK_DELIVERY_FREQ,
			SIX_DAYS_WEEK_DELIVERY_FREQ,
		],
		distributorType: HAND_DELIVERY,
		deliveryOnPublicationDate: true,
		flightMarket: true,
		country: [USA_COUNTRY_CODE, CAN_COUNTRY_CODE],
		title: 'Hand delivery',
		description:
			"Enjoy delivery of the newspaper daily to your home or office address. \nPlease note: We fly the newspaper to your location which means delivery is subject to flight delays/cancellations outside of the FT's control. In those circumstances, your newspaper will be delivered on the next delivery day.",
	},
	{
		deliveryFrequency: [
			FIVE_DAYS_WEEK_DELIVERY_FREQ,
			SIX_DAYS_WEEK_DELIVERY_FREQ,
		],
		distributorType: HAND_DELIVERY,
		deliveryOnPublicationDate: true,
		flightMarket: false,
		country: [USA_COUNTRY_CODE, CAN_COUNTRY_CODE],
		title: 'Hand delivery',
		description:
			'Enjoy delivery of the newspaper daily to your home or office address.',
	},
	{
		deliveryFrequency: [
			FIVE_DAYS_WEEK_DELIVERY_FREQ,
			SIX_DAYS_WEEK_DELIVERY_FREQ,
		],
		distributorType: HAND_DELIVERY,
		deliveryOnPublicationDate: false,
		flightMarket: true,
		country: [USA_COUNTRY_CODE, CAN_COUNTRY_CODE],
		title: 'Hand delivery',
		description:
			"Enjoy delivery of the newspaper daily to your home or office address. \nPlease note: We fly the newspaper to your location which means delivery is subject to flight delays/cancellations outside of the FT's control. In those circumstances, your newspaper will be delivered on the next delivery day. Please also be aware that your FT Weekend will be delivered on Sunday.",
	},
	{
		deliveryFrequency: [
			FIVE_DAYS_WEEK_DELIVERY_FREQ,
			SIX_DAYS_WEEK_DELIVERY_FREQ,
		],
		distributorType: HAND_DELIVERY,
		deliveryOnPublicationDate: false,
		flightMarket: false,
		country: [USA_COUNTRY_CODE, CAN_COUNTRY_CODE],
		title: 'Hand delivery',
		description:
			'Enjoy delivery of the newspaper daily to your home or office address. \nPlease note: Your FT Weekend will be delivered on Sunday or Monday.',
	},
	{
		deliveryFrequency: [
			FIVE_DAYS_WEEK_DELIVERY_FREQ,
			SIX_DAYS_WEEK_DELIVERY_FREQ,
		],
		distributorType: HAND_DELIVERY,
		deliveryOnPublicationDate: false,
		flightMarket: true,
		country: [printRegions.cemeaV1, printRegions.cemeaV2, printRegions.apac],
		title: 'Hand delivery',
		description:
			'Enjoy the delivery of the newspaper to your home or office address. Please note we fly the newspaper to your location which means delivery is subject to flight delays/cancellations outside of the FT’s control. In those circumstances, your newspaper will be delivered the next delivery day. Please also be aware that your FT weekend will be delivered on Sunday.',
	},
	{
		deliveryFrequency: [
			FIVE_DAYS_WEEK_DELIVERY_FREQ,
			SIX_DAYS_WEEK_DELIVERY_FREQ,
			ONLY_WEEKEND_DELIVERY_FREQ,
		],
		distributorType: HAND_DELIVERY,
		deliveryOnPublicationDate: true,
		flightMarket: true,
		title: 'Hand delivery',
		country: [printRegions.cemeaV1, printRegions.cemeaV2, printRegions.apac],
		description:
			'Enjoy delivery of the newspaper to your home or office address. FT Weekend will be delivered on Sunday or Monday.',
	},
	{
		deliveryFrequency: [
			FIVE_DAYS_WEEK_DELIVERY_FREQ,
			SIX_DAYS_WEEK_DELIVERY_FREQ,
			ONLY_WEEKEND_DELIVERY_FREQ,
		],
		distributorType: HAND_DELIVERY,
		deliveryOnPublicationDate: true,
		flightMarket: false,
		country: [printRegions.cemeaV1, printRegions.cemeaV2, printRegions.apac],
		title: 'Hand delivery',
		description:
			'Enjoy delivery of the newspaper daily to your home or office address on the day of publication.',
	},
	{
		deliveryFrequency: [
			FIVE_DAYS_WEEK_DELIVERY_FREQ,
			SIX_DAYS_WEEK_DELIVERY_FREQ,
			ONLY_WEEKEND_DELIVERY_FREQ,
		],
		distributorType: MAIL,
		country: [printRegions.cemeaV1, printRegions.cemeaV2, printRegions.apac],
		title: 'Mail Delivery',
		customId: 'ML',
		flightMarket: true,
		description:
			'Enjoy delivery of the newspaper to your home or office address. Note this is a postal delivery - expect delivery after the day of publication. If you would prefer to read the newspaper on the day of publication, purchase an FT ePaper subscription, our digital replica of the each daily edition.',
	},
	{
		deliveryFrequency: [
			FIVE_DAYS_WEEK_DELIVERY_FREQ,
			SIX_DAYS_WEEK_DELIVERY_FREQ,
			ONLY_WEEKEND_DELIVERY_FREQ,
		],
		distributorType: MAIL,
		country: [printRegions.cemeaV1, printRegions.cemeaV2, printRegions.apac],
		title: 'Mail Delivery',
		customId: 'ML',
		flightMarket: false,
		description:
			'Enjoy delivery of the newspaper to your home or office address one day after publication.',
	},
	{
		deliveryFrequency: [
			FIVE_DAYS_WEEK_DELIVERY_FREQ,
			SIX_DAYS_WEEK_DELIVERY_FREQ,
		],
		distributorType: MAIL,
		country: [USA_COUNTRY_CODE, CAN_COUNTRY_CODE],
		title: 'Mail',
		customId: 'ML',
		description:
			"We can only deliver the newspaper to your location by postal mail which means your delivery will arrive up to 5 business days after the date of publication and will not include the HTSI Magazine. We also fly the newspaper to your location which means delivery is subject to flight delays/cancellations outside the FT's control. If you prefer to read the printed content on the day of publication, please proceed to subscribe to the FT ePaper - a digital replica of the print edition.",
	},
	{
		deliveryFrequency: [ONLY_WEEKEND_DELIVERY_FREQ],
		distributorType: HAND_DELIVERY,
		deliveryOnPublicationDate: true,
		flightMarket: true,
		country: [USA_COUNTRY_CODE, CAN_COUNTRY_CODE],
		title: 'Hand delivery',
		description:
			"Enjoy delivery of the newspaper daily to your home or office address. \nPlease note: We fly the newspapers to your location which means delivery is subject to flight delays/cancellations outside of the FT's control. In those circumstances, your newspaper will be delivered the next delivery day.",
	},
	{
		deliveryFrequency: [ONLY_WEEKEND_DELIVERY_FREQ],
		distributorType: HAND_DELIVERY,
		deliveryOnPublicationDate: true,
		flightMarket: false,
		country: [USA_COUNTRY_CODE, CAN_COUNTRY_CODE],
		title: 'Hand delivery',
		description:
			'Enjoy delivery of the newspaper daily to your home or office address.',
	},
	{
		deliveryFrequency: [ONLY_WEEKEND_DELIVERY_FREQ],
		distributorType: HAND_DELIVERY,
		deliveryOnPublicationDate: false,
		flightMarket: true,
		country: [USA_COUNTRY_CODE, CAN_COUNTRY_CODE],
		title: 'Hand delivery',
		description:
			"Enjoy delivery of the newspaper daily to your home or office address. \nPlease note we fly the newspaper to your location which means delivery is subject to flight delays/cancellations outside of the FT's control. In those circumstances, your newspaper will be delivered on the next delivery day. Please also be aware that your FT Weekend will be delivered on Sunday.",
	},
	{
		deliveryFrequency: [ONLY_WEEKEND_DELIVERY_FREQ],
		distributorType: HAND_DELIVERY,
		deliveryOnPublicationDate: false,
		flightMarket: false,
		country: [USA_COUNTRY_CODE, CAN_COUNTRY_CODE],
		title: 'Hand delivery',
		description:
			'Enjoy delivery of the newspaper daily to your home or office address. \nPlease note: Your FT Weekend will be delivered on Sunday.',
	},
	{
		deliveryFrequency: [ONLY_WEEKEND_DELIVERY_FREQ],
		distributorType: MAIL,
		country: [USA_COUNTRY_CODE, CAN_COUNTRY_CODE],
		title: 'Mail',
		customId: 'ML',
		description:
			"We can only deliver the FT Weekend newspaper to your location by postal mail which means your delivery will arrive up to 5 business days after the date of publication and will not include the HTSI Magazine. We also fly the newspaper to your location which means delivery is subject to flight delays/cancellations outside the FT's control. If you prefer to read the printed content on the day of publication, please proceed to subscribe to the FT ePaper - a digital replica of the print edition.",
	},
];

function includesDeliveryFrequency(productCode = '', item) {
	return item.deliveryFrequency.find((freq) => {
		const productCodePattern = deliveryFrequencyProductsMapping[freq];
		return productCode.includes(productCodePattern);
	});
}

function mailStrategy(productCode, option, FTShippingZone, item) {
	return (
		includesDeliveryFrequency(productCode, item) &&
		item.distributorType === MAIL &&
		item.country.includes(FTShippingZone)
	);
}

function handDeliveryStrategy(productCode, option, FTShippingZone, item) {
	return (
		includesDeliveryFrequency(productCode, item) &&
		item.distributorType === HAND_DELIVERY &&
		item.deliveryOnPublicationDate === option.deliveryOnPublicationDate &&
		item.flightMarket === option.flightMarket &&
		item.country.includes(FTShippingZone)
	);
}

/**
 * Method to find a specific delivery option based on the delivery frequency, FTShippingZone and option values.
 * There are two different strategies, one for options with mailDelivery = true and other by the opposite.
 * Both cases are represented by system option code 'HD', but differ on the mailDelivery property value.
 * If no message matchs, then undefined is returned.
 */
function findCustomDeliveryOption(productCode, option, FTShippingZone) {
	let deliveryOption;

	if (option.value === HAND_DELIVERY) {
		const filteredMessages = deliveryOptionMessages.filter((item) => {
			return option.mailDelivery
				? mailStrategy(productCode, option, FTShippingZone, item)
				: handDeliveryStrategy(productCode, option, FTShippingZone, item);
		});

		if (filteredMessages.length) {
			const { title, description, customId } = filteredMessages[0];
			deliveryOption = { title, description, customId };
		}
	}

	return deliveryOption;
}

function getDeliveryOption(productCode, option, FTShippingZone, country) {
	// Custom delivery messages are displayed for certain countries
	if (customCountries.includes(country)) {
		return customCountriesDeliveryOptions[country][option.value];
	}

	return findCustomDeliveryOption(productCode, option, FTShippingZone);
}

module.exports = {
	getDeliveryOption,
};
