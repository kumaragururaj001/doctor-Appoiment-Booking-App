import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import SubHeading from "../Home/SubHeading";
import moment from "moment";

export default function BookingSection() {
  const [next7Days, setNext7Days] = useState([]);
  const [timeList, setTimeList] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();

  useEffect(() => {
    getDays();
    getTime();
  }, []);

  const getDays = () => {
    const today = moment();
    const nextSevenDays = [];
    for (let i = 0; i < 7; i++) {
      const date = moment().add(i, "days");
      nextSevenDays.push({
        date: date,
        day: date.format("ddd"),
        formattedDate: date.format("Do MMM"),
      });
    }
    // Update the state with the calculated dates
    setNext7Days(nextSevenDays);
  };
  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }
    setTimeList(timeList);
  };
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          color: "#a6a4a4",
        }}
      >
        Book Appointment
      </Text>
      <SubHeading subHeadingTitle={"Day"} seeAll={false} />
      <FlatList
        data={next7Days}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.dayButton,
              selectedDate == item.date ? { backgroundColor: "#009AA7" } : null,
            ]}
            onPress={() => setSelectedDate(item.date)}
          >
            <Text
              style={[
                { fontFamily: "appfont-Regular" },
                selectedDate == item.date ? { color: "#fff" } : null,
              ]}
            >
              {item.day}
            </Text>
            <Text
              style={[
                { fontFamily: "appfont-SemiBold", fontSize: 16 },
                selectedDate == item.date ? { color: "#fff" } : null,
              ]}
            >
              {item.formattedDate}
            </Text>
          </TouchableOpacity>
        )}
      />
      <SubHeading subHeadingTitle={"Time"} seeAll={false} />
      <FlatList
        data={timeList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.dayButton,
              selectedTime == item.time ? { backgroundColor: "#009AA7" } : null,
            ]}
            onPress={() => setSelectedTime(item.time)}
          >
            <Text
              style={[
                { fontFamily: "appfont-SemiBold", fontSize: 16 },
                selectedTime == item.time ? { color: "#fff" } : null,
              ]}
            >
              {item.time}
            </Text>
          </TouchableOpacity>
        )}
      />
      <SubHeading subHeadingTitle={"Note"} seeAll={false} />
      <TextInput
        numberOfLines={3}
        placeholder="Write Notes Here"
        placeholderTextColor="#a6a4a4" // Set placeholder text color
        style={{
          backgroundColor: "#FFF",
          padding: 10,
          borderRadius: 10,
          borderColor: "#009AA7",
          borderWidth: 1,
          textAlignVertical: "top",
          height: 100, // Ensure placeholder is displayed at the top
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#079DAA",
          borderRadius: 5,
          padding: 10,
          alignItems: "center",
          margin: 20,
        }}
        onPress={() => console.log("press")}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Make Appointment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dayButton: {
    borderWidth: 1,
    borderRadius: 99,
    padding: 5,
    paddingHorizontal: 20,
    marginRight: 10,
    borderColor: "#a6a4a4",
    marginBottom: 10,
  },
});
