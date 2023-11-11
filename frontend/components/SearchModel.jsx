import React, { useEffect } from "react";
import {
  View,
  Text,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../styles/styles";
import { Headline, Searchbar } from "react-native-paper";

const SearchModel = ({
  searchQuery,
  setSearchQuery,
  setActiveSearch,
  products = [],
}) => {
  const navigate = useNavigation();

  const backAction = () => {
    setSearchQuery("");
    setActiveSearch(false);
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => {
      backHandler.remove();
    };
  }, []);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        top: 0,
        zIndex: 100,
        position: "absolute",
        backgroundColor: colors.color2,
        padding: 35,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <Searchbar
          placeholder="Search..."
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
          style={{
            marginTop: 20,
          }}
        />
      </SafeAreaView>
      <ScrollView style={{ paddingHorizontal: 10, paddingVertical: 40 }}>
        {products.map((i) => (
          <SearchItem
            key={i._id}
            imgSrc={i.images[0]?.url}
            name={i.name}
            price={i.price}
            handler={() => {
              navigate.navigate("productdetails", { id: i._id });
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const SearchItem = ({ price, name, imgSrc, handler }) => (
  <TouchableOpacity onPress={handler}>
    <View
      style={{
        padding: 20,
        borderRadius: 10,
        backgroundColor: colors.color2,
        elevation: 5,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row",
        marginVertical: 30,
      }}
    >
      <Image
        source={{ uri: imgSrc }}
        style={{
          width: 80,
          height: 80,
          position: "absolute",
          resizeMode: "contain",
          top: -15,
          left: 10,
          borderTopLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      />
      <View style={{ width: "80%", paddingHorizontal: 30 }}>
        <Text numberOfLines={1}>{name}</Text>
        <Headline style={{ fontWeight: "900" }}>{price}tk</Headline>
      </View>
    </View>
  </TouchableOpacity>
);

export default SearchModel;
