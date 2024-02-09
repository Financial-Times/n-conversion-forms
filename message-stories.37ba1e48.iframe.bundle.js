/*! For license information please see message-stories.37ba1e48.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_financial_times_n_conversion_forms=self.webpackChunk_financial_times_n_conversion_forms||[]).push([[7508],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}function _defineProperty(obj,key,value){return(key=toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{c:()=>_defineProperty})},"./components/message.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>message_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),prop_types=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Message(_ref){var title=_ref.title,message=_ref.message,_ref$additional=_ref.additional,additional=void 0===_ref$additional?[]:_ref$additional,_ref$actions=_ref.actions,actions=void 0===_ref$actions?null:_ref$actions,name=_ref.name,target=_ref.target,isNotice=_ref.isNotice,isError=_ref.isError,isSuccess=_ref.isSuccess,isInform=_ref.isInform,isStaticMessage=_ref.isStaticMessage,isHidden=_ref.isHidden,additionalMessages=additional.map((function(text,index){return(0,jsx_runtime.jsx)("p",{className:"o-message__content--additional",dangerouslySetInnerHTML:{__html:text}},index)})),oMessageClassNames=classnames_default()({"o-message":!0,"o-message--inner":!isStaticMessage,"o-message--notice":isNotice&&!isStaticMessage,"o-message--alert":!isNotice&&!isStaticMessage,"o-message--error":isError,"o-message--success":!isError&&isSuccess,"o-message--inform":!isError&&!isSuccess&&isInform,"o-message--neutral":!isError&&!isSuccess&&!isInform}),ncfClassNames=classnames_default()("ncf__message",{ncf__hidden:isHidden}),callToActionsList=actions?(0,jsx_runtime.jsx)("div",{className:"o-message__actions",children:actions.map((function(_ref2,index){var link=_ref2.link,isSecondary=_ref2.isSecondary,text=_ref2.text;return(0,jsx_runtime.jsx)("a",{href:link,target,className:isSecondary?"o-message__actions__secondary":"o-message__actions__primary",children:text},index)}))}):null;return(0,jsx_runtime.jsx)("div",{className:ncfClassNames,"data-message-name":name,children:(0,jsx_runtime.jsx)("div",{className:oMessageClassNames,"data-o-component":"o-message",children:(0,jsx_runtime.jsx)("div",{className:"o-message__container",children:(0,jsx_runtime.jsxs)("div",{className:"o-message__content",children:[(0,jsx_runtime.jsxs)("p",{className:"o-message__content-main",children:[title?(0,jsx_runtime.jsx)("span",{className:"o-message__content-highlight",children:title}):null,(0,jsx_runtime.jsx)("span",{className:"o-message__content-detail",dangerouslySetInnerHTML:{__html:message}})]}),additionalMessages,callToActionsList]})})})})}Message.displayName="Message";var actionType=prop_types_default().shape({link:prop_types_default().string.isRequired,isSecondary:prop_types_default().bool,text:prop_types_default().string,target:prop_types_default().oneOf(["_self"])});function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}Message.propTypes={title:prop_types_default().string,message:prop_types_default().string.isRequired,additional:prop_types_default().arrayOf(prop_types_default().string),actions:prop_types_default().arrayOf(actionType),name:prop_types_default().string,target:prop_types_default().string,isStaticMessage:prop_types_default().bool,isNotice:prop_types_default().bool,isError:prop_types_default().bool,isSuccess:prop_types_default().bool,isInform:prop_types_default().bool,isHidden:prop_types_default().bool},Message.__docgenInfo={description:"",methods:[],displayName:"Message",props:{additional:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},actions:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"arrayOf",value:{name:"custom",raw:"actionType"}},required:!1},title:{description:"",type:{name:"string"},required:!1},message:{description:"",type:{name:"string"},required:!0},name:{description:"",type:{name:"string"},required:!1},target:{description:"",type:{name:"string"},required:!1},isStaticMessage:{description:"",type:{name:"bool"},required:!1},isNotice:{description:"",type:{name:"bool"},required:!1},isError:{description:"",type:{name:"bool"},required:!1},isSuccess:{description:"",type:{name:"bool"},required:!1},isInform:{description:"",type:{name:"bool"},required:!1},isHidden:{description:"",type:{name:"bool"},required:!1}}};const message_stories={title:"Message",component:Message};var Basic=function Basic(args){return(0,jsx_runtime.jsx)(Message,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.c)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},args))};Basic.displayName="Basic",Basic.args={message:"This is just a simple message.",additional:["This is some extra information about the above message.","This is the second item in the array - so you can have as many as you need."],actions:[{link:"https://ft.com",isSecondary:!1,text:"FT Home"}]},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => <Message {...args} />",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);