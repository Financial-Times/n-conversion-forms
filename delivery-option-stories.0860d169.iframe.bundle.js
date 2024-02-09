/*! For license information please see delivery-option-stories.0860d169.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_financial_times_n_conversion_forms=self.webpackChunk_financial_times_n_conversion_forms||[]).push([[6923],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}function _defineProperty(obj,key,value){return(key=toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{c:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/typeof.js":module=>{function _typeof(o){return module.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},module.exports.__esModule=!0,module.exports.default=module.exports,_typeof(o)}module.exports=_typeof,module.exports.__esModule=!0,module.exports.default=module.exports},"./components/delivery-option.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,US5or6DaysWeekDeliveryOptions:()=>US5or6DaysWeekDeliveryOptions,USWeekendOnlyDeliveryOptions:()=>USWeekendOnlyDeliveryOptions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>delivery_option_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),prop_types=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),delivery_option_messages=__webpack_require__("./utils/delivery-option-messages.js"),supportedCountries=__webpack_require__("./helpers/supportedCountries.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.c)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function DeliveryOption(_ref){var _ref$fieldId=_ref.fieldId,fieldId=void 0===_ref$fieldId?"deliveryOptionField":_ref$fieldId,country=_ref.country,_ref$productCode=_ref.productCode,productCode=void 0===_ref$productCode?void 0:_ref$productCode,_ref$options=_ref.options,options=void 0===_ref$options?[]:_ref$options,_ref$isSingle=_ref.isSingle,isSingle=void 0!==_ref$isSingle&&_ref$isSingle,divClassName=classnames_default()(["o-forms-field","ncf__delivery-option",{"ncf__delivery-option--single":isSingle}]),FTShippingZone=(0,supportedCountries.identifyFTShippingZone)(country);return(0,jsx_runtime.jsx)("div",{id:fieldId,className:divClassName,role:"group","aria-label":"Delivery options",children:(0,jsx_runtime.jsx)("span",{className:"o-forms-input o-forms-input--radio-round",children:options.map((function(option){var value=option.value,isValidDeliveryOption=option.isValidDeliveryOption,isSelected=option.isSelected,deliveryOptionValue=(0,delivery_option_messages.getDeliveryOption)(productCode,option,FTShippingZone);if(!isValidDeliveryOption||!deliveryOptionValue)return null;var id=deliveryOptionValue.customId||value,inputProps={type:"radio",id,name:"deliveryOption",value,className:"ncf__delivery-option__input",defaultChecked:isSelected};return(0,jsx_runtime.jsxs)("label",{className:"ncf__delivery-option__item",htmlFor:id,children:[(0,jsx_runtime.jsx)("input",_objectSpread({},inputProps)),(0,jsx_runtime.jsxs)("span",{className:"o-forms-input__label ncf__delivery-option__label",children:[(0,jsx_runtime.jsx)("span",{className:"ncf__delivery-option__title o-forms-title__main",children:deliveryOptionValue.title}),(0,jsx_runtime.jsx)("div",{className:"ncf__delivery-option__description",children:deliveryOptionValue.description})]})]},value)}))})})}function delivery_option_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function delivery_option_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?delivery_option_stories_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.c)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):delivery_option_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}DeliveryOption.displayName="DeliveryOption",DeliveryOption.propTypes={country:prop_types_default().oneOf(supportedCountries.countriesSupportedISO).isRequired,productCode:prop_types_default().string,options:prop_types_default().arrayOf(prop_types_default().shape({value:prop_types_default().oneOf(["PV","HD","EV"]),isSelected:prop_types_default().bool,deliveryOnPublicationDate:prop_types_default().bool,flightMarket:prop_types_default().bool,mailDelivery:prop_types_default().bool})),isSingle:prop_types_default().bool},DeliveryOption.__docgenInfo={description:"",methods:[],displayName:"DeliveryOption",props:{fieldId:{defaultValue:{value:"'deliveryOptionField'",computed:!1},required:!1},productCode:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{value:{name:"enum",value:[{value:"'PV'",computed:!1},{value:"'HD'",computed:!1},{value:"'EV'",computed:!1}],required:!1},isSelected:{name:"bool",required:!1},deliveryOnPublicationDate:{name:"bool",required:!1},flightMarket:{name:"bool",required:!1},mailDelivery:{name:"bool",required:!1}}}},required:!1},isSingle:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},country:{description:"",type:{name:"enum",computed:!0,value:"countriesSupportedISO"},required:!0}}};const delivery_option_stories={title:"Delivery Options",component:DeliveryOption,argTypes:{options:{control:"array"},country:{control:{type:"inline-radio",options:supportedCountries.countriesSupportedISO}},productCode:{control:"string"}}};var Basic=function Basic(args){return(0,jsx_runtime.jsx)("div",{className:"ncf",children:(0,jsx_runtime.jsx)(DeliveryOption,delivery_option_stories_objectSpread({},args))})};Basic.displayName="Basic",Basic.args={country:"GBR",options:[{value:"PV",isValidDeliveryOption:!0},{value:"HD",isValidDeliveryOption:!0},{value:"EV",isValidDeliveryOption:!0}]};var US5or6DaysWeekDeliveryOptions=function US5or6DaysWeekDeliveryOptions(args){return(0,jsx_runtime.jsx)("div",{className:"ncf",children:(0,jsx_runtime.jsx)(DeliveryOption,delivery_option_stories_objectSpread({},args))})};US5or6DaysWeekDeliveryOptions.displayName="US5or6DaysWeekDeliveryOptions",US5or6DaysWeekDeliveryOptions.args={options:[{value:"HD",isValidDeliveryOption:!0,deliveryOnPublicationDate:!0,flightMarket:!1,mailDelivery:!1},{value:"HD",isValidDeliveryOption:!0,deliveryOnPublicationDate:!1,flightMarket:!1,mailDelivery:!0}],country:"USA",productCode:"P2N6D"};var USWeekendOnlyDeliveryOptions=function USWeekendOnlyDeliveryOptions(args){return(0,jsx_runtime.jsx)("div",{className:"ncf",children:(0,jsx_runtime.jsx)(DeliveryOption,delivery_option_stories_objectSpread({},args))})};USWeekendOnlyDeliveryOptions.displayName="USWeekendOnlyDeliveryOptions",USWeekendOnlyDeliveryOptions.args={options:[{value:"HD",isValidDeliveryOption:!0,deliveryOnPublicationDate:!1,flightMarket:!1,mailDelivery:!1},{value:"HD",isValidDeliveryOption:!0,mailDelivery:!0}],country:"USA",productCode:"NWE"},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'args => <div className="ncf">\n        <DeliveryOption {...args} />\n    </div>',...Basic.parameters?.docs?.source}}},US5or6DaysWeekDeliveryOptions.parameters={...US5or6DaysWeekDeliveryOptions.parameters,docs:{...US5or6DaysWeekDeliveryOptions.parameters?.docs,source:{originalSource:'args => <div className="ncf">\n        <DeliveryOption {...args} />\n    </div>',...US5or6DaysWeekDeliveryOptions.parameters?.docs?.source}}},USWeekendOnlyDeliveryOptions.parameters={...USWeekendOnlyDeliveryOptions.parameters,docs:{...USWeekendOnlyDeliveryOptions.parameters?.docs,source:{originalSource:'args => <div className="ncf">\n        <DeliveryOption {...args} />\n    </div>',...USWeekendOnlyDeliveryOptions.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","US5or6DaysWeekDeliveryOptions","USWeekendOnlyDeliveryOptions"]},"./helpers/constants.js":module=>{module.exports={printRegions:{cemeaV1:"CEMEA_V1",cemeaV2:"CEMEA_V2",apac:"APAC"},addressLine1AutoComplete:"address-line1",addressLine2AutoComplete:"address-line2",addressLine3AutoComplete:"address-line3"}},"./helpers/supportedCountries.js":(module,__unused_webpack_exports,__webpack_require__)=>{var flattenObj=__webpack_require__("./helpers/utilities.js").flattenObj,printRegions=__webpack_require__("./helpers/constants.js").printRegions,supportedCountriesMasterList={cemeaV1:{AUT:"Austria",BEL:"Belgium",BGR:"Bulgaria",HRV:"Croatia",CZE:"Czechia",DNK:"Denmark",FIN:"Finland",DEU:"Germany",GRC:"Greece",HUN:"Hungary",ISL:"Iceland",ITA:"Italy",LIE:"Liechtenstein",LTU:"Lithuania",NLD:"Netherlands",NOR:"Norway",POL:"Poland",PRT:"Portugal",QAT:"Qatar",ROU:"Romania",RUS:"Russian Federation",SVK:"Slovakia",SVN:"Slovenia",ZAF:"South Africa",ESP:"Spain",SWE:"Sweden",CHE:"Switzerland"},cemeaV2:{FRA:"France",LUX:"Luxembourg",MCO:"Monaco"},apac:{CHN:"China",HKG:"Hong Kong",IND:"India",IDN:"Indonesia",JPN:"Japan",KOR:"Korea, Republic of",MYS:"Malaysia",PHL:"Philippines",SGP:"Singapore",TWN:"Taiwan, Province of China",THA:"Thailand"},other:{GBR:"United Kingdom",USA:"United States",CAN:"Canada",ARE:"United Arab Emirates"}},cemeaV1ISO=Object.keys(supportedCountriesMasterList.cemeaV1),cemeaV2ISO=Object.keys(supportedCountriesMasterList.cemeaV2),apacISO=Object.keys(supportedCountriesMasterList.apac),countriesSupported=flattenObj(supportedCountriesMasterList),countriesSupportedISO=Object.keys(countriesSupported);module.exports={cemeaV1ISO,cemeaV2ISO,apacISO,countriesSupported,countriesSupportedISO,identifyFTShippingZone:function identifyFTShippingZone(country){return cemeaV1ISO.includes(country)?printRegions.cemeaV1:cemeaV2ISO.includes(country)?printRegions.cemeaV2:apacISO.includes(country)?printRegions.apac:country}}},"./helpers/utilities.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js");module.exports={flattenObj:function flattenObj(obj){var out=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(obj).forEach((function(key){"object"===_typeof(obj[key])?out=flattenObj(obj[key],out):out[key]=obj[key]})),out}}},"./utils/delivery-option-messages.js":(module,__unused_webpack_exports,__webpack_require__)=>{var printRegions=__webpack_require__("./helpers/constants.js").printRegions,deliveryFrequencyProductsMapping={A1:"NWE",A5:"N5D",A6:"N6D"},HAND_DELIVERY="HD",MAIL="ML",UKDeliveryOptions={PV:{title:"Paper vouchers",description:"13-week voucher pack delivered quarterly and redeemable at retailers nationwide."},HD:{title:"Hand delivery",description:"Free delivery to your home or office before 7am."},EV:{title:"Electronic vouchers",description:"Delivered via email and card, redeemable at retailers nationwide."}},deliveryOptionMessages=[{deliveryFrequency:["A5","A6"],distributorType:HAND_DELIVERY,deliveryOnPublicationDate:!0,flightMarket:!0,country:["USA","CAN"],title:"Hand delivery",description:"Enjoy delivery of the newspaper daily to your home or office address. \nPlease note: We fly the newspaper to your location which means delivery is subject to flight delays/cancellations outside of the FT's control. In those circumstances, your newspaper will be delivered on the next delivery day."},{deliveryFrequency:["A5","A6"],distributorType:HAND_DELIVERY,deliveryOnPublicationDate:!0,flightMarket:!1,country:["USA","CAN"],title:"Hand delivery",description:"Enjoy delivery of the newspaper daily to your home or office address."},{deliveryFrequency:["A5","A6"],distributorType:HAND_DELIVERY,deliveryOnPublicationDate:!1,flightMarket:!0,country:["USA","CAN"],title:"Hand delivery",description:"Enjoy delivery of the newspaper daily to your home or office address. \nPlease note: We fly the newspaper to your location which means delivery is subject to flight delays/cancellations outside of the FT's control. In those circumstances, your newspaper will be delivered on the next delivery day. Please also be aware that your FT Weekend will be delivered on Sunday."},{deliveryFrequency:["A5","A6"],distributorType:HAND_DELIVERY,deliveryOnPublicationDate:!1,flightMarket:!1,country:["USA","CAN"],title:"Hand delivery",description:"Enjoy delivery of the newspaper daily to your home or office address. \nPlease note: Your FT Weekend will be delivered on Sunday or Monday."},{deliveryFrequency:["A5","A6"],distributorType:HAND_DELIVERY,deliveryOnPublicationDate:!1,flightMarket:!0,country:[printRegions.cemeaV1,printRegions.cemeaV2,printRegions.apac],title:"Hand delivery",description:"Enjoy the delivery of the newspaper to your home or office address. Please note we fly the newspaper to your location which means delivery is subject to flight delays/cancellations outside of the FT’s control. In those circumstances, your newspaper will be delivered the next delivery day. Please also be aware that your FT weekend will be delivered on Sunday."},{deliveryFrequency:["A5","A6","A1"],distributorType:HAND_DELIVERY,deliveryOnPublicationDate:!0,flightMarket:!0,title:"Hand delivery",country:[printRegions.cemeaV1,printRegions.cemeaV2,printRegions.apac],description:"Enjoy delivery of the newspaper to your home or office address. FT Weekend will be delivered on Sunday or Monday."},{deliveryFrequency:["A5","A6","A1"],distributorType:HAND_DELIVERY,deliveryOnPublicationDate:!0,flightMarket:!1,country:[printRegions.cemeaV1,printRegions.cemeaV2,printRegions.apac],title:"Hand delivery",description:"Enjoy delivery of the newspaper daily to your home or office address on the day of publication."},{deliveryFrequency:["A5","A6","A1"],distributorType:MAIL,country:[printRegions.cemeaV1,printRegions.cemeaV2,printRegions.apac],title:"Mail Delivery",customId:"ML",flightMarket:!0,description:"Enjoy delivery of the newspaper to your home or office address. Note this is a postal delivery - expect delivery after the day of publication. If you would prefer to read the newspaper on the day of publication, purchase an FT ePaper subscription, our digital replica of the each daily edition."},{deliveryFrequency:["A5","A6","A1"],distributorType:MAIL,country:[printRegions.cemeaV1,printRegions.cemeaV2,printRegions.apac],title:"Mail Delivery",customId:"ML",flightMarket:!1,description:"Enjoy delivery of the newspaper to your home or office address one day after publication."},{deliveryFrequency:["A5","A6"],distributorType:MAIL,country:["USA","CAN"],title:"Mail",customId:"ML",description:"We can only deliver the newspaper to your location by postal mail which means your delivery will arrive up to 5 business days after the date of publication and will not include the HTSI Magazine. We also fly the newspaper to your location which means delivery is subject to flight delays/cancellations outside the FT's control. If you prefer to read the printed content on the day of publication, please proceed to subscribe to the FT ePaper - a digital replica of the print edition."},{deliveryFrequency:["A1"],distributorType:HAND_DELIVERY,deliveryOnPublicationDate:!0,flightMarket:!0,country:["USA","CAN"],title:"Hand delivery",description:"Enjoy delivery of the newspaper daily to your home or office address. \nPlease note: We fly the newspapers to your location which means delivery is subject to flight delays/cancellations outside of the FT's control. In those circumstances, your newspaper will be delivered the next delivery day."},{deliveryFrequency:["A1"],distributorType:HAND_DELIVERY,deliveryOnPublicationDate:!0,flightMarket:!1,country:["USA","CAN"],title:"Hand delivery",description:"Enjoy delivery of the newspaper daily to your home or office address."},{deliveryFrequency:["A1"],distributorType:HAND_DELIVERY,deliveryOnPublicationDate:!1,flightMarket:!0,country:["USA","CAN"],title:"Hand delivery",description:"Enjoy delivery of the newspaper daily to your home or office address. \nPlease note we fly the newspaper to your location which means delivery is subject to flight delays/cancellations outside of the FT's control. In those circumstances, your newspaper will be delivered on the next delivery day. Please also be aware that your FT Weekend will be delivered on Sunday."},{deliveryFrequency:["A1"],distributorType:HAND_DELIVERY,deliveryOnPublicationDate:!1,flightMarket:!1,country:["USA","CAN"],title:"Hand delivery",description:"Enjoy delivery of the newspaper daily to your home or office address. \nPlease note: Your FT Weekend will be delivered on Sunday."},{deliveryFrequency:["A1"],distributorType:MAIL,country:["USA","CAN"],title:"Mail",customId:"ML",description:"We can only deliver the FT Weekend newspaper to your location by postal mail which means your delivery will arrive up to 5 business days after the date of publication and will not include the HTSI Magazine. We also fly the newspaper to your location which means delivery is subject to flight delays/cancellations outside the FT's control. If you prefer to read the printed content on the day of publication, please proceed to subscribe to the FT ePaper - a digital replica of the print edition."}];function includesDeliveryFrequency(){var productCode=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(arguments.length>1?arguments[1]:void 0).deliveryFrequency.find((function(freq){var productCodePattern=deliveryFrequencyProductsMapping[freq];return productCode.includes(productCodePattern)}))}function findCustomDeliveryOption(productCode,option,FTShippingZone){var deliveryOption;if(option.value===HAND_DELIVERY){var filteredMessages=deliveryOptionMessages.filter((function(item){return option.mailDelivery?function mailStrategy(productCode,option,FTShippingZone,item){return includesDeliveryFrequency(productCode,item)&&item.distributorType===MAIL&&item.country.includes(FTShippingZone)}(productCode,0,FTShippingZone,item):function handDeliveryStrategy(productCode,option,FTShippingZone,item){return includesDeliveryFrequency(productCode,item)&&item.distributorType===HAND_DELIVERY&&item.deliveryOnPublicationDate===option.deliveryOnPublicationDate&&item.flightMarket===option.flightMarket&&item.country.includes(FTShippingZone)}(productCode,option,FTShippingZone,item)}));if(filteredMessages.length){var _filteredMessages$=filteredMessages[0];deliveryOption={title:_filteredMessages$.title,description:_filteredMessages$.description,customId:_filteredMessages$.customId}}}return deliveryOption}module.exports={getDeliveryOption:function getDeliveryOption(productCode,option,FTShippingZone){return"GBR"===FTShippingZone?UKDeliveryOptions[option.value]:findCustomDeliveryOption(productCode,option,FTShippingZone)}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);