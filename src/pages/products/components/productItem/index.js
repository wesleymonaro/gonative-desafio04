import React from 'react';
import PropTypes from 'prop-types';

import { withNavigation } from 'react-navigation';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

import styles from './styles';

const ProductItem = ({ product, navigation }) => (
  <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ProductDetail', { product })}>
    <Image source={{ uri: product.image }} style={styles.image} />

    <View style={styles.infoContainer}>
      <Text style={styles.name}>
        {product.name}
      </Text>
      <Text style={styles.brand}>
        {product.brand}
      </Text>
      <Text style={styles.price}>
        R$
        {product.price}
      </Text>
    </View>
  </TouchableOpacity>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  navigation: PropTypes.shape({
    navigation: PropTypes.func,
  }).isRequired,
};

export default withNavigation(ProductItem);
