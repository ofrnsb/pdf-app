// components/EditUserForm.tsx
'use client';

import { FormValues, useUserForm } from '@/applications/hooks/useUserForm';
import { Button } from '@/presentations/ui/button';
import { Form } from '@/presentations/ui/form';

import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { DownloadIcon, EyeIcon, UserIcon } from 'lucide-react';
import { useState } from 'react';

import CustomSelect from './CustomSelect';
import { FormField } from './FormField';

import {
  AddressIcon,
  CityIcon,
  CompanyIcon,
  EmailIcon,
  PhoneNumberIcon,
  PostalCodeIcon,
} from '../icons';
import { PDFPreview } from './PDFPreview';
import { UserProfilePDF } from './UserProfilePDF';
import { EditUserFormProps } from '@/types/user';

export const EditUserForm = ({ user }: EditUserFormProps) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [template, setTemplate] = useState<'simple' | 'detailed'>('simple');
  const { form } = useUserForm(user);
  const formData = form.watch();

  const handleSubmit = async (data: FormValues) => {
    const pdfBlob = await pdf(
      <UserProfilePDF user={data} template={template} />
    ).toBlob();
    saveAs(pdfBlob, `${data.name}_profile.pdf`);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-6'>
          <FormField
            name='name'
            label='Nama'
            icon={UserIcon}
            placeholder='John Doe'
          />

          <FormField
            name='email'
            label='Email'
            icon={EmailIcon}
            placeholder='john@example.com'
          />

          <FormField
            name='phone'
            label='Telepon'
            icon={PhoneNumberIcon}
            placeholder='+6281234567890'
          />

          <FormField
            name='companyName'
            label='Nama Perusahaan'
            icon={CompanyIcon}
            placeholder='Perusahaan ABC'
          />

          <FormField
            name='street'
            label='Jalan'
            icon={AddressIcon}
            placeholder='Jalan Contoh 123'
          />

          <FormField
            name='city'
            label='Kota'
            icon={CityIcon}
            placeholder='Jakarta'
          />

          <FormField
            name='zipcode'
            label='Kode Pos'
            icon={PostalCodeIcon}
            placeholder='12345'
          />

          <div className='bg-blue-50 p-6 rounded-2xl border border-blue-100 space-y-4'>
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-3'>
                Pilih Template PDF
              </label>
              <CustomSelect template={template} setTemplate={setTemplate} />
            </div>
            <div className='flex space-x-3'>
              <Button
                type='button'
                onClick={() => setIsPreviewOpen(true)}
                className='bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3'
              >
                <EyeIcon className='h-5 w-5 mr-2' />
                Pratinjau PDF
              </Button>
              <Button
                type='submit'
                className='bg-green-600 hover:bg-green-700 text-white rounded-xl px-6 py-3'
              >
                <DownloadIcon className='h-5 w-5 mr-2' />
                Unduh PDF
              </Button>
            </div>
          </div>
        </form>
      </Form>

      <PDFPreview
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        formData={formData}
        template={template}
      />
    </>
  );
};
