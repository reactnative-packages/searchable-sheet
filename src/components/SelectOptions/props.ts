import { ViewStyle } from "react-native";

export type Props = {
  isEmpty: boolean;
  onClear: () => void;
  onPress: () => void;
  style?: ViewStyle;
  iconColor?: string;
};
