# PopupOptions
PopupOptions: object

The Popup options object

## Type declaration
### anchor?
optional anchor: PositionAnchor

A string indicating the part of the Popup that should be positioned closest to the coordinate set via Popup#setLngLat. Options are `center`, `top`, `bottom`, `left`, `right`, `top-left`, `top-right`, `bottom-left`, and `bottom-right`. If unset the anchor will be dynamically set to ensure the popup falls within the map container with a preference for `bottom`.

### className?
optional className: string

Space-separated CSS class names to add to popup container

### closeButton?
optional closeButton: boolean

If true, a close button will appear in the top right corner of the popup.

Default Value

true
### closeOnClick?
optional closeOnClick: boolean

If true, the popup will closed when the map is clicked.

Default Value

true
### closeOnMove?
optional closeOnMove: boolean

If true, the popup will closed when the map moves.

Default Value

false
### focusAfterOpen?
optional focusAfterOpen: boolean

If true, the popup will try to focus the first focusable element inside the popup.

Default Value

true
### maxWidth?
optional maxWidth: string

A string that sets the CSS property of the popup's maximum width, eg '300px'. To ensure the popup resizes to fit its content, set this property to 'none'. Available values can be found here: https://developer.mozilla.org/en-US/docs/Web/CSS/max-width

Default Value

'240px'
### offset?
optional offset: Offset

A pixel offset applied to the popup's location

### subpixelPositioning?
optional subpixelPositioning: boolean

If true, rounding is disabled for placement of the popup, allowing for subpixel positioning and smoother movement when the popup is translated.

Default Value

false
