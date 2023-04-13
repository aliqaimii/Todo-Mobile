import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Alert } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

// test

const Login = ({ navigation }) => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    if (email && password) {
      if (email === "admin" && password === "admin1") {
        navigation.navigate("Home");
        Alert.alert("Login successfully");
      } else {
        Alert.alert("Incorrect Email address or Password.");
      }
    } else {
      Alert.alert("Please enter Email address and Password.");
    }
  };

  const onVisiblityPress = () => {
    setShowPass(!showPass);
  };

  return (
    <View style={styles.main}>
      <View style={styles.loginContainer}>
        <Text style={styles.loginTxt}>Log in</Text>
        <TextInput
          onChangeText={setEmail}
          placeholder="Email"
          autoCapitalize="none"
          style={styles.input}
        />
        <View style={styles.input}>
          <TextInput
            style={styles.inputPass}
            placeholder="Password"
            secureTextEntry={!showPass}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={onVisiblityPress}>
            <Text style={styles.inputPassTxt}>
              {showPass ? "Hide" : "Show"}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btn} onPress={onLogin}>
          <Text style={styles.btnText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  loginContainer: {
    width: "88%",
  },
  loginTxt: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 60,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#E8E8E8",
    width: "100%",
    padding: 12,
    marginBottom: 10,
    borderRadius: 7,
    flexDirection: "row",
  },
  inputPass: { flex: 1 },
  inputPassTxt: { fontWeight: "600" },
  btn: {
    backgroundColor: "black",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    padding: 12,
    marginTop: 30,
  },
  btnText: { color: "white" },
});

export default Login;
