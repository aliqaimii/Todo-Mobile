import React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tasks from "./Tasks";
import Locations from "./Locations";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName="Tasks"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Tasks"
        component={Tasks}
        options={{
          tabBarIcon: ({}) => (
            <Image style={styles.img} source={require("../assets/task.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Locations"
        component={Locations}
        options={{
          tabBarIcon: ({}) => (
            <Image style={styles.img} source={require("../assets/pin.png")} />
          ),
        }}
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
