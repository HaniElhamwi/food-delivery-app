import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { categories } from "@/assets/home";

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => (
        <View style={styles.categoryCard}>
          <Image
            source={category.image}
            resizeMethod="auto"
            style={{ height: 80, width: 100 }}
          />
          <Text style={styles.categoryText}>{category.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    backgroundColor: "#fff",
    margin: 10,
    height: 100,
    width: 100,
    borderRadius: 10,
    marginEnd: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Categories;
