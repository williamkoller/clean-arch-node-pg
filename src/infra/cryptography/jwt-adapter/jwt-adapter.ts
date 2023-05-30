import { Decrypter } from '@/data/protocols/criptography/decrypter';
import { Encrypter } from '@/data/protocols/criptography/encrypter';
import { sign, verify } from 'jsonwebtoken';

export class JwtAdapter implements Encrypter, Decrypter {
  constructor(private readonly secret: string) {}
  async encrypt(
    plaintext: number,
    name: string,
    email: string
  ): Promise<string> {
    const chipertext = sign({ id: plaintext, name, email }, this.secret);
    return chipertext;
  }

  async decrypt(chipertext: string): Promise<string> {
    const plaintext: any = verify(chipertext, this.secret);
    return plaintext;
  }
}
