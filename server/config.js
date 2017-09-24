const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://swe4103:group1@ds149134.mlab.com:49134/swe4103',
  port: process.env.PORT || 8000,
};

export default config;
