import React from 'react';

import {
  View, Text, Image, TextInput, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '../../../../store/ducks/cart';

import styles from './styles';

const CartItem = ({ product, removeProductCartRequest, changeProductQtdRequest }) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={{ uri: product.image }} style={styles.image} />
    </View>

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

    <View style={styles.inputContainer}>
      <TextInput
        value={String(product.qtd)}
        style={styles.inputQtd}
        keyboardType="numeric"
        onChangeText={text => changeProductQtdRequest(product.id, text)}
      />
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.removeButton} onPress={() => removeProductCartRequest(product.id)}>
        <Icon name="remove" size={20} color="#C0C0C0" style={styles.removeIcon} />
      </TouchableOpacity>
    </View>
  </View>
);


const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(CartItem);
