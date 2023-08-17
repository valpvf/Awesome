import { useCallback } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Regular.otf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.otf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <RegistrationScreen
        title="Реєстрація"
        btn1="Зареєстуватися"
        btn2="Вже є акаунт? Увійти"
        login={true}
      />
      {/* <LoginScreen
        title="Увійти"
        btn1="Увійти"
        btn2="Немає акаунту? Зареєструватися"
        login={false}
      /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto",
    fontSize: 16,
  },
});
