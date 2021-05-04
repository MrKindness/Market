import { Account } from './Store/models/Account';

export const AccountsDB = new Map<string, Account>([
  [
    'User1',
    {
      Login: 'User1',
      Password: 'User1',
      EMail: 'user1@gmail.com',
      AccessLevel: 0,
    },
  ],
  [
    'User2',
    {
      Login: 'User2',
      Password: 'User2',
      EMail: 'user2@gmail.com',
      AccessLevel: 0,
    },
  ],
  [
    'Admin',
    {
      Login: 'Admin',
      Password: 'Admin',
      EMail: 'admin@gmail.com',
      AccessLevel: 1,
    },
  ],
]);
