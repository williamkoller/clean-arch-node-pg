import { HealthController } from '@/presentation/controllers/health/health-controller';

export const makeHealthController = () => {
  return new HealthController();
};
