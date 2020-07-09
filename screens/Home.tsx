import React, { Props, useState } from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { globalStyles } from '../styles/global';

interface Props {}

const Home = (props: Props) => {
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum 1',
      key: '1',
    },
    {
      title: 'GottaCatch Them All (again)',
      rating: 4,
      body: 'lorem ipsum 2',
      key: '2',
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum 3',
      key: '3',
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Review Details', item)
            }
          >
            <Text style={globalStyles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
