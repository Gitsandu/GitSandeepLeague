/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import ColorCube from './src/components/StorySlide/ColorCube';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import CardDeck from './src/components/StorySlide/CardDeck';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CardSwiper" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="CardSwiper"  component={CardDeck} />
        <Stack.Screen name="ColorCube" component={ColorCube} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white', // You can set the background color of the safe area
},
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
});

export default App;
