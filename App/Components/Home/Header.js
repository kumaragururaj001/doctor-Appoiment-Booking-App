import { View, Text, Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Header() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null; // Return null if user data is not loaded or user is not signed in
  }

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between", // Add justifyContent property
        // Add padding to create space between elements
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: user.imageUrl }}
          style={{ width: 45, height: 45, borderRadius: 99 }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontFamily: "appfont-Light" }}>Hello, 👋</Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "appfont-Bold",
            }}
          >
            {user.fullName}
          </Text>
        </View>
      </View>
      <Icon name="bell-o" size={25} color="#009AA7" />
    </View>
  );
}
