export default (config) => {
  const {debug} = config;
  const timezoneOffset = new Date().getTimezoneOffset();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const data = {timezoneOffset, timezone};

  if(debug) console.log('dateData: ', data);

  return data;
};
