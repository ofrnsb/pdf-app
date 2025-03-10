import { User } from '../types/user';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error('NEXT_PUBLIC_API_URL belum dikonfigurasi');
}

export async function fetchUsers(): Promise<User[]> {
  try {
    const res = await fetch(`${API_URL}/users`, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error(`Gagal mengambil data pengguna: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

export async function fetchUserById(id: string): Promise<User> {
  try {
    const res = await fetch(`${API_URL}/users/${id}`, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error(`Gagal mengambil data pengguna: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error);
    throw error;
  }
}
