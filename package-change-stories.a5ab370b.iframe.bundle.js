/*! For license information please see package-change-stories.a5ab370b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_financial_times_n_conversion_forms=self.webpackChunk_financial_times_n_conversion_forms||[]).push([[6564],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}function _defineProperty(obj,key,value){return(key=toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{c:()=>_defineProperty})},"./components/package-change.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,WithPackageDescription:()=>WithPackageDescription,__namedExportsOrder:()=>__namedExportsOrder,default:()=>package_change_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),prop_types=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function PackageChange(_ref){var changePackageUrl=_ref.changePackageUrl,currentPackage=_ref.currentPackage,packageDescription=_ref.packageDescription;return(0,jsx_runtime.jsx)("div",{className:"ncf__package-change",children:(0,jsx_runtime.jsxs)("div",{className:"ncf__package-change__package",children:[(0,jsx_runtime.jsxs)("div",{className:"ncf__package-change__content",children:[(0,jsx_runtime.jsxs)("p",{children:["You have chosen"," ",(0,jsx_runtime.jsx)("span",{className:"ncf__strong",children:currentPackage})]}),packageDescription&&(0,jsx_runtime.jsx)("p",{className:"ncf__package-change__content__description",children:packageDescription})]}),(0,jsx_runtime.jsx)("div",{className:"ncf__package-change__actions",children:(0,jsx_runtime.jsx)("a",{href:changePackageUrl,className:"ncf__button ncf__button--mono ncf__button--baseline","data-trackable":"change",children:"Change"})})]})})}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.c)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}PackageChange.displayName="PackageChange",PackageChange.propTypes={changePackageUrl:prop_types_default().string.isRequired,currentPackage:prop_types_default().string.isRequired,packageDescription:prop_types_default().string},PackageChange.__docgenInfo={description:"",methods:[],displayName:"PackageChange",props:{changePackageUrl:{description:"",type:{name:"string"},required:!0},currentPackage:{description:"",type:{name:"string"},required:!0},packageDescription:{description:"",type:{name:"string"},required:!1}}};const package_change_stories={title:"Package Change",component:PackageChange};var Basic=function Basic(args){return(0,jsx_runtime.jsx)(PackageChange,_objectSpread({},args))};Basic.displayName="Basic",Basic.args={currentPackage:"Premium Digital",changePackageUrl:"https://ft.com/products"};var WithPackageDescription=function WithPackageDescription(args){return(0,jsx_runtime.jsx)(PackageChange,_objectSpread({},args))};WithPackageDescription.displayName="WithPackageDescription",WithPackageDescription.args={currentPackage:"Premium Digital",changePackageUrl:"https://ft.com/products",packageDescription:"Personalised email briefings and alerts"},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => <PackageChange {...args} />",...Basic.parameters?.docs?.source}}},WithPackageDescription.parameters={...WithPackageDescription.parameters,docs:{...WithPackageDescription.parameters?.docs,source:{originalSource:"args => <PackageChange {...args} />",...WithPackageDescription.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","WithPackageDescription"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);