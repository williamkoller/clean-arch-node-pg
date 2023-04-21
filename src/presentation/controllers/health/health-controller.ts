import { Controller, HttpResponse } from './health-controller-protocols';
import { ok, serverError } from '@/presentation/helpers/http/http-helper';

export class HealthController implements Controller {
  async handle(): Promise<HttpResponse> {
    try {
      return ok({ status: 'up' });
    } catch (error) {
      return serverError(error);
    }
  }
}
