import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
import { forwardRef, useCallback, useMemo } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export type Ref = BottomSheetModal;
export const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  const { dismiss } = useBottomSheetModal();
  return (
    <BottomSheetModal
      snapPoints={snapPoints}
      ref={ref}
      overDragResistanceFactor={0}
      handleIndicatorStyle={{ display: "none" }}
      backgroundStyle={{ backgroundColor: Colors.lightGrey, borderRadius: 0 }}
      style={{ backgroundColor: Colors.lightGrey, borderRadius: 0 }}>
      <View style={styles.contentContainer}>
        <View style={styles.toggle}>
          <TouchableOpacity style={styles.toggleActive}>
            <Text style={{ color: "white", fontWeight: "700" }}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleInActive}>
            <Text style={{ color: Colors.primary }}>Pickup</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subHeader}>Your Location</Text>
        <Link asChild href={"/(modal)/location-search"}>
          <TouchableOpacity>
            <View style={styles.item}>
              <Ionicons
                name="location-outline"
                size={20}
                color={Colors.medium}
              />
              <Text style={{ flex: 1 }}> current location</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={Colors.primary}
              />
            </View>
          </TouchableOpacity>
        </Link>
        <Text style={styles.subHeader}>Arrival Time</Text>
        <Link asChild href={"/"}>
          <TouchableOpacity>
            <View style={styles.item}>
              <Ionicons
                name="stopwatch-outline"
                size={20}
                color={Colors.medium}
              />
              <Text style={{ flex: 1 }}> Now</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={Colors.primary}
              />
            </View>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity onPress={() => dismiss()} style={styles.button}>
          <Text style={styles.buttonTxt}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
  },
  buttonTxt: {
    color: "#fff",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 8,
    margin: 16,
    alignItems: "center",
  },
  toggle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginBottom: 32,
  },
  toggleActive: {
    backgroundColor: Colors.primary,
    borderRadius: 32,
    padding: 8,
    paddingHorizontal: 16,
  },
  toggleInActive: {
    // backgroundColor: Colors.primary,
    borderRadius: 32,
    padding: 8,
    paddingHorizontal: 16,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "600",
    margin: 16,
  },
  item: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",

    backgroundColor: "#fff",
    padding: 16,
    borderColor: Colors.grey,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
});
