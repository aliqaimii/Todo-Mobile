import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
  StyleSheet,
} from "react-native";

import Swipeable from "react-native-gesture-handler/Swipeable";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

import { GetTasks } from "../services/Api";

const Tasks = ({ navigation }) => {
  const [incompleteTasks, setIncompleteTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const uncheckedIcon = require("../assets/Unchecked.png");
  const checkedIcon = require("../assets/checked.png");

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const res = await GetTasks();

    if (res?.status === 200) {
      const tasks = await getFormattedTasks(res?.data?.tasks);

      setCompletedTasks(tasks?.completed.reverse());
      setIncompleteTasks(tasks?.incomplete.reverse());
    }
  };

  const getFormattedTasks = async (data) => {
    let incomplete = [];
    let completed = [];

    data.map((item) => {
      if (item?.status === "completed") {
        completed.push(item);
      } else if (item?.status === "incomplete") {
        incomplete.push(item);
      }
    });

    return { incomplete, completed };
  };

  const onAddTask = () => {
    navigation.navigate("AddTask");
  };

  const onEdit = () => {
    navigation.navigate("AddTask");
  };

  const renderLeftActions = (progress, dragX) => {
    const translate = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <Animated.View
        style={[styles.leftAction, { transform: [{ translateX: translate }] }]}
      >
        <FontAwesomeIcon style={styles.icon} icon={faPenToSquare} />
      </Animated.View>
    );
  };
  const renderRightActions = (progress, dragX) => {
    const translate = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <TouchableOpacity onPress={onEdit}>
        <Animated.View
          style={[
            styles.rightAction,
            { transform: [{ translateX: translate }] },
          ]}
        >
          <FontAwesomeIcon style={styles.icon} icon={faTrashCan} />
        </Animated.View>
      </TouchableOpacity>
    );
  };

  const renderItemIncomplete = ({ item }) => (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}
    >
      <View style={styles.item}>
        <Image style={styles.itemImg} source={uncheckedIcon} />
        <View style={styles.itemInner}>
          <Text style={styles.itemTitleText}> {item?.title}</Text>
          <Text style={styles.itemDateText}> {item?.due_at}</Text>
        </View>
      </View>
    </Swipeable>
  );

  const renderItemCompleted = ({ item }) => (
    <View style={styles.item}>
      <Image style={styles.itemImg} source={checkedIcon} />
      <View style={styles.itemInner}>
        <Text style={styles.itemTitleText}> {item?.title}</Text>
        <Text style={styles.itemDateText}> {item?.due_at}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={onAddTask}>
        <Text style={styles.addBtnText}>+ Add Task</Text>
      </TouchableOpacity>
      <Text style={styles.incompText}>Incomplete</Text>
      <FlatList
        data={incompleteTasks}
        renderItem={renderItemIncomplete}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.compText}>completed</Text>
      <FlatList
        data={completedTasks}
        renderItem={renderItemCompleted}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: "100%",
    padding: 20,
    backgroundColor: "white",
  },
  addBtnText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  icon: {
    color: "white",
  },
  incompText: {
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 18,
  },
  compText: {
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 18,
  },
  item: {
    margin: 5,
    flexDirection: "row",
    padding: 7,
  },
  itemImg: {
    width: 20,
    height: 20,
  },
  itemInner: {
    marginLeft: 12,
  },
  itemTitleText: {
    fontSize: 17,
    marginBottom: 5,
  },
  itemDateText: {
    fontSize: 14,
    color: "gray",
  },
  rightAction: {
    backgroundColor: "#ff4d4f",
    padding: 20,
  },
  leftAction: {
    backgroundColor: "#a0d911",
    padding: 20,
  },
});

export default Tasks;
