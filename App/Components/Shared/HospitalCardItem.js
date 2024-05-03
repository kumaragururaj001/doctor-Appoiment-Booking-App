import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function HospitalCardItem({ hospital }) {
  return (
    <View
      style={{
        borderRadius: 10,
        marginBottom: 20,
        borderRadius: 10,
        borderColor: "#a6a4a4",
      }}
    >
      {hospital.attributes.image &&
        hospital.attributes.image.data.length > 0 && (
          <Image
            source={{ uri: hospital.attributes.image.data[0].attributes.url }}
            style={{
              width: "100%",
              height: 140,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
        )}
      <View
        style={{
          padding: 10,
          backgroundColor: "#fff",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,
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
          <Text>{hospital.attributes.Address}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            marginTop: 4,
          }}
        >
          <Entypo name="eye" size={20} color="#079DAA" />
          <Text>658 Views</Text>
        </View>
      </View>
    </View>
  );
}
