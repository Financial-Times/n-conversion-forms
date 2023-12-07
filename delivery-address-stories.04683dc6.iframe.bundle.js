/*! For license information please see delivery-address-stories.04683dc6.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_financial_times_n_conversion_forms=self.webpackChunk_financial_times_n_conversion_forms||[]).push([[5406],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/typeof.js":module=>{function _typeof(o){return module.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},module.exports.__esModule=!0,module.exports.default=module.exports,_typeof(o)}module.exports=_typeof,module.exports.__esModule=!0,module.exports.default=module.exports},"./components/delivery-address.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,UKDeliveryAddress:()=>UKDeliveryAddress,USADeliveryAddress:()=>USADeliveryAddress,__namedExportsOrder:()=>__namedExportsOrder,default:()=>delivery_address_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),prop_types=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),constants=__webpack_require__("./helpers/constants.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),addressTemplateGenerator=(__webpack_require__("./node_modules/react/index.js"),function addressTemplateGenerator(addressLine1,addressLine2,addressLine3){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[addressLine1,addressLine2,addressLine3]})});const delivery_address_map={home:{addressLine1Placeholder:{GBR:"e.g. 10 Elm Street",USA:"e.g. 10 Elm St.",CAN:"e.g. 36 Poirier Blvd.",CEMEA_V1:"Street and House Number",CEMEA_V2:"House Number and Street",APAC:"Street name",ARE:"PO Box 12345"},addressLine2Placeholder:{CEMEA_V1:"Apt No./Floor/Building",CEMEA_V2:"Apt No./Floor/Building",APAC:"House/Apartment/Building name"},addressLine3Placeholder:{USA:"e.g Apt 2C / FL 10 / STE 50",CAN:"e.g Apt 2C / FL 10 / STE 50",CEMEA_V1:" ",CEMEA_V2:" ",APAC:"District/County/Province/Ward"},addressLine1Title:{ARE:"PO Box"},addressLine2AutoComplete:{USA:constants.addressLine3AutoComplete,CAN:constants.addressLine3AutoComplete},addressLine3AutoComplete:{USA:constants.addressLine2AutoComplete,CAN:constants.addressLine2AutoComplete},addressLine3Title:{GBR:"Address line 3",USA:"APT/FL/STE",CAN:"APT/FL/STE",CEMEA_V1:"Address line 3",CEMEA_V2:"Address line 3",APAC:"Address line 3"},addressLine3Prompt:{USA:"Max. 6 characters. Please enter “Apartment 2C” as “Apt 2C”, “Floor 10 as FL 10”",CAN:"Max. 6 characters. Please enter “Apartment 2C” as “Apt 2C”, “Floor 10 as FL 10”"},addressLine3MaxLength:{USA:6,CAN:6},template:function template(addressLine1,addressLine2,addressLine3,region){return{GBR:addressTemplateGenerator(addressLine1,addressLine2,addressLine3),USA:addressTemplateGenerator(addressLine1,addressLine3,addressLine2),CAN:addressTemplateGenerator(addressLine1,addressLine3,addressLine2),CEMEA_V1:addressTemplateGenerator(addressLine1,addressLine2,addressLine3),CEMEA_V2:addressTemplateGenerator(addressLine1,addressLine2,addressLine3),APAC:addressTemplateGenerator(addressLine1,addressLine2,addressLine3),ARE:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[" ",addressLine1," "]})}[region]}},company:{addressLine1Placeholder:{GBR:"e.g. 10 Elm Street",USA:"e.g. 10 Elm St.",CAN:"e.g. 36 Poirier Blvd.",CEMEA_V1:"Street and House Number",CEMEA_V2:"House Number and Street",APAC:"Street name",ARE:"PO Box 12345"},addressLine2Placeholder:{CEMEA_V1:"Apt No./Floor/Building/Department",CEMEA_V2:"Apt No./Floor/Building/Department",APAC:"House/Apartment/Building name"},addressLine3Placeholder:{USA:"e.g Apt 2C / FL 10 / STE 50",CAN:"e.g Apt 2C / FL 10 / STE 50",CEMEA_V1:"Department name/job title",CEMEA_V2:"Department name/job title",APAC:"District/County/Province/Ward"},addressLine3Title:{GBR:"Address line 3",USA:"APT/FL/STE",CAN:"APT/FL/STE",CEMEA_V1:"Address line 3",CEMEA_V2:"Address line 3"},addressLine3Prompt:{USA:"Max. 6 characters. Please enter “Apartment 2C” as “Apt 2C”, “Floor 10 as FL 10”",CAN:"Max. 6 characters. Please enter “Apartment 2C” as “Apt 2C”, “Floor 10 as FL 10”"},addressLine1Title:{ARE:"PO Box"},addressLine2AutoComplete:{USA:constants.addressLine3AutoComplete,CAN:constants.addressLine3AutoComplete},addressLine3AutoComplete:{USA:constants.addressLine2AutoComplete,CAN:constants.addressLine2AutoComplete},addressLine3MaxLength:{USA:6,CAN:6},template:function template(addressLine1,addressLine2,addressLine3,region){return{GBR:addressTemplateGenerator(addressLine1,addressLine2,addressLine3),USA:addressTemplateGenerator(addressLine1,addressLine3,addressLine2),CAN:addressTemplateGenerator(addressLine1,addressLine3,addressLine2),CEMEA_V1:addressTemplateGenerator(addressLine1,addressLine2,addressLine3),CEMEA_V2:addressTemplateGenerator(addressLine1,addressLine2,addressLine3),APAC:addressTemplateGenerator(addressLine1,addressLine2,addressLine3),ARE:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[" ",addressLine1," "]})}[region]}},pobox:{addressLine1Placeholder:{GBR:"e.g. 10 Elm Street",USA:"e.g. 10 Elm St.",CAN:"e.g. 36 Poirier Blvd.",CEMEA_V1:"P.O. Box",CEMEA_V2:"P.O. Box"},addressLine2Placeholder:{},addressLine3Placeholder:{},addressLine1Title:{},addressLine3Title:{GBR:"Address line 3",USA:"APT/FL/STE",CAN:"APT/FL/STE"},addressLine2AutoComplete:{USA:constants.addressLine3AutoComplete,CAN:constants.addressLine3AutoComplete},addressLine3AutoComplete:{USA:constants.addressLine2AutoComplete,CAN:constants.addressLine2AutoComplete},addressLine3Prompt:{USA:"Max. 6 characters. Please enter “Apartment 2C” as “Apt 2C”, “Floor 10 as FL 10”",CAN:"Max. 6 characters. Please enter “Apartment 2C” as “Apt 2C”, “Floor 10 as FL 10”"},addressLine3MaxLength:{},template:function template(addressLine1,addressLine2,addressLine3,region){return{GBR:addressTemplateGenerator(addressLine1,addressLine2,addressLine3),USA:addressTemplateGenerator(addressLine1,addressLine3,addressLine2),CAN:addressTemplateGenerator(addressLine1,addressLine3,addressLine2),CEMEA_V1:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[" ",addressLine1," "]}),CEMEA_V2:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[" ",addressLine1," "]})}[region]}}};var _Basic$parameters,_Basic$parameters2,_USADeliveryAddress$p,_USADeliveryAddress$p2,_UKDeliveryAddress$pa,_UKDeliveryAddress$pa2,supportedCountries=__webpack_require__("./helpers/supportedCountries.js");function DeliveryAddress(_ref){var _ref$fieldId=_ref.fieldId,fieldId=void 0===_ref$fieldId?"deliveryAddressFields":_ref$fieldId,_ref$hasError=_ref.hasError,hasError=void 0!==_ref$hasError&&_ref$hasError,_ref$line=_ref.line1,line1=void 0===_ref$line?"":_ref$line,_ref$line2=_ref.line2,line2=void 0===_ref$line2?"":_ref$line2,_ref$line3=_ref.line3,line3=void 0===_ref$line3?"":_ref$line3,_ref$isDisabled=_ref.isDisabled,isDisabled=void 0!==_ref$isDisabled&&_ref$isDisabled,_ref$isHidden=_ref.isHidden,isHidden=void 0!==_ref$isHidden&&_ref$isHidden,_ref$country=_ref.country,country=void 0===_ref$country?"GBR":_ref$country,_ref$addressType=_ref.addressType,addressType=void 0===_ref$addressType?"home":_ref$addressType,divClassNames=classnames_default()([{ncf__hidden:isHidden}]),inputWrapperClassNames=classnames_default()(["o-forms-input","o-forms-input--text",{"o-forms-input--invalid":hasError}]),FTShippingZone=(0,supportedCountries.identifyFTShippingZone)(country),addressLine1=(0,jsx_runtime.jsxs)("label",{className:"o-forms-field ncf__validation-error",htmlFor:"deliveryAddressLine1",children:[(0,jsx_runtime.jsx)("span",{className:"o-forms-title",children:(0,jsx_runtime.jsx)("span",{className:"o-forms-title__main",children:delivery_address_map[addressType].addressLine1Title[FTShippingZone]||"Address line 1"})}),(0,jsx_runtime.jsxs)("span",{className:inputWrapperClassNames,children:[(0,jsx_runtime.jsx)("input",{type:"text",id:"deliveryAddressLine1",name:"deliveryAddressLine1","data-trackable":"field-deliveryAddressLine1",autoComplete:constants.addressLine1AutoComplete,placeholder:delivery_address_map[addressType].addressLine1Placeholder[FTShippingZone],maxLength:50,"aria-required":"true",required:!0,disabled:isDisabled,defaultValue:line1}),(0,jsx_runtime.jsx)("span",{className:"o-forms-input__error",children:"Please enter a valid address"})]})]}),addressLine2=(0,jsx_runtime.jsxs)("label",{className:"o-forms-field o-forms-field--optional",htmlFor:"deliveryAddressLine2",children:[(0,jsx_runtime.jsx)("span",{className:"o-forms-title",children:(0,jsx_runtime.jsx)("span",{className:"o-forms-title__main",children:"Address line 2"})}),(0,jsx_runtime.jsx)("span",{className:inputWrapperClassNames,children:(0,jsx_runtime.jsx)("input",{type:"text",id:"deliveryAddressLine2",name:"deliveryAddressLine2","data-trackable":"field-deliveryAddressLine2",autoComplete:delivery_address_map[addressType].addressLine2AutoComplete[FTShippingZone]||constants.addressLine2AutoComplete,placeholder:delivery_address_map[addressType].addressLine2Placeholder[FTShippingZone]||"",maxLength:50,disabled:isDisabled,defaultValue:line2})})]}),addressLine3=(0,jsx_runtime.jsxs)("label",{className:"o-forms-field o-forms-field--optional",htmlFor:"deliveryAddressLine3",children:[(0,jsx_runtime.jsxs)("span",{className:"o-forms-title",children:[(0,jsx_runtime.jsx)("span",{className:"o-forms-title__main",children:delivery_address_map[addressType].addressLine3Title[FTShippingZone]}),(0,jsx_runtime.jsx)("span",{className:"o-forms-title__prompt",children:delivery_address_map[addressType].addressLine3Prompt[FTShippingZone]})]}),(0,jsx_runtime.jsx)("span",{className:inputWrapperClassNames,children:(0,jsx_runtime.jsx)("input",{type:"text",id:"deliveryAddressLine3",name:"deliveryAddressLine3","data-trackable":"field-deliveryAddressLine3",autoComplete:delivery_address_map[addressType].addressLine3AutoComplete[FTShippingZone]||constants.addressLine3AutoComplete,placeholder:delivery_address_map[addressType].addressLine3Placeholder[FTShippingZone]||"e.g. Apt. 1",maxLength:delivery_address_map[addressType].addressLine3MaxLength[country]||50,disabled:isDisabled,defaultValue:line3})})]}),addressLines=delivery_address_map[addressType].template(addressLine1,addressLine2,addressLine3,FTShippingZone);return(0,jsx_runtime.jsx)("div",{id:fieldId,"data-validate":"required",className:divClassNames,children:addressLines})}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}DeliveryAddress.displayName="DeliveryAddress",DeliveryAddress.propTypes={fieldId:prop_types_default().string,hasError:prop_types_default().bool,line1:prop_types_default().string,line2:prop_types_default().string,line3:prop_types_default().string,isDisabled:prop_types_default().bool,isHidden:prop_types_default().bool,country:prop_types_default().oneOf(supportedCountries.countriesSupportedISO),addressType:prop_types_default().oneOf(["home","company","pobox"])},DeliveryAddress.__docgenInfo={description:"",methods:[],displayName:"DeliveryAddress",props:{fieldId:{defaultValue:{value:"'deliveryAddressFields'",computed:!1},description:"",type:{name:"string"},required:!1},hasError:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},line1:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},line2:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},line3:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isHidden:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},country:{defaultValue:{value:"'GBR'",computed:!1},description:"",type:{name:"enum",computed:!0,value:"countriesSupportedISO"},required:!1},addressType:{defaultValue:{value:"'home'",computed:!1},description:"",type:{name:"enum",value:[{value:"'home'",computed:!1},{value:"'company'",computed:!1},{value:"'pobox'",computed:!1}]},required:!1}}};const delivery_address_stories={title:"Delivery Address",component:DeliveryAddress,argTypes:{fieldId:{control:"string"},hasError:{control:"boolean"},line1:{control:"string"},line2:{control:"string"},line3:{control:"string"},isDisabled:{control:"boolean"},isHidden:{control:"boolean"},country:{control:{type:"inline-radio",options:supportedCountries.countriesSupportedISO}}}};var Basic=function Basic(args){return(0,jsx_runtime.jsx)(DeliveryAddress,_objectSpread({},args))};Basic.displayName="Basic";var USADeliveryAddress=function USADeliveryAddress(args){return(0,jsx_runtime.jsx)(DeliveryAddress,_objectSpread({},args))};USADeliveryAddress.displayName="USADeliveryAddress",USADeliveryAddress.args={country:"USA",addressType:"home"};var UKDeliveryAddress=function UKDeliveryAddress(args){return(0,jsx_runtime.jsx)(DeliveryAddress,_objectSpread({},args))};UKDeliveryAddress.displayName="UKDeliveryAddress",UKDeliveryAddress.args={country:"GBR",addressType:"home"},Basic.parameters=_objectSpread(_objectSpread({},Basic.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs),{},{source:_objectSpread({originalSource:"args => <DeliveryAddress {...args} />"},null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2=_Basic$parameters2.docs)||void 0===_Basic$parameters2?void 0:_Basic$parameters2.source)})}),USADeliveryAddress.parameters=_objectSpread(_objectSpread({},USADeliveryAddress.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_USADeliveryAddress$p=USADeliveryAddress.parameters)||void 0===_USADeliveryAddress$p?void 0:_USADeliveryAddress$p.docs),{},{source:_objectSpread({originalSource:"args => <DeliveryAddress {...args} />"},null===(_USADeliveryAddress$p2=USADeliveryAddress.parameters)||void 0===_USADeliveryAddress$p2||null===(_USADeliveryAddress$p2=_USADeliveryAddress$p2.docs)||void 0===_USADeliveryAddress$p2?void 0:_USADeliveryAddress$p2.source)})}),UKDeliveryAddress.parameters=_objectSpread(_objectSpread({},UKDeliveryAddress.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_UKDeliveryAddress$pa=UKDeliveryAddress.parameters)||void 0===_UKDeliveryAddress$pa?void 0:_UKDeliveryAddress$pa.docs),{},{source:_objectSpread({originalSource:"args => <DeliveryAddress {...args} />"},null===(_UKDeliveryAddress$pa2=UKDeliveryAddress.parameters)||void 0===_UKDeliveryAddress$pa2||null===(_UKDeliveryAddress$pa2=_UKDeliveryAddress$pa2.docs)||void 0===_UKDeliveryAddress$pa2?void 0:_UKDeliveryAddress$pa2.source)})});const __namedExportsOrder=["Basic","USADeliveryAddress","UKDeliveryAddress"]},"./helpers/constants.js":module=>{module.exports={printRegions:{cemeaV1:"CEMEA_V1",cemeaV2:"CEMEA_V2",apac:"APAC"},addressLine1AutoComplete:"address-line1",addressLine2AutoComplete:"address-line2",addressLine3AutoComplete:"address-line3"}},"./helpers/supportedCountries.js":(module,__unused_webpack_exports,__webpack_require__)=>{var flattenObj=__webpack_require__("./helpers/utilities.js").flattenObj,printRegions=__webpack_require__("./helpers/constants.js").printRegions,supportedCountriesMasterList={cemeaV1:{AUT:"Austria",BEL:"Belgium",BGR:"Bulgaria",HRV:"Croatia",CZE:"Czechia",DNK:"Denmark",FIN:"Finland",DEU:"Germany",GRC:"Greece",HUN:"Hungary",ISL:"Iceland",ITA:"Italy",LIE:"Liechtenstein",LTU:"Lithuania",NLD:"Netherlands",NOR:"Norway",POL:"Poland",PRT:"Portugal",QAT:"Qatar",ROU:"Romania",RUS:"Russian Federation",SVK:"Slovakia",SVN:"Slovenia",ZAF:"South Africa",ESP:"Spain",SWE:"Sweden",CHE:"Switzerland"},cemeaV2:{FRA:"France",LUX:"Luxembourg",MCO:"Monaco"},apac:{CHN:"China",HKG:"Hong Kong",IND:"India",IDN:"Indonesia",JPN:"Japan",KOR:"Korea, Republic of",MYS:"Malaysia",PHL:"Philippines",SGP:"Singapore",TWN:"Taiwan, Province of China",THA:"Thailand"},other:{GBR:"United Kingdom",USA:"United States",CAN:"Canada",ARE:"United Arab Emirates"}},cemeaV1ISO=Object.keys(supportedCountriesMasterList.cemeaV1),cemeaV2ISO=Object.keys(supportedCountriesMasterList.cemeaV2),apacISO=Object.keys(supportedCountriesMasterList.apac),countriesSupported=flattenObj(supportedCountriesMasterList),countriesSupportedISO=Object.keys(countriesSupported);module.exports={cemeaV1ISO,cemeaV2ISO,apacISO,countriesSupported,countriesSupportedISO,identifyFTShippingZone:function identifyFTShippingZone(country){return cemeaV1ISO.includes(country)?printRegions.cemeaV1:cemeaV2ISO.includes(country)?printRegions.cemeaV2:apacISO.includes(country)?printRegions.apac:country}}},"./helpers/utilities.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js");module.exports={flattenObj:function flattenObj(obj){var out=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(obj).forEach((function(key){"object"===_typeof(obj[key])?out=flattenObj(obj[key],out):out[key]=obj[key]})),out}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);