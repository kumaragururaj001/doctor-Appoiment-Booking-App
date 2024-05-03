import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Appoinmenet from "../Screens/Appoinmenet";
import Profile from "../Screens/Profile";
import Icon from "react-native-vector-icons/FontAwesome";
import Homenavigation from "./Homenavigation";

const Tab = createBottomTabNavigator();

// Custom header component with logo
const HeaderLogo = ({ pageName }) => (
  <View style={styles.headerContainer}>
    <View style={styles.logoContainer}>
      <Image
        source={require("../../assets/images/app.png")}
        style={styles.logoImage}
        resizeMode="contain"
      />
    </View>
    <Text style={styles.pageName}>{pageName}</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginRight: "auto",
  },
  logoImage: {
    width: 100,
    height: 30,
  },
  pageName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#009AA7",
    marginLeft: "auto",
  },
});

export default function TabNavigation() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          headerTitle: (props) => (
            <HeaderLogo {...props} /> //pageName={route.name} />
          ),
        })}
      >
        <Tab.Screen
          name="Home"
          component={Homenavigation}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Icon name="home" size={25} color="#009AA7" />
            ),
          }}
        />
        <Tab.Screen
          name="Appoinmenet"
          component={Appoinmenet}
          options={{
            tabBarLabel: "Appoinmenet",
            tabBarIcon: ({ color }) => (
              <Icon name="calendar" size={20} color="#009AA7" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <Icon name="user" size={20} color="#009AA7" />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
