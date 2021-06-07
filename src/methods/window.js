export default (config) => {
  const {debug} = config;
  const touchSupport = 'ontouchstart' in window;
  let { devicePixelRatio } = window;
  devicePixelRatio = +parseInt(devicePixelRatio);

  const data = {touchSupport, devicePixelRatio};

  if(debug) console.log('window: ', data);

  return data;
};
