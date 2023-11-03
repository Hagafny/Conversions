const API_BASE = "http://api.exchangerate.host";

const config = {
  exchange: {
    baseURL: API_BASE,
    accessKey: process.env.REACT_APP_EXCHANGE_ACCESS_KEY,
  },
};

export default config;
