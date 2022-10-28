const React = require('react');

export const addressLine1AutoComplete = 'address-line1';
export const addressLine2AutoComplete = 'address-line2';
export const addressLine3AutoComplete = 'address-line3';

const addressTemplateGenerator = (addressLine1, addressLine2, addressLine3) => (
	<>
		{addressLine1}
		{addressLine2}
		{addressLine3}
	</>
);

const deliveryAddressMap = {
	home: {
		addressLine1Placeholder: {
			GBR: 'e.g. 10 Elm Street',
			USA: 'e.g. 10 Elm St.',
			CAN: 'e.g. 36 Poirier Blvd.',
			CEMEA_V1: 'Street and House Number',
			CEMEA_V2: 'House Number and Street',
			APAC: 'Street name',
			ARE: 'PO Box 12345',
		},
		addressLine2Placeholder: {
			CEMEA_V1: 'Apt No./Floor/Building',
			CEMEA_V2: 'Apt No./Floor/Building',
			APAC: 'House/Apartment/Building name',
		},
		addressLine3Placeholder: {
			USA: 'e.g Apt 2C / FL 10 / STE 50',
			CAN: 'e.g Apt 2C / FL 10 / STE 50',
			CEMEA_V1: ' ',
			CEMEA_V2: ' ',
			APAC: 'District/County/Province/Ward',
		},
		addressLine1Title: {
			ARE: 'PO Box',
		},
		// Overrides auto-complete
		addressLine2AutoComplete: {
			USA: addressLine3AutoComplete,
			CAN: addressLine3AutoComplete,
		},
		// Overrides auto-complete
		addressLine3AutoComplete: {
			USA: addressLine2AutoComplete,
			CAN: addressLine2AutoComplete,
		},
		addressLine3Title: {
			GBR: 'Address line 3',
			USA: 'APT/FL/STE',
			CAN: 'APT/FL/STE',
			CEMEA_V1: 'Address line 3',
			CEMEA_V2: 'Address line 3',
			APAC: 'Address line 3',
		},
		addressLine3Prompt: {
			USA: 'Max. 6 characters. Please enter “Apartment 2C” as “Apt 2C”, “Floor 10 as FL 10”',
			CAN: 'Max. 6 characters. Please enter “Apartment 2C” as “Apt 2C”, “Floor 10 as FL 10”',
		},
		template: (addressLine1, addressLine2, addressLine3, region) => {
			const addressLines = {
				GBR: addressTemplateGenerator(addressLine1, addressLine2, addressLine3),
				USA: addressTemplateGenerator(addressLine1, addressLine3, addressLine2),
				CAN: addressTemplateGenerator(addressLine1, addressLine3, addressLine2),
				CEMEA_V1: addressTemplateGenerator(
					addressLine1,
					addressLine2,
					addressLine3
				),
				CEMEA_V2: addressTemplateGenerator(
					addressLine1,
					addressLine2,
					addressLine3
				),
				APAC: addressTemplateGenerator(
					addressLine1,
					addressLine2,
					addressLine3
				),
				ARE: <> {addressLine1} </>,
			};
			return addressLines[region];
		},
	},
	company: {
		addressLine1Placeholder: {
			GBR: 'e.g. 10 Elm Street',
			USA: 'e.g. 10 Elm St.',
			CAN: 'e.g. 36 Poirier Blvd.',
			CEMEA_V1: 'Street and House Number',
			CEMEA_V2: 'House Number and Street',
			APAC: 'Street name',
			ARE: 'PO Box 12345',
		},
		addressLine2Placeholder: {
			CEMEA_V1: 'Apt No./Floor/Building/Department',
			CEMEA_V2: 'Apt No./Floor/Building/Department',
			APAC: 'House/Apartment/Building name',
		},
		addressLine3Placeholder: {
			USA: 'e.g Apt 2C / FL 10 / STE 50',
			CAN: 'e.g Apt 2C / FL 10 / STE 50',
			CEMEA_V1: 'Department name/job title',
			CEMEA_V2: 'Department name/job title',
			APAC: 'District/County/Province/Ward',
		},
		addressLine3Title: {
			GBR: 'Address line 3',
			USA: 'APT/FL/STE',
			CAN: 'APT/FL/STE',
			CEMEA_V1: 'Address line 3',
			CEMEA_V2: 'Address line 3',
		},
		addressLine3Prompt: {
			USA: 'Max. 6 characters. Please enter “Apartment 2C” as “Apt 2C”, “Floor 10 as FL 10”',
			CAN: 'Max. 6 characters. Please enter “Apartment 2C” as “Apt 2C”, “Floor 10 as FL 10”',
		},
		addressLine1Title: {
			ARE: 'PO Box',
		},
		// Overrides auto-complete
		addressLine2AutoComplete: {
			USA: addressLine3AutoComplete,
			CAN: addressLine3AutoComplete,
		},
		// Overrides auto-complete
		addressLine3AutoComplete: {
			USA: addressLine2AutoComplete,
			CAN: addressLine2AutoComplete,
		},
		template: (addressLine1, addressLine2, addressLine3, region) => {
			const addressLines = {
				GBR: addressTemplateGenerator(addressLine1, addressLine2, addressLine3),
				USA: addressTemplateGenerator(addressLine1, addressLine3, addressLine2),
				CAN: addressTemplateGenerator(addressLine1, addressLine3, addressLine2),

				CEMEA_V1: addressTemplateGenerator(
					addressLine1,
					addressLine2,
					addressLine3
				),
				CEMEA_V2: addressTemplateGenerator(
					addressLine1,
					addressLine2,
					addressLine3
				),
				APAC: addressTemplateGenerator(
					addressLine1,
					addressLine2,
					addressLine3
				),
				ARE: <> {addressLine1} </>,
			};
			return addressLines[region];
		},
	},
	pobox: {
		addressLine1Placeholder: {
			GBR: 'e.g. 10 Elm Street',
			USA: 'e.g. 10 Elm St.',
			CAN: 'e.g. 36 Poirier Blvd.',
			CEMEA_V1: 'P.O. Box',
			CEMEA_V2: 'P.O. Box',
		},
		addressLine2Placeholder: {},
		addressLine3Placeholder: {},
		addressLine1Title: {},
		addressLine3Title: {
			GBR: 'Address line 3',
			USA: 'APT/FL/STE',
			CAN: 'APT/FL/STE',
		},
		// Overrides auto-complete
		addressLine2AutoComplete: {
			USA: addressLine3AutoComplete,
			CAN: addressLine3AutoComplete,
		},
		// Overrides auto-complete
		addressLine3AutoComplete: {
			USA: addressLine2AutoComplete,
			CAN: addressLine2AutoComplete,
		},
		addressLine3Prompt: {
			USA: 'Max. 6 characters. Please enter “Apartment 2C” as “Apt 2C”, “Floor 10 as FL 10”',
			CAN: 'Max. 6 characters. Please enter “Apartment 2C” as “Apt 2C”, “Floor 10 as FL 10”',
		},
		template: (addressLine1, addressLine2, addressLine3, region) => {
			const addressLines = {
				GBR: addressTemplateGenerator(addressLine1, addressLine2, addressLine3),
				USA: addressTemplateGenerator(addressLine1, addressLine3, addressLine2),
				CAN: addressTemplateGenerator(addressLine1, addressLine3, addressLine2),

				CEMEA_V1: <> {addressLine1} </>,
				CEMEA_V2: <> {addressLine1} </>,
			};
			return addressLines[region];
		},
	},
};

module.exports = deliveryAddressMap;
