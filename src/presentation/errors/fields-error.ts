export class FieldsError extends Error {
  constructor(stack: string) {
    super('Some of the fields are not correct');
    this.name = 'FieldsError';
    this.stack = stack;
  }
}
