import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './src/screens/HomeScreen';
import ActivityScreen from './src/screens/ActivityScreen';
import SummaryScreen from './src/screens/SummaryScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ActivityDetailScreen from './src/screens/ActivityDetailScreen';
import { RootStackParamList } from './src/navigation/navigation';
import { MainTabParamList } from './src/navigation/navigation';

const Tab = createBottomTabNavigator<MainTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabHome" component={HomeScreen} />
      <Tab.Screen name="LoggAktivitet" component={ActivityScreen} />
      <Tab.Screen name="Oversikt" component={SummaryScreen} />
      <Tab.Screen name="TabProfile" component={ProfileScreen} />
    </Tab.Navigator>
  );  
}

const App: React.FC = () => {
  useEffect(() => {
    async function checkAndClearStorage() {
      try {
        const activitiesString = await AsyncStorage.getItem('activities');
        if (activitiesString) {
          const activities = JSON.parse(activitiesString);
          if (!Array.isArray(activities)) {
            await AsyncStorage.removeItem('activities');
          }
        }
      } catch (error) {
        console.error('Error checking or clearing the activities storage:', error);
      }
    }
    checkAndClearStorage();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs">
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="ActivityDetailScreen" component={ActivityDetailScreen as React.ComponentType} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
