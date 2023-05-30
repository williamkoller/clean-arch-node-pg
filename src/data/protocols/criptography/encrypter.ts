export interface Encrypter {
  encrypt: (plaintext: number, name: string, email: string) => Promise<string>;
}
