import { Country } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('Country', () => {
	it('renders with default props', () => {
		const props = {};

		expect(Country).toRenderCorrectly(props);
	});

	it('renders with small filterList', () => {
		const props = {
			filterList: ['GBR'],
		};

		expect(Country).toRenderCorrectly(props);
	});

	it('renders with dataTrackable', () => {
		const props = {
			dataTrackable: 'some-trackable',
		};

		expect(Country).toRenderCorrectly(props);
	});

	it('renders with large filterList', () => {
		const props = {
			filterList: [
				'AFG',
				'ALA',
				'ALB',
				'DZA',
				'ASM',
				'AND',
				'AGO',
				'AIA',
				'ATA',
				'ATG',
				'ARG',
				'ARM',
				'ABW',
				'AUS',
				'AUT',
				'AZE',
				'BHS',
				'BHR',
				'BGD',
				'BRB',
			],
		};

		expect(Country).toRenderCorrectly(props);
	});

	it('renders with isB2b', () => {
		const props = {
			isB2b: true,
		};

		expect(Country).toRenderCorrectly(props);
	});

	it('renders with hasError', () => {
		const props = {
			hasError: true,
		};

		expect(Country).toRenderCorrectly(props);
	});

	it('renders with isDisabled', () => {
		const props = {
			isDisabled: true,
		};

		expect(Country).toRenderCorrectly(props);
	});

	it('renders with value', () => {
		const props = {
			value: 'GBR',
		};

		expect(Country).toRenderCorrectly(props);
	});

	it('renders with inputId', () => {
		const props = {
			inputId: 'some-other-name',
		};

		expect(Country).toRenderCorrectly(props);
	});

	it('renders with label', () => {
		const props = {
			label: 'Some Label',
		};

		expect(Country).toRenderCorrectly(props);
	});

	it('renders with errorText', () => {
		const props = {
			errorText: 'Some Error Text',
		};

		expect(Country).toRenderCorrectly(props);
	});
});
