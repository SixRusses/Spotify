import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import {NavigationButton} from '../../components/button';

import styled from 'styled-components';

const Catalogue = ({navigation}) => {
  const Catalogue = styled.Text`
    margin: 12px;
    text-align: center;
    font-size: 40px;
  `;

  return (
    <View>
      <Catalogue>Liste des catalogues</Catalogue>

      <Button
        onPress={() => navigation.navigate('Films')}
        title="Films"
        color="#145584"
      />

      <Button
        onPress={() => navigation.navigate('Login')}
        title="Déconnexion"
        color="#987684"
      />
    </View>
  );
};

export default Catalogue;
