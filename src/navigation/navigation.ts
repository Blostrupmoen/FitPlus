import { NavigatorScreenParams } from '@react-navigation/native';
import { ActivityType } from '../constants/ActivityType';

export type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  LoginScreen: undefined; // Legg til dette hvis du navigerer til LoginScreen via Stack.Navigator
  MainTabs: undefined; // Legg til dette hvis du bruker MainTabs som en rute i Stack.Navigator
  ActivityDetailScreen: { activity: ActivityType }; 
  // Legg til andre nødvendige skjermer og deres parametere her
};

export type MainTabParamList = {
  TabHome: undefined; // Tilsvarer HomeScreen
  LoggAktivitet: undefined; // Endret fra "Logg Aktivitet" for konsistens
  Oversikt: undefined; // Lagt til basert på din bruk
  TabProfile: undefined; // Tilsvarer ProfileScreen
};

// For å bruke disse typene i dine Navigator-komponenter:
export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NavigatorScreenParams<RootStackParamList[Screen]>;

export type MainTabScreenProps<Screen extends keyof MainTabParamList> = NavigatorScreenParams<MainTabParamList[Screen]>;
