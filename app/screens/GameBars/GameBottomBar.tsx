// GameHeader/GameBottomBar.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './GameBottomBar.styles';

interface GameBottomBarProps {
  turn: {
    saldoEconomia: number;
    popularidade: number;
    monthIndex: number;
    year: number;
  };
  months: string[];
  onAdvanceTurn: () => void;
  onShowStatsModal: () => void;
  onShowAdviceModal: () => void;
}

const GameBottomBar: React.FC<GameBottomBarProps> = ({ turn, months, onAdvanceTurn, onShowStatsModal, onShowAdviceModal }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoBar}>
        <Text>Saldo: {turn.saldoEconomia}</Text>
        <Text>Popularidade: {turn.popularidade}</Text>
        <Text>{`${months[turn.monthIndex]} de ${turn.year}`}</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={onShowStatsModal}>
          <Image source={require('../../../assets/img/img.png')} style={styles.footerButtonImage} />
        </TouchableOpacity>
        <View style={styles.footerButtonStatic}>
          <Image source={require('../../../assets/img/img.png')} style={styles.footerButtonImage} />
        </View>
        <TouchableOpacity style={styles.footerButton} onPress={onShowAdviceModal}>
          <Image source={require('../../../assets/img/img.png')} style={styles.footerButtonImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameBottomBar;