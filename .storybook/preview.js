// This will load the NCF base styles to allow components to have the required styles in the preview
import '!style-loader!css-loader!sass-loader!./styles.scss';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
};
