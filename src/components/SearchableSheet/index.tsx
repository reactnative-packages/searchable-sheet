import {
  Ref,
  RefAttributes,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Animated, FlatList, Modal, Platform, Text, View } from "react-native";
import { IconButton } from "react-native-paper";

import { FormInput } from "../FormInput";
import { SearchableItem } from "../SearchableItem";
import { SelectAnchor } from "../SelectAnchor";
import { Props, SearchableSheetRef } from "./props";
import { useStyles } from "./styles";

function SearchableSheet<T>(
  props: Readonly<Props<T>>,
  ref: Ref<SearchableSheetRef>
) {
  const {
    tintColor,
    onChange,
    backgroundColor,
    inputStyle = {},
    nameExtractor,
  } = props;
  const { styles, rxStyles } = useStyles();
  const [search, setSearch] = useState<string>();
  const [filtered, setFiltered] = useState(props.data);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(false);

  function show() {
    setVisible(true);
  }

  function hide() {
    setVisible(false);
  }

  // Exponer métodos al componente padre
  useImperativeHandle(ref, () => ({
    show,
    hide,
  }));

  useEffect(() => {
    setFiltered(props.data);
  }, [props.data]);

  const searchFilterFunction = (text: string) => {
    if (text) {
      if (Array.isArray(props.data) && props.data.length > 0) {
        const newData = props.data.filter(function (item) {
          const itemData = String(JSON.stringify(item)).toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFiltered([]);
        setFiltered(newData);
      }
      setSearch(text);
    } else {
      setFiltered(props.data);
      setSearch(text);
    }
  };

  function handleOnDissmiss() {
    setSearch("");
    hide();
  }

  function handleSelect(value: T) {
    handleOnDissmiss();
    fadeAnim.setValue(0);
    // Definir el tipo de datos de la lista
    onChange(value);
  }

  const ItemSeparatorComponent = useCallback(
    () => <View style={[styles.separator, props.separatorStyle]} />,
    [props.separatorStyle]
  );

  const AnchorComponent = useCallback(
    () =>
      props.anchor ?? (
        <SelectAnchor
          label={props.title}
          placeholder={props.placeholder}
          onPress={show}
          required={props.required}
          onClear={() => props.onClear?.()}
          tintColor={tintColor}
        />
      ),
    [
      props.anchor,
      props.title,
      props.placeholder,
      props.required,
      props.onClear,
      tintColor,
    ]
  );

  return (
    <>
      <AnchorComponent />
      {props?.error}
      <Modal
        animationType={Platform.select({ ios: "none", android: "fade" })}
        visible={visible}
        onRequestClose={handleOnDissmiss}
        transparent
      >
        <View style={rxStyles.wrapper({ backgroundColor })}>
          <View style={[styles.overlay]}>
            <View style={styles.titleContainer}>
              <Text
                style={[rxStyles.titleText({ tintColor }), props.titleStyle]}
              >
                {props.title}
              </Text>
              {!props?.hideClose ? (
                <IconButton
                  icon="close-circle"
                  onPress={() => {
                    handleOnDissmiss();
                    fadeAnim.setValue(0);
                  }}
                  style={styles.closeIcon}
                />
              ) : null}
            </View>
            <FormInput
              required={!!props.required}
              autoCapitalize="none"
              spellCheck={false}
              autoCorrect={false}
              onChangeText={searchFilterFunction}
              value={search}
              label={props.inputLabel}
              placeholder={props.placeholder}
              containerStyle={[styles.input, inputStyle]}
              labelStyle={props.inputLabelStyle}
              tintColor={tintColor}
            />
            <FlatList
              data={filtered}
              refreshing={props.refreshing}
              onRefresh={props.onRefresh}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => {
                if (props.renderItem) {
                  return props.renderItem(
                    { item },
                    {
                      close: () => handleSelect(item),
                    }
                  );
                }
                const title = nameExtractor?.(item) ?? "";

                return (
                  <SearchableItem
                    onPress={() => handleSelect(item)}
                    title={title}
                    surfaceStyle={styles.surface}
                    touchableStyle={styles.touchable}
                    labelStyle={rxStyles.searchItemLabel({ tintColor })}
                  />
                );
              }}
              initialNumToRender={100}
              style={[styles.flatlist, props.flatListStyle]}
              ItemSeparatorComponent={ItemSeparatorComponent}
              onEndReached={props.onEndReached}
              onEndReachedThreshold={props.onEndReachedThreshold}
            />
            <View style={[styles.bottomSpacer, props.bottomStyle]} />
          </View>
        </View>
      </Modal>
    </>
  );
}

export default forwardRef(SearchableSheet) as <T>(
  props: Props<T> & RefAttributes<SearchableSheetRef>
) => JSX.Element;
