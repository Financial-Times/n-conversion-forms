import React from 'react';
import * as ncf from '../dist/index';
import ReactDOM from 'react-dom';
import fixture from './data.json';

function initDemo () {
	const container = document.querySelector('#demoContent');

	const element =
		<React.Fragment>
			<ncf.BillingPostcode postcodeReference={'billing postcode'}/>
			<ncf.ContinueReading />
			<ncf.DeliveryPostcode postcodeReference={'delivery postcode'}/>
			<ncf.Email />
			<ncf.Fieldset />
			<ncf.FirstName />
			<ncf.Industry />
			<ncf.JobTitle />
			<ncf.Form />
			<ncf.LastName />
			<ncf.Message {...fixture['message'].params}/>
			<ncf.Password />
			<ncf.Phone />
			<ncf.Position />
			<ncf.Submit />
		</React.Fragment>
	;
	ReactDOM.render(element, container);
}

initDemo();
