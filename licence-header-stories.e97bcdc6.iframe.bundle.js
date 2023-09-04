/*! For license information please see licence-header-stories.e97bcdc6.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_financial_times_n_conversion_forms=self.webpackChunk_financial_times_n_conversion_forms||[]).push([[2062],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{Z:()=>_typeof})},"./components/licence-sign-in.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>LicenceSignIn});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function LicenceSignIn(_ref){var _ref$displayName=_ref.displayName,displayName=void 0===_ref$displayName?"":_ref$displayName,_ref$url=_ref.url,url=void 0===_ref$url?"":_ref$url;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"ncf__center",children:[renderSignInTitle(displayName),""!==url&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:url,className:"ncf__button--secondary ncf__button--mid-width",children:"Sign in"})})]})}function renderSignInTitle(displayName){return""!==displayName?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"Have you already joined the "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"ncf__bold-licence-text",children:displayName}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:" account?"})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:"Already have a subscription?"})}LicenceSignIn.displayName="LicenceSignIn",LicenceSignIn.propTypes={displayName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,url:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string},LicenceSignIn.__docgenInfo={description:"",methods:[],displayName:"LicenceSignIn",props:{displayName:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},url:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1}}}},"./components/licence-title.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>LicenceTitle});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function LicenceTitle(_ref){var _ref$displayName=_ref.displayName,displayName=void 0===_ref$displayName?"":_ref$displayName,_ref$isTrial=_ref.isTrial,isTrial=void 0!==_ref$isTrial&&_ref$isTrial,_ref$isB2cPartnership=_ref.isB2cPartnershipLicence;return void 0!==_ref$isB2cPartnership&&_ref$isB2cPartnership||isTrial?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",{className:"ncf__header",children:displayName||"Welcome to the Financial Times"}):renderB2BTitle(displayName)}function renderB2BTitle(displayName){return displayName?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",{className:"ncf__header",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:"ncf__light-licence-text",children:["Great news!",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:"ncf__bold-licence-text",children:[" ",displayName," "]}),"has an",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"ncf__bold-licence-text",children:" FT subscription "}),"you can join"]})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",{className:"ncf__header",children:"Join your FT.com subscription"})}renderB2BTitle.displayName="renderB2BTitle",LicenceTitle.propTypes={displayName:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,isTrial:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,isB2cPartnershipLicence:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool},LicenceTitle.__docgenInfo={description:"",methods:[],displayName:"LicenceTitle",props:{displayName:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},isTrial:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isB2cPartnershipLicence:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1}}}},"./components/licence-header.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>licence_header_stories});var _Basic$parameters,_Basic$parameters2,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),licence_sign_in=__webpack_require__("./components/licence-sign-in.jsx"),licence_title=__webpack_require__("./components/licence-title.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function LicenceHeader(props){var _props$displayName=props.displayName,displayName=void 0===_props$displayName?"":_props$displayName,_props$logoUrl=props.logoUrl,logoUrl=void 0===_props$logoUrl?"":_props$logoUrl,_props$isTrial=props.isTrial,isTrial=void 0!==_props$isTrial&&_props$isTrial,_props$isB2cPartnersh=props.isB2cPartnershipLicence,isB2cPartnershipLicence=void 0!==_props$isB2cPartnersh&&_props$isB2cPartnersh,_props$welcomeText=props.welcomeText,welcomeText=void 0===_props$welcomeText?"":_props$welcomeText,_props$url=props.url,url=void 0===_props$url?"":_props$url;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[Boolean(logoUrl)&&(0,jsx_runtime.jsx)("img",{className:"ncf__logo",alt:"logo",src:logoUrl}),(0,jsx_runtime.jsx)(licence_title.u,{displayName,isTrial,isB2cPartnershipLicence}),!isTrial&&!isB2cPartnershipLicence&&(0,jsx_runtime.jsx)(licence_sign_in.O,{displayName,url}),welcomeText&&(0,jsx_runtime.jsx)("p",{dangerouslySetInnerHTML:function createMarkup(text){return{__html:text}}(welcomeText)})]})}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}LicenceHeader.displayName="LicenceHeader",LicenceHeader.propTypes={displayName:prop_types_default().string,logoUrl:prop_types_default().string,isTrial:prop_types_default().bool,welcomeText:prop_types_default().string,isB2cPartnershipLicence:prop_types_default().bool,url:prop_types_default().string},LicenceHeader.__docgenInfo={description:"",methods:[],displayName:"LicenceHeader",props:{displayName:{description:"",type:{name:"string"},required:!1},logoUrl:{description:"",type:{name:"string"},required:!1},isTrial:{description:"",type:{name:"bool"},required:!1},welcomeText:{description:"",type:{name:"string"},required:!1},isB2cPartnershipLicence:{description:"",type:{name:"bool"},required:!1},url:{description:"",type:{name:"string"},required:!1}}};const licence_header_stories={title:"Licence Header",component:LicenceHeader};var Basic=function Basic(args){return(0,jsx_runtime.jsx)(LicenceHeader,_objectSpread({},args))};Basic.displayName="Basic",Basic.args={displayName:"Hello World"},Basic.parameters=_objectSpread(_objectSpread({},Basic.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs),{},{source:_objectSpread({originalSource:"args => <LicenceHeader {...args} />"},null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2=_Basic$parameters2.docs)||void 0===_Basic$parameters2?void 0:_Basic$parameters2.source)})});var __namedExportsOrder=["Basic"];Basic.__docgenInfo={description:"",methods:[],displayName:"Basic"}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);