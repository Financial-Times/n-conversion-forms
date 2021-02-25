// Delivery Frequency codes
const A1 = 'A1';
const A5 = 'A5';
const A6 = 'A6';

// Distributor Type codes
const HAND_DELIVERY = 'HD';
const MAIL = 'ML';

// Country codes
const USA_COUNTRY_CODE = 'USA';
const CAN_COUNTRY_CODE = 'CAN';

/**
 * This is a static list of messages for delivery options. The items are created by the combination of some distributor properties:
 * - deliveryFrequency (A1, A5, A6) - is defined based on the selected product.
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
		deliveryFrequency: [A5, A6],
		distributorType: HAND_DELIVERY,
		deliveryOnPublicationDate: true,
		flightMarket: true,
		country: [USA_COUNTRY_CODE, CAN_COUNTRY_CODE],
		title: 'Hand delivery',
		description: 'Enjoy delivery of the newspaper daily to your home or office address. \nPlease note: We fly the newspaper to your location which means delivery is subject to flight delays/cancellations outside of the FT\'s control. In those circumstances, your newspaper will be delivered on the next delivery day.',
	},
	{
		deliveryFrequency: [A5, A6],
		distributorType: HAND_DELIVERY,
		deliveryOnPublicationDate: true,
		flightMarket: false,
		country: [USA_COUNTRY_CODE, CAN_COUNTRY_CODE],
		title: 'Hand delivery',
		description: 'Enjoy delivery of the newspaper daily to your home or office address.',
	},
	{
		deliveryFrequency: [A5, A6],
		distributorType: HAND_DELIVERY,
		deliveryOnPublicationDate: false,
		flightMarket: true,
		country: [USA_COUNTRY_CODE, CAN_COUNTRY_CODE],
		title: 'Hand delivery',
		description: 'Enjoy delivery of the newspaper daily to your home or office address. \nPlease note: We fly the newspaper to your location which means delivery is subject to flight delays/cancellations outside of the FT\'s control. In those circumstances, your newspaper will be delivered on the next delivery day. Please also be aware that your FT Weekend will be delivered on Sunday.',
	},
	{
		deliveryFrequency: [A5, A6],
		distributorType: HAND_DELIVERY,
		deliveryOnPublicationDate: false,
		flightMarket: false,
		country: [USA_COUNTRY_CODE, CAN_COUNTRY_CODE],
		title: 'Hand delivery',
		description: 'Enjoy delivery of the newspaper daily to your home or office address. \nPlease note: Your FT Weekend will be delivered on Sunday and your Monday edition will be delivered on Tuesday with the Tuesday\'s edition.',
	},
	{
		deliveryFrequency: [A5, A6],
		distributorType: MAIL,
		country: [USA_COUNTRY_CODE, CAN_COUNTRY_CODE],
		title: 'Mail',
		description: 'We can only deliver the newspaper to your location by postal mail. This will result in delivery of the newspaper at least 3 business days after the date of publication. We also fly the newspaper to your location which means delivery is subject to flight delays/cancellations outside the FT\'s control. Please note: HTSI is not included with mail delivery. If you prefer to read the printed content on the day of publication, please proceed to subscribe to the FT ePaper - a digital replica of the print edition.',
	},
	{
		deliveryFrequency: [A1],
		distributorType: HAND_DELIVERY,
		deliveryOnPublicationDate: true,
		flightMarket: true,
		country: [USA_COUNTRY_CODE, CAN_COUNTRY_CODE],
		title: 'Hand delivery',
		description: 'Enjoy delivery of the newspaper daily to your home or office address. \nPlease note: We fly the newspapers to your location which means delivery is subject to flight delays/cancellations outside of the FT\'s control. In those circumstances, your newspaper will be delivered the next delivery day.',
	},
	{
		deliveryFrequency: [A1],
		distributorType: HAND_DELIVERY,
		deliveryOnPublicationDate: true,
		flightMarket: false,
		country: [USA_COUNTRY_CODE, CAN_COUNTRY_CODE],
		title: 'Hand delivery',
		description: 'Enjoy delivery of the newspaper daily to your home or office address.',
	},
	{
		deliveryFrequency: [A1],
		distributorType: HAND_DELIVERY,
		deliveryOnPublicationDate: false,
		flightMarket: true,
		country: [USA_COUNTRY_CODE, CAN_COUNTRY_CODE],
		title: 'Hand delivery',
		description: 'Enjoy delivery of the newspaper daily to your home or office address. \nPlease note we fly the newspaper to your location which means delivery is subject to flight delays/cancellations outside of the FT\'s control. In those circumstances, your newspaper will be delivered on the next delivery day. Please also be aware that your FT Weekend will be delivered on Sunday.',
	},
	{
		deliveryFrequency: [A1],
		distributorType: HAND_DELIVERY,
		deliveryOnPublicationDate: false,
		flightMarket: false,
		country: [USA_COUNTRY_CODE, CAN_COUNTRY_CODE],
		title: 'Hand delivery',
		description: 'Enjoy delivery of the newspaper daily to your home or office address. \nPlease note: Your FT Weekend will be delivered on Sunday.',
	},
	{
		deliveryFrequency: [A1],
		distributorType: MAIL,
		country: [USA_COUNTRY_CODE, CAN_COUNTRY_CODE],
		title: 'Mail',
		description: 'We can only deliver the FT Weekend newspaper to your location by postal mail. This will result in delivery of the newspaper at least 3 business days after the date of publication. We also fly the newspaper to your location which means delivery is subject to flight delays/cancellations outside the FT\'s control. Please note: HTSI is not included with mail delivery. If you prefer to read the printed content on the day of publication, please proceed to subscribe to the FT ePaper - a digital replica of the print edition.',
	}
];

/**
 * Method to find a specific delivery option based on the delivery frequency, country and option values.
 * There are two different strategies, one for options with mailDelivery = true and other by the opposite.
 * Both cases are represented by system option code 'HD', but differ on the mailDelivery property value.
 * If no message matchs, then undefined is returned.
 */
export function findCustomDeliveryOption (deliveryFrequency, option, country) {

	const mailStrategy = item => {
		return item.deliveryFrequency.includes(deliveryFrequency)
			&& option.value === HAND_DELIVERY
			&& item.distributorType === MAIL
			&& item.country.includes(country);
	};

	const handDeliveryStrategy = item => {
		return item.deliveryFrequency.includes(deliveryFrequency)
			&& option.value === HAND_DELIVERY
			&& item.distributorType === HAND_DELIVERY
			&& item.deliveryOnPublicationDate === option.deliveryOnPublicationDate
			&& item.flightMarket === option.flightMarket
			&& item.country.includes(country);
	};

	const filteredMessages = deliveryOptionMessages.filter(item => {
		return option.mailDelivery ? mailStrategy(item) : handDeliveryStrategy(item);
	});

	let deliveryOption;

	if (filteredMessages.length) {
		const { title, description } = filteredMessages[0];
		deliveryOption = { title, description };
	}

	return deliveryOption;
};
