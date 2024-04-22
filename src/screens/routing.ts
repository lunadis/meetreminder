import Home from "./home";
import MealConfiguration from "./mealconfiguration";

export default function getRoutes() {
  return [
    {
      title: "Home",
      screen: Home,
      navigationOptions: {
        headerShown: true,
      },
    },
    {
      title: "MealConfiguration",
      screen: MealConfiguration,
    },
  ];
}
