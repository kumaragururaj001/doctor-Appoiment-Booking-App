import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HospitalDoctorTab({ activeTab }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={{ marginTop: 10 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          style={[activeIndex === 0 ? styles.activeTab : styles.inActiveTab]}
          onPress={() => {
            setActiveIndex(0);
            activeTab("Hospital");
          }}
        >
          <Text
            style={[
              activeIndex === 0 ? styles.activeText : styles.inActiveText,
            ]}
          >
            Hospital
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[activeIndex === 1 ? styles.activeTab : styles.inActiveTab]}
          onPress={() => {
            setActiveIndex(1);
            activeTab("Doctor");
          }}
        >
          <Text
            style={[
              activeIndex === 1 ? styles.activeText : styles.inActiveText,
            ]}
          >
            Doctors
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  activeText: {
    textAlign: "center",
    fontFamily: "appfont-Regular",
    fontSize: 18,
    color: "#049CAC",
  },
  inActiveText: {
    textAlign: "center",
    fontFamily: "appfont-Regular",
    fontSize: 18,
    color: "#a6a4a4",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#049CAC",
    padding: 3, // Changed from "3" to 3
  },
  inActiveTab: {
    borderBottomWidth: 1,
    borderBottomColor: "#a6a4a4",
    padding: 3, // Changed from "3" to 3
  },
});
