import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
import colors from '../../../utlis/colors';

const RedBoxWithDot = () => {
    return (
      <View
        style={{
          width: responsiveWidth(5),
          height: responsiveWidth(4.5),
          borderColor: 'red',
          borderWidth: 1.5,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: responsiveWidth(0.5),
          padding: responsiveWidth(2),
        }}>
        <View
          style={{
            width: responsiveWidth(2.4),
            height: responsiveWidth(2.4),
            borderRadius: responsiveWidth(2),
            backgroundColor: 'red',
          }}
        />
      </View>
    );
  };
const ListCard = ({ number, title }) => (
  <View style={styles.card}>
    <RedBoxWithDot />
    <View style={styles.textContainer}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.x}>x</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: responsiveWidth(3),
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: responsiveWidth(1),
  },
  number: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '700',
    color: colors.gray,
    textTransform: 'capitalize',
  },
  x: {
    fontSize: responsiveFontSize(1.7),
    fontWeight: '700',
    color: colors.gray,
    marginLeft: responsiveWidth(1),
    alignSelf: 'flex-end',
    textTransform: 'capitalize',
  },
  title: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '700',
    color: colors.black,
    textTransform: 'capitalize',
    marginLeft: responsiveWidth(1),
  },
});

export default memo(ListCard);
