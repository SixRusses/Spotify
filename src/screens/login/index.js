import React from 'react';
import {Button, View} from 'react-native';
import styled from 'styled-components';

// import axios from 'axios';
// import {NavigationButton} from '../../components/button';

const Login = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Styled-components avec les buttons, ne fonctionne pas.

  return (
    <View>
      <Accueil>Accueil</Accueil>

      <View>
        <IdInput
          onChangeText={setUsername}
          value={username}
          placeholder="Identifiant"
        />
        <IdInput
          onChangeText={setPassword}
          value={password}
          placeholder="Mot de passe"
        />
      </View>

      <Button
        onPress={() => navigation.navigate('Catalogue')}
        title="Se connecter"
        color="#841584"
      />
    </View>
  );
};

const IdInput = styled.TextInput`
  height: 40px;
  margin: 12px;
  border: 1px solid;
  text-align: center;
`;

const Accueil = styled.Text`
  margin: 12px;
  text-align: center;
  font-size: 40px;
`;

export default Login;
