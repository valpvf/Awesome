import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultPostsScreen from "../NestedScreens/DefaultPostsScreen";
import MapScreen from "../NestedScreens/MapScreen";
import CommentsScreen from "../NestedScreens/CommentsScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="Публікації"
        component={DefaultPostsScreen}
      />
      <NestedScreen.Screen
        name="Коментарі"
        component={CommentsScreen}
      />
      <NestedScreen.Screen name="Мапа" component={MapScreen} />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
