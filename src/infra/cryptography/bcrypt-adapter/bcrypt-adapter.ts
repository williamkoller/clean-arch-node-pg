import { Hasher } from '@/data/protocols/criptography/hasher';
import { hashSync } from 'bcrypt';

export class BcryptAdapter implements Hasher {
  async hash(plaintext: string): Promise<string> {
    const salt = 12;
    const digest = hashSync(plaintext, salt);
    return digest;
  }
}
