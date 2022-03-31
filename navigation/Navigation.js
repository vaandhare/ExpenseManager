import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddTransaction from "../src/screens/AddTransaction";
import ViewTransactions from "../src/screens/ViewTransactions";
import EditCategories from "../src/screens/EditCategories";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../redux/Store";

const store = configureStore();

const Navigation = () => {
  const stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <stack.Navigator
          screenOptions={screenOptions}
          initialRouteName="ViewTransaction"
        >
          <stack.Screen name="AddTransaction" component={AddTransaction} />
          <stack.Screen name="ViewTransaction" component={ViewTransactions} />
          <stack.Screen name="EditCategories" component={EditCategories} />
        </stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default Navigation;
