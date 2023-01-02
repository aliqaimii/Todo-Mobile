import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
} from "react-native";
import { GetTasks } from "../services/Api";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

const Tasks = ({ navigation }) => {
  const [incompleteTasks, setIncompleteTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

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

  const onEdit = async () => {
    navigation.navigate("AddTask");
  };

  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <Animated.View
        style={{
          backgroundColor: "#a0d911",
          padding: 20,
          transform: [{ translateX: trans }],
        }}
      >
        <FontAwesomeIcon style={{ color: "white" }} icon={faPenToSquare} />
      </Animated.View>
    );
  };
  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <TouchableOpacity onPress={onEdit}>
        <Animated.View
          style={{
            backgroundColor: "#ff4d4f",
            padding: 20,
            transform: [{ translateX: trans }],
          }}
        >
          <FontAwesomeIcon style={{ color: "white" }} icon={faTrashCan} />
        </Animated.View>
      </TouchableOpacity>
    );
  };

  const renderItemIncomplete = ({ item }) => (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}
    >
      <View style={{ margin: 5, flexDirection: "row", padding: 7 }}>
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../assets/Unchecked.png")}
        />
        <View style={{ marginLeft: 12 }}>
          <Text style={{ fontSize: 17, marginBottom: 5 }}> {item?.title}</Text>

          <Text style={{ fontSize: 14, color: "gray" }}> {item?.due_at}</Text>
        </View>
      </View>
    </Swipeable>
  );

  const renderItemCompleted = ({ item }) => (
    <View style={{ margin: 5, flexDirection: "row", padding: 7 }}>
      <Image
        style={{ width: 20, height: 20 }}
        source={require("../assets/checked.png")}
      />
      <View style={{ marginLeft: 12 }}>
        <Text style={{ fontSize: 17, marginBottom: 5 }}> {item?.title}</Text>
        <Text style={{ fontSize: 14, color: "gray" }}> {item?.due_at}</Text>
      </View>
    </View>
  );

  return (
    <View style={{ height: "100%", padding: 20, backgroundColor: "white" }}>
      <TouchableOpacity onPress={onAddTask}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>+ Add Task</Text>
      </TouchableOpacity>
      <Text style={{ fontWeight: "bold", marginVertical: 10, fontSize: 18 }}>
        Incomplete
      </Text>
      <FlatList
        data={incompleteTasks}
        renderItem={renderItemIncomplete}
        keyExtractor={(item) => item.id}
      />
      <Text style={{ fontWeight: "bold", marginVertical: 10, fontSize: 18 }}>
        completed
      </Text>
      <FlatList
        data={completedTasks}
        renderItem={renderItemCompleted}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Tasks;
