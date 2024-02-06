import { StyleSheet, ViewStyle } from "react-native";

export function useStyles() {
  return {
    styles: StyleSheet.create({
      surface: {},
    }),
    rxStyles: {
      touchable: (params: { disabled: boolean }): ViewStyle => ({
        ...(params.disabled
          ? {
              opacity: 0.5,
            }
          : null),
      }),
    },
  };
}
