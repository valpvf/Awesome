import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getHeaderTitle } from "@react-navigation/elements";

import RegistrationScreen from "./Screens/Auth/RegistrationScreen";
import LoginScreen from "./Screens/Auth/LoginScreen";
import PostsScreen from "./Screens/Main/PostsScreen";
import ProfileScreen from "./Screens/Main/ProfileScreen";
import CreatePostsScreen from "./Screens/Main/CreatePostsScreen";

import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { Button, Text } from "react-native";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: 9,
          borderBlockColor: "rgba(0, 0, 0, 0.3)",
          borderTopWidth: 0.5,
          backgroundColor: "#ffffff",
        },
        // title: { marginHorizontal: "auto" },
      }}
    >
      <MainTab.Screen
        name="Публікації"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="appstore-o" size={size} color={color} />
          ),
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);

            return (
              <>
                <Text value="" style={options.headerStyle}>
                  Публікації
                </Text>
                <Ionicons
                  style={{ position: "absolute", top: 54, right: 10 }}
                  name="log-out-outline"
                  size={24}
                  color="black"
                />
                {/*  */}
              </>
            );
          },
          // headerStyle: {
          //   height: 54, // Specify the height of your custom header
          // },
          headerStyle: {
            // left: 150,
            flexDirection: "row",
            // width: 150,
            justifyContent: "space-between",
            marginRight: 0,
            height: 84,
            backgroundColor: "#ffffff",
          },
          // headerRight: () => (
          //   <Button
          //     tabBarStyle={{
          //       flexDirection: "row",
          //       width: 50,
          //       jastifyContent: "space-between",
          //       marginRight: 50,
          //     }}
          //     type="clear"
          //     title=""
          //     icon={
          //       <Ionicons
          //         name="log-out-outline"
          //         size={24}
          //         color="black"
          //       />
          //     }
          //   />
          // ),
        }}
      />
      <MainTab.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="plus" size={size} color={"#ffffff"} />
          ),
          tabBarItemStyle: {
            borderRadius: 20,
            backgroundColor: "#FF6C00",
            maxWidth: 70,
            maxHeight: 40,
            // marginTop: 9,
          },
        }}
        // screenOptions={{
        //   tabBarStyle: { borderRadius: 20 },
        // }}
      />
      <MainTab.Screen
        name="Профііль"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
