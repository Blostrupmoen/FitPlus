import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from '../navigation/navigation';
import { ActivityType } from '../constants/ActivityType';

type ActivityDetailScreenRouteProp = RouteProp<RootStackParamList, 'ActivityDetailScreen'>;

const ActivityDetailScreen: React.FC<{ route: ActivityDetailScreenRouteProp }> = ({ route }) => {
  const { activity } = route.params;

  return (
    <ScrollView style={{ padding: 10 }}>
      <Text>Activity: {activity.selectedActivity}</Text>
      <Text>Duration: {activity.duration}</Text>
      <Text>Calories: {activity.calories}</Text>
      <Text>Timestamp: {activity.timestamp}</Text>
      <Text>Nickname: {activity.nickname || 'N/A'}</Text>
      <Text>Notes: {activity.userInput || 'N/A'}</Text>
      {activity.image && (
  console.log(activity.image),
  <Image source={{ uri: activity.image }} style={{ width: 100, height: 100 }} />
)}
    </ScrollView>
  );
};

export default ActivityDetailScreen;
