import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import ActionButton from "./ActionButton";

export default function HospitalInfo({ hospital }) {
  return (
    hospital && (
      <View>
        <Text
          style={{
            fontSize: 23,
            fontFamily: "appfont-SemiBold",
          }}
        >
          {hospital.attributes.Name}
        </Text>
        <FlatList
          data={hospital.attributes.categories.data}
          horizontal={true}
          renderItem={({ item }) => (
            <Text style={{ marginRight: 10, color: "#a6a4a4" }}>
              {item.attributes.Name}
            </Text>
          )}
        />
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#079DAA",
            margin: 5,
            marginBottom: 10,
            marginTop: 10,
          }}
        ></View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Entypo name="location" size={20} color="#079DAA" />
          <Text
            style={{
              color: "#a6a4a4",
              fontFamily: "appfont-Regular",
            }}
          >
            {hospital.attributes.Address}
          </Text>
        </View>
        {/* Opening hours */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            marginTop: 6,
            marginBottom: 10,
          }}
        >
          <Entypo name="clock" size={20} color="#079DAA" />
          <Text
            style={{
              color: "#a6a4a4",
              fontFamily: "appfont-Regular",
            }}
          >
            Mon - Sun | 11 AM - 8 PM
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#079DAA",
            margin: 5,
            marginBottom: 10,
          }}
        ></View>
        <ActionButton />
      </View>
    )
  );
}
