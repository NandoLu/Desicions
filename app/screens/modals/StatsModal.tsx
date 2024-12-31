import React from 'react';
import { Modal, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import styles from '../../../styles/ModalsFooterStyles';

interface StatsModalProps {
  visible: boolean;
  onClose: () => void;
  country: string;
  pib: number;
  flagImage: any;
  saldoEconomia: number[]; // Novo prop para o saldoEconomia
}

const StatsModal: React.FC<StatsModalProps> = ({ visible, onClose, pib, flagImage, saldoEconomia }) => {
  const screenWidth = Dimensions.get('window').width;

  // Preenchendo saldoEconomia com valores padrão se o array for menor que 24
  const fullSaldoEconomia = [...Array(16 - saldoEconomia.length).fill(0), ...saldoEconomia];

  // Gerando labels com base no tamanho do array fullSaldoEconomia
  const labels = fullSaldoEconomia.map((_, index) => `T${index + 1}`);

  // Configurando os dados do gráfico
  const data = {
    labels: labels,
    datasets: [
      {
        data: fullSaldoEconomia.map(val => Math.round(val)), // Garantindo que os valores sejam inteiros
        color: (opacity = 1) => fullSaldoEconomia[fullSaldoEconomia.length - 1] === 0 ? `rgba(255, 0, 0, ${opacity})` : `rgba(0, 0, 255, ${opacity})`, // Azul ou Vermelho
        strokeWidth: 1 // Diminuindo a espessura da linha
      }
    ]
  };

  const chartConfig = {
    backgroundColor: '#fff',
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 0, // Limitar para números inteiros
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Azul
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: '1.5', // Diminuir o tamanho dos marcadores
      strokeWidth: '0.5', // Diminuir a espessura dos marcadores
      stroke: '#ffa726'
    },
    propsForBackgroundLines: {
      strokeDasharray: '4', // Linha pontilhada para marcar o valor 0
      strokeWidth: 1,
      stroke: 'gray'
    },
    propsForLabels: {
      fontSize: 5 // Diminuir o tamanho dos textos
    }
  };

  return (
    <Modal transparent={true} animationType="slide" visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image source={flagImage} style={styles.flagImage} />
          <Text style={styles.infoText}>PIB: {pib}</Text>
          <LineChart
            data={data}
            width={screenWidth - 80} // Largura do gráfico
            height={200} // Altura do gráfico
            chartConfig={chartConfig}
            style={{
              marginVertical: 0,
              borderWidth: 1, // Adicionando a borda
              borderColor: '#000' // Cor da borda
            }}
          />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.buttonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default StatsModal;
