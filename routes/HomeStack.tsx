import * as React from 'react';
import { Image, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import About from '../screens/About';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
          height: 60,
        },
        headerTintColor: '#444',
        headerTitle: () => <Text></Text>,
        headerBackground: props => (
          <Header {...props} title='GameZone' />
        ),
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='About' component={About} />
      <Stack.Screen name='Review Details' component={ReviewDetails} />
    </Stack.Navigator>
  );
}

export default HomeStack;
