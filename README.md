# Chrome Overscroll History Navigation Gestures Plugin

Emulate the Chrome [chrome://flags/#overscroll-history-navigation](chrome://flags/#overscroll-history-navigation) gestures. This is useful if the feature is not natively supported on your machine.

## Supported Gestures
1. With the browser viewport on the left edge of the page, swipe right to navigate back
1. With the browser viewport on the right edge of the page, swipe left to navigate forward

## Build
```
yarn install
yarn run package
```

## Install
1. Visit [chrome://extensions/](chrome://extensions/)
1. Enable `Developer mode` toggle in the top right
1. Select `Load unpacked` and choose the `dist` directory

## Todo
* Options Page
* Tests
