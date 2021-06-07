export default (config) => {
  const {debug} = config;
  const windowNav = window.navigator;
  const { mimeTypes, plugins} = windowNav

  const pluginList = Object.entries(plugins).map(([, plugin]) => plugin.name);
  const mimeTypeList = Object.entries(mimeTypes).map(([, mimeType]) => mimeType.type);

  const data = {
    appName: windowNav.appName,
    appCodeName: windowNav.appCodeName,
    appVersion: windowNav.appVersion,
    cookieEnabled: windowNav.cookieEnabled,
    deviceMemory: windowNav.deviceMemory,
    doNotTrack: windowNav.doNotTrack,
    hardwareConcurrency: windowNav.hardwareConcurrency,
    language: windowNav.language,
    languages: windowNav.languages,
    maxTouchPoints: windowNav.maxTouchPoints,
    mimeTypeList: mimeTypeList,
    platform: windowNav.platform,
    pluginList: pluginList,
    product: windowNav.product,
    productSub: windowNav.productSub,
    userAgent: windowNav.userAgent,
    vendor: windowNav.vendor,
    vendorSub: windowNav.vendorSub,
    webdriver: windowNav.webdriver,
  }

  if(debug) console.log('windowNavigator: ', data);

  return data;
};