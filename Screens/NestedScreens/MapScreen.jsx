import MapView from "react-native-maps";

export default MapScreen = ({ route }) => {
  console.log("route", route);
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        location={route.location.coords}
      ></MapView>
      ;
    </View>
  );
};
