import {
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchSection}>
        <View style={styles.searchField}>
          <Ionicons name="search-outline" size={20} color={Colors.medium} />
          <TextInput placeholder="Restaurant , Dishes" style={styles.input} />
        </View>
        <Link href={"/"} asChild>
          <TouchableOpacity style={styles.optionButton}>
            <Ionicons name="options-outline" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const CustomHeader = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require("@/assets/bike.jpg")} style={styles.bike} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Delivery . Now</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.subTitle}>Gaziantep</Text>
            <Ionicons
              name="chevron-down-outline"
              size={16}
              color={Colors.primary}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  bike: {
    width: 30,
    height: 30,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 0,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  searchBarContainer: {
    height: 60,
  },
  optionButton: {
    padding: 10,
    borderRadius: 50,
  },
  searchSection: {
    gap: 10,
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  searchField: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  input: {
    padding: 10,
    color: Colors.mediumDark,
  },
});

export default CustomHeader;
