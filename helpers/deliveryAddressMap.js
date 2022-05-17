const React = require('react');
const deliveryAddressMap = {
	'home': {
		addressLine1Placeholder: {
			GBR: 'e.g. 10 Elm Street',
			USA: 'e.g. 10 Elm St.',
			CAN: 'e.g. 36 Poirier Blvd.',
			CEMEA_V1: 'Street and House Number',
			CEMEA_V2: 'House Number and Street',
		},
		addressLine2Placeholder: {
			CEMEA_V1: 'Apt No./Floor/Building',
			CEMEA_V2: 'Apt No./Floor/Building',
		},
		addressLine3Placeholder: {
			USA: 'e.g Apt 2C / FL 10 / STE 50',
			CAN: 'e.g Apt 2C / FL 10 / STE 50',
			CEMEA_V1: ' ',
			CEMEA_V2: ' ',
		},
		addressLine3Title:  {
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
		template: (addressLine1, addressLine2, addressLine3, region) => {
			const addressLines = {
				GBR: (
					<>
						{' '}
						{addressLine1}
						{addressLine2}
						{addressLine3}{' '}
					</>
				),
				USA: (
					<>
						{' '}
						{addressLine1}
						{addressLine3}
						{addressLine2}{' '}
					</>
				),
				CAN: (
					<>
						{' '}
						{addressLine1}
						{addressLine3}
						{addressLine2}{' '}
					</>
				),

				CEMEA_V1: (
					<>
						{' '}
						{addressLine1}
						{addressLine2}
						{addressLine3}{' '}
					</>
				),
				CEMEA_V2:(
					<>
						{' '}
						{addressLine1}
						{addressLine2}
						{addressLine3}{' '}
					</>
				)
			};
			return addressLines[region];
		}
	},
	'company': {
		addressLine1Placeholder: {
			GBR: 'e.g. 10 Elm Street',
			USA: 'e.g. 10 Elm St.',
			CAN: 'e.g. 36 Poirier Blvd.',
			CEMEA_V1: 'Street and House Number',
			CEMEA_V2: 'House Number and Street',
		},
		addressLine2Placeholder: {
			CEMEA_V1: 'Apt No./Floor/Building/Department',
			CEMEA_V2: 'Apt No./Floor/Building/Department',
		},
		addressLine3Placeholder: {
			USA: 'e.g Apt 2C / FL 10 / STE 50',
			CAN: 'e.g Apt 2C / FL 10 / STE 50',
			CEMEA_V1: 'Department name/job title',
			CEMEA_V2: 'Department name/job title',
		},
		addressLine3Title:  {
			GBR: 'Address line 3',
			USA: 'APT/FL/STE',
			CAN: 'APT/FL/STE',
			CEMEA_V1: 'Address line 3',
			CEMEA_V3: 'Address line 3',
		},
		addressLine3Prompt: {
			USA: 'Max. 6 characters. Please enter “Apartment 2C” as “Apt 2C”, “Floor 10 as FL 10”',
			CAN: 'Max. 6 characters. Please enter “Apartment 2C” as “Apt 2C”, “Floor 10 as FL 10”',
		},
		template: (addressLine1, addressLine2, addressLine3, region) => {
			const addressLines = {
				GBR: (
					<>
						{' '}
						{addressLine1}
						{addressLine2}
						{addressLine3}{' '}
					</>
				),
				USA: (
					<>
						{' '}
						{addressLine1}
						{addressLine3}
						{addressLine2}{' '}
					</>
				),
				CAN: (
					<>
						{' '}
						{addressLine1}
						{addressLine3}
						{addressLine2}{' '}
					</>
				),

				CEMEA_V1: (
					<>
						{' '}
						{addressLine1}
						{addressLine2}
						{addressLine3}{' '}
					</>
				),
				CEMEA_V2:(
					<>
						{' '}
						{addressLine1}
						{addressLine2}
						{addressLine3}{' '}
					</>
				)
			};
			return addressLines[region];
		}
	},
	'pobox': {
		addressLine1Placeholder: {
			GBR: 'e.g. 10 Elm Street',
			USA: 'e.g. 10 Elm St.',
			CAN: 'e.g. 36 Poirier Blvd.',
			CEMEA_V1: 'P.O. Box',
			CEMEA_V2: 'P.O. Box',
		},
		addressLine2Placeholder: {
		},
		addressLine3Placeholder: {
		},
		addressLine3Title:  {
			GBR: 'Address line 3',
			USA: 'APT/FL/STE',
			CAN: 'APT/FL/STE',
		},
		addressLine3Prompt: {
			USA: 'Max. 6 characters. Please enter “Apartment 2C” as “Apt 2C”, “Floor 10 as FL 10”',
			CAN: 'Max. 6 characters. Please enter “Apartment 2C” as “Apt 2C”, “Floor 10 as FL 10”',
		},
		template: (addressLine1, addressLine2, addressLine3, region) => {
			const addressLines = {
				GBR: (
					<>
						{' '}
						{addressLine1}
						{addressLine2}
						{addressLine3}{' '}
					</>
				),
				USA: (
					<>
						{' '}
						{addressLine1}
						{addressLine3}
						{addressLine2}{' '}
					</>
				),
				CAN: (
					<>
						{' '}
						{addressLine1}
						{addressLine3}
						{addressLine2}{' '}
					</>
				),

				CEMEA_V1: (
					<>
						{' '}
						{addressLine1}{' '}
					</>
				),
				CEMEA_V2:(
					<>
						{' '}
						{addressLine1}{' '}
					</>
				)
			};
			return addressLines[region];
		}
	},
};

module.exports = deliveryAddressMap;
