import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import SearchScreen from './screens/SearchScreen';
import OfflineRecipesScreen from './screens/OfflineRecipesScreen';
import RecipeDetailsScreen from './screens/RecipeDetailsScreen';

export type RootStackParamList = {
  Search: undefined;
  RecipeDetails: { recipeId: number; isOffline?: boolean };
  OfflineRecipes: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();

const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: true }} />
    <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} />
  </Stack.Navigator>
);

const OfflineStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="OfflineRecipes" component={OfflineRecipesScreen} options={{ headerShown: true }} />
    <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'SearchTab') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'OfflineTab') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          } else {
            iconName = 'help-outline'; 
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen 
        name="SearchTab" 
        component={SearchStack} 
        options={{ 
          title: 'Pesquisar', 
          headerShown: false
        }} 
      />
      <Tab.Screen 
        name="OfflineTab" 
        component={OfflineStack} 
        options={{ 
          title: 'Salvas', 
          headerShown: false
        }} 
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;