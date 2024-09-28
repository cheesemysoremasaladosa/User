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

const DATA = [
  {
    id: "0",
    title: "Zeroth Item",
  },
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "4",
    title: "Third Item",
  },
  {
    id: "5",
    title: "Third Item",
  },
  {
    id: "6",
    title: "Third Item",
  },
  {
    id: "7",
    title: "Third Item",
  },
  {
    id: "8",
    title: "Third Item",
  },
  {
    id: "9",
    title: "Third Item",
  },
];

const Item = ({ title, id }: { title: string; id: string }) => (
  <View style={styles.item}>
    <Image style={styles.image} source={require("@/asstes/item1.jpg")} />
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{id}</Text>
    </View>
    <View></View>
  </View>
);

export function ItemCatalog() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Item title={item.title} id={item.id} />}
        keyExtractor={(item) => item.id}
        // refreshing = {false}
      />
    </SafeAreaView>
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
