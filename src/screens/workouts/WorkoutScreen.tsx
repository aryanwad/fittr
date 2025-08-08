import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useUserStore } from '../../stores/userStore';

export default function WorkoutScreen() {
  const { user } = useUserStore();
  
  const handleStartQuickWorkout = () => {
    Alert.alert('Quick Workout', 'Starting a 15-minute workout!');
  };
  
  const handleCreateAIWorkout = () => {
    Alert.alert('AI Workout', 'Generating personalized workout plan...');
  };
  
  const handleViewHistory = () => {
    Alert.alert('Workout History', 'Workout history feature coming soon!');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Workouts</Text>
        <Text style={styles.subtitle}>Build strength and endurance</Text>
      </View>
      
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Workouts This Week</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Total Minutes</Text>
        </View>
      </View>
      
      <View style={styles.quickActions}>
        <Text style={styles.sectionTitle}>Quick Start</Text>
        
        <TouchableOpacity style={styles.primaryButton} onPress={handleStartQuickWorkout}>
          <Text style={styles.primaryButtonText}>⚡ Quick 15-min Workout</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.secondaryButton} onPress={handleCreateAIWorkout}>
          <Text style={styles.secondaryButtonText}>🤖 Create AI Workout Plan</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.workoutCategories}>
        <Text style={styles.sectionTitle}>Workout Categories</Text>
        
        <View style={styles.categoryGrid}>
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryIcon}>💪</Text>
            <Text style={styles.categoryTitle}>Strength</Text>
            <Text style={styles.categorySubtitle}>Build muscle</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryIcon}>🏃</Text>
            <Text style={styles.categoryTitle}>Cardio</Text>
            <Text style={styles.categorySubtitle}>Burn calories</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryIcon}>🧘</Text>
            <Text style={styles.categoryTitle}>Flexibility</Text>
            <Text style={styles.categorySubtitle}>Improve mobility</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryIcon}>🏋️</Text>
            <Text style={styles.categoryTitle}>HIIT</Text>
            <Text style={styles.categorySubtitle}>High intensity</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.recentWorkouts}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Workouts</Text>
          <TouchableOpacity onPress={handleViewHistory}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.emptyText}>No workouts logged yet</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 4,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  quickActions: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: '#e74c3c',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  secondaryButton: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e74c3c',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e74c3c',
  },
  workoutCategories: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  categorySubtitle: {
    fontSize: 12,
    color: '#7f8c8d',
  },
  recentWorkouts: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  viewAllText: {
    fontSize: 14,
    color: '#3498db',
    fontWeight: '600',
  },
  emptyText: {
    textAlign: 'center',
    color: '#7f8c8d',
    fontStyle: 'italic',
    marginTop: 20,
  },
});