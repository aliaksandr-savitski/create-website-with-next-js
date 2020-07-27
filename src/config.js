const config = {
  self: {
    url: 'https://visitmyhome.co.uk',
  },
  content: {
    kentico: {
      deliveryAPI: {
        projectId: process.env.KENTICO_PROJECT_ID,
      },
    },
  },
  analytics: {
    google: {
      trackingId: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
};

export default config;
