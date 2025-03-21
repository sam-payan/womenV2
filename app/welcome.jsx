import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ProfileScreen from './profile';
import HelpTab from './help';
import DashboardTab from './dashboard';
import RulesTab from './rules';
import SupportTab from './support';
//import AntDesign from '@expo/vector-icons/AntDesign';


const DashboardScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Dashboard Screen</Text>
  </View>
);

const HelpScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Check for Help</Text>
  </View>
);

const RulesScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Rules & Regulations</Text>
  </View>
);

const SupportScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Help & Support</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Dashboard') {
            iconName = 'dashboard';
          } else if (route.name === 'Help') {
            iconName = 'help-outline';
          } else if (route.name === 'Rules') {
            iconName = 'rule';
          } else if (route.name === 'Support') {
            iconName = 'support-agent';
          }
          else if ( route.name === 'Profile') {
            iconName = <AntDesign name="Profile" size={24} color="black" />;
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: 'white', paddingBottom: 5 },
      })}
    >
      
      <Tab.Screen name="Help" component={HelpTab} />
      <Tab.Screen name="Support" component={SupportTab} />
      <Tab.Screen name="Dashboard" component={DashboardTab} />
      <Tab.Screen name="Rules" component={RulesTab} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
