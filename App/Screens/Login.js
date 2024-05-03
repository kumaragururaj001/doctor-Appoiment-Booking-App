import React from "react";
import { View, Text, Image, StyleSheet } from "react-native"; // Import Image, Text, and StyleSheet components
import App from "../../assets/images/app.png";
import SignInWithOAuth from "../Components/SignInWithOAuth";

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={App} style={styles.appImage} />
      <Text style={styles.text}>This is an Appointment Booking App</Text>
      <SignInWithOAuth />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    width: "100%",
  },
  appImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  text: {
    fontSize: 20,
    marginTop: 20,
  },
});
