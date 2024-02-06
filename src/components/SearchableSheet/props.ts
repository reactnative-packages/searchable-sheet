import { TextStyle, ViewStyle } from "react-native";

export type Props<T> = {
  data: T[];
  onChange: (value: T) => void;
  placeholder: string;
  title: string;
  onClear?: () => void;
  error?: JSX.Element;
  renderItem?: (item: any, ref: { close: () => void }) => JSX.Element;
  anchor?: JSX.Element;
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
  nameExtractor?: (item: T) => string;
  onEndReached?: () => void;
  onEndReachedThreshold?: number;
};

/**
 * Define la interfaz para las funciones expuestas a través del ref
 */
export interface SearchableSheetRef {
  show: () => void;
  hide: () => void;
}
