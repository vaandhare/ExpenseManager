import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { categoryArray } from "../../../constants/arrayLists";
import { BG_COLOR, COLOR_GREY } from "../../../constants/colors";

const ItemViewTransaction = ({ item }) => {
  return (
    <View style={styles.parentContainer}>
      <View>
        {categoryArray.map((child, index) => {
          if (child.title === item.category) {
            return <Image source={child.image} style={styles.icon} />;
          }
          // else {
          //   return (
          //     <Image
          //       source={require("../../../assets/icons/categories.png")}
          //       style={styles.icon}
          //     />
          //   );
          // }
        })}
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.category}>{item.category} | </Text>
          <Text style={styles.subcategory}>{item.subcategory}</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Text style={styles.amount}>{item.amount}</Text>
    </View>
  );
};

export default ItemViewTransaction;

const styles = StyleSheet.create({
  parentContainer: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    justifyContent: "space-between",
  },
  dataContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 20,
  },
  titleRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  icon: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
  category: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
  subcategory: {
    fontSize: 18,
    color: COLOR_GREY,
    fontWeight: "bold",
    alignSelf: "center",
  },
  description: {
    fontSize: 14,
    paddingVertical: 2,
    fontStyle: "italic",
    flexWrap: "wrap",
  },
  amount: {
    color: BG_COLOR,
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
});
