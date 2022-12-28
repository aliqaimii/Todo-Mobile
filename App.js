/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { SafeAreaView } from "react-native";

import NavigationStack from "./src/navigation/NavigationStack";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationStack />
    </SafeAreaView>
  );
};

export default App;
