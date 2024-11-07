import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const ProductsScreen = ({ navigation }: any) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  const addToCart = async (product: Product) => {
    try {
      const cartItems = await AsyncStorage.getItem('cart');
      let cart = cartItems ? JSON.parse(cartItems) : [];
      cart.push(product);
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
      alert('Produto adcionado ao carrinho!');
    } catch (error) {
      console.error('Erro ao adicionar o produto:', error);
    }
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <Card style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>${item.price}</Paragraph>
        
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => addToCart(item)}>Adicionar ao carrinho</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        mode='outlined'
        onPress={() => navigation.navigate('Carrinho')}
        style={styles.cartButton}
      >
        Ver carrinho
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
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'center'
  },
  cartButton: {
    marginTop: 16,
  },
});

export default ProductsScreen;