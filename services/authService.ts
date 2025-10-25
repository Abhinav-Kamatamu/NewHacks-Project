import { User } from '../types';

const USER_KEY = 'authenticity_user';

export const authService = {
  login: (user: User): void => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  logout: (): void => {
    localStorage.removeItem(USER_KEY);
  },

  getCurrentUser: (): User | null => {
    try {
      const userJson = localStorage.getItem(USER_KEY);
      if (!userJson) return null;
      return JSON.parse(userJson) as User;
    } catch (error) {
      console.error('Failed to parse user from localStorage', error);
      return null;
    }
  },
};
