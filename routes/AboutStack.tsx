import * as React from 'react';
import { Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import About from '../screens/About';

const AboutStack = createStackNavigator();

export default function App() {
  return (
    <AboutStack.Navigator initialRouteName='Home'>
      <AboutStack.Screen name='About' component={About} />
    </AboutStack.Navigator>
  );
}
