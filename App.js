import React from "react";
import Setup from "./src/boot/setup";
import { YellowBox } from "react-native";

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    YellowBox.ignoreWarnings(["VirtualizedLists should never be nested"]);
    return <Setup />;
  }
}
