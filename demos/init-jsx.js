import React from 'react';
import * as ncf from '../dist/index';
import ReactDOM from 'react-dom';
import fixture from './data.json';

function initDemo () {
	const container = document.querySelector('#demoContent');

	const element =
		<React.Fragment>
			<ncf.AppBanner />
			<ncf.AcceptTerms />
			<ncf.BillingPostcode postcodeReference={'billing postcode'}/>
			<ncf.CompanyName />
			<ncf.Confirmation />
			<ncf.ContinueReading />
			<ncf.CustomerCare />
			<ncf.DeliveryAddress />
			<ncf.DeliveryCity />
			<ncf.DeliveryCounty />
			<ncf.DecisionMaker />
			<ncf.DeliveryOption />
			<ncf.DeliveryInstructions />
			<ncf.DeliveryPostcode postcodeReference={'delivery postcode'}/>
			<ncf.DeliveryStartDate />
			<ncf.Email />
			<ncf.Fieldset />
			<ncf.FirstName />
			<ncf.Industry />
			<ncf.JobTitle />
			<ncf.Form />
			<ncf.LastName />
			<ncf.LicenceConfirmation />
			<ncf.LicenceHeader />
			<ncf.Message {...fixture['message'].params}/>
			<ncf.Password />
			<ncf.Phone />
			<ncf.Position />
			<ncf.Province />
			<ncf.ProgressIndicator />
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
