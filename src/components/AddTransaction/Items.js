import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import React from "react";
import { COLOR_GREY } from "../../../constants/colors";

const Items = ({ imageUrl, title, text, description, setDescription }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={imageUrl} style={styles.icon} />
        {text ? (
          <Text style={styles.title}>{title}</Text>
        ) : (
          <TextInput
            style={styles.title}
            placeholder={title}
            value={description}
            onChange={(e) => setDescription(e.nativeEvent.text)}
            placeholderTextColor={COLOR_GREY}
            multiline={true}
          />
        )}
      </View>
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  iconContainer: {
    padding: 10,
    flexDirection: "row",
    marginHorizontal: 50,
    marginTop: 5,
  },
  icon: {
    width: 25,
    height: 25,
    alignSelf: "center",
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_GREY,
  },
});
