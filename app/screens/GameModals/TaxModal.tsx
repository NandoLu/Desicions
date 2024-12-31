import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from '../../../styles/ModalStyle'; // Estilos do modal
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface TaxModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (taxes: { poor: number; middle: number; rich: number }, taxPopularityImpact: number) => void;
}

const TaxModal: React.FC<TaxModalProps> = ({ visible, onClose, onSave }) => {
  const [poorTax, setPoorTax] = useState(0);
  const [middleTax, setMiddleTax] = useState(0);
  const [richTax, setRichTax] = useState(0);
  const [tempPoorTax, setTempPoorTax] = useState(0);
  const [tempMiddleTax, setTempMiddleTax] = useState(0);
  const [tempRichTax, setTempRichTax] = useState(0);

  useEffect(() => {
    const loadTaxValues = async () => {
      const poor = await AsyncStorage.getItem('poorTax');
      const middle = await AsyncStorage.getItem('middleTax');
      const rich = await AsyncStorage.getItem('richTax');

      if (poor !== null) {
        const poorValue = parseInt(poor);
        setPoorTax(poorValue);
        setTempPoorTax(poorValue);
      }
      if (middle !== null) {
        const middleValue = parseInt(middle);
        setMiddleTax(middleValue);
        setTempMiddleTax(middleValue);
      }
      if (rich !== null) {
        const richValue = parseInt(rich);
        setRichTax(richValue);
        setTempRichTax(richValue);
      }
    };

    loadTaxValues();
  }, [visible]);

  const calculateTaxRevenue = (poor: number, middle: number, rich: number) => {
    return poor * 4 + middle * 6 + rich * 9;
  };

  const calculateTaxPopularityImpact = (poor: number, middle: number, rich: number) => {
    const impact = 7 - (poor * 0.5 + middle * 0.75 + rich * 1);
    return impact > 0 ? impact : -Math.abs(impact);
  };

  const handleSave = async () => {
    setPoorTax(tempPoorTax);
    setMiddleTax(tempMiddleTax);
    setRichTax(tempRichTax);
    await AsyncStorage.setItem('poorTax', tempPoorTax.toString());
    await AsyncStorage.setItem('middleTax', tempMiddleTax.toString());
    await AsyncStorage.setItem('richTax', tempRichTax.toString());
    const taxRevenue = calculateTaxRevenue(tempPoorTax, tempMiddleTax, tempRichTax);
    const taxPopularityImpact = calculateTaxPopularityImpact(tempPoorTax, tempMiddleTax, tempRichTax);
    console.log(`Receita de Impostos: ${taxRevenue}`);
    console.log(`Impacto na Popularidade: ${taxPopularityImpact}`);
    onSave({ poor: tempPoorTax, middle: tempMiddleTax, rich: tempRichTax }, taxPopularityImpact);
  };

  const handleClose = () => {
    setTempPoorTax(poorTax);
    setTempMiddleTax(middleTax);
    setTempRichTax(richTax);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={handleClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Defina as Taxas de Imposto</Text>

          <Text>Imposto sobre os Pobres: {tempPoorTax}</Text>
          <Slider
            minimumValue={0}
            maximumValue={10}
            step={1}
            value={tempPoorTax}
            onSlidingComplete={setTempPoorTax}
          />

          <Text>Imposto sobre a Classe Média: {tempMiddleTax}</Text>
          <Slider
            minimumValue={0}
            maximumValue={10}
            step={1}
            value={tempMiddleTax}
            onSlidingComplete={setTempMiddleTax}
          />

          <Text>Imposto sobre os Ricos: {tempRichTax}</Text>
          <Slider
            minimumValue={0}
            maximumValue={10}
            step={1}
            value={tempRichTax}
            onSlidingComplete={setTempRichTax}
          />

          <Text>Receita de Impostos: {calculateTaxRevenue(tempPoorTax, tempMiddleTax, tempRichTax)}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleClose}>
              <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaxModal;
