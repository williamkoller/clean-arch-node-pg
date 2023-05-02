export const healthPath = {
  get: {
    tags: ['Health'],
    summary: 'Health',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/health',
            },
          },
        },
      },
      500: {
        $ref: '#/components/serverError',
      },
    },
  },
};
