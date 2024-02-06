import { StyleSheet } from "react-native";

export function useStyles() {
  return {
    styles: StyleSheet.create({
      anchorLabel: {
        textAlign: "left",
        // color: colors.color01,
        paddingVertical: 6,
        fontWeight: "400",
        flexShrink: 1,
      },
      anchorContent: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
      },
      anchor: {
        borderRadius: 8,
        marginVertical: 8,
        // backgroundColor: colors.color12,
      },
    }),
  };
}
