import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import SignInWithOAuth from "./App/Components/SignInWithOAuth";
import Home from "./App/Screens/Home";
import Login from "./App/Screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavication";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "appfont-Regular": require("./assets/fonts/Outfit-Regular.ttf"),
    "appfont-Bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "appfont-Medium": require("./assets/fonts/Outfit-Medium.ttf"),
    "appfont-Light": require("./assets/fonts/Outfit-Light.ttf"),
    "appfont-SemiBold": require("./assets/fonts/Outfit-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <ClerkProvider
      publishableKey={"pk_test_Ymxlc3NlZC1zb2xlLTg1LmNsZXJrLmFjY291bnRzLmRldiQ"}
    >
      <SafeAreaView style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
