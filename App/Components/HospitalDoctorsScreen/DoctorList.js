import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import DoctorCardItem from "../Shared/DoctorCardItem";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function DoctorList({ doctorList }) {
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={doctorList}
        renderItem={({ item }) => <DoctorCardItem doctor={item} />}
      />
    </View>
  );
}
