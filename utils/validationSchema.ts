import * as zod from 'zod';

export const validationUkraineOrderSchema = zod.object({
  name: zod.string().min(3, {
    message: ' ',
  }),
  number: zod.string().min(9, {
    message: ' ',
  }),
  email: zod.string().email({ message: ' ' }),
  city: zod.string().min(3, {
    message: ' ',
  }),

  delivery_method: zod.string().optional(),
  department_number: zod
    .string()
    .min(1, {
      message: ' ',
    })
    .optional(),
});

export const validationWorldOrderSchema = zod.object({
  name: zod.string().min(3, {
    message: ' ',
  }),
  number: zod.string().min(9, {
    message: ' ',
  }),
  email: zod.string().email({ message: ' ' }),
  city: zod.string().min(3, {
    message: ' ',
  }),
  country: zod
    .string()
    .min(3, {
      message: ' ',
    })
    .optional(),
  address: zod
    .string()
    .min(3, {
      message: ' ',
    })
    .optional(),
  index: zod.string().min(3, {
    message: ' ',
  }),
});
