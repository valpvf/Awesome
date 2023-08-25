import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useRoute } from "./router";

export default function App() {
  const routing = useRoute({ a: 123 });
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Regular.otf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.otf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
