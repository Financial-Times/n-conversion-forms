/*! For license information please see billing-postcode-stories.11e968f6.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_financial_times_n_conversion_forms=self.webpackChunk_financial_times_n_conversion_forms||[]).push([[3662],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./components/billing-postcode.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>billing_postcode_stories});var _Basic$parameters,_Basic$parameters2,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),prop_types=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function BillingPostcode(_ref){var postcodeReference=_ref.postcodeReference,_ref$value=_ref.value,value=void 0===_ref$value?"":_ref$value,_ref$pattern=_ref.pattern,pattern=void 0===_ref$pattern?null:_ref$pattern,_ref$isDisabled=_ref.isDisabled,isDisabled=void 0!==_ref$isDisabled&&_ref$isDisabled,_ref$hasError=_ref.hasError,hasError=void 0!==_ref$hasError&&_ref$hasError,_ref$isHidden=_ref.isHidden,isHidden=void 0!==_ref$isHidden&&_ref$isHidden,_ref$fieldId=_ref.fieldId,fieldId=void 0===_ref$fieldId?"billingPostcodeField":_ref$fieldId,_ref$inputId=_ref.inputId,inputId=void 0===_ref$inputId?"billingPostcode":_ref$inputId,_ref$inputName=_ref.inputName,inputName=void 0===_ref$inputName?"billingPostcode":_ref$inputName,BillingPostcodeFieldClassNames=classnames_default()(["o-forms-field",{ncf__hidden:isHidden}]),inputWrapperClassNames=classnames_default()(["o-forms-input","o-forms-input--text",{"o-forms-input--invalid":hasError}]);return(0,jsx_runtime.jsxs)("label",{id:fieldId,className:BillingPostcodeFieldClassNames,"data-validate":"required",htmlFor:inputId,children:[(0,jsx_runtime.jsx)("span",{className:"o-forms-title",children:(0,jsx_runtime.jsxs)("span",{className:"o-forms-title__main",children:["Billing ",(0,jsx_runtime.jsx)("span",{"data-reference":"postcode",children:postcodeReference})]})}),(0,jsx_runtime.jsxs)("span",{className:inputWrapperClassNames,children:[(0,jsx_runtime.jsx)("input",{type:"text",id:inputId,name:inputName,defaultValue:value,placeholder:"Enter your ".concat(postcodeReference),autoComplete:"postal-code","data-trackable":"billing-postcode","aria-required":"true",required:!0,pattern,disabled:isDisabled}),(0,jsx_runtime.jsxs)("span",{className:"o-forms-input__error",children:["Please enter a valid"," ",(0,jsx_runtime.jsx)("span",{"data-reference":"postcode",children:postcodeReference}),"."]})]})]})}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}BillingPostcode.displayName="BillingPostcode",BillingPostcode.propTypes={postcodeReference:prop_types_default().string.isRequired,value:prop_types_default().string,pattern:prop_types_default().string,isDisabled:prop_types_default().bool,hasError:prop_types_default().bool,isHidden:prop_types_default().bool,fieldId:prop_types_default().string,inputId:prop_types_default().string,inputName:prop_types_default().string},BillingPostcode.__docgenInfo={description:"",methods:[],displayName:"BillingPostcode",props:{value:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},pattern:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},hasError:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isHidden:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},fieldId:{defaultValue:{value:"'billingPostcodeField'",computed:!1},description:"",type:{name:"string"},required:!1},inputId:{defaultValue:{value:"'billingPostcode'",computed:!1},description:"",type:{name:"string"},required:!1},inputName:{defaultValue:{value:"'billingPostcode'",computed:!1},description:"",type:{name:"string"},required:!1},postcodeReference:{description:"",type:{name:"string"},required:!0}}};const billing_postcode_stories={title:"Billing Postcode",component:BillingPostcode};var Basic=function Basic(args){return(0,jsx_runtime.jsx)(BillingPostcode,_objectSpread({},args))};Basic.displayName="Basic",Basic.args={postcodeReference:"Postcode"},Basic.parameters=_objectSpread(_objectSpread({},Basic.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs),{},{source:_objectSpread({originalSource:"args => <BillingPostcode {...args} />"},null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2=_Basic$parameters2.docs)||void 0===_Basic$parameters2?void 0:_Basic$parameters2.source)})});var __namedExportsOrder=["Basic"];Basic.__docgenInfo={description:"",methods:[],displayName:"Basic"}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);