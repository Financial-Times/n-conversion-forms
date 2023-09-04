/*! For license information please see delivery-postcode-stories.aaade583.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_financial_times_n_conversion_forms=self.webpackChunk_financial_times_n_conversion_forms||[]).push([[5579],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{Z:()=>_typeof})},"./helpers/constants.js":module=>{module.exports={printRegions:{cemeaV1:"CEMEA_V1",cemeaV2:"CEMEA_V2",apac:"APAC"},addressLine1AutoComplete:"address-line1",addressLine2AutoComplete:"address-line2",addressLine3AutoComplete:"address-line3"}},"./helpers/supportedCountries.js":(module,__unused_webpack_exports,__webpack_require__)=>{var flattenObj=__webpack_require__("./helpers/utilities.js").flattenObj,printRegions=__webpack_require__("./helpers/constants.js").printRegions,supportedCountriesMasterList={cemeaV1:{AUT:"Austria",BEL:"Belgium",BGR:"Bulgaria",HRV:"Croatia",CZE:"Czechia",DNK:"Denmark",FIN:"Finland",DEU:"Germany",GRC:"Greece",HUN:"Hungary",ISL:"Iceland",ITA:"Italy",LIE:"Liechtenstein",LTU:"Lithuania",NLD:"Netherlands",NOR:"Norway",POL:"Poland",PRT:"Portugal",QAT:"Qatar",ROU:"Romania",RUS:"Russian Federation",SVK:"Slovakia",SVN:"Slovenia",ZAF:"South Africa",ESP:"Spain",SWE:"Sweden",CHE:"Switzerland"},cemeaV2:{FRA:"France",LUX:"Luxembourg",MCO:"Monaco"},apac:{CHN:"China",HKG:"Hong Kong",IND:"India",IDN:"Indonesia",JPN:"Japan",KOR:"Korea, Republic of",MYS:"Malaysia",PHL:"Philippines",SGP:"Singapore",TWN:"Taiwan, Province of China",THA:"Thailand"},other:{GBR:"United Kingdom",USA:"United States",CAN:"Canada",ARE:"United Arab Emirates"}},cemeaV1ISO=Object.keys(supportedCountriesMasterList.cemeaV1),cemeaV2ISO=Object.keys(supportedCountriesMasterList.cemeaV2),apacISO=Object.keys(supportedCountriesMasterList.apac),countriesSupported=flattenObj(supportedCountriesMasterList),countriesSupportedISO=Object.keys(countriesSupported);module.exports={cemeaV1ISO,cemeaV2ISO,apacISO,countriesSupported,countriesSupportedISO,identifyFTShippingZone:function identifyFTShippingZone(country){return cemeaV1ISO.includes(country)?printRegions.cemeaV1:cemeaV2ISO.includes(country)?printRegions.cemeaV2:apacISO.includes(country)?printRegions.apac:country}}},"./helpers/supportedPostcodeExamples.js":(module,__unused_webpack_exports,__webpack_require__)=>{var supportedPostcodeExamples={cemeaV1:{AUT:"1708",ARE:"",BEL:"6596",BGR:"4000",HRV:"10000",CZE:"122 00",DNK:"1819",FIN:"39500",DEU:"17087",GRC:"241 00",HUN:"3821",ISL:"149",ITA:"23844",LIE:"9485",LTU:"LT-12345",NLD:"6971 HJ",NOR:"1608",POL:"43-190",PRT:"2525-517",QAT:"",ROU:"712341",RUS:"191028",SVK:"98401",SVN:"8263",ZAF:"5189",ESP:"37752",SWE:"260 38",CHE:"9424"},cemeaV2:{FRA:"95000",LUX:"1009",MCO:"98000"},apac:{CHN:"610000",HKG:"",IND:"401107",IDN:"55165",JPN:"100-0001",KOR:"46500",MYS:"59100",PHL:"2799",SGP:"584163",TWN:"100",THA:"10330"},other:{GBR:"EC4M 9BT",USA:"60411",CAN:"M5H 3E5"}},allSupportedPostcodeExamples=(0,__webpack_require__("./helpers/utilities.js").flattenObj)(supportedPostcodeExamples);module.exports={allSupportedPostcodeExamples,supportedPostcodeExamples}},"./helpers/utilities.js":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__);var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");(module=__webpack_require__.hmd(module)).exports={flattenObj:function flattenObj(obj){var out=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(obj).forEach((function(key){"object"===(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.Z)(obj[key])?out=flattenObj(obj[key],out):out[key]=obj[key]})),out}}},"./components/delivery-postcode.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,WithLinkToChangeValue:()=>WithLinkToChangeValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>delivery_postcode_stories});var _Basic$parameters,_Basic$parameters2,_WithLinkToChangeValu,_WithLinkToChangeValu2,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),prop_types=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),supportedCountries=__webpack_require__("./helpers/supportedCountries.js"),supportedPostcodeExamples=__webpack_require__("./helpers/supportedPostcodeExamples.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),postcodeLabel=Object.keys(supportedCountries.countriesSupported).reduce((function(previous,countryCode){return previous[countryCode]="USA"===countryCode?"Zip Code":"GBR"===countryCode?"Postcode":"Postal Code",previous}),{}),promptLabel=Object.keys(supportedCountries.countriesSupported).reduce((function(previous,countryCode){return"USA"===countryCode?previous[countryCode]="Please enter your 5 digit Zip Code":"CAN"===countryCode?previous[countryCode]="Please enter your 6 digit postal code":"GBR"!==countryCode&&(previous[countryCode]="Please enter your postal code"),previous}),{}),placeholderLabel=Object.keys(supportedPostcodeExamples.allSupportedPostcodeExamples).reduce((function(previous,countryCode){return previous[countryCode]="e.g. "+supportedPostcodeExamples.allSupportedPostcodeExamples[countryCode],previous}),{});function DeliveryPostcode(_ref){var _ref$value=_ref.value,value=void 0===_ref$value?"":_ref$value,_ref$country=_ref.country,country=void 0===_ref$country?"":_ref$country,_ref$isDisabled=_ref.isDisabled,isDisabled=void 0!==_ref$isDisabled&&_ref$isDisabled,_ref$hasError=_ref.hasError,hasError=void 0!==_ref$hasError&&_ref$hasError,_ref$isHidden=_ref.isHidden,isHidden=void 0!==_ref$isHidden&&_ref$isHidden,pattern=_ref.pattern,additionalFieldInformation=_ref.additionalFieldInformation,_ref$changePostcodeUr=_ref.changePostcodeUrl,changePostcodeUrl=void 0===_ref$changePostcodeUr?"":_ref$changePostcodeUr,postcodeReference=postcodeLabel[country.toUpperCase()]||"Postcode",promptReference=promptLabel[country.toUpperCase()],placeholderReference=placeholderLabel[country.toUpperCase()]||"Enter your ".concat(postcodeReference),inputWrapperClassNames=classnames_default()(["o-forms-input","o-forms-input--text",{"o-forms-input--invalid":hasError}]),deliveryPostcodeFieldClassNames=classnames_default()(["o-forms-field",{ncf__hidden:isHidden}]),fieldErrorClassNames=classnames_default()(["o-forms-input__error",{"additional-field-information__with-field-error":additionalFieldInformation}]);return(0,jsx_runtime.jsxs)("label",{id:"deliveryPostcodeField",className:deliveryPostcodeFieldClassNames,"data-validate":"required",htmlFor:"deliveryPostcode",children:[(0,jsx_runtime.jsxs)("span",{className:"o-forms-title",children:[(0,jsx_runtime.jsx)("span",{className:"o-forms-title__main",children:(0,jsx_runtime.jsx)("span",{"data-reference":"postcode",children:postcodeReference})}),(0,jsx_runtime.jsx)("span",{className:"o-forms-title__prompt",children:promptReference})]}),(0,jsx_runtime.jsxs)("span",{className:inputWrapperClassNames,children:[(0,jsx_runtime.jsx)("input",{type:"text",id:"deliveryPostcode",name:"deliveryPostcode",defaultValue:"".concat(value),placeholder:placeholderReference,autoComplete:"postal-code","data-trackable":"delivery-postcode","aria-required":"true",required:!0,pattern,disabled:isDisabled}),(0,jsx_runtime.jsxs)("span",{className:fieldErrorClassNames,children:["Please enter a valid"," ",(0,jsx_runtime.jsx)("span",{"data-reference":"postcode",children:postcodeReference}),"."]}),additionalFieldInformation?(0,jsx_runtime.jsx)("p",{className:"additional-field-information",children:additionalFieldInformation}):null,changePostcodeUrl?(0,jsx_runtime.jsx)("a",{href:changePostcodeUrl,style:{fontSize:"12px"},className:"change-postcode-url","data-trackable":"change-progress",children:"Change ".concat(postcodeReference)}):null]})]})}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}DeliveryPostcode.displayName="DeliveryPostcode",DeliveryPostcode.propTypes={country:prop_types_default().string,value:prop_types_default().string,pattern:prop_types_default().string,isDisabled:prop_types_default().bool,hasError:prop_types_default().bool,isHidden:prop_types_default().bool,additionalFieldInformation:prop_types_default().node,changePostcodeUrl:prop_types_default().string},DeliveryPostcode.__docgenInfo={description:"",methods:[],displayName:"DeliveryPostcode",props:{value:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},country:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},hasError:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isHidden:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},changePostcodeUrl:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},pattern:{description:"",type:{name:"string"},required:!1},additionalFieldInformation:{description:"",type:{name:"node"},required:!1}}};const delivery_postcode_stories={title:"Delivery Postcode",component:DeliveryPostcode,argTypes:{additionalFieldInformation:{control:"text"},country:{control:{type:"inline-radio",options:supportedCountries.countriesSupportedISO}}}};var Basic=function Basic(args){return(0,jsx_runtime.jsx)(DeliveryPostcode,_objectSpread({},args))};Basic.displayName="Basic",Basic.args={additionalFieldInformation:"Some extra information."};var WithLinkToChangeValue=function WithLinkToChangeValue(args){return(0,jsx_runtime.jsx)(DeliveryPostcode,_objectSpread({},args))};WithLinkToChangeValue.displayName="WithLinkToChangeValue",WithLinkToChangeValue.args={country:"USA",changePostcodeUrl:"http://local.ft.com"},Basic.parameters=_objectSpread(_objectSpread({},Basic.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs),{},{source:_objectSpread({originalSource:"args => <DeliveryPostcode {...args} />"},null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2=_Basic$parameters2.docs)||void 0===_Basic$parameters2?void 0:_Basic$parameters2.source)})}),WithLinkToChangeValue.parameters=_objectSpread(_objectSpread({},WithLinkToChangeValue.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithLinkToChangeValu=WithLinkToChangeValue.parameters)||void 0===_WithLinkToChangeValu?void 0:_WithLinkToChangeValu.docs),{},{source:_objectSpread({originalSource:"args => <DeliveryPostcode {...args} />"},null===(_WithLinkToChangeValu2=WithLinkToChangeValue.parameters)||void 0===_WithLinkToChangeValu2||null===(_WithLinkToChangeValu2=_WithLinkToChangeValu2.docs)||void 0===_WithLinkToChangeValu2?void 0:_WithLinkToChangeValu2.source)})});var __namedExportsOrder=["Basic","WithLinkToChangeValue"];Basic.__docgenInfo={description:"",methods:[],displayName:"Basic"},WithLinkToChangeValue.__docgenInfo={description:"",methods:[],displayName:"WithLinkToChangeValue"}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);