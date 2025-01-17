import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const ICarZodSchema = VehicleZodSchema.extend({
  doorsQty: z.number().int().positive().gte(2)
    .lte(4),
  seatsQty: z.number().gte(2).lte(7),
});

type ICar = z.infer<typeof ICarZodSchema>;
export { ICar, ICarZodSchema };