import React from 'react'
import { View, StyleSheet, } from 'react-native'
import { Colors } from '../assets/Colors'
import { COLORS } from '../constant'
import TabItem from './TabItem'

const TabNavigation = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TabItem
            key={index}
            isFocused={isFocused}
            onLongPress={onLongPress}
            onPress={onPress}
            label={label} />
        );
      })}
    </View>
  );
}

export default TabNavigation

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: Colors.colorWhite,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderColor: COLORS.gray,
    borderWidth: 0,
    borderTopWidth: 0.2
  }
})