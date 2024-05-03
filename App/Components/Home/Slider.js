import React, { useEffect, useState } from "react";
import { View, FlatList, Dimensions, Image } from "react-native";
import GlobalApi from "../../Services/GlobalApi";

export default function Slider() {
  const [sliderList, setSliderList] = useState([]);

  useEffect(() => {
    getSlider();
  }, []);

  const getSlider = () => {
    GlobalApi.getSlider().then((rep) => {
      console.log(rep.data.data);
      setSliderList(rep.data.data);
    });
  };

  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={sliderList}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.attributes.Image.data.attributes.url }}
            style={{
              width: Dimensions.get("screen").width * 0.9,
              height: 170,
            }}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
