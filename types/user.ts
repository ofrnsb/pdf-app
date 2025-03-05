import { FormValues } from '@/applications/hooks/useUserForm';
import { FC } from 'react';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export interface EditUserFormProps {
  user: User;
}

export interface CustomSelectProps {
  template: 'simple' | 'detailed';
  setTemplate: (value: 'simple' | 'detailed') => void;
  onToggle?: (isOpen: boolean) => void;
}

export interface FormFieldProps {
  name: string;
  label: string;
  icon: IconType;
  placeholder?: string;
}

export interface PDFPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  formData: FormValues;
  template: 'simple' | 'detailed';
}

export interface UserItemProps {
  user: User;
}

export interface UserListProps {
  users: User[];
}

export type IconType = FC<{ className?: string }>;
