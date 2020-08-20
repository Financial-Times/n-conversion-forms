import { Message } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('Message', () => {
	it('render a message', () => {
		const props = {
			message: 'My message in a bottle',
		};

		expect(Message).toRenderCorrectly(props);
	});

	it('can render a title', () => {
		const props = {
			title: 'Reggatta de Blanc',
			message: 'My message in a bottle'
		};

		expect(Message).toRenderCorrectly(props);
	});

	it('can render additional information', () => {
		const props = {
			title: 'Reggatta de Blanc',
			message: 'My message in a bottle',
			additional: ['Sting', 'Steward Copeland', 'Andy Summers']
		};

		expect(Message).toRenderCorrectly(props);
	});

	it('can render some actions as primary', () => {
		const props = {
			title: 'Reggatta de Blanc',
			message: 'My message in a bottle',
			actions: [{
				text: 'Listen on Spotify',
				link: 'https://open.spotify.com/album/2EpuND32cO7CX0gXZl2NB6'
			}]
		};

		expect(Message).toRenderCorrectly(props);
	});

	it('can render some actions as secondary', () => {
		const props = {
			title: 'Reggatta de Blanc',
			message: 'My message in a bottle',
			actions: [{
				text: 'Listen on Spotify',
				link: 'https://open.spotify.com/album/2EpuND32cO7CX0gXZl2NB6',
				isSecondary: true
			}]
		};

		expect(Message).toRenderCorrectly(props);
	});

	it('can render a message as a Notice', () => {
		const props = {
			message: 'My message in a bottle',
			isNotice: true
		};

		expect(Message).toRenderCorrectly(props);
	});

	it('can render a message as an Error', () => {
		const props = {
			message: 'My message in a bottle',
			isError: true
		};

		expect(Message).toRenderCorrectly(props);
	});

	it('can render a message as a Success', () => {
		const props = {
			message: 'My message in a bottle',
			isSuccess: true
		};

		expect(Message).toRenderCorrectly(props);
	});

	it('can render a message as an Inform', () => {
		const props = {
			message: 'My message in a bottle',
			isInform: true
		};

		expect(Message).toRenderCorrectly(props);
	});

	it('can add a data attribute name', () => {
		const props = {
			message: 'My message in a bottle',
			name: 'The Police best album ever'
		};

		expect(Message).toRenderCorrectly(props);
	});


});
