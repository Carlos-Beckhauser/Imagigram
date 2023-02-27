import { StatusBar } from "expo-status-bar";
import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../components/auth/Landing";

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
