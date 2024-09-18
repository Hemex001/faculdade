import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from '../App';

const API_KEY = 'a8b0b6c3d37a4192b40db68cebf9f395';
const BASE_URL = 'https://api.spoonacular.com/recipes';

interface RecipeDetails {
  id: number;
  title: string;
  image: string;
  instructions: string;
  extendedIngredients: { original: string }[];
}

type RecipeDetailsScreenRouteProp = RouteProp<RootStackParamList, 'RecipeDetails'>;
type RecipeDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RecipeDetails'>;

type Props = {
  route: RecipeDetailsScreenRouteProp;
  navigation: RecipeDetailsScreenNavigationProp;
};

const RecipeDetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { recipeId, isOffline } = route.params;
  const [recipe, setRecipe] = useState<RecipeDetails | null>(null);

  useEffect(() => {
    if (isOffline) {
      loadOfflineRecipe();
    } else {
      fetchRecipeDetails();
    }
  }, []);

  const fetchRecipeDetails = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${recipeId}/information`, {
        params: {
          apiKey: API_KEY,
        },
      });
      setRecipe(response.data);
    } catch (error) {
      console.error('Erro ao buscar detalhes da receita:', error);
    }
  };

  const loadOfflineRecipe = async () => {
    try {
      const savedRecipes = await AsyncStorage.getItem('offlineRecipes');
      if (savedRecipes) {
        const parsedRecipes = JSON.parse(savedRecipes);
        const offlineRecipe = parsedRecipes.find((r: RecipeDetails) => r.id === recipeId);
        if (offlineRecipe) {
          setRecipe(offlineRecipe);
        }
      }
    } catch (error) {
      console.error('Erro ao carregar receita offline:', error);
    }
  };

  const saveRecipeOffline = async () => {
    if (recipe) {
      try {
        const savedRecipes = await AsyncStorage.getItem('offlineRecipes');
        const parsedRecipes = savedRecipes ? JSON.parse(savedRecipes) : [];
        parsedRecipes.push(recipe);
        await AsyncStorage.setItem('offlineRecipes', JSON.stringify(parsedRecipes));
        alert('Receita salva offline!');
      } catch (error) {
        console.error('Erro ao salvar receita offline:', error);
      }
    }
  };

  if (!recipe) {
    return <Text style={styles.loadingText}>Carregando...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.sectionTitle}>Ingredientes:</Text>
        {recipe.extendedIngredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>{ingredient.original}</Text>
        ))}
        <Text style={styles.sectionTitle}>Instruções:</Text>
        <Text style={styles.instructions}>{recipe.instructions}</Text>
        {!isOffline && (
          <TouchableOpacity style={styles.saveButton} onPress={saveRecipeOffline}>
            <Text style={styles.saveButtonText}>Salvar Offline</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  recipeImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 20,
    marginBottom: 10,
  },
  ingredient: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  instructions: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loadingText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default RecipeDetailsScreen;