import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function ProgressIndicator ({
	items = []
}) {
	function getElementsForComplete (item) {
		return (
			<a
				href={item.url}
				className="o-stepped-progress__step o-stepped-progress__step--complete"
				data-trackable="change-progress"
			>
				<span className="o-stepped-progress__label">
					{item.name}<i className="ncf__icon ncf__icon--inline-edit"></i> <span className="o-stepped-progress__status">(completed)</span>
				</span>
			</a>
		);
	};

	function getElementsForNonComplete (item) {
		const nonCompleteDivClassName = classNames([
			'o-stepped-progress__step',
			{ 'o-stepped-progress__step--current': item.isCurrent }
		]);

		return (
			<div className={nonCompleteDivClassName}>
				<span className="o-stepped-progress__label">
					{item.name} { item.isCurrent && (<span className="o-stepped-progress__status">(current step)</span>) }
				</span>
			</div>
		);
	};

	return (
		<div className="ncf__stepped-progress o-stepped-progress" data-o-component="o-stepped-progress">
			<ol className="o-stepped-progress__steps">
				{
					items.map((item, index) => {
						return (
							<li key={index}>
								{
									item.isComplete
										? (getElementsForComplete(item))
										: (getElementsForNonComplete(item))
								}
							</li>
						);
					})
				}
			</ol>
		</div>
	);
}

ProgressIndicator.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		isComplete: PropTypes.bool,
		isCurrent: PropTypes.bool,
		name: PropTypes.string,
		url: PropTypes.string,
	}))
};
