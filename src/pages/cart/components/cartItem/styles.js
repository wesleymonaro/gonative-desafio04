import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: metrics.baseMargin / 2,
    paddingVertical: metrics.basePadding,
    paddingHorizontal: metrics.basePadding / 2,
  },
  imageContainer: {
    flex: 1.5,

  },
  image: {
    height: 80,
    width: 80,
  },
  infoContainer: {
    flex: 3,
    paddingLeft: metrics.basePadding,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  brand: {
    fontSize: 12,
    color: colors.gray,
    paddingVertical: 3,
  },
  price: {
    fontSize: 16,
    color: colors.secundary,
    fontWeight: 'bold',
    paddingVertical: 3,
  },
  inputContainer: {
    flex: 1,
    padding: metrics.basePadding,
  },
  inputQtd: {
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding / 3,
    color: colors.gray,
  },
  buttonContainer: {
    flex: 0.5,
  },
  removeButton: {

  },
  removeIcon: {

  },
});

export default styles;
