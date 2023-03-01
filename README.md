To use parcel-iframe-manager, you simply need to install it as a dependency in your project and configure it in your Parcel configuration file (usually named parcel.config.js). Here's an example of how you could configure parcel-iframe-manager in your Parcel configuration file:

js

const iframeManager = require('parcel-iframe-manager');
```js
module.exports = {
  // ... other Parcel configuration options ...
  plugins: [
    iframeManager()
  ]
};
```
This will configure iframe-manager to be used during the build process, automatically resizing all of the iframes in your project. You can also customize the behavior of iframe-manager by passing in additional options to the iframeManager function.