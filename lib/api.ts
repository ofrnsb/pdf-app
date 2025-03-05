import { User } from '../types/user';

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Gagal mengambil data pengguna');

  return res.json();
}
