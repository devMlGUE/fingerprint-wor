export default (config) => {
  const {debug} = config;
  const { width, height, colorDepth, pixelDepth} = window.screen;
  const data = {width, height, colorDepth, pixelDepth};

  if(debug) console.log('windowScreen: ', data);

  return data;
};
