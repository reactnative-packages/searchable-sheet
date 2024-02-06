import { Platform, StyleSheet, TextStyle } from "react-native";

export function useStyles() {
  return {
    styles: StyleSheet.create({
      wrapper: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
      container: {
        justifyContent: "space-evenly",
        backgroundColor: "white",
        maxHeight: "85%",
        height: "85%",
      },
      overlay: {
        height: "80%",
        width: "90%",
        borderRadius: 12,
      },
      titleContainer: {
        justifyContent: "center",
        backgroundColor: "#fff",
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        padding: 16,
        flexDirection: "row",
      },
      input: {
        backgroundColor: "white",
        paddingHorizontal: 16,
      },
      flatlist: {
        backgroundColor: "white",
      },
      bottomSpacer: {
        height: 32,
        backgroundColor: "white",
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
      },
      closeIcon: {
        margin: -10,
        marginLeft: 0,
      },
      separator: {
        ...(Platform.OS === "ios" && {
          height: 0.5,
          opacity: 0.2,
        }),
      },
      surface: {
        justifyContent: "center",
        backgroundColor: "white",
      },
      touchable: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        flexGrow: 1,
      },
    }),
    rxStyles: {
      searchItemLabel: ({ tintColor }: { tintColor?: string }): TextStyle => ({
        fontWeight: "400",
        fontSize: 16,
        ...(tintColor && {
          color: tintColor,
        }),
      }),
      titleText: ({ tintColor }: { tintColor?: string }): TextStyle => ({
        fontSize: 16,
        fontWeight: "bold",
        flexGrow: 1,
        ...(tintColor && {
          color: tintColor,
        }),
      }),
      wrapper: ({
        backgroundColor,
      }: {
        backgroundColor?: string;
      }): TextStyle => ({
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: backgroundColor ?? "rgba(0, 0, 0, 0.5)",
      }),
    },
  };
}
