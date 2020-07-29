import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import { BaseRouter } from '@react-navigation/native';

import Card from '../shared/Card';

const ReviewDetails = props => {
  const { rating } = props.route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{props.route.params['title']}</Text>
        <Text>{props.route.params['body']}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});

export default ReviewDetails;
