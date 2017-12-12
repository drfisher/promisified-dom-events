Promisified DOM Events
======================

This is a small library which creates promises for some single events: DOMContentLoaded and window.onload. It doesn't matter when you use it before or after events. If an event has happend promise will be fullfilled.

## Install

```bash
npm install -S promisified-dom-events
```

## Use

```javascript
// import
import {loaded, ready} from 'promisified-dom-events';
ready.then(() => {
  // DOM is ready
});
loaded.then(() => {
  // window is loaded
});

// from a global object
window.promisifiedDomEvents.ready.then(() => {
  // DOM is ready
});
window.promisifiedDomEvents.loaded.then(() => {
  // window is loaded
});

```
