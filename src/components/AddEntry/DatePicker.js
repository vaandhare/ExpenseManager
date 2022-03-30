import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Items from "./Items";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { monthsArray } from "../../../constants/arrayLists";

const DatePicker = ({ date, setDate }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");

    const tempDate = new Date(currentDate);
    const dateString =
      tempDate.getDate() +
      " " +
      monthsArray[tempDate.getMonth()] +
      " " +
      tempDate.getFullYear();

    setDate(dateString);
  };

  useEffect(() => {
    onChange("", new Date());
  }, []);

  return (
    <>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <Items
          imageUrl={require("../../../assets/icons/calendar.png")}
          title={date}
          text={true}
        />
      </TouchableOpacity>

      {showDatePicker && (
        <RNDateTimePicker
          mode="date"
          value={new Date()}
          onChange={onChange}
          dateFormat="day month year"
        />
      )}
    </>
  );
};

export default DatePicker;

const styles = StyleSheet.create({});
