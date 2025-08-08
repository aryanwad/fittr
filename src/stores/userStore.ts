import { create } from 'zustand';
import { User } from '../types';

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setUser: (user: User) => void;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  
  setUser: (user: User) => set({ 
    user, 
    isAuthenticated: true, 
    isLoading: false 
  }),
  
  logout: () => set({ 
    user: null, 
    isAuthenticated: false, 
    isLoading: false 
  }),
  
  updateUser: (userData: Partial<User>) => set((state) => ({
    user: state.user ? { ...state.user, ...userData } : null
  })),
}));