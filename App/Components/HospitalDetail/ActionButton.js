import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome icons

export default function ActionButton() {
  const actionButtonList = [
    {
      id: 1,
      name: "Website",
      icon: "globe", // Icon for Website
    },
    {
      id: 2,
      name: "Email",
      icon: "envelope", // Icon for Email
    },
    {
      id: 3,
      name: "Phone",
      icon: "phone", // Icon for Phone
    },
    {
      id: 4,
      name: "Direction",
      icon: "location-arrow", // Icon for Direction
    },
    {
      id: 5,
      name: "Share",
      icon: "share-alt", // Icon for Share
    },
  ];

  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={actionButtonList}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: "space-between",
        }}
        numColumns={5}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ alignContent: "center" }}>
            <View
              style={{
                alignItems: "center",
                backgroundColor: "#dbeafe",
                padding: 13,
                borderRadius: 99,
              }}
            >
              <FontAwesome name={item.icon} size={25} color="#079DAA" />
            </View>
            <Text
              style={{
                fontFamily: "appfont-Regular",
                marginTop: 5,
                marginLeft: 5,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
