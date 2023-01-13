import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { GetCheckins } from "../services/Api";

const Locations = () => {
  const [prevLocations, setPrevLocations] = useState([]);

  let latLong = item?.latitude + ", " + item?.latitude;

  const locationIcon = require("../assets/locationPin.png");

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
    <View style={styles.item}>
      <Image style={styles.itemImg} source={locationIcon} />
      <View style={styles.itemInner}>
        <Text style={styles.addressText}> {item?.address}</Text>

        <Text style={styles.latLongText}>{latLong}</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.main}>
      <Text style={styles.currLocText}>Current Location</Text>

      <Text style={styles.prevLocText}>Previous Locations</Text>
      <FlatList
        data={prevLocations}
        renderItem={preLoca}
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
  currLocText: {
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 18,
  },
  prevLocText: {
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
    marginLeft: 8,
  },
  addressText: {
    fontSize: 17,
    marginBottom: 5,
  },
  latLongText: {
    fontSize: 14,
    color: "gray",
  },
});

export default Locations;
