import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const LocationSearch = () => {
  const navigatoion = useNavigation();
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });
  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="Search or move to the map"
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          const point = details?.geometry?.location;
          if (point) {
            setLocation({
              latitude: point.lat,
              longitude: point.lng,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02,
            });
          }
        }}
        query={{
          key: "AIzaSyCutjTcOlTEp4CqEH76pnTrzj4Qh3QHQ48",
          language: "en",
        }}
        styles={{
          container: {
            flex: 0,
          },
        }}
      />
      <MapView style={styles.map} region={location} />
      <View style={styles.absoluteBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigatoion.goBack()}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  absoluteBox: {
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    margin: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
