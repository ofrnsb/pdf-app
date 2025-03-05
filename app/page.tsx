import { fetchUsers } from '@/lib/api';
import UserList from '@/presentations/ui/UserList';

export default async function Home() {
  const users = await fetchUsers();

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-purple-50'>
      <div className='max-w-2xl mx-auto p-6'>
        <h1 className='text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
          Daftar Pengguna
        </h1>
        <UserList users={users} />
      </div>
    </div>
  );
}
