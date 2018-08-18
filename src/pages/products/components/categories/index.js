import React from 'react';
import PropTypes from 'prop-types';

import { View, FlatList } from 'react-native';

import styles from './styles';
import CategoryItem from '../categoryItem';

const Categories = ({ categories }) => (
  <View style={styles.container}>
    <FlatList
      data={categories}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <CategoryItem category={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
};

export default Categories;
