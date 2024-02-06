import { Pressable, Text, TextInput, View } from "react-native";

import { Props } from "./props";
import { useStyles } from "./styles";

export function FormInput(props: Readonly<Props>) {
  const {
    required = false,
    value,
    onChangeText,
    keyboardType,
    editable = true,
    multiline = false,
    numberOfLines = 1,
    secureTextEntry = false,
    icon,
    spellCheck = true,
    autoCorrect = true,
    autoCapitalize = "none",
    placeholder = "",
    label,
    containerStyle = {},
    onLabelPress = () => {},
    maxLength,
    labelStyle,
    inputStyle,
    tintColor,
  } = props;
  const { styles } = useStyles();

  return (
    <View style={[styles.container, containerStyle]}>
      {icon ? <View style={styles.icon}>{icon}</View> : null}
      <View style={styles.content}>
        <Pressable onPress={onLabelPress}>
          <Text style={[styles.label, { color: tintColor }, labelStyle]}>
            {label}
            {required ? <Text>{" *"}</Text> : null}
          </Text>
        </Pressable>
        <TextInput
          maxLength={maxLength}
          placeholder={placeholder}
          autoCapitalize={autoCapitalize}
          spellCheck={spellCheck}
          autoCorrect={autoCorrect}
          caretHidden={false}
          editable={editable}
          keyboardType={keyboardType || "default"}
          value={value}
          onChangeText={onChangeText}
          style={[styles.input, inputStyle]}
          multiline={multiline}
          numberOfLines={numberOfLines}
          secureTextEntry={secureTextEntry}
          selectionColor={tintColor}
        />
        <View
          style={[styles.spacer, tintColor && { backgroundColor: tintColor }]}
        />
      </View>
    </View>
  );
}
