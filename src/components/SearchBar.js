import React, {memo} from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../utlis/colors';

const {width} = Dimensions.get('window');

const SearchBar = ({
  placeholder,
  iconColor = "yellow",
  dividerColor,
  value,
  onChangeText,
}) => {
  return (
    <View
      style={[
        styles.container,
      ]}>
        <Icon
          name={"search"}
          size={20}
          color={iconColor}
          style={styles.icon}
        />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
      />
      <View style={[styles.divider, {justifyContent: 'center', alignItems: 'center', borderLeftColor: colors.gray,}]} >
      <Icon
        name={"microphone"}
        size={20}
        color={iconColor}
        style={{marginLeft: responsiveWidth(2.40)}}
      />
      </View>
    </View>
  );
};

SearchBar.defaultProps = {
  placeholder: 'Search...',
  leftIconName: 'search',
  rightIconName: 'filter',
  dividerColor: '#ccc',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: responsiveWidth(4),
    paddingHorizontal: 10,
    elevation: 1.0,
    marginVertical: 10,
    width: '100%'
  },
  input: {
    flex: 1,
    fontSize: responsiveFontSize(2.20),
    marginLeft: responsiveWidth(1),
    fontWeight: '600',
    textAlign: 'left',
    color: colors.gray,
  },
  icon: {
    marginHorizontal: responsiveWidth(1),
  },
  divider: {
    borderWidth: 0,
    borderLeftWidth:  0.50,
    width: responsiveWidth(10),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1),
  },
});

export default memo(SearchBar);
