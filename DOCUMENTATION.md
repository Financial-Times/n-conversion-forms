## Classes

<dl>
<dt><a href="#Email">Email</a></dt>
<dd></dd>
<dt><a href="#Password">Password</a></dt>
<dd><p>Utility for the <code>n-conversion-forms/partial/password.html</code> partial</p>
</dd>
<dt><a href="#Tracking">Tracking</a></dt>
<dd></dd>
</dl>

<a name="Email"></a>

## Email
**Kind**: global class  

* [Email](#Email)
    * [new Email()](#new_Email_new)
    * [.checkMatch()](#Email+checkMatch)

<a name="new_Email_new"></a>

### new Email()
Initalise the Email utility

<a name="Email+checkMatch"></a>

### email.checkMatch()
Check the values of the two fields and update error state accordingly.

**Kind**: instance method of [<code>Email</code>](#Email)  
<a name="Password"></a>

## Password
Utility for the `n-conversion-forms/partial/password.html` partial

**Kind**: global class  

* [Password](#Password)
    * [new Password(document)](#new_Password_new)
    * [.toggleMask(mask)](#Password+toggleMask)

<a name="new_Password_new"></a>

### new Password(document)
Create password utility and register change listener to toggle password mask

**Throws**:

- If document not passed
- If password or checkbox elements not found


| Param | Type | Description |
| --- | --- | --- |
| document | <code>Document</code> | Windows [document](https://developer.mozilla.org/en-US/docs/Web/API/Document) object |

**Example**  
```js
// Initiate with window.document
const password = new Password(window.document);
```
<a name="Password+toggleMask"></a>

### password.toggleMask(mask)
Toggles whether the password is shown in plain text or not

**Kind**: instance method of [<code>Password</code>](#Password)  

| Param | Type | Description |
| --- | --- | --- |
| mask | <code>Boolean</code> | Pass true to show plain text |

**Example**  
```js
// Force password to be shown in plain text
password.toggleMask(false);
```
<a name="Tracking"></a>

## Tracking
**Kind**: global class  

* [Tracking](#Tracking)
    * [new Tracking(window, element)](#new_Tracking_new)
    * [.dispatch(category, action, data)](#Tracking+dispatch) ⇒ <code>number</code>
    * [.dispatchCustomEvent(data)](#Tracking+dispatchCustomEvent) ⇒ <code>number</code>
    * [.dispatchImage(data)](#Tracking+dispatchImage) ⇒ <code>number</code>
    * [.initDebugData()](#Tracking+initDebugData) ⇒ <code>array</code>
    * [.addDebugData(data)](#Tracking+addDebugData) ⇒ <code>number</code>
    * [.getDebugData()](#Tracking+getDebugData) ⇒ <code>array</code>

<a name="new_Tracking_new"></a>

### new Tracking(window, element)
Construct with window and element


| Param | Type | Description |
| --- | --- | --- |
| window | <code>Window</code> | Window object to access Image and CustomEvent on |
| element | <code>Element</code> | HTML element to dispatch event on, normally document.body |

<a name="Tracking+dispatch"></a>

### tracking.dispatch(category, action, data) ⇒ <code>number</code>
Dispatch a standard tracking event, falls back to dispacting tracking pixel

**Kind**: instance method of [<code>Tracking</code>](#Tracking)  
**Returns**: <code>number</code> - Amount of events dispatched  

| Param | Type |
| --- | --- |
| category | <code>string</code> | 
| action | <code>string</code> | 
| data | <code>object</code> | 

<a name="Tracking+dispatchCustomEvent"></a>

### tracking.dispatchCustomEvent(data) ⇒ <code>number</code>
Fire a CustomEvent on the given element with tracking data

**Kind**: instance method of [<code>Tracking</code>](#Tracking)  
**Returns**: <code>number</code> - Amount of events dispatched  

| Param | Type |
| --- | --- |
| data | <code>object</code> | 

<a name="Tracking+dispatchImage"></a>

### tracking.dispatchImage(data) ⇒ <code>number</code>
Load a tracking pixel with encoded tracking data

**Kind**: instance method of [<code>Tracking</code>](#Tracking)  
**Returns**: <code>number</code> - Amount of events dispatched  

| Param | Type |
| --- | --- |
| data | <code>object</code> | 

<a name="Tracking+initDebugData"></a>

### tracking.initDebugData() ⇒ <code>array</code>
Initalise debug data array

**Kind**: instance method of [<code>Tracking</code>](#Tracking)  
<a name="Tracking+addDebugData"></a>

### tracking.addDebugData(data) ⇒ <code>number</code>
Add a new debug message

**Kind**: instance method of [<code>Tracking</code>](#Tracking)  
**Returns**: <code>number</code> - Number of debug messages  

| Param | Type |
| --- | --- |
| data | <code>object</code> | 

<a name="Tracking+getDebugData"></a>

### tracking.getDebugData() ⇒ <code>array</code>
Return all the debug data

**Kind**: instance method of [<code>Tracking</code>](#Tracking)  
