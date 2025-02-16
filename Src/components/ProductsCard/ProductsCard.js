import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './ProductsCardStyle';

const ProductsCard = ({products}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: products.imgURL}} style={styles.image} />
      <Text style={styles.title}>{products.title}</Text>
      <Text style={styles.price}>{products.price}</Text>
      <Text style={styles.inStock}>
        {products.inStock ? 'Stokta Var' : 'Stokta Yok'}
      </Text>
    </View>
  );
};

export default ProductsCard;
