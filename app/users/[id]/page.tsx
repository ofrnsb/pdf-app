'use client';

import { EditUserForm } from '@/presentations/ui/EditUserForm';
import { User } from '@/types/user';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await res.json();
      setUser(data);
    }
    if (id) fetchUser();
  }, [id]);

  if (!user) return <p>Loading...</p>;

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
