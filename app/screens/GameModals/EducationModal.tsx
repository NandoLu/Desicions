import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from '../../../styles/ModalStyle'; // Estilos do modal
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface EducationModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (education: { primary: number; secondary: number; higher: number }) => void;
}

const EducationModal: React.FC<EducationModalProps> = ({ visible, onClose, onSave }) => {
  const [primaryEducation, setPrimaryEducation] = useState(0);
  const [secondaryEducation, setSecondaryEducation] = useState(0);
  const [higherEducation, setHigherEducation] = useState(0);
  const [tempPrimaryEducation, setTempPrimaryEducation] = useState(0);
  const [tempSecondaryEducation, setTempSecondaryEducation] = useState(0);
  const [tempHigherEducation, setTempHigherEducation] = useState(0);

  useEffect(() => {
    const loadEducationValues = async () => {
      const primary = await AsyncStorage.getItem('primaryEducation');
      const secondary = await AsyncStorage.getItem('secondaryEducation');
      const higher = await AsyncStorage.getItem('higherEducation');

      if (primary !== null) {
        const primaryValue = parseInt(primary);
        setPrimaryEducation(primaryValue);
        setTempPrimaryEducation(primaryValue);
      }
      if (secondary !== null) {
        const secondaryValue = parseInt(secondary);
        setSecondaryEducation(secondaryValue);
        setTempSecondaryEducation(secondaryValue);
      }
      if (higher !== null) {
        const higherValue = parseInt(higher);
        setHigherEducation(higherValue);
        setTempHigherEducation(higherValue);
      }
    };

    loadEducationValues();
  }, [visible]);

  const calculateDespesaEducacao = (primary: number, secondary: number, higher: number) => {
    return primary * -2 + secondary * -4 + higher * -6;
  };

  const handleSave = async () => {
    setPrimaryEducation(tempPrimaryEducation);
    setSecondaryEducation(tempSecondaryEducation);
    setHigherEducation(tempHigherEducation);
    await AsyncStorage.setItem('primaryEducation', tempPrimaryEducation.toString());
    await AsyncStorage.setItem('secondaryEducation', tempSecondaryEducation.toString());
    await AsyncStorage.setItem('higherEducation', tempHigherEducation.toString());
    const despesaEducacao = calculateDespesaEducacao(tempPrimaryEducation, tempSecondaryEducation, tempHigherEducation);
    console.log(`Despesa em Educação: ${despesaEducacao}`);
    onSave({ primary: tempPrimaryEducation, secondary: tempSecondaryEducation, higher: tempHigherEducation });
  };

  const handleClose = () => {
    setTempPrimaryEducation(primaryEducation);
    setTempSecondaryEducation(secondaryEducation);
    setTempHigherEducation(higherEducation);
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
          <Text style={styles.modalTitle}>Defina os Investimentos em Educação</Text>

          <Text>Educação Primária: {tempPrimaryEducation}</Text>
          <Slider
            minimumValue={0}
            maximumValue={10}
            step={1}
            value={tempPrimaryEducation}
            onSlidingComplete={setTempPrimaryEducation}
          />

          <Text>Educação Secundária: {tempSecondaryEducation}</Text>
          <Slider
            minimumValue={0}
            maximumValue={10}
            step={1}
            value={tempSecondaryEducation}
            onSlidingComplete={setTempSecondaryEducation}
          />

          <Text>Educação Superior: {tempHigherEducation}</Text>
          <Slider
            minimumValue={0}
            maximumValue={10}
            step={1}
            value={tempHigherEducation}
            onSlidingComplete={setTempHigherEducation}
          />

          <Text>Despesa em Educação: {calculateDespesaEducacao(tempPrimaryEducation, tempSecondaryEducation, tempHigherEducation)}</Text>

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

export default EducationModal;
