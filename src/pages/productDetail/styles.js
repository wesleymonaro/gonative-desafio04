import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    padding: metrics.basePadding,
  },
  productContainer: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
  },
  imageContainer: {

  },
  image: {
    height: 285,
    width: '100%',

  },
  infoContainer: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    padding: metrics.basePadding,
  },
  textsContainer: {
    // padding: metrics.basePadding / 2,
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  brand: {
    color: colors.gray,
  },
  priceContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  price: {
    color: colors.secundary,
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    height: 44,
    // width: '100%',
    padding: metrics.basePadding,
    backgroundColor: colors.secundary,
    alignItems: 'center',
    justifyContent: 'center',
    margin: metrics.basePadding,
    borderRadius: metrics.baseRadius,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
