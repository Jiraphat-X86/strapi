module.exports = () => {
    return {
        ckeditor: true,
        graphql: {
            config: {
              endpoint: '/graphql',
              shadowCRUD: true,
              playgroundAlways: false,
              depthLimit: 7,
              amountLimit: 100,
              apolloServer: {
                tracing: false,
              },
            },
          }
    }
}

// ~/postgresql/backend/config/plugins.js
module.exports = ({ env }) => ({
      upload: {
        config: {
          provider: 'aws-s3',
          providerOptions: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
            region: env('AWS_REGION'),
            params: {
              Bucket: env('AWS_BUCKET'),
            },
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
      },
    });
