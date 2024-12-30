import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { countries, Country, Leader } from './countries';
import styles from './NewGame.styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../index';
import { useFocusEffect } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

type NewGameScreenNavigationProp = StackNavigationProp<RootStackParamList, 'NewGame'>;

interface Props {
  navigation: NewGameScreenNavigationProp;
}

const NewGame: React.FC<Props> = ({ navigation }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  useEffect(() => {
    const resetValues = async () => {
      await AsyncStorage.removeItem('primaryEducation');
      await AsyncStorage.removeItem('secondaryEducation');
      await AsyncStorage.removeItem('higherEducation');
      await AsyncStorage.removeItem('poorTax');
      await AsyncStorage.removeItem('middleTax');
      await AsyncStorage.removeItem('richTax');
      await AsyncStorage.removeItem('currentTurn');
      await AsyncStorage.removeItem('currentScenario');
    };

    resetValues();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('Main');
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [navigation])
  );

  const startGame = async (country: Country, leader: Leader) => {
    const scenario = { ...country, leader };
    await AsyncStorage.setItem('currentScenario', JSON.stringify(scenario));

    // Armazenar valores iniciais dos sliders
    await AsyncStorage.setItem('primaryEducation', scenario.details.education.primary.toString());
    await AsyncStorage.setItem('secondaryEducation', scenario.details.education.secondary.toString());
    await AsyncStorage.setItem('higherEducation', scenario.details.education.higher.toString());
    await AsyncStorage.setItem('poorTax', scenario.details.taxes.poor.toString());
    await AsyncStorage.setItem('middleTax', scenario.details.taxes.middle.toString());
    await AsyncStorage.setItem('richTax', scenario.details.taxes.rich.toString());

    navigation.navigate('GameMain');
  };

  if (selectedCountry) {
    return (
      <Animatable.View animation="slideInRight" duration={1000} style={styles.container}>
        <Text style={styles.title}>Selecione um Líder para {selectedCountry.name}</Text>
        <FlatList style={styles.FlatList}
          data={selectedCountry.leaders}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => startGame(selectedCountry, item)} style={styles.itemContainer}>
              <Image source={item.image} style={[styles.portraitImage, styles.bordered]} />
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity onPress={() => setSelectedCountry(null)} style={styles.buttonBack}>
          <Text>Voltar</Text>
        </TouchableOpacity>
      </Animatable.View>
    );
  }

  return (
    <Animatable.View animation="slideInLeft" duration={1000} style={styles.container}>
      <Text style={styles.title}>Selecione um País</Text>
      <FlatList style={styles.FlatList}
        data={countries}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedCountry(item)} style={[styles.itemContainer, styles.bordered]}>
            <Image source={item.images.flag} style={[styles.flagImage, styles.bordered]} />
            <View style={styles.countryInfo}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.infoText}>Ano: {item.details.year}</Text>
              <Text style={styles.infoText}>PIB: {item.details.pib}</Text>
              <Text style={styles.infoText}>Ideologia: {item.details.ideology}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </Animatable.View>
  );
};

export default NewGame;
