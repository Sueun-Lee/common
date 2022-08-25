const config = {
  isDevelop: process.env.NODE_ENV === 'development',
  AWS: {
    region: process.env.REACT_APP_REGION,
    apiGateway: {
      name: process.env.REACT_APP_API_NAME,
      endpoint: process.env.REACT_APP_ENDPOINT,
    },
    cognito: {
      userPoolId: process.env.REACT_APP_USER_POOL_ID,
      userPoolWebClientId: process.env.REACT_APP_CLIENT_APP_ID,
      identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    },
  },
};

export default config;
