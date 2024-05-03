import { View, Text, Image } from "react-native";
import React from "react";
import PageHeader from "../Shared/PageHeader";
import { Entypo } from "@expo/vector-icons";
import HorizontalLine from "../Shared/HorizontalLine";

export default function AppointmentHospitalInfo({ hospital }) {
  return (
    <View>
      <PageHeader title={"Book Appointment"} />
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
      >
        <Image
          source={{ uri: hospital.attributes.image.data[0].attributes.url }}
          style={{ width: 100, height: 100, borderRadius: 99, marginRight: 10 }}
        />
        <View>
          <Text
            style={{
              fontFamily: "appfont-Regular",
              fontSize: 20,
            }}
          >
            {hospital.attributes.Name}
          </Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
          >
            <Entypo name="location" size={20} color="#079DAA" />
            <Text
              style={{
                color: "#a6a4a4",
                fontFamily: "appfont-Regular",
                marginLeft: 5,
                width: "70%",
              }}
            >
              {hospital.attributes.Address}
            </Text>
          </View>
        </View>
      </View>
      <HorizontalLine />
    </View>
  );
}
