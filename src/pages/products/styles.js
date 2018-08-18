import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  productsContainer: {
    padding: metrics.basePadding / 2,
  },
});

export default styles;
