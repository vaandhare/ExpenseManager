import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Items from "./Items";
import { BG_COLOR, COLOR_BLACK, COLOR_GREY, COLOR_LIGHT_GREY } from "../../../constants/colors";
import { useSelector } from "react-redux";

const SubCategory = ({
  categoryIndex,
  subCategoryIndex,
  setSubCategoryIndex,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  
  const { subCategories } = useSelector(
    (state) => state.categoryReducer.category
  );

  const subCategoryModal = () => {
    return (
      <>
        <View style={styles.modelConatiner}>
          <View style={styles.modelCheckoutContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.header}>Select Sub-Category</Text>
            </View>

            <FlatList
            contentContainerStyle={styles.flatListContainer}
              keyExtractor={(item, index) => index.toString()}
              data={subCategories[categoryIndex]}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  key={index}
                  style={styles.subCategoryList}
                  onPress={() => {
                    setSubCategoryIndex(index);
                    setModalVisible(false);
                  }}
                >
                  <Text style={index===subCategoryIndex ? styles.subCategorySelected : styles.subCategoryTitle}>{item}</Text>
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
        {subCategoryModal()}
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Items
          imageUrl={require("../../../assets/icons/categories.png")}
          title={subCategories[categoryIndex][subCategoryIndex]}
          text={true}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SubCategory;

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
    height: 250,
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
  flatListContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      maxWidth: '100%',
      maxHeight: 230,
  },
  subCategoryTitle: {
    fontSize: 16,
    paddingVertical: 7,
    marginHorizontal: 5,
    marginVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLOR_GREY,
    backgroundColor: COLOR_LIGHT_GREY,
  },
  subCategorySelected: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLOR_BLACK,
    backgroundColor: BG_COLOR,
    paddingVertical: 7,
    marginHorizontal: 5,
    marginVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLOR_BLACK
  }
});
