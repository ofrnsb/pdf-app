'use client';

import { fetchUsers } from '@/lib/api';
import UserList from '@/presentations/ui/UserList';
import { User } from '@/types/user';
import { useEffect, useState } from 'react';

export default function Home() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-purple-50'>
        <div className='max-w-2xl mx-auto p-6 text-red-600'>
          <h2 className='text-2xl font-bold mb-2'>Terjadi Kesalahan</h2>
          <p>{error}</p>
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
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-purple-50'>
      <div className='max-w-2xl mx-auto p-6'>
        <h1 className='text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
          Daftar Pengguna
        </h1>
        {loading ? (
          <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50'>
            <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600'></div>
          </div>
        ) : (
          users && <UserList users={users} />
        )}
      </div>
    </div>
  );
}
