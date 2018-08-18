import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '../../store/ducks/cart';


import styles from './styles';

class ProductDetail extends Component {
  static navigationOptions = {
    title: 'Detalhe do produto',
  }

  static propTypes = {
    product: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      brand: PropTypes.string,
      price: PropTypes.number,
    }).isRequired,
    addProductToCartRequest: PropTypes.func.isRequired,
  }

  render() {
    const { product } = this.props.navigation.state.params;
    const { addProductToCartRequest } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.productContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: product.image }} style={styles.image} />
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.textsContainer}>
              <Text style={styles.name}>
                {product.name}
              </Text>
              <Text style={styles.brand}>
                {product.brand}
              </Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>
              R$
                {product.price}
              </Text>
            </View>

          </View>

          <TouchableOpacity onPress={() => addProductToCartRequest(product.id)} style={styles.button}>
            <Text style={styles.buttonText}>
              Adicionar ao carrinho
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(ProductDetail);
