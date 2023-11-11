import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { colors, dafultstyle } from "../styles/styles";
import Carousel from "react-native-snap-carousel";
import { Avatar, Button } from "react-native-paper";
import Toast from "react-native-toast-message";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;
const iconOptions = {
  size: 20,
  style: {
    borderRadius: 5,
    height: 25,
    width: 25,
    backgroundColor: colors.color5,
  },
};

const ProductDetails = ({ route: { params } }) => {
  const isCarousel = useRef(null);
  const [quentity, setQuentity] = useState(1);
  const name = "nature life";
  const price = 1221;
  const description =
    "Amidst the vibrant tapestry of nature, a secluded glade reveals the delicate dance of sunlight filtering through a verdant canopy. A gentle breeze whispers through the leaves, carrying the sweet aroma of blooming wildflowers.";
  const stock = 5;
  const images = [
    {
      id: "img1",
      url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "img1",
      url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  const decrementQty = () => {
    if (quentity <= 1) return;

    setQuentity((prev) => prev - 1);
  };
  const incrementQty = () => {
    if (stock <= quentity) return;

    setQuentity((prev) => prev + 1);
  };
  const addToCardHandler = () => {
    if (stock === 0)
      return Toast.show({
        type: "error",
        text1: "Out of stock",
        text2: "This is text2",
      });
    // console.log("Adding to curt", quentity);
    Toast.show({
      type: "success",
      text1: "Added to the cart",
    });
  };

  return (
    <View
      style={{ ...dafultstyle, padding: 0, backgroundColor: colors.color1 }}
    >
      <Header back={true} />
      {/* carousel */}
      <Carousel
        layout="tinder"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
      />
      <View
        style={{
          backgroundColor: colors.color2,
          padding: 25,
          flex: 1,
          marginTop: -380,
          // borderTopLeftRadius: 55,
          // borderTopRightRadius: 55,
        }}
      >
        <Text numberOfLines={2} style={{ fontSize: 25 }}>
          {name}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "900" }}>{price} tk</Text>
        <Text style={{ letterSpacing: 1, lineHeight: 20, marginVertical: 15 }}>
          {description}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <Text style={{ color: colors.color3, fontWeight: "100" }}>
            Quentity
          </Text>
          <View
            style={{
              width: 80,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={decrementQty}>
              <Avatar.Icon icon={"minus"} {...iconOptions} />
            </TouchableOpacity>
            <Text style={style.quentity}>{quentity}</Text>
            <TouchableOpacity onPress={incrementQty}>
              <Avatar.Icon icon={"plus"} {...iconOptions} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={addToCardHandler}>
          <Button icon={cart} style={style.btn} textColor={colors.color2}>
            Add to cart
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CarouselCardItem = ({ item, index }) => (
  <View style={style.container}>
    <Image source={{ uri: item.url }} style={style.image} key={index} />
  </View>
);

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 40,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: "contain",
    height: 250,
  },
  quentity: {
    backgroundColor: colors.color4,
    height: 25,
    width: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },
  btn: {
    backgroundColor: colors.color5,
    padding: 5,
    marginVertical: 35,
    borderRadius: 100,
  },
});
export default ProductDetails;
