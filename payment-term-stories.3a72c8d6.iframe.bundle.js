"use strict";(self.webpackChunk_financial_times_n_conversion_forms=self.webpackChunk_financial_times_n_conversion_forms||[]).push([[8968],{"./components/payment-term.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,FixedTermOffer:()=>FixedTermOffer,PaymentTermLabelOverride:()=>PaymentTermLabelOverride,RenewOffers:()=>RenewOffers,SevenDayPassExperimentOffer:()=>SevenDayPassExperimentOffer,TermedSubscriptionTermType:()=>TermedSubscriptionTermType,__namedExportsOrder:()=>__namedExportsOrder,default:()=>payment_term_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),fieldset=__webpack_require__("./components/fieldset.jsx"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),n_pricing=__webpack_require__("./node_modules/@financial-times/n-pricing/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.c)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function PaymentTerm(_ref){var _ref$fieldId=_ref.fieldId,fieldId=void 0===_ref$fieldId?"paymentTermField":_ref$fieldId,_ref$inputName=_ref.inputName,inputName=void 0===_ref$inputName?"paymentTerm":_ref$inputName,_ref$isPrintOrBundle=_ref.isPrintOrBundle,isPrintOrBundle=void 0!==_ref$isPrintOrBundle&&_ref$isPrintOrBundle,_ref$isEpaper=_ref.isEpaper,isEpaper=void 0!==_ref$isEpaper&&_ref$isEpaper,_ref$options=_ref.options,options=void 0===_ref$options?[]:_ref$options,_ref$isFixedTermOffer=_ref.isFixedTermOffer,isFixedTermOffer=void 0!==_ref$isFixedTermOffer&&_ref$isFixedTermOffer,offerDisplayName=_ref.offerDisplayName,_ref$showLegal=_ref.showLegal,showLegal=void 0===_ref$showLegal||_ref$showLegal,_ref$largePrice=_ref.largePrice,largePrice=void 0!==_ref$largePrice&&_ref$largePrice,_ref$optionsInARow=_ref.optionsInARow,optionsInARow=void 0!==_ref$optionsInARow&&_ref$optionsInARow,_ref$billingCountry=_ref.billingCountry,billingCountry=void 0===_ref$billingCountry?"":_ref$billingCountry,_ref$is7DayPassExperi=_ref.is7DayPassExperiment,is7DayPassExperiment=void 0!==_ref$is7DayPassExperi&&_ref$is7DayPassExperi,_ref$isTermedSubscrip=_ref.isTermedSubscriptionTermType,isTermedSubscriptionTermType=void 0!==_ref$isTermedSubscrip&&_ref$isTermedSubscrip,_ref$isTrialOfferAsNo=_ref.isTrialOfferAsNonTrialOverride,isTrialOfferAsNonTrialOverride=void 0!==_ref$isTrialOfferAsNo&&_ref$isTrialOfferAsNo,_ref$labelOverride=_ref.labelOverride,labelOverride=void 0===_ref$labelOverride?"":_ref$labelOverride,getMonthlyPriceFromPeriod=function getMonthlyPriceFromPeriod(amount,currency,period){var monthlyPrice=new n_pricing.Period(period).calculatePrice("P1M",amount);return new n_pricing.Monthly({value:monthlyPrice,currency}).getAmount("monthly")},getTimeFromPeriod=function getTimeFromPeriod(period){var freq={Y:"years",M:"months",W:"weeks",D:"days"}[period.substring(period.length-1)]||"",amount=period.substring(1,period.length-1);return period?"".concat(amount," ").concat(freq):""},isValidPeriod=function isValidPeriod(period){try{return new n_pricing.Period("string"==typeof period?period:""),!0}catch(e){return!1}},nameMap={annual:{title:"Annual",price:function price(_price){return(0,jsx_runtime.jsxs)(react.Fragment,{children:["Single"," ",(0,jsx_runtime.jsx)("span",{className:"ncf__payment-term__price ncf__strong",children:_price})," ","payment"]})},trialPrice:function trialPrice(price){return(0,jsx_runtime.jsxs)(react.Fragment,{children:["Unless you cancel during your trial you will be billed"," ",(0,jsx_runtime.jsx)("span",{className:"ncf__payment-term__price",children:price})," per year after the trial period."]})},monthlyPrice:function monthlyPrice(price){return price&&(0,jsx_runtime.jsxs)("span",{className:"ncf__payment-term__equivalent-price",children:["That’s equivalent to"," ",(0,jsx_runtime.jsx)("span",{className:"ncf__payment-term__monthly-price",children:price})," ","per month"]})},renewsText:function renewsText(){return(0,jsx_runtime.jsx)("p",{className:"ncf__payment-term__renews-text",children:"Renews annually unless cancelled"})}},quarterly:{title:"Quarterly",price:function price(_price2){return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:"ncf__payment-term__price",children:_price2})," per quarter"]})},trialPrice:function trialPrice(price){return(0,jsx_runtime.jsxs)(react.Fragment,{children:["Unless you cancel during your trial you will be billed"," ",(0,jsx_runtime.jsx)("span",{className:"ncf__payment-term__price",children:price})," per quarter after the trial period."]})},monthlyPrice:function monthlyPrice(){},renewsText:function renewsText(){return(0,jsx_runtime.jsx)("p",{className:"ncf__payment-term__renews-text",children:"Renews quarterly unless cancelled"})}},monthly:{title:"Monthly",price:function price(_price3,is7DayPassExperiment){var paymentIntervalTextToDisplay=is7DayPassExperiment?" one-time payment":" per month";return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:"ncf__payment-term__price",children:_price3}),paymentIntervalTextToDisplay]})},trialPrice:function trialPrice(price){return(0,jsx_runtime.jsxs)(react.Fragment,{children:["Unless you cancel during your trial you will be billed"," ",(0,jsx_runtime.jsx)("span",{className:"ncf__payment-term__price",children:price})," per month after the trial period."]})},monthlyPrice:function monthlyPrice(){},renewsText:function renewsText(isFixedTermOffer){var textToDisplay=is7DayPassExperiment?"This subscription is for 7 days, charged at the outset.":isFixedTermOffer?"This subscription is for 3 months, charged monthly. You can cancel at anytime":"Renews monthly unless cancelled";return(0,jsx_runtime.jsx)("p",{className:"ncf__payment-term__renews-text",children:textToDisplay})}},custom:{price:function price(_price4){return(0,jsx_runtime.jsxs)(react.Fragment,{children:["Single"," ",(0,jsx_runtime.jsx)("span",{className:"ncf__payment-term__price ncf__strong",children:_price4})," ","payment"]})},trialPrice:function trialPrice(_trialPrice,trialPeriod){return(0,jsx_runtime.jsxs)(react.Fragment,{children:["Unless you cancel during your trial you will be billed"," ",(0,jsx_runtime.jsx)("span",{className:"ncf__payment-term__price",children:_trialPrice})," per"," ",trialPeriod,"after the trial period."]})},monthlyPrice:function monthlyPrice(_monthlyPrice){return Boolean(_monthlyPrice)&&(0,jsx_runtime.jsxs)("span",{className:"ncf__payment-term__equivalent-price",children:["That’s equivalent to"," ",(0,jsx_runtime.jsx)("span",{className:"ncf__payment-term__monthly-price",children:_monthlyPrice})," ","per month"]})},renewsText:function renewsText(renewalPeriod){return!isTermedSubscriptionTermType&&Boolean(renewalPeriod)&&(0,jsx_runtime.jsxs)("p",{className:"ncf__payment-term__renews-text",children:["Renews every ",renewalPeriod," unless cancelled"]})}}};return(0,jsx_runtime.jsxs)("div",{id:fieldId,className:"o-forms__group ncf__payment-term","data-country-code":billingCountry,children:[(0,jsx_runtime.jsx)("div",{className:optionsInARow?"ncf__payment-term__options-grid":"",children:options.map((function(option){return function createPaymentTerm(option){var className=classnames_default()(["ncf__payment-term__item","o-forms-input--radio-round",{"ncf__payment-term__item--discount":option.discount}]),props=_objectSpread({type:"radio",id:option.value,"data-base-amount":option.isTrial?option.trialAmount:option.amount,name:inputName,value:option.value,className:"o-forms-input__radio o-forms-input__radio--right ncf__payment-term__input"},option.selected&&{defaultChecked:!0});return(0,jsx_runtime.jsxs)("div",{className,children:[(0,jsx_runtime.jsx)("input",_objectSpread({},props)),(0,jsx_runtime.jsxs)("label",{htmlFor:option.value,className:"o-forms-input__label ncf__payment-term__label",children:[function createDiscount(){return option.discount&&(0,jsx_runtime.jsx)("span",{className:"ncf__payment-term__discount",children:option.bestOffer?"Best offer":"Save ".concat(option.discount," off RRP")})}(),function createB2cDiscountCopy(){return"annual"===option.name&&option.b2cPartnership&&option.b2cDiscountCopy&&(0,jsx_runtime.jsx)("span",{className:"ncf__payment-term__discount",children:option.b2cDiscountCopy})}(),(0,jsx_runtime.jsxs)("span",{className:classnames_default()(["ncf__payment-term__title",{"ncf__payment-term__title--large-price":largePrice}]),children:[function getTermDisplayName(){var showTrialCopyInTitle=option.isTrial&&!isPrintOrBundle&&!isEpaper;if(isTrialOfferAsNonTrialOverride&&labelOverride)return labelOverride;var defaultTitle=is7DayPassExperiment?"":Boolean(option.name&&nameMap[option.name])?nameMap[option.name].title:"",title=isFixedTermOffer?[offerDisplayName,defaultTitle].filter(Boolean).join(" - "):defaultTitle,termDisplayName="";if(showTrialCopyInTitle){var termName=option.displayName?option.displayName:"Premium Digital";termDisplayName="Trial: ".concat(termName," - ")}var termPeriod=function getTermPeriod(){return nameMap[option.name]?title:isValidPeriod(option.value)?getTimeFromPeriod(option.value):option.title}();return"".concat(termDisplayName).concat(termPeriod," ")}(),option.subTitle&&(0,jsx_runtime.jsx)("span",{className:"ncf__regular ncf__payment-term__sub-title",children:option.subTitle})]}),function createDescription(){return option.isTrial?(0,jsx_runtime.jsxs)("div",{className:"ncf__payment-term__description",children:[option.trialDuration||"4 weeks"," for"," ",(0,jsx_runtime.jsx)("span",{className:"ncf__payment-term__trial-price",children:option.trialPrice}),(0,jsx_runtime.jsx)("br",{}),nameMap[option.name]&&nameMap[option.name].trialPrice(option.price)]}):(0,jsx_runtime.jsx)(react.Fragment,{children:nameMap[option.name]?(0,jsx_runtime.jsxs)("div",{className:"ncf__payment-term__description",children:[nameMap[option.name].price(option.price,is7DayPassExperiment),nameMap[option.name].monthlyPrice(option.monthlyPrice),nameMap[option.name].renewsText(isFixedTermOffer,is7DayPassExperiment)]}):isValidPeriod(option.value)?(0,jsx_runtime.jsxs)("div",{className:"ncf__payment-term__description",children:[nameMap.custom.price(option.price),nameMap.custom.monthlyPrice(option.monthlyPrice&&"0"!==option.monthlyPrice?Number(option.monthlyPrice):getMonthlyPriceFromPeriod(option.amount,option.currency,option.value)),nameMap.custom.renewsText(getTimeFromPeriod(option.value))]}):(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("span",{className:largePrice?"ncf__payment-term__large-price":"",children:option.price}),option.chargeOnText&&(0,jsx_runtime.jsx)("p",{className:"ncf__payment-term__charge-on-text",children:option.chargeOnText})]})})}()]})]},option.value)}(option)}))}),showLegal&&(0,jsx_runtime.jsx)("div",{className:"ncf__payment-term__legal",children:isTermedSubscriptionTermType||isFixedTermOffer?(0,jsx_runtime.jsxs)("p",{children:["Find out more about our cancellation policy in our"," ",(0,jsx_runtime.jsx)("a",{className:"ncf__link--external",href:"https://help.ft.com/legal-privacy/terms-and-conditions/",title:"FT Legal Terms and Conditions help page",target:"_blank",rel:"noopener noreferrer",children:"Terms & Conditions"}),"."]}):(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("p",{children:"With all subscription types, we will automatically renew your subscription using the payment method provided unless you cancel before your renewal date."}),(0,jsx_runtime.jsxs)("p",{children:["We will notify you at least 14 days in advance of any changes to the price in your subscription that would apply upon next renewal. Find out more about our cancellation policy in our"," ",(0,jsx_runtime.jsx)("a",{className:"ncf__link--external",href:"https://help.ft.com/legal-privacy/terms-and-conditions/",title:"FT Legal Terms and Conditions help page",target:"_blank",rel:"noopener noreferrer",children:"Terms & Conditions"}),"."]})]})})]})}function payment_term_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function payment_term_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?payment_term_stories_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.c)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):payment_term_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}PaymentTerm.displayName="PaymentTerm",PaymentTerm.propTypes={fieldId:prop_types_default().string,inputName:prop_types_default().string,isPrintOrBundle:prop_types_default().bool,isEpaper:prop_types_default().bool,options:prop_types_default().arrayOf(prop_types_default().shape({b2cDiscountCopy:prop_types_default().string,isB2cPartnership:prop_types_default().bool,discount:prop_types_default().string,isTrial:prop_types_default().bool,name:prop_types_default().string.isRequired,price:prop_types_default().string.isRequired,selected:prop_types_default().bool,trialDuration:prop_types_default().string,trialPrice:prop_types_default().string,amount:prop_types_default().string,trialAmount:prop_types_default().number,value:prop_types_default().string.isRequired,monthlyPrice:prop_types_default().string,title:prop_types_default().string,subTitle:prop_types_default().string,bestOffer:prop_types_default().bool,chargeOnText:prop_types_default().string,fulfilmentOption:prop_types_default().string})),isFixedTermOffer:prop_types_default().bool,isTermedSubscriptionTermType:prop_types_default().bool,offerDisplayName:prop_types_default().string,showLegal:prop_types_default().bool,largePrice:prop_types_default().bool,optionsInARow:prop_types_default().bool,billingCountry:prop_types_default().string,isTrialOfferAsNonTrialOverride:prop_types_default().bool},PaymentTerm.__docgenInfo={description:"",methods:[],displayName:"PaymentTerm",props:{fieldId:{defaultValue:{value:"'paymentTermField'",computed:!1},description:"",type:{name:"string"},required:!1},inputName:{defaultValue:{value:"'paymentTerm'",computed:!1},description:"",type:{name:"string"},required:!1},isPrintOrBundle:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isEpaper:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{b2cDiscountCopy:{name:"string",required:!1},isB2cPartnership:{name:"bool",required:!1},discount:{name:"string",required:!1},isTrial:{name:"bool",required:!1},name:{name:"string",required:!0},price:{name:"string",required:!0},selected:{name:"bool",required:!1},trialDuration:{name:"string",required:!1},trialPrice:{name:"string",required:!1},amount:{name:"string",required:!1},trialAmount:{name:"number",required:!1},value:{name:"string",required:!0},monthlyPrice:{name:"string",required:!1},title:{name:"string",required:!1},subTitle:{name:"string",required:!1},bestOffer:{name:"bool",required:!1},chargeOnText:{name:"string",required:!1},fulfilmentOption:{name:"string",required:!1}}}},required:!1},isFixedTermOffer:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},showLegal:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},largePrice:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},optionsInARow:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},billingCountry:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},is7DayPassExperiment:{defaultValue:{value:"false",computed:!1},required:!1},isTermedSubscriptionTermType:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isTrialOfferAsNonTrialOverride:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},labelOverride:{defaultValue:{value:"''",computed:!1},required:!1},offerDisplayName:{description:"",type:{name:"string"},required:!1}}};const payment_term_stories={title:"Payment Term",component:PaymentTerm};var Basic=function Basic(args){return(0,jsx_runtime.jsx)("div",{className:"ncf",children:(0,jsx_runtime.jsx)(fieldset.o,{children:(0,jsx_runtime.jsx)(PaymentTerm,payment_term_stories_objectSpread({},args))})})};Basic.displayName="Basic",Basic.args={options:[{name:"2 yearly",isTrial:!0,discount:"",selected:!1,price:"$645.00",trialPrice:"$100.00",trialDuration:"Trial period",monthlyPrice:"0",amount:"645.00",trialAmount:100,value:"P2Y",currency:"USD"},{name:"3 yearly",isTrial:!1,discount:"",selected:!1,price:"$909.00",trialPrice:"$0.00",trialDuration:"",monthlyPrice:"0",amount:"909.00",trialAmount:null,value:"P3Y",currency:"USD"},{name:"6 monthly",isTrial:!1,discount:"",selected:!1,price:"$229.00",trialPrice:"$0.00",trialDuration:"",monthlyPrice:"0",amount:"229.00",trialAmount:null,value:"P6M",currency:"USD"},{name:"annual",isTrial:!1,discount:"",selected:!0,price:"$385.00",trialPrice:"$0.00",trialDuration:"",monthlyPrice:"$32.09",amount:"385.00",trialAmount:null,value:"P1Y",currency:"USD"},{name:"quarterly",isTrial:!1,discount:"",selected:!1,price:"$95.00",trialPrice:"$0.00",trialDuration:"",monthlyPrice:"$31.67",amount:"95.00",trialAmount:null,value:"P3M",currency:"USD"}]};var FixedTermOffer=function FixedTermOffer(args){return(0,jsx_runtime.jsx)("div",{className:"ncf",children:(0,jsx_runtime.jsx)(fieldset.o,{children:(0,jsx_runtime.jsx)(PaymentTerm,payment_term_stories_objectSpread({},args))})})};FixedTermOffer.displayName="FixedTermOffer",FixedTermOffer.args={options:[{name:"monthly",price:"$5.00",value:5}],isFixedTermOffer:!0,offerDisplayName:"Mix & Match"};var SevenDayPassExperimentOffer=function SevenDayPassExperimentOffer(args){return(0,jsx_runtime.jsx)("div",{className:"ncf",children:(0,jsx_runtime.jsx)(fieldset.o,{children:(0,jsx_runtime.jsx)(PaymentTerm,payment_term_stories_objectSpread({},args))})})};SevenDayPassExperimentOffer.displayName="SevenDayPassExperimentOffer",SevenDayPassExperimentOffer.args={options:[{name:"monthly",price:"$5.00",value:5}],isFixedTermOffer:!0,is7DayPassExperiment:!0,offerDisplayName:"7-day pass"};var TermedSubscriptionTermType=function TermedSubscriptionTermType(args){return(0,jsx_runtime.jsx)("div",{className:"ncf",children:(0,jsx_runtime.jsx)(fieldset.o,{children:(0,jsx_runtime.jsx)(PaymentTerm,payment_term_stories_objectSpread({},args))})})};TermedSubscriptionTermType.displayName="TermedSubscriptionTermType",TermedSubscriptionTermType.args={options:[{name:"8 weeks",price:"£19.00",amount:"19.00",value:"P8W"}],isTermedSubscriptionTermType:!0};var RenewOffers=function RenewOffers(args){return(0,jsx_runtime.jsx)("div",{className:"ncf",children:(0,jsx_runtime.jsx)(fieldset.o,{children:(0,jsx_runtime.jsx)(PaymentTerm,payment_term_stories_objectSpread({},args))})})};RenewOffers.displayName="RenewOffers",RenewOffers.args={showLegal:!1,largePrice:!0,options:[{title:"Annual",subTitle:"(Renews annually unless cancelled)",price:"€ 270.00",value:270,isTrial:!1,discount:"33%",bestOffer:!0,selected:!1,chargeOnText:"You will be charged on May 1, 2021"},{title:"12 Month Subscription",price:"€ 300.00",value:300,isTrial:!1,discount:"10%",selected:!0,chargeOnText:"You will be charged on May 1, 2021"}],optionsInARow:!0};var PaymentTermLabelOverride=function PaymentTermLabelOverride(args){return(0,jsx_runtime.jsx)("div",{className:"ncf",children:(0,jsx_runtime.jsx)(fieldset.o,{children:(0,jsx_runtime.jsx)(PaymentTerm,payment_term_stories_objectSpread({},args))})})};PaymentTermLabelOverride.displayName="PaymentTermLabelOverride",PaymentTermLabelOverride.args={isTrialOfferAsNonTrialOverride:!0,labelOverride:"some fancy payment term",options:[{name:"6 monthly",isTrial:!1,discount:"",selected:!1,price:"$229.00",trialPrice:"$0.00",trialDuration:"",monthlyPrice:"0",amount:"229.00",trialAmount:null,value:"P6M",currency:"USD"}]},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'args => <div className="ncf">\n        <Fieldset>\n            <PaymentTerm {...args} />\n        </Fieldset>\n    </div>',...Basic.parameters?.docs?.source}}},FixedTermOffer.parameters={...FixedTermOffer.parameters,docs:{...FixedTermOffer.parameters?.docs,source:{originalSource:'args => <div className="ncf">\n        <Fieldset>\n            <PaymentTerm {...args} />\n        </Fieldset>\n    </div>',...FixedTermOffer.parameters?.docs?.source}}},SevenDayPassExperimentOffer.parameters={...SevenDayPassExperimentOffer.parameters,docs:{...SevenDayPassExperimentOffer.parameters?.docs,source:{originalSource:'args => <div className="ncf">\n        <Fieldset>\n            <PaymentTerm {...args} />\n        </Fieldset>\n    </div>',...SevenDayPassExperimentOffer.parameters?.docs?.source}}},TermedSubscriptionTermType.parameters={...TermedSubscriptionTermType.parameters,docs:{...TermedSubscriptionTermType.parameters?.docs,source:{originalSource:'args => <div className="ncf">\n        <Fieldset>\n            <PaymentTerm {...args} />\n        </Fieldset>\n    </div>',...TermedSubscriptionTermType.parameters?.docs?.source}}},RenewOffers.parameters={...RenewOffers.parameters,docs:{...RenewOffers.parameters?.docs,source:{originalSource:'args => <div className="ncf">\n        <Fieldset>\n            <PaymentTerm {...args} />\n        </Fieldset>\n    </div>',...RenewOffers.parameters?.docs?.source}}},PaymentTermLabelOverride.parameters={...PaymentTermLabelOverride.parameters,docs:{...PaymentTermLabelOverride.parameters?.docs,source:{originalSource:'args => <div className="ncf">\n        <Fieldset>\n            <PaymentTerm {...args} />\n        </Fieldset>\n    </div>',...PaymentTermLabelOverride.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","FixedTermOffer","SevenDayPassExperimentOffer","TermedSubscriptionTermType","RenewOffers","PaymentTermLabelOverride"]},"./components/fieldset.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Fieldset});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.c)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Fieldset(_ref){var _ref$children=_ref.children,children=void 0===_ref$children?null:_ref$children,_ref$name=_ref.name,name=void 0===_ref$name?null:_ref$name,_ref$legend=_ref.legend,legend=void 0===_ref$legend?null:_ref$legend,_ref$hideLegend=_ref.hideLegend,hideLegend=void 0!==_ref$hideLegend&&_ref$hideLegend,_ref$headingLevel=_ref.headingLevel,HeadingLevel=void 0===_ref$headingLevel?null:_ref$headingLevel,_ref$header=_ref.header,header=void 0===_ref$header?null:_ref$header,_ref$descriptor=_ref.descriptor,descriptor=void 0===_ref$descriptor?null:_ref$descriptor,fieldsetProps=_objectSpread(_objectSpread({},name&&{name}),{},{className:"ncf__fieldset"}),legendClassName=classnames__WEBPACK_IMPORTED_MODULE_2___default()(["ncf__legend",{"o-normalise-visually-hidden":hideLegend}]),legendElement=legend?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("legend",{className:legendClassName,children:legend}):null,headingLevelElement=HeadingLevel?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(HeadingLevel,{className:"ncf__header",children:header}):null,descriptorElement=descriptor?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"ncf__fieldset-descriptor",children:descriptor}):null;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("fieldset",_objectSpread(_objectSpread({},fieldsetProps),{},{children:[legendElement,headingLevelElement,descriptorElement,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"ncf__fields",children})]}))}Fieldset.displayName="Fieldset",Fieldset.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),prop_types__WEBPACK_IMPORTED_MODULE_4___default().node]),name:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,legend:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,hideLegend:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,headingLevel:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,header:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,descriptor:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node},Fieldset.__docgenInfo={description:"",methods:[],displayName:"Fieldset",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!1},name:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},legend:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},hideLegend:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},headingLevel:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},header:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},descriptor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}}}}]);