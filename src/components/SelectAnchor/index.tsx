import { useCallback } from "react";
import { Button } from "react-native-paper";

import { SelectOptions } from "../SelectOptions";
import { Props } from "./props";
import { useStyles } from "./styles";

export function SelectAnchor(props: Readonly<Props>) {
  const { styles } = useStyles();

  const Icon = useCallback(
    () => (
      <SelectOptions
        onPress={props.onPress}
        onClear={props.onClear}
        isEmpty={!props.label}
      />
    ),
    [props.label, props.onPress, props.onClear]
  );

  return (
    <Button
      onPress={props.onPress}
      icon={Icon}
      contentStyle={styles.anchorContent}
      style={styles.anchor}
      mode="elevated"
      labelStyle={styles.anchorLabel}
      loading={props.loading}
    >
      {props.label ?? `${props.placeholder} ${props.required ? "*" : ""}`}
    </Button>
  );
}
