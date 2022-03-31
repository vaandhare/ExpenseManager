import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { useDispatch } from "react-redux";

const ItemCategoryEdit = ({ item, index }) => {
  const dispatch = useDispatch();

  const deleteCategory = () => {
    Alert.alert(
      `Deleting ${item.title}`,
      `Are you sure you want to delete ${item.title} category?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            dispatch({
              type: "REMOVE_CATEGORY",
              payload: {
                item: item,
                index: index,
              },
            });
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.parentContainer}>
      <Image source={item.image} style={styles.icon} />
      <Text style={styles.title}>{item.title}</Text>
      <Image
        source={require("../../../assets/icons/edit.png")}
        style={styles.editIcon}
      />
      <TouchableOpacity
        style={styles.removeContainer}
        onPress={() => deleteCategory()}
      >
        <Image
          source={require("../../../assets/icons/remove.png")}
          style={styles.removeIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ItemCategoryEdit;

const styles = StyleSheet.create({
  parentContainer: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    justifyContent: "space-between",
  },
  icon: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    alignSelf: "center",
  },
  editIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 15,
    alignSelf: "center",
  },
  removeContainer: { alignSelf: "center" },
  removeIcon: {
    width: 20,
    height: 20,
  },
});
