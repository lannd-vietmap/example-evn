## Popup

A popup component.

## Examples
### Create a popup

```js
let popup = new Popup();
// Set an event listener that will fire
// any time the popup is opened
popup.on('open', () => {
  console.log('popup was opened');
});
```
### Create a popup

```js
let popup = new Popup();
// Set an event listener that will fire
// any time the popup is closed
popup.on('close', () => {
  console.log('popup was closed');
});
```
```js
let markerHeight = 50, markerRadius = 10, linearOffset = 25;
let popupOffsets = {
 'top': [0, 0],
 'top-left': [0,0],
 'top-right': [0,0],
 'bottom': [0, -markerHeight],
 'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
 'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
 'left': [markerRadius, (markerHeight - markerRadius) * -1],
 'right': [-markerRadius, (markerHeight - markerRadius) * -1]
 };
let popup = new Popup({offset: popupOffsets, className: 'my-class'})
  .setLngLat(e.lngLat)
  .setHTML("<h1>Hello World!</h1>")
  .setMaxWidth("300px")
  .addTo(map);
```

## Events
Event open of type Event will be fired when the popup is opened manually or programmatically.

Event close of type Event will be fired when the popup is closed manually or programmatically.

## Constructors
new Popup()
new Popup(options?: [PopupOptions](./POPUP-OPTIONS.md)): Popup

Parameters
| Parameter |	Type |	Description |
| --- | --- | --- |
| options?| 	[PopupOptions](./POPUP-OPTIONS.md)| 	the options| 

Returns
Popup

## Methods
### addClassName()
addClassName(className: string): Popup

Adds a CSS class to the popup container element.

Parameters
| Parameter |	Type |	Description |
| --- | --- | --- |
| className| 	string| 	Non-empty string with CSS class name to add to popup container| 

Returns
Popup

### Example
```js
let popup = new Popup()
popup.addClassName('some-class')
addTo()
addTo(map: Map): this
```

Adds the popup to a map.

Parameters
| Parameter |	Type |	Description |
| --- | --- | --- |
| map| 	Map| 	The VietMap GL JS map to add the popup to.| 

Returns
this

### Example
```js
new Popup()
  .setLngLat([0, 0])
  .setHTML("<h1>Null Island</h1>")
  .addTo(map);
```
### getElement()
getElement(): HTMLElement

Returns the Popup's HTML element.

Returns
HTMLElement

element

Example
Change the Popup element's font size

```js
let popup = new Popup()
  .setLngLat([-96, 37.8])
  .setHTML("<p>Hello World!</p>")
  .addTo(map);
let popupElem = popup.getElement();
popupElem.style.fontSize = "25px";
```
### getLngLat()
getLngLat(): LngLat

Returns the geographical location of the popup's anchor.

The longitude of the result may differ by a multiple of 360 degrees from the longitude previously set by setLngLat because Popup wraps the anchor longitude across copies of the world to keep the popup on screen.

Returns
LngLat

The geographical location of the popup's anchor.

### getMaxWidth()
getMaxWidth(): string

Defined in: src/ui/popup.ts:417

Returns the popup's maximum width.

Returns
string

The maximum width of the popup.

### isOpen()
isOpen(): boolean

Defined in: src/ui/popup.ts:232

Returns
boolean

true if the popup is open, false if it is closed.

### listens()
listens(type: string): boolean

Defined in: src/util/evented.ts:165

Returns a true if this instance of Evented or any forwardeed instances of Evented have a listener for the specified type.

#### Parameters
| Parameter |	Type |	Description |
| --- | --- | --- |
| type| 	string| 	The event type| 

Returns
boolean

true if there is at least one registered listener for specified event type, false otherwise

### off()
off(type: string, listener: Listener): Popup

Defined in: src/util/evented.ts:90

Removes a previously registered event listener.

#### Parameters
| Parameter |	Type |	Description |
| --- | --- | --- |
| type| 	string| 	The event type to remove listeners for.| 
| listener| 	Listener| 	The listener function to remove.| 

Returns
Popup


### on()
on(type: string, listener: Listener): Subscription

Adds a listener to a specified event type.

#### Parameters
| Parameter |	Type |	Description |
| --- | --- | --- |
| type| 	string| 	The event type to add a listen for.| 
| listener| 	Listener| 	The function to be called when the event is fired. The listener function is called with the data object passed to fire, extended with target and type properties.| 

Returns
Subscription

### once()
once(type: string, listener?: Listener): Promise<any> | Popup

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

#### Parameters
| Parameter |	Type |	Description |
| --- | --- | --- |
| type| 	string| 	The event type to listen for.| 
| listener?| 	Listener| 	The function to be called when the event is fired the first time.| 

Returns
Promise<any> | Popup

this or a promise if a listener is not provided

### remove()
remove(): this

Removes the popup from the map it has been added to.

