import { TextStyle, ViewStyle } from "react-native";

export type Props = {
  required: boolean;
  value: any;
  onChangeText: (value: any) => void;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad";
  editable?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  secureTextEntry?: boolean;
  icon?: JSX.Element;
  spellCheck?: boolean;
  autoCorrect?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  placeholder?: string;
  label: string;
  containerStyle?: ViewStyle | ViewStyle[];
  onLabelPress?: () => void;
  maxLength?: number;
  labelStyle?: TextStyle;
  inputStyle?: ViewStyle | ViewStyle[];
  tintColor?: string;
};
