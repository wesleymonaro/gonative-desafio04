import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from 'store/ducks/categories';

import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const CategoryItem = ({ category, setCategoryRequest, currentCategory }) => (
  <TouchableOpacity style={[styles.container, (currentCategory === category.id ? styles.active : {})]} onPress={() => setCategoryRequest(category.id)}>
    <Text style={styles.categoryTitle}>
      {category.title.toUpperCase()}
    </Text>
  </TouchableOpacity>
);

CategoryItem.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  setCategoryRequest: PropTypes.func.isRequired,
  currentCategory: PropTypes.number,
};

CategoryItem.defaultProps = {
  currentCategory: 0,
};

const mapStateToProps = state => ({
  currentCategory: state.categories.currentCategory,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
