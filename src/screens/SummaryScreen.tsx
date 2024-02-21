import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from '../navigation/navigation';
import { ActivityType } from '../constants/ActivityType';
import { useNavigation } from '@react-navigation/native';


type SummaryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ActivityDetailScreen'>;

const SummaryScreen: React.FC = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation<SummaryScreenNavigationProp>(); // Definer navigasjonsprops med riktig type
  const [activities, setActivities] = useState<ActivityType[]>([]);

  useEffect(() => {
    async function loadActivities() {
      const activitiesString = await AsyncStorage.getItem('activities');
      const activitiesData = activitiesString ? JSON.parse(activitiesString) : [];
      setActivities(activitiesData);
    }

    if (isFocused) {
      loadActivities();
    }
  }, [isFocused]);

  if (!Array.isArray(activities)) {
    console.error('Activities data is not an array:', activities);
    return <Text>Error loading activities. Please try again.</Text>;
  }

  if (activities.length === 0) {
    return <Text>No activities found.</Text>;
  }

  const handlePressActivity = (activity: ActivityType) => {
    navigation.navigate('ActivityDetailScreen', { activity });
  };

  return (
    <ScrollView>
      {activities.map((activity, index) => {
        const key = activity.id ? activity.id.toString() : index.toString();
        return (
          <TouchableOpacity key={key} style={{ margin: 10 }} onPress={() => handlePressActivity(activity)}>
            <Text>Activity: {activity.selectedActivity}</Text>
            <Text>Duration: {activity.duration}</Text>
            {activity.image && (
              <Image source={{ uri: activity.image }} style={{ width: 100, height: 100 }} />
            )}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default SummaryScreen;
