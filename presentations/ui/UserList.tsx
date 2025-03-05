import { UserListProps } from '@/types/user';
import UserItem from './UserItem';

export default function UserList({ users }: UserListProps) {
  return (
    <ul className='space-y-4'>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
}
