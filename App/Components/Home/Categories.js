import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import GlobalApi from "../../Services/GlobalApi";
import SubHeading from "./SubHeading";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {
  const navigation = useNavigation();
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    GlobalApi.getCategories().then((resp) => {
      setCategoryList(resp.data.data);
    });
  };

  if (!categoryList) {
    return null;
  }

  return (
    <View style={{ marginTop: 10 }}>
      <SubHeading subHeadingTitle={"Doctor Specialty "} />
      <FlatList
        data={categoryList}
        numColumns={4}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) =>
          index < 4 && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Hospital-Doctors", {
                  categoryName: item.attributes.Name,
                })
              }
              style={{ alignItems: "center" }}
            >
              <View
                style={{
                  backgroundColor: "#dbeafe",
                  padding: 15,
                  borderRadius: 99,
                }}
              >
                <Image
                  source={{
                    uri: item.attributes.icon.data.attributes.url,
                  }}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </View>
              <Text>{item.attributes.Name}</Text>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
}
