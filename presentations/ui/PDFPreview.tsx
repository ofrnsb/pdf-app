// components/PDFPreview.tsx
import { Button } from '@/presentations/ui/button';
import { PDFPreviewProps } from '@/types/user';
import { PDFViewer } from '@react-pdf/renderer';
import { UserProfilePDF } from './UserProfilePDF';

export const PDFPreview = ({
  isOpen,
  onClose,
  formData,
  template,
}: PDFPreviewProps) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 z-50 animate-fade-in'>
      <div className='bg-white rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl overflow-hidden'>
        <div className='p-4 border-b border-gray-200 flex justify-between items-center bg-blue-50'>
          <h3 className='text-lg font-semibold text-blue-600'>
            Pratinjau PDF - {formData.name}
          </h3>
          <Button
            variant='outline'
            onClick={onClose}
            className='px-4 py-2 flex items-center space-x-2'
          >
            <span className='text-lg'>×</span>
          </Button>
        </div>
        <div className='flex-1 p-6 bg-gray-50'>
          <PDFViewer
            width='100%'
            height='100%'
            className='w-full h-full rounded-lg shadow-inner border border-gray-200'
          >
            <UserProfilePDF user={formData} template={template} />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
};
