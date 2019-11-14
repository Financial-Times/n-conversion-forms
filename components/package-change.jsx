import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function PackageChange ({
	changePackageUrl,
	currentPackage,
	terms = []
}) {
	const nameMap = {
		annual: {
			title: 'Annually',
			price: term => <React.Fragment>Single <span className="ncf__package-change__price">{term.price}</span> payment*</React.Fragment>,
			weeklyPrice: term => <div className="ncf__package-change__weekly-price">Just <span className="ncf__package-change__price">{term.weeklyPrice}</span> per week</div>
		},
		quarterly: {
			title: 'Quarterly',
			price: term => <React.Fragment><span className="ncf__package-change__price">{term.price}</span> per quarter</React.Fragment>,
			weeklyPrice: () => {}
		},
		monthly: {
			title: 'Monthly',
			price: term => <React.Fragment><span className="ncf__package-change__price">{term.price}</span> per month</React.Fragment>,
			weeklyPrice: () => {}
		},
		// Payment term `trial` no longer exists due to changes to support multiple trial durations.
		// Left in to match the current partial which still supports this term.
		trial: {
			title: 'Try the FT',
			price: term => <React.Fragment>4 weeks for <span className="ncf__package-change__trial-price">{term.trialPrice}</span></React.Fragment>,
			weeklyPrice: () => {}
		}
	};
	const createDiscount = () => {
		return (terms.find(term => term.name === 'annual' && !term.discount)) && (
			<div className="ncf__package-change__annual-copy">
				* Save up to 25% when you pay annually. Discount varies across member states and across our subscription packages.
			</div>
		);
	};
	const createTerms = terms => {
		return terms.length > 0 && (
			<div className="ncf__package-change__terms">
				{terms.map(term => createTerm(term))}
				{createDiscount()}
			</div>
		);
	};
	const createTerm = term => {
		const className = classNames([
			'ncf__package-change__term',
			{ 'ncf__package-change__term--discounted': term.discount }
		]);
		const discount = term.discount && (<span className="ncf__package-change__discount">Save {term.discount}</span>);
		return (
			<div key={term.name} className={className}>
				<span className="ncf__package-change__title">{nameMap[term.name].title}</span>
				{discount}
				<div className="ncf__package-change__description">
					{nameMap[term.name].price(term)}
				</div>
				{nameMap[term.name].weeklyPrice(term)}
			</div>
		);
	};
	return (
		<div className="ncf__package-change">
			<div className="ncf__package-change__package">
				<p className="ncf__package-change__content">You have chosen <span className="ncf__strong">{currentPackage}</span></p>
				<div className="ncf__package-change__actions">
					<a href={changePackageUrl} className="ncf__button ncf__button--mono ncf__button--baseline" data-trackable="change">Change</a>
				</div>
			</div>

			{createTerms(terms)}
		</div>
	);
}

PackageChange.propTypes = {
	changePackageUrl: PropTypes.string.isRequired,
	currentPackage: PropTypes.string.isRequired,
	terms: PropTypes.arrayOf(PropTypes.shape({
		discount: PropTypes.string,
		name: PropTypes.string.isRequired,
		price: PropTypes.string,
		trialPrice: PropTypes.string,
		weeklyPrice: PropTypes.string,
	}))
};

export default PackageChange;
