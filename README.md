# @scripty/webpack-after-compile-plugin

# Description

runs a javascript command after webpack build

# Usage
```bash
npm install @scripty/webpack-after-compile-plugin --save-dev
```

##### Client: webpack.config.js

```javascript

const WebpackAfterCompilePlugin = require('@scripty/webpack-after-compile-plugin');

const webpackConfig = {
    ...
    ...
    plugins: [
        new WebpackAfterCompilePlugin('RandomCommandName', () =>  console.log('hello command'))
    ]
};

```