// CustomSelect.tsx
import { CustomSelectProps } from '@/types/user';
import { useEffect, useRef, useState } from 'react';

const CustomSelect: React.FC<CustomSelectProps> = ({
  template,
  setTemplate,
  onToggle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const options: Array<{ value: 'simple' | 'detailed'; label: string }> = [
    { value: 'simple', label: 'Template Simpel' },
    { value: 'detailed', label: 'Template Detil' },
  ];

  // Efek untuk menutup dropdown saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Efek untuk memberi tahu parent saat isOpen berubah
  useEffect(() => {
    onToggle?.(isOpen);
  }, [isOpen, onToggle]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev); // Hanya ubah state lokal, onToggle dipanggil di useEffect
  };

  return (
    <div className='w-full' ref={selectRef}>
      <button
        type='button'
        onClick={handleToggle}
        className='w-full bg-white border-2 border-gray-200 rounded-xl p-3 text-left flex items-center justify-between hover:border-blue-500 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
      >
        <span className='flex items-center space-x-2'>
          <span>
            {options.find((opt) => opt.value === template)?.label ||
              'Pilih Template'}
          </span>
        </span>
        <span
          className={`transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          ▼
        </span>
      </button>

      <div
        className={`w-full bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='space-y-1'>
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                setTemplate(option.value);
                setIsOpen(false);
              }}
              className={`px-3 py-2 cursor-pointer flex items-center space-x-2 ${
                template === option.value
                  ? 'bg-blue-50 text-blue-600'
                  : 'hover:bg-gray-50'
              } transition-colors`}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;
