import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItem,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "@/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "expo-router";
import categories from "@/assets/filter.json";
import { Ionicons } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface Category {
  name: string;
  count: number;
  checked?: boolean;
}

const ItemBox = () => (
  <>
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="arrow-down-outline" size={20} color={Colors.medium} />
        <Text style={{ flex: 1 }}> Sort</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={22}
          color={Colors.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="fast-food-outline" size={20} color={Colors.medium} />
        <Text style={{ flex: 1 }}> Hygene rating</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={22}
          color={Colors.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="pricetag-outline" size={20} color={Colors.medium} />
        <Text style={{ flex: 1 }}> Offers</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={22}
          color={Colors.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="nutrition-outline" size={20} color={Colors.medium} />
        <Text style={{ flex: 1 }}> Dietary</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={22}
          color={Colors.primary}
        />
      </TouchableOpacity>
    </View>
    <Text style={styles.header}>Categories</Text>
  </>
);

const Filter = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState<Category[]>(categories);
  const [selected, setSelected] = useState<Category[]>([]);
  const flexWidth = useSharedValue(-1);

  const handleClearAll = () => {
    const updatedItems = items.map((i) => ({ ...i, checked: false }));
    setItems(updatedItems);
  };

  useEffect(() => {
    const hasSelected = selected.length > 0;
    const selectedItems = items.filter((i) => i.checked);
    const newSelected = selectedItems.length > 0;

    if (hasSelected !== newSelected) {
      flexWidth.value = withTiming(newSelected ? 150 : -1, { duration: 300 });
    }
    setSelected(selectedItems);
  }, [items]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: flexWidth.value, // Fix: Change 'widths' to 'width'
      opacity: flexWidth.value > 0 ? 1 : 0,
    };
  });

  const renderItem: ListRenderItem<Category> = ({ item, index }) => (
    <View style={styles.row}>
      <Text style={styles.itemTxt}>
        {item.name} ({item.count})
      </Text>
      <BouncyCheckbox
        fillColor={Colors.primary}
        unfillColor="#fff"
        text=""
        disableBuiltInState
        isChecked={item.checked}
        iconStyle={{ borderRadius: 2, borderColor: Colors.primary }}
        style={{ borderRadius: 2, borderColor: Colors.primary }}
        innerIconStyle={{ borderRadius: 2 }}
        onPress={() => {
          const isChecked = item?.checked;
          const updatedItems = items.map((i, idx) => {
            if (item.name === i.name) {
              return { ...i, checked: !isChecked };
            }
            return i;
          });

          setItems(updatedItems);
        }}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <Button
        title="Clear All"
        onPress={handleClearAll}
        color={Colors.primary}
      />
      <FlatList
        data={items}
        ListHeaderComponent={<ItemBox />}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
      <View style={styles.footer}>
        <View style={styles.btnContainer}>
          <Animated.View style={[animatedStyle, styles.outlineButton]}>
            <TouchableOpacity onPress={handleClearAll}>
              <Text style={styles.outlineButtonTxt}>Clear All</Text>
            </TouchableOpacity>
          </Animated.View>
          <TouchableOpacity
            style={{
              ...styles.fullButton,
              flex: 1,
              maxWidth: 300,
              width: "auto",
              minWidth: 200,
              alignItems: "center",
            }}
            onPress={() => navigation.goBack()}>
            <Text style={styles.footerText}>Done</Text>
          </TouchableOpacity>
        </View>
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
    flex: 1,
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 8,
  },
  footerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
  },
  item: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderColor: Colors.grey,
    borderBottomWidth: 1,
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  itemTxt: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  btnContainer: {
    flexDirection: "row",
    padding: 20,
  },
  outlineButton: {
    backgroundColor: "#fff",
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.primary,
    marginRight: 10,
  },
  outlineButtonTxt: {
    color: Colors.primary,
  },
});

export default Filter;
