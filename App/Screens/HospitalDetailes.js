import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import PageHeader from "../Components/Shared/PageHeader";
import HospitalInfo from "../Components/HospitalDetail/HospitalInfo";
import SubHeading from "../Components/Home/SubHeading";

export default function HospitalDetailes() {
  const [hospital, setHospital] = useState(null); // Initialize with null
  const param = useRoute().params;
  const navigation = useNavigation();
  useEffect(() => {
    if (param && param.hospital) {
      setHospital(param.hospital);
    }
  }, [param]); // Add param as dependency to useEffect
  return (
    hospital && (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView>
          {
            <View>
              <View style={{ position: "absolute", zIndex: 10, margin: 15 }}>
                <PageHeader title={""} />
              </View>

              <View>
                <Image
                  source={{
                    uri: hospital.attributes.image.data[0].attributes.url,
                  }}
                  style={{
                    width: "100%",
                    height: 260,
                  }}
                />
                <View
                  style={{
                    marginTop: -20,
                    backgroundColor: "#fff",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    padding: 20,
                  }}
                >
                  <HospitalInfo hospital={hospital} />
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderColor: "#079DAA",
                      margin: 5,
                      marginBottom: 10,
                      marginTop: 20,
                    }}
                  ></View>
                  <SubHeading subHeadingTitle={"About"} />
                  <Text style={{ fontFamily: "appfont-Regular" }}>
                    {hospital.attributes.Description}
                  </Text>
                </View>
              </View>
            </View>
          }
        </ScrollView>
        <TouchableOpacity
          style={{
            backgroundColor: "#079DAA",
            borderRadius: 5,
            padding: 10,
            alignItems: "center",
            margin: 20,
          }}
          onPress={() =>
            navigation.navigate("Book-Appointment", {
              hospital: hospital,
            })
          }
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    )
  );
}
