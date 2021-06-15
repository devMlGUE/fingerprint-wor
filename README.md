# fingerprint-wor
JS package to generate a unique user fingerprint based on browser configuration.
This fingerprint is a string that identifies an unique user

It has no dependencies, and there is no need to make external requests to generate the fingerprint.

## Usage

Get user fingerprint:
```javascript
import fingerprintWor from 'fingerprint-wor';

const config = {
  debug: false,
  encType: 'md5',
  methods: {
    dateData: true,
    render: true,
    window: true,
    windowNavigator: true,
    windowScreen: true,
  },
};

const fingerprint = fingerprintWor(config);
console.log(fingerprint);
```
If you want to use the default configuration, you don't need to pass the config param.
```javascript
import fingerprintWor from 'fingerprint-wor';

const fingerprint = fingerprintWor();
console.log(fingerprint);
```

### Config
Options in config object:
- `debug [bool]`: enable debug mode, it logs the running methods (default `false`).
- `encType [string]`: the output token encryption ('md5', 'sha256', 'raw') (default `'raw'`).
- `methods [obj]`: object with the methods that are enabled or disabled.
  -  `dateData [bool]`: collect the timezone and date data to add to the fingerprint (default `true`).
  -  `render [bool]`: render a hidden canvas to get the browser fingerprint (default `true`).
  -  `window [bool]`: collect some data in the `window` object (default `true`).
  -  `windowNavigator [bool]`: collect some data in the `window.navigator` object (default `true`).
  -  `windowScreen [bool]`: collect some data in the `window.screen` object (default `true`).
    