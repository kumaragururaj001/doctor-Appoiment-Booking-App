import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function DoctorCardItem({ doctor }) {
  // Function to convert time to AM/PM format
  const formatTime = (time) => {
    const [hour, minute] = time.split(":").map((n) => parseInt(n));
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute < 10 ? "0" + minute : minute} ${period}`;
  };

  return (
    <View
      style={{
        borderRadius: 10,
        marginBottom: 20,
        borderColor: "#a6a4a4",
        backgroundColor: "#fff",
        elevation: 2, // for Android shadow
        shadowColor: "#000", // for iOS shadow
        shadowOffset: { width: 0, height: 2 }, // for iOS shadow
        shadowOpacity: 0.25, // for iOS shadow
        shadowRadius: 3.84, // for iOS shadow
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1 }}>
          {doctor.attributes.image &&
            doctor.attributes.image.data.length > 0 && (
              <Image
                source={{ uri: doctor.attributes.image.data[0].attributes.url }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                }}
              />
            )}
        </View>
        <View style={{ flex: 1, padding: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="verified-user" size={20} color="#079DAA" />
            <Text style={{ marginLeft: 5 }}>Verified</Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "appfont-SemiBold",
              marginTop: 10,
            }}
          >
            {doctor.attributes.name}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#a6a4a4",
              marginTop: 5,
            }}
          >
            {doctor.attributes.category.data.attributes.Name}
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "#079DAA",
              marginVertical: 10,
            }}
          />
          {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="location-on" size={20} color="#079DAA" />
            <Text style={{ marginLeft: 5 }}>{doctor.attributes.address}</Text>
          </View> */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="people" size={20} color="#079DAA" />
            <Text style={{ marginLeft: 5 }}>
              {doctor.attributes.patients} Patients
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="schedule" size={20} color="#079DAA" />
            <Text style={{ marginLeft: 5 }}>
              {formatTime(doctor.attributes.start_time)} -{" "}
              {formatTime(doctor.attributes.end_time)}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            {/* Add star icons here */}
            {[1, 2, 3, 4, 5].map((index) => (
              <MaterialIcons
                key={index}
                name="star"
                size={20}
                color={index <= 4.5 ? "#FFD700" : "#a6a4a4"}
              />
            ))}
          </View>
          {/* <Text style={{ marginTop: 8 }}>{doctor.attributes.about}</Text> */}
          <TouchableOpacity
            style={{
              backgroundColor: "#079DAA",
              borderRadius: 5,
              padding: 10,
              alignItems: "center",
              marginTop: 10,
            }}
            onPress={() => console.log("Make Appointment")}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>
              Make Appointment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
