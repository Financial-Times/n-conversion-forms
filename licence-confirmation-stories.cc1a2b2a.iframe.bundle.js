/*! For license information please see licence-confirmation-stories.cc1a2b2a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_financial_times_n_conversion_forms=self.webpackChunk_financial_times_n_conversion_forms||[]).push([[295],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./components/licence-confirmation.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>licence_confirmation_stories});var _Basic$parameters,_Basic$parameters2,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),prop_types=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function LicenceConfirmation(_ref){var _ref$isTrial=_ref.isTrial,isTrial=void 0!==_ref$isTrial&&_ref$isTrial,_ref$isEmbedded=_ref.isEmbedded,isEmbedded=void 0!==_ref$isEmbedded&&_ref$isEmbedded,_ref$duration=_ref.duration,duration=void 0===_ref$duration?null:_ref$duration,_ref$isEducationalLic=_ref.isEducationalLicence,isEducationalLicence=void 0!==_ref$isEducationalLic&&_ref$isEducationalLic,_ref$contentId=_ref.contentId,contentId=void 0===_ref$contentId?"":_ref$contentId,_ref$ctaElement=_ref.ctaElement,ctaElement=void 0===_ref$ctaElement?null:_ref$ctaElement,_ref$bodyContent=_ref.bodyContent,bodyContent=void 0===_ref$bodyContent?null:_ref$bodyContent,readingLinkProps=_objectSpread({href:""===contentId?"/":"/content/".concat(contentId),className:"ncf__link"},isEmbedded&&{target:"_top"});return(0,jsx_runtime.jsxs)("div",{className:"ncf ncf__wrapper",children:[(0,jsx_runtime.jsxs)("div",{className:"ncf__center",children:[(0,jsx_runtime.jsx)("div",{className:"ncf__icon ncf__icon--tick ncf__icon--large"}),(0,jsx_runtime.jsx)("div",{className:"ncf__paragraph",children:isTrial?(0,jsx_runtime.jsxs)("h1",{className:"ncf__header ncf__header--confirmation",children:["Your",duration?" ".concat(duration):""," trial has started"]}):(0,jsx_runtime.jsxs)("h1",{className:"ncf__header ncf__header--confirmation",children:["Great news, you have joined your"," ",isEducationalLicence?"school":"company"," licence"]})})]}),bodyContent||(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("p",{className:"ncf__paragraph",children:"Go to myFT to personalise your feed & follow topics & articles of interest to you. Set this up now or later."}),(0,jsx_runtime.jsx)("p",{className:"ncf__paragraph",children:"Explore the homepage & enjoy your unlimited access & exclusive content."})]}),ctaElement||(0,jsx_runtime.jsx)("p",{className:"ncf__paragraph ncf__center",children:(0,jsx_runtime.jsx)("a",{className:"ncf__button ncf__button--submit",href:"/myft",children:"Go to myFT"})}),(0,jsx_runtime.jsx)("p",{className:"ncf__paragraph ncf__center",children:(0,jsx_runtime.jsx)("a",_objectSpread(_objectSpread({},readingLinkProps),{},{children:"Go to homepage"}))})]})}function licence_confirmation_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function licence_confirmation_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?licence_confirmation_stories_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):licence_confirmation_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}LicenceConfirmation.displayName="LicenceConfirmation",LicenceConfirmation.propTypes={isTrial:prop_types_default().bool,isEmbedded:prop_types_default().bool,duration:prop_types_default().string,isEducationalLicence:prop_types_default().bool,contentId:prop_types_default().string,ctaElement:prop_types_default().node,bodyContent:prop_types_default().element},LicenceConfirmation.__docgenInfo={description:"",methods:[],displayName:"LicenceConfirmation",props:{isTrial:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isEmbedded:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},duration:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},isEducationalLicence:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},contentId:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},ctaElement:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},bodyContent:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"element"},required:!1}}};const licence_confirmation_stories={title:"Licence Confirmation",component:LicenceConfirmation};var goToMyFtElement=(0,jsx_runtime.jsx)("p",{className:"ncf__paragraph ncf__center",children:(0,jsx_runtime.jsx)("a",{className:"ncf__button ncf__button--submit",href:"/myft",children:"Go to myFT"})}),Basic=function Basic(args){return(0,jsx_runtime.jsx)(LicenceConfirmation,licence_confirmation_stories_objectSpread({},args))};Basic.displayName="Basic",Basic.args={ctaElement:goToMyFtElement},Basic.parameters=licence_confirmation_stories_objectSpread(licence_confirmation_stories_objectSpread({},Basic.parameters),{},{docs:licence_confirmation_stories_objectSpread(licence_confirmation_stories_objectSpread({},null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs),{},{source:licence_confirmation_stories_objectSpread({originalSource:"args => <LicenceConfirmation {...args} />"},null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2=_Basic$parameters2.docs)||void 0===_Basic$parameters2?void 0:_Basic$parameters2.source)})});var __namedExportsOrder=["Basic"];Basic.__docgenInfo={description:"",methods:[],displayName:"Basic"}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);