import { StyleSheet } from "react-native";

export function useStyles() {
  return {
    // colors,
    styles: StyleSheet.create({
      container: {
        flexDirection: "row",
        alignSelf: "flex-end",
        marginRight: -16,
        justifyContent: "center",
        alignItems: "center",
      },
    }),
  };
}
