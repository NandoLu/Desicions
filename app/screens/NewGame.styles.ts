import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',

    
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    
  },
  flagImage: {
    width: 120,
    height: 70,
    marginRight: 10,
    marginLeft: 10,
  },
  portraitImage: {
    width: 80,
    height: 110,
    marginRight: 10,
  },
  itemContainer: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
    
  },
  FlatList:{
    width: '100%',
    marginRight: 0,
    backgroundColor: 'green',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  countryInfo: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    
  },
  infoText: {
    fontSize: 14,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    
  },
  buttonBack: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    bottom: 100,
    width: '50%',
    position: 'absolute',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    
  },
  bordered: {
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 2,
  },
});

export default styles;
