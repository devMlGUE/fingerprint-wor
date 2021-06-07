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
- `debug`: enable debug mode, it logs the running methods. (default `false`)
- `methods`: object with the methods that are enabled or disabled.
  -  `dateData`: collect the timezone and date data to add to the fingerprint.
  -  `render`: render a hidden canvas to get the browser fingerprint.
  -  `window`: collect some data in the window object.
  -  `windowNavigator`: collect some data in the window.navigator object.
  -  `windowScreen`: collect some data in the window.screen object.
    