/*! For license information please see confirmation-stories.476fb3d8.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_financial_times_n_conversion_forms=self.webpackChunk_financial_times_n_conversion_forms||[]).push([[263],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./components/confirmation.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>confirmation_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var _Basic$parameters,_Basic$parameters2;function Confirmation(_ref){var _ref$isTrial=_ref.isTrial,isTrial=void 0!==_ref$isTrial&&_ref$isTrial,_ref$isB2cPartnership=_ref.isB2cPartnership,isB2cPartnership=void 0!==_ref$isB2cPartnership&&_ref$isB2cPartnership,_ref$b2cPartnershipCo=_ref.b2cPartnershipCopy,b2cPartnershipCopy=void 0===_ref$b2cPartnershipCo?[]:_ref$b2cPartnershipCo,_ref$offer=_ref.offer,offer=void 0===_ref$offer?"":_ref$offer,_ref$email=_ref.email,email=void 0===_ref$email?"your email":_ref$email,_ref$details=_ref.details,details=void 0===_ref$details?null:_ref$details,_ref$directDebitManda=_ref.directDebitMandateUrl,directDebitMandateUrl=void 0===_ref$directDebitManda?null:_ref$directDebitManda,_ref$nextActionTop=_ref.nextActionTop,nextActionTop=void 0===_ref$nextActionTop?null:_ref$nextActionTop,_ref$nextActionBottom=_ref.nextActionBottom,nextActionBottom=void 0===_ref$nextActionBottom?null:_ref$nextActionBottom,containerDivProps=_objectSpread({className:"ncf ncf__wrapper"},isTrial&&{"data-signup-is-trial":"true"}),isB2cPartnershipCopyAvailable=isB2cPartnership&&b2cPartnershipCopy.length>0,detailElements=details&&(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("h2",{className:"ncf__header2--afterline",children:"Your billing details"}),(0,jsx_runtime.jsx)("dl",{className:"ncf__list",children:details.map((function(detail,index){return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("dt",{className:"ncf__list-title",children:detail.title}),(0,jsx_runtime.jsx)("dd",{className:"ncf__list-data",children:detail.data}),detail.description&&(0,jsx_runtime.jsx)("dd",{className:"ncf__list-description",children:detail.description})]},index)}))})]}),directDebitMandateUrlElement=directDebitMandateUrl&&(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("p",{className:"ncf__paragraph--reduced-padding",children:["Download your"," ",(0,jsx_runtime.jsx)("a",{href:directDebitMandateUrl,"data-trackable":"dd-mandate-link",id:"encryptedMandateLink",children:"direct debit mandate"}),(0,jsx_runtime.jsx)("i",{className:"ncf__icon-download"})]})});return(0,jsx_runtime.jsxs)("div",_objectSpread(_objectSpread({},containerDivProps),{},{children:[(0,jsx_runtime.jsxs)("div",{className:"ncf__center",children:[(0,jsx_runtime.jsx)("div",{className:"ncf__icon ncf__icon--tick ncf__icon--large"}),(0,jsx_runtime.jsx)("p",{className:"ncf__paragraph--reduced-padding ncf__paragraph--subscription-confirmation",children:"You are now subscribed to:"}),(0,jsx_runtime.jsx)("h1",{className:"ncf__header ncf__header--confirmation",children:offer})]}),nextActionTop,!isB2cPartnershipCopyAvailable&&(0,jsx_runtime.jsxs)("p",{className:"ncf__paragraph",children:["We’ve sent confirmation to ",email,". Make sure you check your spam folder if you don’t receive it."]}),isB2cPartnershipCopyAvailable?(0,jsx_runtime.jsxs)("p",{className:"ncf__paragraph",children:[b2cPartnershipCopy[0],(0,jsx_runtime.jsx)("span",{className:"ncf__legend",children:" ".concat(email,". ")}),b2cPartnershipCopy[1]]}):"",(0,jsx_runtime.jsxs)("p",{className:"ncf__paragraph",children:["Here’s a summary of your ",offer," subscription:"]}),detailElements,directDebitMandateUrlElement,(0,jsx_runtime.jsxs)("div",{className:"ncf__headed-paragraph",children:[(0,jsx_runtime.jsx)("h3",{className:"ncf__header",children:"Something not right?"}),(0,jsx_runtime.jsxs)("p",{className:"ncf__paragraph",children:["Go to your"," ",(0,jsx_runtime.jsx)("a",{className:"ncf__link ncf__link--external",href:"https://www.ft.com/myaccount/personal-details",target:"_blank",rel:"noopener noreferrer","data-trackable":"yourAccount",children:"account settings"})," ","to view or edit your account. If you need to get in touch call us on"," ",(0,jsx_runtime.jsx)("a",{href:"tel:+442077556248",className:"ncf__link ncf__link--external",children:"+44 (0) 207 755 6248"}),". Or contact us for additional support."]})]}),(0,jsx_runtime.jsxs)("p",{className:"ncf__paragraph",children:["We will automatically renew your subscription using the payment method provided unless you cancel before your renewal date. See our"," ",(0,jsx_runtime.jsx)("a",{className:"ncf__link ncf__link--external",href:"http://help.ft.com/help/legal-privacy/terms-conditions/",target:"_top",rel:"noopener",children:"Terms & Conditions"})," ","for details on how to cancel."]}),nextActionBottom]}))}function confirmation_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function confirmation_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?confirmation_stories_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):confirmation_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}Confirmation.displayName="Confirmation",Confirmation.propTypes={isTrial:prop_types_default().bool,isB2cPartnership:prop_types_default().bool,b2cPartnershipCopy:prop_types_default().array,offer:prop_types_default().string.isRequired,email:prop_types_default().string,details:prop_types_default().arrayOf(prop_types_default().shape({title:prop_types_default().string.isRequired,data:prop_types_default().string.isRequired,description:prop_types_default().string})),directDebitMandateUrl:prop_types_default().string,nextActionTop:prop_types_default().node,nextActionBottom:prop_types_default().node},Confirmation.__docgenInfo={description:"",methods:[],displayName:"Confirmation",props:{isTrial:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isB2cPartnership:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},b2cPartnershipCopy:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},offer:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},email:{defaultValue:{value:"'your email'",computed:!1},description:"",type:{name:"string"},required:!1},details:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!0},data:{name:"string",required:!0},description:{name:"string",required:!1}}}},required:!1},directDebitMandateUrl:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},nextActionTop:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},nextActionBottom:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};const confirmation_stories={title:"Confirmation",component:Confirmation,argTypes:{details:{control:"array"}}};var nextActionTop=(0,jsx_runtime.jsx)("p",{className:"ncf__center",children:(0,jsx_runtime.jsx)("a",{href:"/myft/",className:"ncf__button ncf__button--submit ncf__button--margin",children:"An example child: this is the tailor my experience button"})}),nextActionBottom=(0,jsx_runtime.jsxs)("div",{className:"ncf__field--center",children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("a",{href:"/contentuuid",className:"ncf__button ncf__button--submit ncf__button--margin",children:"Return to your article"})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("a",{href:"/",className:"ncf__link",children:"Explore the FT"})})]}),Basic=function Basic(args){return(0,jsx_runtime.jsx)(Confirmation,confirmation_stories_objectSpread({},args))};Basic.displayName="Basic",Basic.args={offer:"Premium Digital",details:[{title:"Renewal Cost",description:"The price your subscription will auto renew",data:"£100,000,000.00"},{title:"Renewal Date",description:"The date your subscription will auto renew",data:"Dec 25, 2020"}],nextActionTop,nextActionBottom},Basic.parameters=confirmation_stories_objectSpread(confirmation_stories_objectSpread({},Basic.parameters),{},{docs:confirmation_stories_objectSpread(confirmation_stories_objectSpread({},null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs),{},{source:confirmation_stories_objectSpread({originalSource:"args => <Confirmation {...args} />"},null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2=_Basic$parameters2.docs)||void 0===_Basic$parameters2?void 0:_Basic$parameters2.source)})});var __namedExportsOrder=["Basic"];Basic.__docgenInfo={description:"",methods:[],displayName:"Basic"}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);