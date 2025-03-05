import { UserItemProps } from '@/types/user';
import Link from 'next/link';

export default function UserItem({ user }: UserItemProps) {
  return (
    <li className='group p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer'>
      <Link href={`/users/${user.id}`} className='flex items-center space-x-4'>
        <div className='h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center'>
          <span className='text-blue-600 font-medium'>
            {user.name.charAt(0)}
          </span>
        </div>
        <span className='text-gray-700 font-medium group-hover:text-blue-600 transition-colors'>
          {user.name}
        </span>
      </Link>
    </li>
  );
}
