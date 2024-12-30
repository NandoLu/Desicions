// src/screens/GameModals/AButtonsGame.styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 10,
  },
  button: {
    width: '30%',
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonImage: {
    width: 60,
    height: 60,
  },
  buttonText: {
    marginTop: 5,
    fontSize: 10,
    textAlign: 'center',
  },
});

export default styles;
