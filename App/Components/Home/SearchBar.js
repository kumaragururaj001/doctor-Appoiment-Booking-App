import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Import MaterialIcons from Expo vector icons

export default function SearchBar({ setSearchText }) {
  const [searchInput, setSearchInput] = useState();
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={24} color="#888" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#888"
        autoFocus={false} // Set to true if you want the input to be focused by default
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="default"
        returnKeyType="search"
        onChangeText={(value) => setSearchInput(value)}
        onSubmitEditing={() => setSearchText(searchInput)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingHorizontal: 15, // Add horizontal padding for better appearance
    flexDirection: "row", // Align icon and input in a row
    alignItems: "center", // Center align items vertically
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  icon: {
    marginHorizontal: 10, // Add margin to the left of the icon
  },
  input: {
    flex: 1, // Take up remaining space
    fontSize: 16,
    color: "#333",
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "100%",
    fontFamily: "appfont-light",
  },
});
