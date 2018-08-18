import React, { Component } from 'react';

import { View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles';
import CartItem from './components/cartItem';
import CartInfo from './components/cartInfo';

import { Creators as ProductsActions } from '../../store/ducks/products';
import { Creators as CategoriesActions } from '../../store/ducks/categories';
import { Creators as CartActions } from '../../store/ducks/cart';


class Cart extends Component {
  static navigationOptions = {
    title: 'Carrinho',
    tabBarIcon: ({ tintColor }) => <Icon name="shopping-cart" size={20} color={tintColor} />,
  }

  render() {
    const { products } = this.props.cart;

    return (
      <View style={styles.container}>

        <FlatList
          data={products}
          style={styles.list}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <CartItem product={item} />}
        />

        <CartInfo />

      </View>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ProductsActions, ...CategoriesActions, ...CartActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
