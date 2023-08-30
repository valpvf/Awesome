import { Text, View } from "react-native";
import MapView from "react-native-maps";

export default MapScreen = ({ route }) => {
  console.log("route");
  return (
    <View style={{ flex: 1 }}>
      <Text>Ya zdes</Text>
      <MapView style={{ flex: 1 }} region={route.location}></MapView>
    </View>
  );
};
