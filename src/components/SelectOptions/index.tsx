import { View } from "react-native";
import { IconButton } from "react-native-paper";
import { Props } from "./props";
import { useStyles } from "./styles";

export function SelectOptions(props: Readonly<Props>) {
  const { styles } = useStyles();

  return (
    <View style={[styles.container, props?.style]}>
      {!props.isEmpty ? (
        <IconButton icon="close" size={18} onPress={props.onClear} />
      ) : null}
      <IconButton icon="menu-down" onPress={props.onPress} />
    </View>
  );
}
