import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { BG_COLOR, COLOR_BLACK, COLOR_WHITE } from "../constants/colors";
import Items from "./components/AddEntry/Items";
import DatePicker from "./components/AddEntry/DatePicker";
import Category from "./components/AddEntry/Category";
import SubCategory from "./components/AddEntry/SubCategory";

const AddTransaction = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [subCategoryIndex, setSubCategoryIndex] = useState(0);
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/icons/close.png")}
            style={styles.closeIcon}
          />
        </TouchableOpacity>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Add Transcation</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.rupeeSymbol}>₹</Text>
          <TextInput
            style={styles.enterAmount}
            placeholder="0"
            onChange={(e) => setAmount(e.nativeEvent.text)}
            value={amount.toString()}
            keyboardType="number-pad"
            maxLength={7}
          />
        </View>
        <Category
          categoryIndex={categoryIndex}
          setCategoryIndex={setCategoryIndex}
          setSubCategoryIndex={setSubCategoryIndex}
        />
        <SubCategory
          categoryIndex={categoryIndex}
          setSubCategoryIndex={setSubCategoryIndex}
          subCategoryIndex={subCategoryIndex}
        />
        <DatePicker date={date} setDate={setDate} />
        <Items
          imageUrl={require("../assets/icons/notes.png")}
          title={"Notes"}
          text={false}
        />
        <TouchableOpacity>
          <Image source={require("../assets/icons/next.png")} style={styles.submit}/>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default AddTransaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  subContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: 30,
    backgroundColor: COLOR_WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
  },
  closeIcon: {
    width: 16,
    height: 16,
    position: "absolute",
    top: 20,
    left: 20,
  },
  amountContainer: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 25,
    alignContent: "center",
    justifyContent: "center",
  },
  rupeeSymbol: {
    fontSize: 60,
    color: BG_COLOR,
    fontWeight: "bold",
  },
  enterAmount: {
    fontSize: 60,
    color: COLOR_BLACK,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  submit: {
    width: 70,
    height: 70,
    marginTop: 70,
    alignSelf: 'center'
  }
});
