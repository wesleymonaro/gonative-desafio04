import React from 'react';
import { connect } from 'react-redux';

import { View, Text } from 'react-native';

import styles from './styles';

const CartInfo = ({ cart }) => (
  <View style={styles.container}>
    <Text style={styles.legend}>
      Subtotal
    </Text>

    <Text style={styles.total}>
      R$
      {cart.total}
    </Text>
  </View>


);

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartInfo);
