import React from "react";
import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultPostsScreen from "../NestedScreens/DefaultPostsScreen";
import MapScreen from "../NestedScreens/MapScreen";
import CommentsScreen from "../NestedScreens/CommentsScreen";

const NestedScreen = createStackNavigator();

export default PostScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultPostsScreen}
      />
      <NestedScreen.Screen name="Мапа" component={MapScreen} />
      <NestedScreen.Screen
        name="Коментарі"
        component={CommentsScreen}
      />
    </NestedScreen.Navigator>
  );
};
