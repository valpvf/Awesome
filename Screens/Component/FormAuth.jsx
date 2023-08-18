import { useState } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  // Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import image from "../../assets/images/photobg.jpg";
import { Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

export default function FormAuth({ title, login, btn1, btn2 }) {
  // console.log(Platform.OS);
  const [isKeyboard, setIsKeyboard] = useState(false);

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.image}
    >
      <KeyboardAvoidingView
        style={{
          width: "100%",
          marginHorizontal: 16,
          // onClose={() => }
        }}
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          // onFocus={() => setIsKeyboard(false)}
        >
          <View
            style={{
              ...styles.wrap,
              paddingBottom: isKeyboard ? 16 : 0,
            }}
            // onPress={}
          >
            {login && (
              <>
                <View style={styles.avatar}></View>
                <View style={{ height: 60 }} />
              </>
            )}
            <Text style={styles.title}>{title}</Text>
            <View
              style={{ width: "100%" }}
              onFocus={() => setIsKeyboard(true)}
              onBlur={() => setIsKeyboard(false)}
            >
              {login && (
                <TextInput
                  style={styles.input}
                  // onChangeText={onChangeNumber}
                  // value={number}
                  placeholder="Логін"
                />
              )}
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
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      {!isKeyboard && (
        <View style={{ width: "100%", backgroundColor: "#ffffff" }}>
          <TouchableOpacity activeOpacity={0.8} style={styles.btnReg}>
            <Text style={styles.btnTitle}>{btn1}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.btnAcount}>{btn2}</Text>
          </TouchableOpacity>
          {!login && <View style={{ height: 66 }} />}
        </View>
      )}
    </ImageBackground>
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
    // marginHorizontal: 16,
    width: "100%",
    backgroundColor: "#ffffff",
    // paddingBottom: 78,
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
    marginTop: 32,
    marginBottom: 23,
    color: "#212121",
    textAlign: "center",
    fontFamily: "RobotoMedium",
    fontSize: 30,
    letterSpacing: 0.3,
  },
  input: {
    marginHorizontal: 16,
    marginBottom: 16,
    height: 50,
    padding: 16,
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
    marginBottom: 78,
    color: "#1B4371",
    fontFamily: "Roboto",
    fontSize: 16,
    textAlign: "center",
  },
});
