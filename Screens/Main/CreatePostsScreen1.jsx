import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Camera } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";

const CreatePostsScreen = () => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo);
  };
  setPhoto((prev) => (prev = ""));
  console.log("photo", photo);
  return (
    <View style={styles.container}>
      {!photo && (
        <Camera style={styles.camera} ref={setCamera}>
          <TouchableOpacity onPress={takePhoto} style={styles.snap}>
            <MaterialIcons
              name="camera-alt"
              size={24}
              color="#BDBDBD"
            />
          </TouchableOpacity>
        </Camera>
      )}
      {/* {photo && (
        <View style={styles.takePhotoContainer}>
          <Image
            source={photo}
            style={{ height: 240, width: "auto", borderRadius: 8 }}
          />
        </View>
      )} */}
    </View>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    marginHorizontal: 16,
    // alignItems: "center",
  },
  camera: {
    height: 240,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  snap: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  takePhotoContainer: {
    // position: "absolute",
    marginTop: 32,
    // left: 0,
    width: "auto",
    height: 240,
    objectFit: "cover",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000",
    background: "#F6F6F6",
  },
});
