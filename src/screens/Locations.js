import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { GetCheckins } from "../services/Api";

const Locations = () => {
  const [prevLocations, setPrevLocations] = useState([]);

  useEffect(() => {
    getCheckins();
  }, []);

  const getCheckins = async () => {
    const res = await GetCheckins();
    if (res?.status === 200) {
      setPrevLocations(res?.data?.checkins.reverse());
    }
  };

  const preLoca = ({ item }) => (
    <View style={{ margin: 5, flexDirection: "row", padding: 7 }}>
      <Image
        style={{ width: 20, height: 20 }}
        source={require("../assets/locationPin.png")}
      />
      <View style={{ marginLeft: 8 }}>
        <Text style={{ fontSize: 17, marginBottom: 5 }}> {item?.address}</Text>

        <Text style={{ fontSize: 14, color: "gray" }}>
          {item?.latitude + ", " + item?.latitude}
        </Text>
      </View>
    </View>
  );
  return (
    <View style={{ height: "100%", padding: 20, backgroundColor: "white" }}>
      <Text style={{ fontWeight: "bold", marginVertical: 10, fontSize: 18 }}>
        Current Location
      </Text>

      <Text style={{ fontWeight: "bold", marginVertical: 10, fontSize: 18 }}>
        Previous Locations
      </Text>
      <FlatList
        data={prevLocations}
        renderItem={preLoca}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Locations;
