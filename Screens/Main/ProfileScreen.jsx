import { React } from "react";
import { StyleSheet, Text, View } from "react-native";
import Post from "../../Component/Post";

const ProfileScreen = () => {
  return (
    <Post />
    // <View style={styles.container}>
    //   <Text>ProfileScreen</Text>
    // </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
