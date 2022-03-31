import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Items from "./Items";
import { COLOR_BLACK } from "../../../constants/colors";
import { useSelector } from "react-redux";

const Category = ({ categoryIndex, setCategoryIndex, setSubCategoryIndex }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const { categories } = useSelector(
    (state) => state.categoryReducer.category
  );

  const categoryModal = () => {
    return (
      <>
        <View style={styles.modelConatiner}>
          <View style={styles.modelCheckoutContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.header}>Select Category</Text>
            </View>

            <FlatList
              numColumns={3}
              keyExtractor={(item, index) => index.toString()}
              data={categories}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  key={index}
                  style={styles.categoryList}
                  onPress={() => {
                    setCategoryIndex(index);
                    setSubCategoryIndex(0);
                    setModalVisible(false);
                  }}
                >
                  <Image style={styles.categoryIcon} source={item.image} />
                  <Text style={styles.categoryTitle}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </>
    );
  };

  return (
    <View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {categoryModal()}
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Items
          imageUrl={categories[categoryIndex].image}
          title={categories[categoryIndex].title}
          text={true}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  modelConatiner: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modelCheckoutContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
    height: 350,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
  },
  categoryList: { alignItems: "center", width: "33%", padding: 10 },
  categoryTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLOR_BLACK,
  },
  categoryIcon: {
    width: 30,
    height: 30,
  },
});
