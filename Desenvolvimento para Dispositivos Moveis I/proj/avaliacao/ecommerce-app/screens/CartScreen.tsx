import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const CartScreen = ({ navigation }: any) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    try {
      const cart = await AsyncStorage.getItem('cart');
      if (cart) {
        setCartItems(JSON.parse(cart));
      }
    } catch (error) {
      console.error('Erro ao carregar itens do carriho:', error);
    }
  };

  const renderCartItem = ({ item }: { item: Product }) => (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Title>{item.title}</Title>
          <Paragraph>${item.price}</Paragraph>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        mode="contained"
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        Voltar a lista de produtos
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  backButton: {
    marginTop: 16,
  },
});

export default CartScreen;