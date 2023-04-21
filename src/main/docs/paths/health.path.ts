export const healthPath = {
  get: {
    tags: ['Health'],
    summary: 'Health',
    responses: {
      200: {
        description: 'Sucesso',
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
