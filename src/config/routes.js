import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dimensions} from 'react-native';
import Login from '../screens/login';
import Catalogue from '../screens/catalogue';
import Films from '../screens/films';
// import Trailers from '../screens/trailers';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Catalogue" component={Catalogue} />
        <Stack.Screen name="Films" component={Films} />
        {/* <Stack.Screen name="Trailers" component={Trailers}  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
