export const Loading = () => (
  <div className='flex items-center justify-center p-8'>
    <div className='animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent'></div>
    <span className='ml-3 text-gray-600'>Memuat data...</span>
  </div>
);

interface ErrorProps {
  message: string;
  onRetry?: () => void;
}

export const Error = ({ message, onRetry }: ErrorProps) => (
  <div className='bg-red-50 border border-red-200 rounded-xl p-6 text-center'>
    <div className='text-red-600 font-medium mb-3'>⚠️ {message}</div>
    {onRetry && (
      <button
        onClick={onRetry}
        className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm'
      >
        Coba Lagi
      </button>
    )}
  </div>
);
