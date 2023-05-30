import { HashComparer } from '@/data/protocols/criptography/hash-comparer';
import { Hasher } from '@/data/protocols/criptography/hasher';
import { compareSync, hashSync } from 'bcrypt';

export class BcryptAdapter implements Hasher, HashComparer {
  constructor(private readonly salt: number) {}
  async hash(plaintext: string): Promise<string> {
    const digest = hashSync(plaintext, this.salt);
    return digest;
  }

  async compare(plaintext: string, digest: string): Promise<boolean> {
    const isValid = compareSync(plaintext, digest);
    return isValid;
  }
}
