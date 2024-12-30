import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    width: '100%',
    height: 80, // Altura fixa em pixels
    marginBottom: 10,
  },
  flagImage: {
    width: 50,
    height: 30,
    marginRight: 10,
  },
  headerText: {
    flex: 1,
    justifyContent: 'center',
  },
  countryText: {
    fontSize: 15, // Tamanho reduzido
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 12, // Tamanho reduzido
  },
  leaderImage: {
    width: 40,
    height: 60,
    marginLeft: 10,
  },
  fistIcon: {
    marginRight: 5,
    color: '#000', // Cor do ícone
  },
  fistText: {
    width: 20, // Espaço reservado para texto vazio
  },
  infoBar: {
    flexDirection: 'row',
    width: '100%',
    height: 35,
    backgroundColor: '#eee',
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 80,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#f8f8f8',
    width: '100%',
    height: 80,
    position: 'absolute',
    bottom: 0,
  },
  footerButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButtonStatic: {
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
  footerButtonImage: {
    width: 40,
    height: 40,
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
