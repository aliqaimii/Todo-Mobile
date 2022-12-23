import React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tasks from './Tasks';
import Locations from './Locations';
import AddTask from './AddTask';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFileLines, faLocationPin} from '@fortawesome/free-regular-svg-icons';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName="Tasks"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Tasks"
        component={Tasks}
        options={{
          tabBarIcon: ({tintColor}) => (
            <Image
              style={{width: 15, height: 20}}
              source={require('../assets/task.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Locations"
        component={Locations}
        options={{
          tabBarIcon: ({tintColor}) => (
            <Image
              style={{width: 15, height: 20}}
              source={require('../assets/pin.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
