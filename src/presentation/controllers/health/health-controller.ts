import { Controller, HttpResponse } from '@/presentation/protocols';
import { ok, serverError } from '@/presentation/helpers/http/http-helper';

export class HealthController implements Controller {
  async handle(): Promise<HttpResponse> {
    try {
      return ok({ status: 'up' });
    } catch (error: any) {
      return serverError(error);
    }
  }
}
