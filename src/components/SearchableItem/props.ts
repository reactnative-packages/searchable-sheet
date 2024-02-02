import { TextStyle, ViewStyle } from "react-native";

export type Props = {
  onPress: () => void;
  title: string;
  surfaceStyle?: ViewStyle;
  touchableStyle?: ViewStyle;
  labelStyle?: TextStyle | TextStyle[];
  disabled?: boolean;
};
