import { ViewStyle } from "react-native";

export type Props = {
  label?: string;
  placeholder: string;
  onClear: () => void;
  onPress: () => void;
  style?: ViewStyle;
  required?: boolean;
  loading?: boolean;
  tintColor?: string;
};
