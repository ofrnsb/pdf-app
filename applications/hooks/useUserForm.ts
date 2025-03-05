import { User } from '@/types/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  phone: z.string().optional(),
  companyName: z.string().optional(),
  street: z.string().optional(),
  city: z.string().optional(),
  zipcode: z.string().optional(),
});

export type FormValues = z.infer<typeof formSchema>;

export const useUserForm = (user: User) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      companyName: user.company?.name || '',
      street: user.address.street,
      city: user.address.city,
      zipcode: user.address.zipcode,
    },
    mode: 'onChange',
  });

  return { form };
};
