import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import About from '../screens/About';
import ReviewDetails from '../screens/ReviewDetails';

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: '#7159c1' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Overview',
          headerStyle: { backgroundColor: '#aaf' },
        }}
      />
      <Stack.Screen name='About' component={About} />
      <Stack.Screen name='Review Details' component={ReviewDetails} />
    </Stack.Navigator>
  );
}

export default HomeStack;
