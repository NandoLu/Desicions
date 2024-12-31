import React, { useState } from 'react'; // Importando o useState
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from '../../../styles/AButtonsGame.styles'; // Estilos do componente
import TaxModal from './TaxModal'; // Importando a modal
import EducationModal from './EducationModal'; // Importando a modal de Educação


const AButtonsGame: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [educationModalVisible, setEducationModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true); // Abre o modal
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Fecha o modal
  };

  const handleSaveTaxes = (taxes: { poor: number; middle: number; rich: number }, taxPopularityImpact: number) => {
    console.log('Impostos Salvos:', taxes);
    console.log('Impacto na Popularidade:', taxPopularityImpact);
    setModalVisible(false);
  };
  
  

  const handleOpenEducationModal = () => {
    setEducationModalVisible(true); // Abre o modal de educação
  };

  const handleCloseEducationModal = () => {
    setEducationModalVisible(false); // Fecha o modal de educação
  };

  const handleSaveEducation = (education: { primary: number; secondary: number; higher: number }) => {
    console.log('Educação Salva:', education);
    setEducationModalVisible(false); // Fecha o modal após salvar
  };

  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.button} onPress={handleOpenModal}>
        <Image source={require('../../../assets/img/img.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Impostos</Text>
      </TouchableOpacity>
      <TaxModal
          visible={modalVisible}
          onClose={handleCloseModal}
          onSave={handleSaveTaxes}
        />
      <TouchableOpacity style={styles.button}>
        <Image source={require('../../../assets/img/img.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Economia</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image source={require('../../../assets/img/img.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Trabalho</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleOpenEducationModal}>
        <Image source={require('../../../assets/img/img.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Educação</Text>
      </TouchableOpacity>
      <EducationModal
          visible={educationModalVisible}
          onClose={handleCloseEducationModal}
          onSave={handleSaveEducation}
        />

      <TouchableOpacity style={styles.button}>
        <Image source={require('../../../assets/img/img.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Saúde</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image source={require('../../../assets/img/img.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Segurança</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image source={require('../../../assets/img/img.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Política Externa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image source={require('../../../assets/img/img.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Infraestrutura</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image source={require('../../../assets/img/img.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Meio Ambiente</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image source={require('../../../assets/img/img.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Agricultura</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image source={require('../../../assets/img/img.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Indústria e Energia</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image source={require('../../../assets/img/img.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Social</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AButtonsGame;
