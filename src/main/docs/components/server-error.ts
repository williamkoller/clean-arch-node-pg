export const serverError = {
  description: 'An error occurred on the server',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error',
      },
    },
  },
};
