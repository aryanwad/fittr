import { create } from 'zustand';
import { FoodEntry } from '../types';

interface NutritionState {
  todayEntries: FoodEntry[];
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  targetCalories: number;
  
  addFoodEntry: (entry: FoodEntry) => void;
  removeFoodEntry: (entryId: string) => void;
  updateTargetCalories: (calories: number) => void;
  clearToday: () => void;
}

export const useNutritionStore = create<NutritionState>((set, get) => ({
  todayEntries: [],
  totalCalories: 0,
  totalProtein: 0,
  totalCarbs: 0,
  totalFat: 0,
  targetCalories: 2000,
  
  addFoodEntry: (entry: FoodEntry) => set((state) => {
    const newEntries = [...state.todayEntries, entry];
    return {
      todayEntries: newEntries,
      // Calculate totals (would need to fetch food data in real implementation)
      totalCalories: state.totalCalories + 0, // Placeholder
    };
  }),
  
  removeFoodEntry: (entryId: string) => set((state) => ({
    todayEntries: state.todayEntries.filter(entry => entry.id !== entryId),
  })),
  
  updateTargetCalories: (calories: number) => set({ targetCalories: calories }),
  
  clearToday: () => set({
    todayEntries: [],
    totalCalories: 0,
    totalProtein: 0,
    totalCarbs: 0,
    totalFat: 0,
  }),
}));