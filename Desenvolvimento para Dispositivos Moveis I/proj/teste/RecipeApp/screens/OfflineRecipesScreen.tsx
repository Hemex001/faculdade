import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Alert, SafeAreaView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { Ionicons } from '@expo/vector-icons';

interface Recipe {
  id: number;
  title: string;
  image: string;
}

type OfflineRecipesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'OfflineRecipes'>;

type Props = {
  navigation: OfflineRecipesScreenNavigationProp;
};

const OfflineRecipesScreen: React.FC<Props> = ({ navigation }) => {
  const [offlineRecipes, setOfflineRecipes] = useState<Recipe[]>([]);

  const loadOfflineRecipes = async () => {
    try {
      const savedRecipes = await AsyncStorage.getItem('offlineRecipes');
      if (savedRecipes) {
        setOfflineRecipes(JSON.parse(savedRecipes));
      }
    } catch (error) {
      console.error('Erro ao carregar receitas offline:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadOfflineRecipes();
    }, [])
  );

  const removeRecipe = async (id: number) => {
    const removeAction = async () => {
      try {
        const updatedRecipes = offlineRecipes.filter(recipe => recipe.id !== id);
        await AsyncStorage.setItem('offlineRecipes', JSON.stringify(updatedRecipes));
        setOfflineRecipes(updatedRecipes);
      } catch (error) {
        console.error('Erro ao remover receita:', error);
      }
    };

    if (Platform.OS === 'web') {
      await removeAction();
    } else {
      Alert.alert(
        "Remover Receita",
        "Tem certeza que deseja remover esta receita?",
        [
          {
            text: "Cancelar",
            style: "cancel"
          },
          { 
            text: "Sim", 
            onPress: removeAction
          }
        ]
      );
    }
  };

  const renderRecipeItem = ({ item }: { item: Recipe }) => (
    <View style={styles.recipeItem}>
      <TouchableOpacity 
        style={styles.recipeContent}
        onPress={() => navigation.navigate('RecipeDetails', { recipeId: item.id, isOffline: true })}
      >
        <Image source={{ uri: item.image }} style={styles.recipeImage} />
        <View style={styles.recipeInfo}>
          <Text style={styles.recipeTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.deleteButton} 
        onPress={() => removeRecipe(item.id)}
      >
        <Ionicons name="trash-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {offlineRecipes.length > 0 ? (
        <FlatList
          data={offlineRecipes}
          renderItem={renderRecipeItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.recipeList}
        />
      ) : (
        <Text style={styles.emptyText}>Nenhuma receita salva offline.</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  recipeList: {
    padding: 10,
  },
  recipeItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  recipeContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  recipeImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
  },
  recipeInfo: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 50,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#ff6b6b',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default OfflineRecipesScreen;