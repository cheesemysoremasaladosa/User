import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const FlatListBasic = () => {
  const data = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
    { id: "4", title: "Item 4" },
    { id: "5", title: "Item 5" },
    { id: "6", title: "Item 6" },
    { id: "7", title: "Item 7" },
    { id: "8", title: "Item 8" },
    { id: "9", title: "Item 9" },
    { id: "10", title: "Item 10" },
  ];

  const renderItem = ({ item }: any) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={true}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "white",
  },
  text: {
    fontSize: 16,
  },
});

export default FlatListBasic;
