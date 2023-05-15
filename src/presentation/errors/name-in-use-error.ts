export class NameInUseError extends Error {
  constructor() {
    super('The received name is already in use');
    this.name = 'NameInUseError';
  }
}
