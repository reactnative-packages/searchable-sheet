import { Platform } from "react-native";
import { Surface, Text, TouchableRipple } from "react-native-paper";

import { Props } from "./props";
import { useStyles } from "./styles";

export function SearchableItem(props: Readonly<Props>) {
  const { styles, rxStyles } = useStyles();

  const disabled = !!props?.disabled;

  return (
    <Surface
      style={[styles.surface, props.surfaceStyle]}
      elevation={Platform.select({ ios: 0, android: 1 })}
    >
      <TouchableRipple
        disabled={disabled}
        onPress={props.onPress}
        style={[rxStyles.touchable({ disabled }), props.touchableStyle]}
      >
        <Text style={props.labelStyle}>{props.title}</Text>
      </TouchableRipple>
    </Surface>
  );
}
