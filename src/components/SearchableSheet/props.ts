import { TextStyle, ViewStyle } from "react-native";

export type Props = {
  data: any[];
  onChange: (value: any) => void;
  placeholder: string;
  title: string;
  visible: boolean;
  onHide: () => void;
  onOpen: () => void;
  error?: JSX.Element;
  renderItem?: (item: any, ref: { close: () => void }) => JSX.Element;
  anchor: JSX.Element;
  inputLabel: string;
  required?: boolean;
  onRefresh?: () => void;
  refreshing?: boolean;
  hideClose?: boolean;
  style?: ViewStyle;
  backgroundColor?: string;
  inputStyle?: ViewStyle;
  titleStyle?: TextStyle;
  flatListStyle?: ViewStyle;
  bottomStyle?: ViewStyle;
  separatorStyle?: ViewStyle;
  inputLabelStyle?: TextStyle;
  tintColor?: string;
};
