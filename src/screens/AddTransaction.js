import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { BG_COLOR, COLOR_BLACK, COLOR_WHITE } from "../../constants/colors";
import { monthsArray } from "../../constants/arrayLists";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Items from "../components/AddTransaction/Items";
import DatePicker from "../components/AddTransaction/DatePicker";
import SubCategory from "../components/AddTransaction/SubCategory";
import Category from "../components/AddTransaction/Category";
import { useSelector } from "react-redux";

const AddTransaction = ({ route, navigation }) => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [subCategoryIndex, setSubCategoryIndex] = useState(0);
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const [transactionData, setTransactionData] = useState([]);

  const { categories, subCategories } = useSelector(
    (state) => state.categoryReducer.category
  );


  const findExistingTranscationRecords = async () => {
    const transactionRecords = await AsyncStorage.getItem("transactionRecords");
    if (transactionRecords !== null)
      setTransactionData(JSON.parse(transactionRecords));
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    const tempDate = new Date(currentDate);
    const dateString =
      tempDate.getDate() +
      " " +
      monthsArray[tempDate.getMonth()] +
      " " +
      tempDate.getFullYear();

    setDate(dateString);
  };

  const onSubmit = async () => {
    const transaction = {
      id: Date.now(),
      date: date,
      amount: amount,
      category: categories[categoryIndex].title,
      subcategory: subCategories[categoryIndex][subCategoryIndex],
      description: description,
    };

    const updatedTransaction = [...transactionData, transaction];
    setTransactionData(updatedTransaction);
    await AsyncStorage.setItem(
      "transactionRecords",
      JSON.stringify(updatedTransaction)
    );

    alert("Transaction added successfully");
    console.log(updatedTransaction);
    onDateChange("", new Date());
  };

  useEffect(() => {
    findExistingTranscationRecords();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/close.png")}
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
          imageUrl={require("../../assets/icons/notes.png")}
          title={"Notes"}
          text={false}
          description={description}
          setDescription={setDescription}
        />
        <TouchableOpacity onPress={() => onSubmit()}>
          <Image
            source={require("../../assets/icons/next.png")}
            style={styles.submit}
          />
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
    alignSelf: "center",
  },
});
