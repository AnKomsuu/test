import { User } from '../types';

export const mockUsers: User[] = [
  {
    id: 'user_1',
    nickname: 'JohnDoe',
    email: 'john@example.com',
    password: 'password123',
    avatarUrl: 'https://i.pravatar.cc/48?u=user_1',
    dateOfBirth: '1990-05-15',
  },
  {
    id: 'user_2',
    nickname: 'JaneSmith',
    email: 'jane@example.com',
    password: 'password456',
    avatarUrl: 'https://i.pravatar.cc/48?u=user_2',
    dateOfBirth: '1988-11-22',
  },
  {
    id: 'user_3',
    nickname: 'AlexBrown',
    email: 'alex@example.com',
    password: 'password789',
    avatarUrl: 'https://i.pravatar.cc/48?u=user_3',
    dateOfBirth: '1995-03-08',
  },
  {
    id: 'user_4',
    nickname: 'SarahWilson',
    email: 'sarah@example.com',
    password: 'securepass',
    avatarUrl: 'https://i.pravatar.cc/48?u=user_4',
    dateOfBirth: '1992-07-30',
  },
];
