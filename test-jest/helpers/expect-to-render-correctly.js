import ReactDOMServer from 'react-dom/server';

export const expectToRenderCorrectly = {
	toRenderCorrectly (reactComponent, props) {
		// Render the React component with props.
		const ReactComponentRendered = ReactDOMServer.renderToStaticMarkup(reactComponent(props));

		expect(ReactComponentRendered).toMatchSnapshot();

		// This point is reached when the above assertions were successful.
		// The test should therefore always pass, that means it needs to be
		// `true` when used normally, and `false` when `.not` was used.
		return {
			pass: !this.isNot
		};
	}
};
