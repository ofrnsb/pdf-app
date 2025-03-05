'use client';

import { fetchUserById } from '@/lib/api';
import { EditUserForm } from '@/presentations/ui/EditUserForm';
import { User } from '@/types/user';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function UserPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    fetchUserById(id)
      .then(setUser)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600'></div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center'>
        <div className='text-center text-red-600'>
          <h2 className='text-2xl font-bold mb-2'>Error</h2>
          <p>{error || 'Pengguna tidak ditemukan'}</p>
          <button
            onClick={() => window.location.reload()}
            className='mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg'
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50'>
      <div className='max-w-3xl mx-auto p-6 animate-fade-in-up'>
        <div className='bg-white rounded-2xl shadow-2xl p-8'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center'>
              <span className='text-blue-600 text-xl font-bold'>
                {user.name.charAt(0)}
              </span>
            </div>
            <h1 className='text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Edit Profil: {user.name}
            </h1>
          </div>
          <EditUserForm user={user} />
        </div>
      </div>
    </div>
  );
}
