import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, dafultstyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModel from "../components/SearchModel";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import Footer from "./Footer";

const categories = [
  { category: "Nice", _id: "1" },
  { category: "Nice2", _id: "2" },
  { category: "Nice3", _id: "3" },
  { category: "Nice4", _id: "4" },
  { category: "Nice5", _id: "5" },
  { category: "Nice6", _id: "6" },
  { category: "Nice7", _id: "7" },
];
const products = [
  {
    price: 1221,
    name: "Sample",
    stock: "23",
    _id: "1122",
    images: [
      {
        url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    price: 5000,
    name: "Sample2",
    stock: "5",
    _id: "11223",
    images: [
      {
        url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
];

const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigation();
  const categoryButtonHandelar = (id) => {
    setCategory(id);
  };
  const addToCardHandler = (id) => {
    console.log("Add to card", id);
  };
  return (
    <>
      {activeSearch && (
        <SearchModel
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
      <View style={dafultstyle}>
        <Header />
        {/* Heading Row */}
        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Heading */}
          <View>
            <Text style={{ fontSize: 20 }}>Our</Text>
            <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
          </View>
          {/* Search bar */}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                size={50}
                color="gray"
                style={{ backgroundColor: colors.color2, elevation: 12 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Categories */}
        <View style={{ flexDirection: "row", height: 80 }}>
          <ScrollView
            contentContainerStyle={{
              alignItems: "center",
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  margin: 5,
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                }}
                onPress={() => categoryButtonHandelar(item._id)}
              >
                <Text style={{ fontSize: 12, color: "gray" }}>
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>
        {/* Products */}
        <View
          style={{
            flex: 1,
          }}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                id={item._id}
                addToCardHandler={addToCardHandler}
                key={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <Footer activeRoute={"home"} />
    </>
  );
};

export default Home;
