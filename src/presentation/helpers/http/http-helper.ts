import { HttpResponse } from '@/presentation/protocols/http';
import { ServerError, UnauthorizedError } from '@/presentation/errors';

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error,
});

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError(),
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack),
});

export const ok = (data: Record<any, any>): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null,
});

export const create = (data: Record<any, any>): HttpResponse => ({
  statusCode: 201,
  body: data,
});

export const fieldsError = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const conflictError = (error: Error): HttpResponse => ({
  statusCode: 409,
  body: error,
});
