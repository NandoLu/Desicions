import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, BackHandler, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StatsModal from './modals/StatsModal';
import AdviceModal from './modals/AdviceModal';
import styles from './GameMain.styles';
import { useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { initializeTurn, advanceTurn, months, Turn } from './logic/GameLogic';
import { RootStackParamList } from '../index';
import AButtonsGame from './GameModals/AButtonsGame'; // Importando o novo componente
import Header from './GameBars/GameHeader'; // Importando o Header
import GameBottomBar from './GameBars/GameBottomBar';

type GameMainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'GameMain'>;

interface Leader {
  image: any;
}

interface Country {
  name: string;
  details: {
    pib: number;
    economicBalance: number,
    year: number;
  };
  images: {
    flag: any;
  };
}

interface Scenario extends Country {
  leader: Leader;
}

interface Props {
  navigation: GameMainScreenNavigationProp;
}

const GameMain: React.FC<Props> = ({ navigation }) => {
  const [scenario, setScenario] = useState<Scenario | null>(null);
  const [turn, setTurn] = useState<Turn | null>(null); // Estado para o turno
  const [isStatsModalVisible, setIsStatsModalVisible] = useState(false);
  const [isAdviceModalVisible, setIsAdviceModalVisible] = useState(false);
  const [educationExpense, setEducationExpense] = useState(0);
  const [taxRevenue, setTaxRevenue] = useState(0); // Estado para a receita de impostos
  const [turnHistory, setTurnHistory] = useState<Turn[]>([]);


  const [saldoEconomiaHistory, setSaldoEconomiaHistory] = useState<number[]>([]);


  const calculateEducationExpense = async () => {
    const primary = await AsyncStorage.getItem('primaryEducation');
    const secondary = await AsyncStorage.getItem('secondaryEducation');
    const higher = await AsyncStorage.getItem('higherEducation');
    const calculatedEducationExpense = (parseInt(primary || '0') * 2) + (parseInt(secondary || '0') * 4) + (parseInt(higher || '0') * 6);
    setEducationExpense(calculatedEducationExpense);
    return calculatedEducationExpense;
  };

  const calculateTaxRevenue = async () => {
    const poorTax = await AsyncStorage.getItem('poorTax');
    const middleTax = await AsyncStorage.getItem('middleTax');
    const richTax = await AsyncStorage.getItem('richTax');
    const calculatedTaxRevenue = (parseInt(poorTax || '0') * 4) + (parseInt(middleTax || '0') * 6) + (parseInt(richTax || '0') * 9);
    setTaxRevenue(calculatedTaxRevenue);
    return calculatedTaxRevenue;
  };

  useEffect(() => {
    const fetchScenario = async () => {
      try {
        const savedScenario = await AsyncStorage.getItem('currentScenario');
        if (savedScenario) {
          const parsedScenario: Scenario = JSON.parse(savedScenario);
          setScenario(parsedScenario);

          const savedTurn = await AsyncStorage.getItem('currentTurn');
          if (savedTurn) {
            setTurn(JSON.parse(savedTurn)); // Recupera o turno salvo
          } else {
            const initialTurn = initializeTurn(parsedScenario.details.year, parsedScenario.details.economicBalance);
            setTurn(initialTurn); // Inicializa o turno se não houver nenhum salvo
            await AsyncStorage.setItem('currentTurn', JSON.stringify(initialTurn));
          }

          await calculateEducationExpense(); // Calcular despesa de educação
          await calculateTaxRevenue(); // Calcular receita de impostos
        }
      } catch (error) {
        console.error('Erro ao carregar o cenário ou turno:', error);
      }
    };

    fetchScenario();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert(
          'Jogo em andamento',
          'Você deseja ir para o menu principal?',
          [
            { text: 'Cancelar', onPress: () => { }, style: 'cancel' },
            { text: 'Ir para o Menu', onPress: () => navigation.navigate('Main') },
          ],
          { cancelable: false }
        );
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [navigation])
  );

  const handleAdvanceTurn = async () => {
    if (turn) {
      const calculatedEducationExpense = await calculateEducationExpense();
      const calculatedTaxRevenue = await calculateTaxRevenue();
      const nextTurn = advanceTurn(turn, calculatedEducationExpense, calculatedTaxRevenue);
      setTurn(nextTurn);

      // Adiciona o saldoEconomia atual ao histórico 
      setSaldoEconomiaHistory(prevHistory => [...prevHistory, turn.saldoEconomia]);
      setTurnHistory(prevHistory => {
        const updatedHistory = [...prevHistory, turn];
        return updatedHistory.slice(-12);
      });

      try {
        await AsyncStorage.setItem('currentTurn', JSON.stringify(nextTurn)); // Salva o turno atualizado
      } catch (error) {
        console.error('Erro ao salvar o turno:', error);
      }
    }
  };

  if (!scenario || !turn) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View style={styles.container}>
      <Header scenario={scenario} />
      <AButtonsGame />
      <GameBottomBar
        turn={turn}
        months={months}
        onAdvanceTurn={handleAdvanceTurn}
        onShowStatsModal={() => setIsStatsModalVisible(true)}
        onShowAdviceModal={() => setIsAdviceModalVisible(true)}
      />

      <TouchableOpacity style={styles.advanceButton}
        onPress={handleAdvanceTurn}>
        <Text style={styles.advanceButtonText}>Avançar</Text>
      </TouchableOpacity>

      <StatsModal
        visible={isStatsModalVisible}
        onClose={() => setIsStatsModalVisible(false)}
        country={scenario.name}
        pib={scenario.details.pib}
        flagImage={scenario.images.flag}
        saldoEconomia={turnHistory.map(turn => turn.saldoEconomia)} // Passe o saldoEconomia aqui
      />

      <AdviceModal
        visible={isAdviceModalVisible}
        onClose={() => setIsAdviceModalVisible(false)}
      />
    </View>
  );
};

export default GameMain;
