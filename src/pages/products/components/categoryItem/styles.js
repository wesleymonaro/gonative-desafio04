import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';


const styles = StyleSheet.create({
  container: {
    padding: metrics.basePadding / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryTitle: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  active: {
    borderBottomWidth: 5,
    borderBottomColor: colors.white,

  },
});

export default styles;
