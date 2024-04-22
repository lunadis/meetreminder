import { Button, StyleSheet, Text, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate("MealConfiguration")}
    />
  );
}
