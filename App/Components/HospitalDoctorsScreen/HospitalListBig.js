import { View, Text, FlatList } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import HospitalCardItem from "../Shared/HospitalCardItem";
import { useNavigation } from "@react-navigation/native";

export default function HospitalListBig({ hospitalList }) {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={hospitalList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Hospital-Detailes", {
                hospital: item,
              })
            }
          >
            <HospitalCardItem hospital={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
