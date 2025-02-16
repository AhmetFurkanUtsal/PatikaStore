/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import ProductsCard from './components/ProductsCard/ProductsCard';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';
import products_data from './components/Product.json';

function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products_data}
        renderItem={({item}) => <ProductsCard products={item} />}
        numColumns={2} // Yan yana 2 ürün gösterilecek
        key={'_'} // Her sütun için unique key
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'White',
  },
});

export default App;
