import {z} from 'zod';

export const mortgage = z.object({
   mortgageAmount: z
   .string()
    .min(1, 'This field is required'),
   mortgageTerm: z
   .string()
    .min(1, 'This field is required'),
   mortgageRate: z
   .string()
    .min(1, 'This field is required')
   .max(4),
   mortgageType: z
    .string()
    .min(1, 'This field is required').optional()
});

export type MortgageForm = z.infer<typeof mortgage>