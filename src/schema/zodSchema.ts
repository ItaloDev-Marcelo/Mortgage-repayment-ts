import {z} from 'zod';

export const mortgage = z.object({
   mortgageAmount: z
   .string()
   .nonempty('This field is required'),
   mortgageTerm: z
   .string()
   .nonempty('This field is required')
   .min(2),
   mortgageRate: z
   .string()
   .nonempty('This field is required')
   .max(4),
   mortgageType: z
    .string()
    .min(1, 'This field is required')
});

export type MortgageForm = z.infer<typeof mortgage>