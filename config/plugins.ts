export default ({ env }: { env: any }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('dp9wqmjqe'),
          api_key: env('156125289433263'),
          api_secret: env('gPfG0xYZ9CEz5R4nFCT3M4Dqpc8'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });