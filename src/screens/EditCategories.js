import { StyleSheet, FlatList, View, SafeAreaView, Text } from "react-native";
import React from "react";
import ItemCategoryEdit from "../components/EditCategories/ItemCategoryEdit";
import { useSelector } from "react-redux";

const EditCategories = ({ route, navigation }) => {

  const { categories, subCategories } = useSelector(
    (state) => state.categoryReducer.category
  );

  return (
    <SafeAreaView style={styles.parentContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Categories & Sub-Categories</Text>
      </View>
      <FlatList
        data={categories}
        showsVerticalScrollIndicator={false}
        style={styles.flatListContainer}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <ItemCategoryEdit
            item={item}
            index={index}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default EditCategories;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    paddingTop: 50,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
  },
  flatListContainer: {
    marginHorizontal: 10,
  },
});
