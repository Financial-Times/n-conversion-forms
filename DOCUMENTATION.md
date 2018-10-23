<a name="utils"></a>

## utils : <code>object</code>
Simple utilities for enhancing conversion forms

**Kind**: global namespace  

* [utils](#utils) : <code>object</code>
    * [.Email](#utils.Email)
        * [new Email(document)](#new_utils.Email_new)
    * [.Password](#utils.Password)
        * [new Password(document)](#new_utils.Password_new)
        * [.toggleMask(mask)](#utils.Password+toggleMask)
    * [.Tracking](#utils.Tracking)
        * [new Tracking(window, element)](#new_utils.Tracking_new)
        * [.dispatch(category, action, data)](#utils.Tracking+dispatch) ⇒ <code>number</code>
        * [.getDebugData()](#utils.Tracking+getDebugData) ⇒ <code>array</code>

<a name="utils.Email"></a>

### utils.Email
Utility for the `n-conversion-forms/partial/email.html` partial

**Kind**: static class of [<code>utils</code>](#utils)  
<a name="new_utils.Email_new"></a>

#### new Email(document)
Create email utility and register change listener to toggle password mask


| Param | Type | Description |
| --- | --- | --- |
| document | <code>Document</code> | Windows [document](https://developer.mozilla.org/en-US/docs/Web/API/Document) object |

<a name="utils.Password"></a>

### utils.Password
Utility for the `n-conversion-forms/partial/password.html` partial

**Kind**: static class of [<code>utils</code>](#utils)  

* [.Password](#utils.Password)
    * [new Password(document)](#new_utils.Password_new)
    * [.toggleMask(mask)](#utils.Password+toggleMask)

<a name="new_utils.Password_new"></a>

#### new Password(document)
Create password utility and register change listener to toggle password mask


| Param | Type | Description |
| --- | --- | --- |
| document | <code>Document</code> | Windows [document](https://developer.mozilla.org/en-US/docs/Web/API/Document) object |

<a name="utils.Password+toggleMask"></a>

#### password.toggleMask(mask)
Toggles whether the password is shown in plain text or not

**Kind**: instance method of [<code>Password</code>](#utils.Password)  

| Param | Type | Description |
| --- | --- | --- |
| mask | <code>Boolean</code> | Pass `false` to show the password in plain text |

**Example**  
```js
// Show the password in plain text
password.toggleMask(false);
```
<a name="utils.Tracking"></a>

### utils.Tracking
Utility for o-tracking

**Kind**: static class of [<code>utils</code>](#utils)  

* [.Tracking](#utils.Tracking)
    * [new Tracking(window, element)](#new_utils.Tracking_new)
    * [.dispatch(category, action, data)](#utils.Tracking+dispatch) ⇒ <code>number</code>
    * [.getDebugData()](#utils.Tracking+getDebugData) ⇒ <code>array</code>

<a name="new_utils.Tracking_new"></a>

#### new Tracking(window, element)
Construct with window and element


| Param | Type | Description |
| --- | --- | --- |
| window | <code>Window</code> | Window object to access Image and CustomEvent on |
| element | <code>Element</code> | HTML element to dispatch event on, normally document.body |

<a name="utils.Tracking+dispatch"></a>

#### tracking.dispatch(category, action, data) ⇒ <code>number</code>
Dispatch a standard tracking event, falls back to dispacting tracking pixel

**Kind**: instance method of [<code>Tracking</code>](#utils.Tracking)  
**Returns**: <code>number</code> - Amount of events dispatched  

| Param | Type |
| --- | --- |
| category | <code>string</code> | 
| action | <code>string</code> | 
| data | <code>object</code> | 

**Example**  
```js
// Dispatch a tracking event
tracking.dispatch('signup', 'view', { custom: 'data' });
```
<a name="utils.Tracking+getDebugData"></a>

#### tracking.getDebugData() ⇒ <code>array</code>
Return all the debug data

**Kind**: instance method of [<code>Tracking</code>](#utils.Tracking)  
