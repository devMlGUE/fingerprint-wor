import defaultConfig from "./methods/methodsConfig.js";
import windowNavigator from "./methods/windowNavigator.js";
import windowScreen from "./methods/windowScreen.js";
import dateData from "./methods/dateData.js";
import render from "./methods/render.js";
import window from "./methods/window.js";
import encManager from "./encryption/encManager.js";

export default (config = {}) => {
  const customConfig = Object.assign(defaultConfig, config);
  const { methods, debug } = customConfig;
  const methodFunctions = {
    dateData,
    render,
    window,
    windowNavigator,
    windowScreen,
  }

  const methodKeys = Object.keys(methods);
  const userData = methodKeys.map((method) => {
    return methodFunctions[method](customConfig);
  });

  const dataString = JSON.stringify(userData);
  if (debug) console.log('fingerprint data', dataString);

  const encType = customConfig.encType;
  return encType === 'raw' ? dataString : encManager(dataString, encType);
};