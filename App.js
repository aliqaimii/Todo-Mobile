/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import NavigationStack from "./src/navigation/NavigationStack";

const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <NavigationStack />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
