import { StyleSheet } from "react-native";

export function useStyles() {
  return {
    styles: StyleSheet.create({
      container: {
        flexDirection: "row",
        alignItems: "center",
      },
      label: {
        color: "black",
      },
      spacer: {
        height: 1.5,
        backgroundColor: "black",
      },
      input: {
        color: "black",
      },
      icon: {
        paddingRight: 16,
      },
      content: {
        flex: 1,
      },
    }),
  };
}
