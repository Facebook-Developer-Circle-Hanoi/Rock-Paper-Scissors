import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import Home from './screens/Home';
import InGame from './screens/InGame';
import History from './screens/History';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{headerShown: false}} component={Home}/>
        <Stack.Screen name="InGame" options={{headerShown: false}} component={InGame}/>
        <Stack.Screen name="History" options={{title: 'History'}} component={History}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
