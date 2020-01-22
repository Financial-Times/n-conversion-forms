import React from 'react';
import * as ncf from '../dist/index';
import ReactDOM from 'react-dom';
import fixture from './data.jsx';

function initDemo () {
	const container = document.querySelector('#demoContent');

	const element =
		<React.Fragment>
			<ncf.AcceptTerms isSignup={true} isPrintProduct={true} isTrial={true}/>
			<ncf.AppBanner />
			<ncf.BillingCountry></ncf.BillingCountry>
			<ncf.BillingPostcode postcodeReference={'billing postcode'}/>
			<ncf.CompanyName />
			<ncf.Confirmation />
			<ncf.ContinueReading />
			<ncf.Country />
			<ncf.CustomerCare />
			<ncf.Debug />
			<ncf.DecisionMaker />
			<ncf.DeliveryAddress />
			<ncf.DeliveryCity />
			<ncf.DeliveryCounty />
			<ncf.DeliveryInstructions hasSignupSecurityNote={true} />
			<ncf.DeliveryOption options={[
				{
					value: 'PV',
					isSelected: true
				},
				{
					value: 'HD',
					isSelected: false
				},
				{
					value: 'EV',
					isSelected: false
				}
			]} />
			<ncf.DeliveryPostcode postcodeReference={'delivery postcode'}/>
			<ncf.DeliveryStartDate />
			<ncf.Email />
			<ncf.ErrorPage />
			<ncf.Fieldset />
			<ncf.FirstName />
			<ncf.Form />
			<ncf.Industry />
			<ncf.JobTitle />
			<ncf.LastName />
			<ncf.LicenceConfirmation />
			<ncf.LicenceHeader />
			<ncf.Loader />
			<ncf.Message {...fixture['message'].params}/>
			<ncf.PackageChange />
			<ncf.Password />
			<ncf.PaymentType />
			<ncf.Phone />
			<ncf.Position />
			<ncf.ProgressIndicator />
			<ncf.Province />
			<ncf.RegistrationConfirmation />
			<ncf.Responsibility />
			<ncf.Section />
			<ncf.State />
			<ncf.Submit />
			<ncf.TrialBanner />
		</React.Fragment>
	;
	ReactDOM.render(element, container);
}

initDemo();
