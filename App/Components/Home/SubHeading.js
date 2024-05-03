import { View, Text } from "react-native";
import React from "react";

export default function SubHeading({ subHeadingTitle, seeAll = true }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        marginBottom: 15,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "appfont-SemiBold",
        }}
      >
        {subHeadingTitle}
      </Text>
      {seeAll ? (
        <Text
          style={{
            fontFamily: "appfont-Regular",
            color: "#009AA7",
          }}
        >
          see all
        </Text>
      ) : null}
    </View>
  );
}
