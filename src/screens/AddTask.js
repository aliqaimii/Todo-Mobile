import React, { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  TextInput,
} from "react-native";

import { AddTask } from "../services/Api";

const AddTasks = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [dueDate, setDueDate] = useState("");

  const titleIcon = require("../assets/icon1.png");
  const descIcon = require("../assets/icon2.png");
  const dateIcon = require("../assets/icon3.png");

  const onAddTask = async () => {
    let data = {
      title: title,
      description: desc,
      due_at: dueDate,
    };

    const res = await AddTask(data);

    if (res?.data?.code === 201) {
      Alert.alert(res?.data?.message);
    }

    navigation.goBack();
  };

  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={onBackPress}>
          <Text style={styles.backTxt}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.heading}>New Task</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.textInput}>
          <Image style={styles.inputIcon} source={titleIcon} />
          <TextInput onChangeText={setTitle} style={styles.input} />
        </View>
        <View style={styles.textInput}>
          <Image style={styles.inputIcon} source={descIcon} />
          <TextInput
            onChangeText={setDesc}
            style={styles.input}
            multiline={true}
            numberOfLines={5}
          />
        </View>
        <View style={styles.textInput}>
          <Image style={styles.inputIcon} source={dateIcon} />
          <TextInput onChangeText={setDueDate} style={styles.input} />
        </View>
        <TouchableOpacity onPress={onAddTask} style={styles.btn}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  heading: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  backTxt: {
    fontSize: 15,
  },
  backBtn: {
    position: "absolute",
    zIndex: 1,
  },
  body: {
    flex: 1,
    alignItems: "center",
    marginTop: 60,
  },
  header: {
    flexDirection: "row",
  },
  textInput: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  inputIcon: {
    width: 20,
    height: 20,
  },
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

export default AddTasks;
