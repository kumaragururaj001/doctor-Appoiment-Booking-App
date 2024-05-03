import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function PageHeader({ title }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
        }}
      >
        <Ionicons name="arrow-back-circle-outline" size={37} color="black" />
        <Text style={{ fontSize: 25, fontFamily: "appfont-SemiBold" }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
