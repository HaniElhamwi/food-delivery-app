import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "expo-router";

const Filter = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Filter</Text>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.fullButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.footerText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.lightGrey,
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 100,
    bottom: 0,
    backgroundColor: "#fff",
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -10,
    },
  },
  fullButton: {
    backgroundColor: Colors.primary,
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
  },
  footerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Filter;
