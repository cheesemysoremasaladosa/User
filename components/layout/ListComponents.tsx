import { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Button,
  Pressable,
} from "react-native";
import { Item } from "@/types/types";
import { ParallaxScrollView } from "../ParallaxScrollView";

const Cartitem = ({ title, price }: { title: string; price: string }) => {
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={require("@/asstes/item1.jpg")} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>₹{price}</Text>
      </View>
      <View></View>
    </View>
  );
};

export function ItemCatalog({
  items,
}: {
  items: { vegetableId: number; name: string; price: number }[];
}) {
  return (
    // <SafeAreaView style={styles.container}>
    <ParallaxScrollView
      headerBackgroundColor={{ dark: "white", light: "black" }}
      headerImage={
        <Image
          style={{ resizeMode: "cover" }}
          source={require("@/asstes/cart image.jpg")}
        />
      }
    >
      {/* <SafeAreaView style={styles.container}> */}
      <FlatList
        data={items}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Cartitem
            title={item.name.toString()}
            price={item.price.toString()}
          />
        )}
        keyExtractor={(item) => item.vegetableId.toString()}
        // refreshing = {false}
      />
      {/* </SafeAreaView> */}
    </ParallaxScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: "row",
    height: 100,
    borderRadius: 7,
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    marginVertical: 7,
    marginHorizontal: 10,
  },
  content: {
    width: 160,
  },
  title: {
    fontSize: 20,
  },
  image: {
    height: 80,
    width: 80,
    padding: 10,
    marginRight: 7,
  },
});
