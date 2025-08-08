// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  age?: number;
  weight?: number;
  height?: number;
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
  goals: 'lose_weight' | 'gain_weight' | 'maintain' | 'build_muscle';
  targetCalories?: number;
  createdAt: Date;
}

// Nutrition Types
export interface Food {
  id: string;
  name: string;
  brand?: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber?: number;
  sugar?: number;
  sodium?: number;
  servingSize: string;
}

export interface FoodEntry {
  id: string;
  userId: string;
  foodId: string;
  quantity: number;
  meal: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  timestamp: Date;
}

// Workout Types
export interface Exercise {
  id: string;
  name: string;
  category: 'strength' | 'cardio' | 'flexibility' | 'sports';
  muscleGroups: string[];
  equipment: string[];
  instructions: string[];
  caloriesPerMinute?: number;
}

export interface WorkoutEntry {
  id: string;
  userId: string;
  exerciseId: string;
  duration?: number;
  sets?: number;
  reps?: number;
  weight?: number;
  distance?: number;
  calories?: number;
  timestamp: Date;
}

// Health Data Types
export interface HealthData {
  id: string;
  userId: string;
  date: Date;
  steps?: number;
  heartRate?: number;
  sleep?: number;
  weight?: number;
  bodyFat?: number;
}

// AI Coach Types
export interface CoachMessage {
  id: string;
  userId: string;
  message: string;
  sender: 'user' | 'ai_coach';
  timestamp: Date;
  messageType: 'text' | 'voice' | 'image';
}

export interface CoachingSession {
  id: string;
  userId: string;
  startTime: Date;
  endTime?: Date;
  sessionType: 'chat' | 'voice_call' | 'check_in';
  summary?: string;
}