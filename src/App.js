import React from "react";
import {
  createAppContainer
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Root } from "native-base";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import HomeTabNavigation from "./screens/Home/tabNavigation";
import SideBar from "./screens/Sidebar";
import UpdatePost from "./screens/UpdatePost";
import ChatScreen from "./screens/Chat/ChatScreen";
import Profile from "./screens/Profile";
import NearbyFriends from "./screens/NearbyFriends";
import BlankPage from "./screens/BlankPage";

const Drawer = createDrawerNavigator(
  {
    HomeTabNavigation: { screen: HomeTabNavigation },
    Profile: { screen: Profile },
    NearbyFriends: { screen: NearbyFriends },
    BlankPage: { screen: BlankPage }
  },
  {
    initialRouteName: "HomeTabNavigation",
    contentComponent: props => <SideBar {...props} />
  }
);

const App = createStackNavigator(
  {
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    Drawer: { screen: Drawer },
    UpdatePost: { screen: UpdatePost },
    ChatScreen: { screen: ChatScreen }
  },
  {
    index: 0,
    initialRouteName: "Login",
    headerMode: "none"
  }
);
const AppContainer = createAppContainer(App);
export default () =>
  <Root>
    <AppContainer />
  </Root>;
