import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    position: 'absolute',
    bottom: 0,
    width: metrics.screenWidth,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  legend: {
    fontSize: 14,
    color: colors.gray,
  },
  total: {
    fontSize: 24,
    color: colors.secundary,
    fontWeight: 'bold',
  },
});

export default styles;
