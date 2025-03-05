// components/FormField.tsx
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormField as RHFFormField,
} from '@/presentations/ui/form';
import { Input } from '@/presentations/ui/input';
import { FormFieldProps } from '@/types/user';
import { useFormContext } from 'react-hook-form';

export const FormField = ({
  name,
  label,
  icon: Icon,
  placeholder,
}: FormFieldProps) => {
  const { control } = useFormContext();

  return (
    <RHFFormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-gray-700 font-semibold flex items-center space-x-2'>
            <Icon className='h-5 w-5 text-blue-600' />
            <span>{label}</span>
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              className='border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl p-4 transition-all'
              placeholder={placeholder}
            />
          </FormControl>
          <FormMessage className='text-red-500 text-sm' />
        </FormItem>
      )}
    />
  );
};
