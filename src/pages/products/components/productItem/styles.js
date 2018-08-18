import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding / 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: (metrics.screenWidth / 2) - (metrics.baseMargin * 2),
    marginHorizontal: metrics.baseMargin / 2,
  },
  infoContainer: {
    paddingVertical: metrics.basePadding / 2,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  brand: {
    fontSize: 11,
    color: colors.gray,
    paddingVertical: 3,
  },
  price: {
    fontSize: 14,
    color: colors.secundary,
    fontWeight: 'bold',
    paddingVertical: 3,
  },
  image: {
    height: 180,
    width: '100%',
  },
});

export default styles;
