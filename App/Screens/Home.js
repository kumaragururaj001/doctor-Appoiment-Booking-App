import React, { useEffect, useState } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import Header from "../Components/Home/Header";
import SearchBar from "../Components/Home/SearchBar";
import Slider from "../Components/Home/Slider";
import Categories from "../Components/Home/Categories";
import PremiumHospitals from "../Components/Home/PremiumHospitals";

export default function Home() {
  const { isLoaded, userId, sessionId, user, signOut } = useAuth();
  const [userName, setUserName] = useState("");

  const handleSignOut = async () => {
    try {
      await signOut();
      // Perform any additional tasks after sign out if needed
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ScrollView style={{ padding: 20, marginTop: 20 }}>
      <Header />
      <SearchBar setSearchText={(value) => console.log(value)} />
      <Slider />
      <Categories />
      <PremiumHospitals />
    </ScrollView>
  );
}
