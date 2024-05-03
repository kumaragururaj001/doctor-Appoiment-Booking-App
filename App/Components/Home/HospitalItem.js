import { View, Text, Image } from "react-native";
import React from "react";

export default function HospitalItem({ hospital }) {
  // Access the image URL from the nested structure
  const imageUrl = hospital.attributes.image.data[0].attributes.url;

  return (
    <View
      style={{
        width: 200,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#a6a4a4",
        marginRight: 15,
      }}
    >
      <Image
        source={{ uri: imageUrl }}
        style={{
          width: "100%",
          height: 110,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View style={{ padding: 7 }}>
        <Text style={{ fontFamily: "appfont-SemiBold", fontSize: 16 }}>
          {hospital.attributes.Name}
        </Text>
        <Text style={{ color: "#a6a4a4" }}>{hospital.attributes.Address}</Text>
      </View>

      {/* <Text>{hospital.attributes.Name}</Text>
      <Text>{hospital.attributes.Address}</Text>
      <Text>{hospital.attributes.Email}</Text>
      <Text>{hospital.attributes.Phone}</Text>
      <Text>{hospital.attributes.Description}</Text>
       */}
    </View>
  );
}
