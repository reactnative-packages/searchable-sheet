import { useEffect, useRef, useState } from "react";
import { Animated, FlatList, Modal, Platform, Text, View } from "react-native";
import { IconButton } from "react-native-paper";

import { FormInput } from "../FormInput";
import { SearchableItem } from "../SearchableItem";
import { Props } from "./props";
import { useStyles } from "./styles";

export function SearchableSheet(props: Readonly<Props>) {
  const { tintColor, onChange, backgroundColor } = props;
  const { styles } = useStyles();
  const [search, setSearch] = useState<string>();
  const [filtered, setFiltered] = useState(props.data);
  const fadeAnim = useRef(new Animated.Value(0)).current;

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
    props.onHide();
  }

  function handleSelect(value: any) {
    handleOnDissmiss();
    fadeAnim.setValue(0);
    onChange(value);
  }

  return (
    <>
      {props.anchor}
      {props?.error}
      <Modal
        animationType={Platform.select({ ios: "none", android: "fade" })}
        visible={props.visible}
        onRequestClose={handleOnDissmiss}
        transparent
      >
        <View style={[styles.wrapper, backgroundColor && { backgroundColor }]}>
          <View style={[styles.overlay]}>
            <View style={styles.titleContainer}>
              <Text style={[styles.titleText, props.titleStyle]}>
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
              containerStyle={[styles.input, props.inputStyle]}
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
                return (
                  <SearchableItem
                    onPress={() => handleSelect(item)}
                    title={item.name}
                    surfaceStyle={styles.surface}
                    touchableStyle={styles.touchable}
                    labelStyle={[
                      styles.searchItemLabel,
                      tintColor && { color: tintColor },
                    ]}
                  />
                );
              }}
              initialNumToRender={100}
              style={[styles.flatlist, props.flatListStyle]}
              ItemSeparatorComponent={() => (
                <View style={[styles.separator, props.separatorStyle]} />
              )}
            />
            <View style={[styles.bottomSpacer, props.bottomStyle]} />
          </View>
        </View>
      </Modal>
    </>
  );
}
