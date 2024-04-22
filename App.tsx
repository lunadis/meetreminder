import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import getRoutes from "./src/screens/routing";

export default function App() {
  const stack = createNativeStackNavigator();
  const routes = getRoutes();
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <stack.Navigator>
            {routes.map((route) => {
              return (
                <stack.Screen
                  name={route.title}
                  component={route.screen}
                  options={route.navigationOptions}
                />
              );
            })}
          </stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
