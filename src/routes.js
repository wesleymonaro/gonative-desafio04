import { StackNavigator, TabNavigator } from 'react-navigation';
import { colors } from 'styles';

import Cart from './pages/cart';
import ProductDetail from './pages/productDetail';
import Products from './pages/products';

const Routes = StackNavigator({

  Home: TabNavigator({
    Products: { screen: Products },
    Cart: { screen: Cart },
  }, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: colors.primary,
      inactiveTintColor: colors.gray,
      style: {
        height: 54,
        backgroundColor: colors.white,
      },
    },
  }),
  ProductDetail: { screen: ProductDetail },
}, {
  // initialRouteName: 'ProductDetail',
  navigationOptions: {
    headerTitleStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    headerStyle: {
      backgroundColor: colors.white,
      height: 54,
    },
    headerTintColor: colors.primary,
    headerBackTitle: null,
  },
});

export default Routes;
