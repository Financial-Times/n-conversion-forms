(self.webpackChunk_financial_times_n_conversion_forms=self.webpackChunk_financial_times_n_conversion_forms||[]).push([[9736],{"./components/country.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_country__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./components/country.jsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}const __WEBPACK_DEFAULT_EXPORT__={title:"Country",component:_country__WEBPACK_IMPORTED_MODULE_2__.y,argTypes:{filterList:{control:"array"}}};var Basic=function Basic(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_country__WEBPACK_IMPORTED_MODULE_2__.y,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.c)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},args))};Basic.displayName="Basic",Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => <Country {...args} />",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./components/country.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>Country});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),_utils_countries__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./utils/countries.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.c)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Country(_ref){var additionalFieldInformation=_ref.additionalFieldInformation,_ref$dataTrackable=_ref.dataTrackable,dataTrackable=void 0===_ref$dataTrackable?"field-country":_ref$dataTrackable,_ref$fieldId=_ref.fieldId,fieldId=void 0===_ref$fieldId?"countryField":_ref$fieldId,_ref$filterList=_ref.filterList,filterList=void 0===_ref$filterList?[]:_ref$filterList,_ref$hasError=_ref.hasError,hasError=void 0!==_ref$hasError&&_ref$hasError,_ref$inputId=_ref.inputId,inputId=void 0===_ref$inputId?"country":_ref$inputId,_ref$isB2b=_ref.isB2b,isB2b=void 0!==_ref$isB2b&&_ref$isB2b,_ref$isDisabled=_ref.isDisabled,isDisabled=void 0!==_ref$isDisabled&&_ref$isDisabled,_ref$isPlaceholderDis=_ref.isPlaceholderDisabled,isPlaceholderDisabled=void 0!==_ref$isPlaceholderDis&&_ref$isPlaceholderDis,value=_ref.value,_ref$label=_ref.label,label=void 0===_ref$label?"Country".concat(isB2b?"/Region":""):_ref$label,_ref$errorText=_ref.errorText,errorText=void 0===_ref$errorText?"Please select your country".concat(isB2b?"/region":""):_ref$errorText,selectWrapperClassName=classnames__WEBPACK_IMPORTED_MODULE_2___default()(["o-forms-input","o-forms-input--select",{"o-forms-input--invalid":hasError}]),selectProps={id:inputId,"aria-required":!0,required:!0,name:inputId,"data-trackable":dataTrackable,disabled:isDisabled},countries=(0,_utils_countries__WEBPACK_IMPORTED_MODULE_3__.getCountries)({filter:filterList,value}),createOption=function createOption(country){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option",{value:country.code,selected:country.selected,children:country.name},country.code)},fieldErrorClassNames=classnames__WEBPACK_IMPORTED_MODULE_2___default()(["o-forms-input__error",{"additional-field-information__with-field-error":additionalFieldInformation}]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label",{id:fieldId,className:"o-forms-field ncf__validation-error","data-validate":"required",htmlFor:selectProps.id,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"o-forms-title",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"o-forms-title__main",children:label})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span",{className:selectWrapperClassName,children:[function createSelect(countries){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select",_objectSpread(_objectSpread({},selectProps),{},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("option",{value:"",disabled:isPlaceholderDisabled,children:["Please select a country",isB2b?"/region":""]}),countries.map((function(country){return country.label?function createOptGroup(country){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("optgroup",{label:country.label,children:country.countries.map((function(country){return createOption(country)}))},country.label)}(country):createOption(country)}))]}))}(countries),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:fieldErrorClassNames,children:errorText}),additionalFieldInformation?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{className:"additional-field-information",children:additionalFieldInformation}):null]})]})}Country.displayName="Country",Country.propTypes={additionalFieldInformation:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node,dataTrackable:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,errorText:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,fieldId:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,filterList:prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),hasError:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,inputId:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,isB2b:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,isDisabled:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,isPlaceholderDisabled:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,label:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,value:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string},Country.__docgenInfo={description:"",methods:[],displayName:"Country",props:{dataTrackable:{defaultValue:{value:"'field-country'",computed:!1},description:"",type:{name:"string"},required:!1},fieldId:{defaultValue:{value:"'countryField'",computed:!1},description:"",type:{name:"string"},required:!1},filterList:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},hasError:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},inputId:{defaultValue:{value:"'country'",computed:!1},description:"",type:{name:"string"},required:!1},isB2b:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isPlaceholderDisabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},label:{description:"",type:{name:"string"},required:!1},errorText:{description:"",type:{name:"string"},required:!1},additionalFieldInformation:{description:"",type:{name:"node"},required:!1},value:{description:"",type:{name:"string"},required:!1}}}},"./utils/countries.js":(module,__unused_webpack_exports,__webpack_require__)=>{var countries=__webpack_require__("./node_modules/n-common-static-data/index.js").billingCountries.countries;function groupCountries(countries){var _ref2=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_ref2$minimumToShowGr=_ref2.minimumToShowGroups,minimumToShowGroups=void 0===_ref2$minimumToShowGr?2:_ref2$minimumToShowGr,_ref2$frequentlyUsed=_ref2.frequentlyUsed,frequentlyUsed=void 0===_ref2$frequentlyUsed?["GBR","USA","JPN","FRA","CAN"]:_ref2$frequentlyUsed,_ref2$frequentlyUsedL=_ref2.frequentlyUsedLabel,frequentlyUsedLabel=void 0===_ref2$frequentlyUsedL?"Frequently Used":_ref2$frequentlyUsedL,_ref2$alphabeticalLab=_ref2.alphabeticalLabel,alphabeticalLabel=void 0===_ref2$alphabeticalLab?"Alphabetical":_ref2$alphabeticalLab,frequentlyUsedCountries=countries.filter((function(item){return frequentlyUsed.includes(item.code)})).map((function(item){return Object.assign({},item)})).sort((function(a,b){return frequentlyUsed.indexOf(a.code)-frequentlyUsed.indexOf(b.code)}));return frequentlyUsedCountries.length<minimumToShowGroups?countries:(frequentlyUsedCountries.find((function(item){return item.selected}))&&countries.forEach((function(item){return item.selected=!1})),[{label:frequentlyUsedLabel,countries:frequentlyUsedCountries},{label:alphabeticalLabel,countries}])}module.exports={getCountries:function getCountries(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},value=_ref.value,_ref$filter=_ref.filter,filter=void 0===_ref$filter?[]:_ref$filter,_ref$minimumToGroup=_ref.minimumToGroup,minimumToGroup=void 0===_ref$minimumToGroup?20:_ref$minimumToGroup,data=countries;return filter.length&&(data=data.filter((function(item){return filter.includes(item.code)}))),value&&(data=data.map((function(item){return item.selected=item.code===value,item}))),data.length>=minimumToGroup&&(data=groupCountries(data)),data},groupCountries}}}]);