Returns
this

#### Example
```js
let popup = new Popup().addTo(map);
popup.remove();
```
### removeClassName()
removeClassName(className: string): Popup

Removes a CSS class from the popup container element.

#### Parameters
| Parameter |	Type |	Description |
| --- | --- | --- |
| className| 	string| 	Non-empty string with CSS class name to remove from popup container| 
Returns
Popup

#### Example
```js
let popup = new Popup()
popup.removeClassName('some-class')
```
### setDOMContent()
setDOMContent(htmlNode: Node): this

Sets the popup's content to the element provided as a DOM node.

#### Parameters
| Parameter |	Type |	Description |
| --- | --- | --- |
| htmlNode| 	Node| 	A DOM node to be used as content for the popup.| 

Returns
this

#### Example
Create an element with the popup content

```js
let div = document.createElement('div');
div.innerHTML = 'Hello, world!';
let popup = new Popup()
  .setLngLat(e.lngLat)
  .setDOMContent(div)
  .addTo(map);
```
### setEventedParent()
setEventedParent(parent?: Evented, data?: any): Popup


Bubble all events fired by this instance of Evented to this parent instance of Evented.

#### Parameters
| Parameter| 	Type| 
| --- | --- |
| parent?| 	Evented| 
| data?| 	any| 

Returns
Popup

### setHTML()
setHTML(html: string): this

Sets the popup's content to the HTML provided as a string.

This method does not perform HTML filtering or sanitization, and must be used only with trusted content. Consider Popup#setText if the content is an untrusted text string.

#### Parameters
| Parameter |	Type |	Description |
| --- | --- | --- |
| html| 	string| 	A string representing HTML content for the popup.| 

Returns
this

Example
```js
let popup = new Popup()
  .setLngLat(e.lngLat)
  .setHTML("<h1>Hello World!</h1>")
  .addTo(map);
```
### setLngLat()
setLngLat(lnglat: LngLatLike): this

Sets the geographical location of the popup's anchor, and moves the popup to it. Replaces trackPointer() behavior.

#### Parameters
| Parameter |	Type |	Description |
| --- | --- | --- |
| lnglat| 	LngLatLike| 	The geographical location to set as the popup's anchor.| 
Returns
this

### LngLatLike: LngLat | { lat: number; lng: number; } | { lat: number; lon: number; } | [number, number]
### setMaxWidth()
setMaxWidth(maxWidth: string): this

Sets the popup's maximum width. This is setting the CSS property max-width. Available values can be found here: https://developer.mozilla.org/en-US/docs/Web/CSS/max-width

#### Parameters
| Parameter |	Type |	Description |
| --- | --- | --- |
| maxWidth| 	string| 	A string representing the value for the maximum width.| 

Returns
this

### setOffset()
setOffset(offset?: Offset): this

Sets the popup's offset.

Parameters
| Parameter |	Type |	Description |
| --- | --- | --- |
| offset?| 	Offset| 	Sets the popup's offset.| 


Returns
this

### setSubpixelPositioning()
setSubpixelPositioning(value: boolean): void

Set the option to allow subpixel positioning of the popup by passing a boolean

#### Parameters
| Parameter |	Type |	Description |
| --- | --- | --- |
| value| 	boolean| 	When boolean is true, subpixel positioning is enabled for the popup.| 

Returns
void

#### Example
```js
let popup = new Popup()
popup.setSubpixelPositioning(true);
setText()
setText(text: string): this
```

Sets the popup's content to a string of text.

This function creates a Text node in the DOM, so it cannot insert raw HTML. Use this method for security against XSS if the popup content is user-provided.

#### Parameters
| Parameter |	Type |	Description |
| --- | --- | --- |
| text| 	string| 	Textual content for the popup.| 

Returns
this

#### Example
```js
let popup = new Popup()
  .setLngLat(e.lngLat)
  .setText('Hello, world!')
  .addTo(map);
```
### toggleClassName()
toggleClassName(className: string): boolean

Add or remove the given CSS class on the popup container, depending on whether the container currently has that class.

#### Parameters
| Parameter |	Type |	Description |
| --- | --- | --- |
| className| 	string| 	Non-empty string with CSS class name to add/remove| 

Returns
boolean

if the class was removed return false, if class was added, then return true, undefined if there is no container

#### Example
```js
let popup = new Popup()
popup.toggleClassName('toggleClass')
```

### trackPointer()
trackPointer(): this

Tracks the popup anchor to the cursor position on screens with a pointer device (it will be hidden on touchscreens). Replaces the setLngLat behavior. For most use cases, set closeOnClick and closeButton to false.

Returns
this

#### Example
```js
let popup = new Popup({ closeOnClick: false, closeButton: false })
  .setHTML("<h1>Hello World!</h1>")
  .trackPointer()
  .addTo(map);
```