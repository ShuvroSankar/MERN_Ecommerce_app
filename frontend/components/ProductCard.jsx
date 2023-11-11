import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { Button } from "react-native-paper";

const ProductCard = ({
  stock,
  price,
  name,
  image,
  id,
  addToCardHandler,
  i,
  navigate,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigate.navigate("productdetails", { id })}
    >
      <View
        style={{
          elevation: 5,
          widtht: 220,
          alignItems: "center",
          justifyContent: "space-between",
          margin: 20,
          borderRadius: 20,
          height: 400,
          backgroundColor: i % 2 === 0 ? colors.color5 : colors.color2,
        }}
      >
        <Image
          source={{ uri: image }}
          style={{
            width: 230,
            height: 300,
            resizeMode: "contain",
            position: "absolute",
            left: 38,
            top: 50,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            padding: 20,
            justifyContent: "space-between",
            width: 250,
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              color: i % 2 === 0 ? colors.color7 : colors.color3,
              fontSize: 25,
              fontWeight: "300",
            }}
          >
            {name}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              color: i % 2 === 0 ? colors.color7 : colors.color3,
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            {price}tk
          </Text>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 0,
            backgroundColor: i % 2 === 0 ? colors.color1 : colors.color7,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            width: 300,
          }}
        >
          <Button
            onPress={() => addToCardHandler(id, stock)}
            textColor={i % 2 === 0 ? colors.color5 : colors.color2}
          >
            Add to cart
          </Button>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
