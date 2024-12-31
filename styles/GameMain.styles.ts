import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: 'sticky',
    backgroundColor: '#14110f',
    height: '100%',
    borderBottomWidth: 1,
  },
  advanceButton: {
    position: 'absolute',
    bottom: 110, // Acima da footer
    right: 20,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  advanceButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  
});

export default styles;
