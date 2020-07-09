import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { BaseRouter } from '@react-navigation/native';

const ReviewDetails = props => {
  return (
    <View style={globalStyles.container}>
      <Text>{props.route.params['title']}</Text>
      <Text>{props.route.params['body']}</Text>
      <Text>{props.route.params['rating']}</Text>
    </View>
  );
};

export default ReviewDetails;
