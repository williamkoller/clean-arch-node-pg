export class FieldsError extends Error {
  constructor(args: Record<string, any>) {
    super(`${JSON.stringify(args)}`);
    this.name = 'FieldsError';
  }
}
