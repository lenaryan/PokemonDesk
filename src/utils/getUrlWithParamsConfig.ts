import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string, query: object | any) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri,
    query: {},
  };

  const qu = { ...query };

  const pathname = Object.keys(qu).reduce((acc, val) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, qu[val]);
      delete qu[val];
      return result;
    }
    return acc;
  }, url.pathname);

  url.pathname = pathname;
  url.query = {
    ...qu,
  };

  return url;
}

export default getUrlWithParamsConfig;
