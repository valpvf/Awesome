import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";

export default function CreatePostsScreen({ navigation }) {
  const initialState = {
    photoDescription: "",
    location: "",
    photo: "",
  };
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [errorMsg, setErrorMsg] = useState(null);
  const [state, setState] = useState(initialState);
  console.log("state", state);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
    (async () => {
      let loc = await Location.requestForegroundPermissionsAsync();
      if (loc.status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      state.location === "" &&
        setState((prev) => ({ ...prev, location: location.coords }));
    })();
  }, []);

  // let text = "Waiting..";
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (state.location) {
  //   text = JSON.stringify(state.location);
  // }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {/* {text && <Text style={styles.paragraph}>{text}</Text>} */}
      {!state.photo && (
        <Camera style={styles.camera} type={type} ref={setCameraRef}>
          <View style={styles.photoView}>
            <TouchableOpacity
              style={styles.flipContainer}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  marginBottom: 10,
                  color: "white",
                }}
              >
                Flip
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={async () => {
                if (cameraRef) {
                  const refPhoto = await cameraRef.takePictureAsync();
                  setState((prev) => ({ ...prev, photo: refPhoto }));
                  // const { uri } = refPhoto;
                  // await MediaLibrary.createAssetAsync(uri);
                }
              }}
            >
              <View style={styles.takePhotoOut}>
                <View style={styles.takePhotoInner}></View>
              </View>
            </TouchableOpacity>
          </View>
        </Camera>
      )}
      {state.photo && (
        <View style={styles.wrap}>
          <View style={styles.takePhotoContainer}>
            <Image
              source={state.photo}
              style={{ height: 240, width: "auto", borderRadius: 8 }}
            />
            <TouchableOpacity style={styles.snap}>
              <MaterialIcons
                name="camera-alt"
                size={24}
                color="#BDBDBD"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.wrapTitle}>Редагувати фото</Text>
          <View
            style={{ width: "100%" }}
            // onFocus={() => setIsKeyboard(true)}
            // onBlur={() => setIsKeyboard(false)}
            // onPress={() => setIsKeyboard(false)}
          >
            <TextInput
              style={styles.input}
              placeholder="Назва..."
              value={state.photoDescription}
              onChangeText={(value) =>
                setState((prev) => ({
                  ...prev,
                  photoDescription: value,
                }))
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Місцевість..."
              value={state.location.latitude}
              onChangeText={(value) =>
                setState((prev) => ({
                  ...prev,
                  location: value,
                }))
              }
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btnReg}
            onPress={() => {
              navigation.navigate("Публікації", state);
              setState(initialState);
            }}
          >
            <Text style={styles.btnTitle}>Опубліковати</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  camera: { flex: 1 },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },

  flipContainer: {
    flex: 0.1,
    alignSelf: "flex-end",
  },

  button: { alignSelf: "center" },

  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 50,
  },
  wrap: {
    marginHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 22,
  },
  takePhotoContainer: {
    // flex: 1,
    // justifyContent: "flex-end",
    // marginTop: 32,
    // left: 0,
    width: "auto",
    height: 240,
    objectFit: "cover",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000",
    // background: "#F6F6F6",
  },
  snap: {
    position: "absolute",
    top: "40%",
    left: "40%",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.30);",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapTitle: {
    marginTop: 8,
    marginBottom: 32,
    color: "#BDBDBD",
    fontSize: 16,
  },
  input: {
    marginBottom: 16,
    height: 50,
    paddingVertical: 16,
    color: "#BDBDBD",
    fontFamily: "Roboto",
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
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
});
