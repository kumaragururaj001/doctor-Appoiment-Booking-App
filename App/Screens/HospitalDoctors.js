import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import PageHeader from "../Components/Shared/PageHeader";
import HospitalDoctorTab from "../Components/HospitalDoctorsScreen/HospitalDoctorTab";
import HospitalListBig from "../Components/HospitalDoctorsScreen/HospitalListBig";
import DoctorList from "../Components/HospitalDoctorsScreen/DoctorList";
import GlobalApi from "../Services/GlobalApi";

export default function HospitalDoctors() {
  const [hospitalList, setHospitalList] = useState([]);
  const [doctorList, setDoctorList] = useState([]);
  const param = useRoute().params;
  const [activeTab, setActiveTab] = useState("Hospital");

  useEffect(() => {
    if (activeTab === "Hospital") {
      getHospitalsByCategory();
    } else if (activeTab === "Doctor") {
      getDoctorsByCategory();
    }
  }, [activeTab]);

  const getHospitalsByCategory = () => {
    GlobalApi.getHospitalsByCategory(param?.categoryName).then((resp) => {
      setHospitalList(resp.data.data);
    });
  };

  const getDoctorsByCategory = () => {
    GlobalApi.getDoctorsByCategory(param?.categoryName).then((resp) => {
      setDoctorList(resp.data.data);
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <PageHeader title={param?.categoryName} />
      <HospitalDoctorTab activeTab={(value) => setActiveTab(value)} />

      {activeTab === "Hospital" ? (
        <HospitalListBig hospitalList={hospitalList} />
      ) : (
        <DoctorList doctorList={doctorList} />
      )}
    </View>
  );
}
