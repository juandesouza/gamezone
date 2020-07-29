import * as React from 'react';
import { Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import About from '../screens/About';
import Header from '../shared/Header';

const AboutStack = createStackNavigator();

export default function App() {
  return (
    <AboutStack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerTitle: props => (
          <Header {...props} title='About GameZone' />
        ),
      }}
    >
      <AboutStack.Screen name='About' component={About} />
    </AboutStack.Navigator>
  );
}
