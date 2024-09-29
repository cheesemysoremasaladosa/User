import { PartnersWithLoc, TypeLocation } from "@/types/types";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";

import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  SectionList,
  Pressable,
} from "react-native";
import { Link, router } from "expo-router";

export default function ListPartners({
  partner,
}: {
  partner: PartnersWithLoc[];
}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={partner}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              router.push({
                pathname: "/vendor/[cartID]",
                params: { cartID: item.partner.id },
              });
            }}
          >
            <View style={styles.itemContainer}>
              <Entypo name="shop" size={24} color="green" />
              <Text style={styles.itemText}>{item.partner.name}</Text>
            </View>
          </Pressable>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // backgroundColor: "#F5F5DC", // Soft Beige
    paddingTop: 20,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: "row", // Align items horizontally
    alignItems: "center", // Center items vertically
    backgroundColor: "#fff", // White background for the list item
    padding: 15,
    marginVertical: 8,
    borderRadius: 15, // Rounded corners
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2, // Slight shadow opacity
    shadowRadius: 4.65,
    elevation: 5, // Elevation for Android shadow
  },
  itemText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 10, // Space between icon and text
  },
  separator: {
    height: 10, // Space between items
  },
  icon: {
    // Optional styling for the icon
  },
});
