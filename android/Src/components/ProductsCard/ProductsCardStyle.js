import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    padding: 5,
    borderRadius: 10,
    width: windowWidth / 2 - 16,
  },
  image: {
    height: Dimensions.get('window').height / 4,

    width: '100%', // Genişliği ekleyins
    resizeMode: 'contain', // Resim boyutlandırma modunu ekleyin
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  price: {
    fontSize: 20,
    color: 'grey',
  },
  inStock: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 5,
  },
});
