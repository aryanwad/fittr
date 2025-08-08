import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNutritionStore } from '../../stores/nutritionStore';
import { useUserStore } from '../../stores/userStore';

export default function NutritionScreen() {
  const { totalCalories, targetCalories, todayEntries } = useNutritionStore();
  const { user } = useUserStore();
  
  const handleAIFoodScan = () => {
    Alert.alert('AI Food Recognition', 'Camera feature coming soon!');
  };
  
  const handleManualEntry = () => {
    Alert.alert('Manual Entry', 'Food database search coming soon!');
  };
  
  const caloriesRemaining = targetCalories - totalCalories;
  const progressPercentage = (totalCalories / targetCalories) * 100;
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Nutrition Tracker</Text>
        <Text style={styles.subtitle}>Track your daily nutrition</Text>
      </View>
      
      <View style={styles.calorieCard}>
        <View style={styles.calorieHeader}>
          <Text style={styles.calorieTitle}>Daily Calories</Text>
          <Text style={styles.calorieRemaining}>
            {caloriesRemaining > 0 ? `${caloriesRemaining} remaining` : `${Math.abs(caloriesRemaining)} over`}
          </Text>
        </View>
        
        <View style={styles.calorieProgress}>
          <View style={styles.progressBar}>
            <View 
              style={[styles.progressFill, { width: `${Math.min(progressPercentage, 100)}%` }]} 
            />
          </View>
          <Text style={styles.calorieNumbers}>
            {totalCalories} / {targetCalories} cal
          </Text>
        </View>
      </View>
      
      <View style={styles.macroCards}>
        <View style={styles.macroCard}>
          <Text style={styles.macroNumber}>0g</Text>
          <Text style={styles.macroLabel}>Protein</Text>
        </View>
        
        <View style={styles.macroCard}>
          <Text style={styles.macroNumber}>0g</Text>
          <Text style={styles.macroLabel}>Carbs</Text>
        </View>
        
        <View style={styles.macroCard}>
          <Text style={styles.macroNumber}>0g</Text>
          <Text style={styles.macroLabel}>Fat</Text>
        </View>
      </View>
      
      <View style={styles.actions}>
        <TouchableOpacity style={styles.primaryButton} onPress={handleAIFoodScan}>
          <Text style={styles.primaryButtonText}>📷 Scan Food with AI</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.secondaryButton} onPress={handleManualEntry}>
          <Text style={styles.secondaryButtonText}>✏️ Add Food Manually</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.todayMeals}>
        <Text style={styles.sectionTitle}>Today's Meals</Text>
        {todayEntries.length === 0 ? (
          <Text style={styles.emptyText}>No meals logged yet today</Text>
        ) : (
          todayEntries.map((entry) => (
            <View key={entry.id} style={styles.mealEntry}>
              <Text style={styles.mealName}>{entry.meal}</Text>
            </View>
          ))
        )}
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
  calorieCard: {
    backgroundColor: 'white',
    marginHorizontal: 24,
    padding: 24,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  calorieHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  calorieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  calorieRemaining: {
    fontSize: 14,
    color: '#27ae60',
  },
  calorieProgress: {
    alignItems: 'center',
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: '#ecf0f1',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3498db',
    borderRadius: 4,
  },
  calorieNumbers: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  macroCards: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  macroCard: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 4,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  macroNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 4,
  },
  macroLabel: {
    fontSize: 12,
    color: '#7f8c8d',
  },
  actions: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  primaryButton: {
    backgroundColor: '#3498db',
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
    borderColor: '#3498db',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3498db',
  },
  todayMeals: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 16,
  },
  emptyText: {
    textAlign: 'center',
    color: '#7f8c8d',
    fontStyle: 'italic',
    marginTop: 20,
  },
  mealEntry: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  mealName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
});