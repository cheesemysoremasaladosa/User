import { PartnersWithLoc, TypeLocation } from "@/types/types";
import React from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import { Link, router } from "expo-router";

const { width } = Dimensions.get("window");

export default function ListPartners({
  partner,
}: {
  partner: PartnersWithLoc[];
}) {
  const renderRating = (rating: number = 4.5) => {
    return (
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <MaterialIcons
            key={star}
            name={star <= rating ? "star" : "star-border"}
            size={16}
            color="#FFD700"
          />
        ))}
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
    );
  };

  return (
    // <View style={styles.container}>

    <FlatList
      data={partner}
      nestedScrollEnabled
      scrollEnabled
      // horizontal
      renderItem={({ item }) => (
        <Pressable
          style={({ pressed }) => [
            styles.cardContainer,
            pressed && styles.pressedCard,
          ]}
          onPress={() => {
            router.push({
              pathname: "/(vendor)/[cartID]",
              params: {
                cartID: item.partner.id,
                vendorName: item.partner.name,
              },
            });
          }}
        >
          <Image
            source={{
              uri: "https://via.placeholder.com/150?text=bhajiwala",
            }}
            style={styles.image}
          />
          <View style={styles.infoContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>{item.partner.name}</Text>
              <View style={styles.badgeContainer}>
                <Text style={styles.badge}>Open</Text>
              </View>
            </View>

            <View style={styles.detailsContainer}>
              <View style={styles.iconTextContainer}>
                <Entypo name="location-pin" size={16} color="#666" />
                <Text style={styles.locationText}>
                  {Math.round(item.distance * 1000) + "m" ||
                    "Location not available"}
                </Text>
              </View>

              <View style={styles.iconTextContainer}>
                <Entypo name="clock" size={16} color="#666" />
                <Text style={styles.detailText}>Open until 10 PM</Text>
              </View>

              {renderRating(4.5)}
            </View>
          </View>
        </Pressable>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      contentContainerStyle={styles.listContent}
    />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  listContent: {
    padding: 16,
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pressedCard: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1a1a1a",
    flex: 1,
  },
  badgeContainer: {
    backgroundColor: "#e6f9ed",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badge: {
    color: "#00b341",
    fontSize: 12,
    fontWeight: "600",
  },
  detailsContainer: {
    gap: 8,
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  locationText: {
    color: "#666",
    fontSize: 14,
    flex: 1,
  },
  detailText: {
    color: "#666",
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    color: "#666",
    fontSize: 14,
    marginLeft: 4,
  },
  separator: {
    height: 16,
  },
});
