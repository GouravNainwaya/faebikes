import React, { memo, useCallback } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '../../utlis/colors';

const SegmentedButton = ({ options, onSelect, activeIndex, activeColor, inactiveColor }) => {
  const handleTabPress = useCallback((index) => {
    onSelect(index);
  }, []);

  return (
    <View style={styles.container}>
      {options.map((option, index) => {
        const isActive = activeIndex === index;
        const isAdjacentToActive = index === activeIndex - 1 || index === activeIndex + 1;
        const shouldRemoveBorder = !isActive && !isAdjacentToActive;

        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.tabButton,
              isActive && styles.activeTab,
              index === 0 && styles.firstTab,
              index === options.length - 1 && styles.lastTab,
              {
                borderColor: isActive ? activeColor : inactiveColor,
                borderLeftWidth: shouldRemoveBorder ? 0 : 0.80,
                borderRightWidth: shouldRemoveBorder ? 0 : 0.80,
              },
            ]}
            onPress={() => handleTabPress(index)}
          >
            <View style={styles.tabContent}>
              {index === options.length - 1 && (
                <FontAwesome name={isActive ? 'heart' : 'heart-o'} size={responsiveFontSize(2)} color="red" style={{ marginRight: 10 }} />
              )}
              <Text style={[styles.tabText, isActive && { color: activeColor }]}>
                {option}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButton: {
    paddingVertical: responsiveHeight(0.60),
    paddingHorizontal: responsiveWidth(6),
    borderWidth: 1.50,
    alignItems: 'center',
  },
  firstTab: {
    borderTopLeftRadius: responsiveWidth(2.50),
    borderBottomLeftRadius: responsiveWidth(2.50),
  },
  lastTab: {
    borderTopRightRadius: responsiveWidth(2.50),
    borderBottomRightRadius: responsiveWidth(2.50),
  },
  activeTab: {
    borderColor: 'blue',
  },
  tabContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  },
});

export default memo(SegmentedButton);