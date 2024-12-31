import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 0,
    paddingTop: '5%',
    width: '100%',

    
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    backgroundColor: 'black',
    
  },
  flagImage: {
    width: 120,
    height: 70,
    marginRight: 10,
    marginLeft: '13%',
  },
  portraitImage: {
    width: 80,
    height: 110,
    margin: 10,
    marginRight: 20,
    marginLeft: '13%',
  },
  itemContainer: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    height: 120,
    
  },
  FlatList:{
    width: '100%',
    marginRight: 0,
    backgroundColor: 'black',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  countryInfo: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    color: 'white',
    
  },
  infoText: {
    fontSize: 12,
    color: 'white',
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
