import {
  StyleSheet,
  SectionList,
  View,
  SafeAreaView,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import ItemViewTransaction from "../components/ViewTransaction/ItemViewTransaction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLOR_GREY } from "../../constants/colors";

const ViewTransactions = () => {
  const [transactionData, setTransactionData] = useState([]);

  const findExistingTranscationRecords = async () => {
    const transactionRecords = await AsyncStorage.getItem("transactionRecords");
    if (transactionRecords !== null)
      setTransactionData(JSON.parse(transactionRecords));
    else setTransactionData(["Error"]);
  };

  useEffect(() => {
    findExistingTranscationRecords();
  }, []);

  const DATA = Object.values(
    transactionData.reduce((acc, item) => {
      if (!acc[item.date])
        acc[item.date] = {
          title: item.date,
          data: [],
        };
      acc[item.date].data.push(item);
      return acc;
    }, {})
  );

  return (
    <SafeAreaView style={styles.parentContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>View Transactions</Text>
      </View>
      <SectionList
        sections={DATA}
        showsVerticalScrollIndicator={false}
        style={styles.flatListContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => <ItemViewTransaction item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

export default ViewTransactions;

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
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: COLOR_GREY,
  },
});
