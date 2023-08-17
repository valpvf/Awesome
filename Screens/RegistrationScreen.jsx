import {
  Button,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import image from "../assets/images/photobg.jpg";

export default function RegistrationScreen() {
  // console.log(Platform.OS);
  return (
    <>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.wrap}>
          <View style={styles.avatar}></View>
          <Text style={styles.title}>Реєстрація</Text>
          <View style={{ width: "100%" }}>
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Логін"
              // keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Адреса електронної пошти"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Пароль"
              secureTextEntry={true}
              // keyboardType="numeric"
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnReg}
            >
              <Text style={styles.btnTitle}>Зареєстуватися</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              // style={styles.btnReg}
            >
              <Text style={styles.btnAcount}>
                Вже є акаунт? Увійти
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  wrap: {
    marginHorizontal: 16,
    width: "100%",
    height: "auto",
    backgroundColor: "#ffffff",
    // paddingTop: 32,
    paddingBottom: 78,
    alignItems: "center",
    justifyContent: "flex-end",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatar: {
    top: -60,
    width: 120,
    height: 120,
    position: "absolute",
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  title: {
    marginBottom: 23,
    marginTop: 92,
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    // fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 0.3,
  },
  input: {
    marginHorizontal: 16,
    marginBottom: 16,
    height: 50,
    padding: 16,
    // width: "100%",
    color: "#BDBDBD",
    fontFamily: "Roboto",
    fontSize: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  btnReg: {
    height: 51,
    marginTop: 27,
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 16,
  },
  btnAcount: {
    color: "#1B4371",
    fontFamily: "Roboto",
    fontSize: 16,
    textAlign: "center",
  },
});
