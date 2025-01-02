# VietMapSDK Event:

## MapEventType


| Event            | Description |
| --- | --- |
| click | Fired when a pointing device (usually a mouse) is pressed and released contains a visible portion of the specified layer. |
| dblclick | Fired when a pointing device (usually a mouse) is pressed and released twice contains a visible portion of the specified layer. |
| mousedown | Fired when a pointing device (usually a mouse) is pressed while inside a visible portion of the specified layer. |
| mouseup | Fired when a pointing device (usually a mouse) is released while inside a visible portion of the specified layer. |
| mousemove | Fired when a pointing device (usually a mouse) is moved while the cursor is inside a visible portion of the specified layer. As you move the cursor across the layer, the event will fire every time the cursor changes position within that layer. |
| mouseenter | Fired when a pointing device (usually a mouse) enters a visible portion of a specified layer from outside that layer or outside the map canvas. |
| mouseleave | Fired when a pointing device (usually a mouse) leaves a visible portion of a specified layer, or leaves the map canvas. |
| mouseover | Fired when a pointing device (usually a mouse) is moved inside a visible portion of the specified layer. |
| mouseout | Fired when a point device (usually a mouse) leaves the visible portion of the specified layer. |
| contextmenu | Fired when the right button of the mouse is clicked or the context menu key is pressed within visible portion of the specified layer. |
| `touchstart`     | Fired when a touchstart event occurs within the visible portion of the specified layer.                 |
| `touchend`       | Fired when a touchend event occurs within the visible portion of the specified layer.                 |
| `touchcancel`    | Fired when a touchcancel event occurs within the visible portion of the specified layer.                 |
| `wheel`          | Fired when a event occurs within the map.                    |
| `resize`         | Fired immediately after the map has been resized                    |
| `remove`         | Fired immediately after the map has been removed                    |
| `touchmove`      | Fired when a [`touchmove`](https://developer.mozilla.org/en-US/docs/Web/Events/touchmove) event occurs within the map.                    |
| `movestart`      | Fired just before the map begins a transition from one view to another, as the result of either user interaction or such as `flyTo`, `jumpTo`, `easeTo`                    |
| `move`           | Fired repeatedly during an animated transition from one view to another, as the result of either user interaction or methods such as `flyTo`, `jumpTo`, `easeTo`                     |
| `moveend`        | Fired just after the map completes a transition from one view to another, as the result of either user interaction or methods such as `flyTo`, `jumpTo`, `easeTo`                     |
| `dragstart`      | Fired when a "drag to pan" interaction starts                    |
| `drag`           | Fired repeatedly during a "drag to pan" interaction                    |
| `dragend`        | Fired when a "drag to pan" interaction ends.                    |
| `zoomstart`      | Fired just before the map begins a transition from one zoom level to another, as the result of either user interaction or methods such as `flyTo`, `jumpTo`, `easeTo`                      |
| `zoom`           | Fired repeatedly during an animated transition from one zoom level to another, as the result of either user interaction or methods such as `flyTo`, `jumpTo`, `easeTo`                    |
| `zoomend`        | Fired just after the map completes a transition from one zoom level to another, as the result of either user interaction or methods such as `flyTo`, `jumpTo`, `easeTo`                    |
| `rotatestart`    | Fired when a "drag to rotate" interaction starts.                    |
| `rotate`         | Fired repeatedly during a "drag to rotate" interaction.                    |
| `rotateend`      | Fired when a "drag to rotate" interaction ends                     |
| `pitchstart`     | Fired whenever the map's pitch (tilt) begins a change as the result of either user interaction or methods such as `flyTo`, `jumpTo`, `easeTo`                    |
| `pitch`          | Fired repeatedly during the map's pitch (tilt) animation between one state and another as the result of either user interaction or methods such as `flyTo`, `jumpTo`, `easeTo`                    |
| `pitchend`       | Fired immediately after the map's pitch (tilt) finishes changing as the result of either user interaction or methods such as `flyTo`, `jumpTo`, `easeTo`                    |
| `boxzoomstart`   |  Fired when a "box zoom" interaction starts.                     |
| `boxzoomend`     | Fired when a "box zoom" interaction ends                    |
| `boxzoomcancel`  | Fired when the user cancels a "box zoom" interaction, or when the bounding box does not meet the minimum size threshold.                     |
| `webglcontextlost`     | Fired when the WebGL context is lost.                    |
| `webglcontextrestored` | Fired when the WebGL context is restored                    |
| `load`           | Fired immediately after all necessary resources have been downloaded and the first visually complete rendering of the map has occurred                    |
| `render`         | Fired whenever the map is drawn to the screen, as the result of: a change to the map's position, zoom, pitch, or bearing, a change to the map's style, a change to a GeoJSON source, the loading of a vector tile, GeoJSON file, glyph, or sprite                    |
| `idle`           | Fired after the last frame rendered before the map enters an "idle" state: No camera transitions are in progress, All currently requested tiles have loaded,  All fade/transition animations have completed                    |
| `error`          | Fired when an error occurs                    |
| `data`           | Fired when any map data loads or changes                    |
| `styledata`      | Fired when the map's style loads or changes                     |
| `sourcedata`     | Fired when one of the map's sources loads or changes, including if a tile belonging to a source loads or changes                    |
| `dataloading`    |  Fired when any map data (style, source, tile, etc) begins loading or changing asynchronously. All `dataloading` events are followed by a `data`, `dataabort` or `error` event                    |
| `styledataloading`     | Fired when the map's style begins loading or changing asynchronously. All `styledataloading` events are followed by a `styledata` or `error` event.                     |
| `sourcedataloading`    |  * Fired when one of the map's sources begins loading or changing asynchronously. All `sourcedataloading` events are followed by a `sourcedata`, `sourcedataabort` or `error` event.                     |
| `styleimagemissing`    | Fired when an icon or pattern needed by the style is missing                    |
| `dataabort`      | Fired when a request for one of the map's sources' tiles or data is aborted                    |
| `sourcedataabort`| Fired when a request for one of the map's sources' data is aborted                    |















</br>
</br>
</br>
</br>


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
