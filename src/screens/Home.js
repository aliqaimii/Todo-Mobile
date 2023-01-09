import React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tasks from "./Tasks";
import Locations from "./Locations";

const Tab = createBottomTabNavigator();

const Home = () => {
  const screenOptions = {
    headerShown: false,
  };

  const taskOptions = {
    tabBarIcon: ({}) => (
      <Image style={styles.img} source={require("../assets/task.png")} />
    ),
  };

  const locationOptions = {
    tabBarIcon: ({}) => (
      <Image style={styles.img} source={require("../assets/pin.png")} />
    ),
  };

  return (
    <Tab.Navigator initialRouteName="Tasks" screenOptions={screenOptions}>
      <Tab.Screen name="Tasks" component={Tasks} options={taskOptions} />
      <Tab.Screen
        name="Locations"
        component={Locations}
        options={locationOptions}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 15,
    height: 20,
  },
});

export default Home;
