import React, { Component } from 'react';

import { View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from 'store/ducks/categories';
import styles from './styles';

import Categories from './components/categories';
import ProductItem from './components/productItem';

class Products extends Component {
  static navigationOptions = {
    title: 'GoCommerce',
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />,
  }

  componentDidMount() {
    this.props.getCategoriesRequest();
  }

  render() {
    console.tron.log(this.props);
    return (
      <View style={styles.container}>
        <Categories categories={this.props.categories.data} />

        <View style={styles.productsContainer}>
          <FlatList
            data={this.props.categories.products}
            numColumns={2}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <ProductItem product={item} />}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
