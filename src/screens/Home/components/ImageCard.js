import React, { memo } from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
import colors from '../../../utlis/colors';
import Entypo from 'react-native-vector-icons/Entypo';

const ImageCard = () => {
console.log("Re render ImageCard")
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://th.bing.com/th?id=OIP.kTvs-fiEdCw7rldk41rhKwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2',
        }}
        style={styles.imageBackground}>
        <FontAwesome
          name="heart-o"
          size={responsiveFontSize(2.50)}
          color={colors.fullColor}
          style={styles.heartIcon}
        />
        <View style={styles.textContainer}>
          <Text style={[styles.cardTitle, {color: colors.background, fontWeight: '700', fontSize: responsiveFontSize(1.90)}]}>10% OFF</Text>
          <Text style={[styles.cardText, {color: colors.background, fontWeight: '500', }]}>up to <Text style={{fontSize: responsiveFontSize(2)}}>$40</Text></Text>
        </View>
      </ImageBackground>
      <View style={styles.bottomContainer}>
        <Text style={[styles.cardTitle, {color: colors.black, fontWeight: '600', fontSize: responsiveFontSize(2)}]}>Utsav Foods</Text>
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            color: colors.gray,
            fontWeight: '500',
            // marginTop: responsiveHeight(1),
          }}>
          <Entypo
            name="time-slot"
            size={responsiveFontSize(2.2)}
            color={colors.green}
          />{' '}
          48 mins
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    imageBackground: {
      width: responsiveWidth(35),
      height: responsiveHeight(15),
      borderRadius: responsiveWidth(3),
      padding: responsiveWidth(1.80),
      overflow: 'hidden',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexDirection: 'row',
      position: 'relative',
      marginHorizontal: responsiveWidth(1),
      marginTop: responsiveHeight(3)
    },
    heartIcon: {
      position: 'absolute',
      top: responsiveHeight(1.60),
      right: responsiveWidth(2.20),
    },
    textContainer: {
      alignSelf: 'flex-end',
    },
    cardTitle: {
      fontSize: responsiveFontSize(1.5),
      fontWeight: 'bold',
      color: 'black',
    },
    cardText: {
      fontSize: responsiveFontSize(1.8),
      color: 'black',
    },
    bottomContainer: {
      alignSelf: 'flex-start',
      marginTop: responsiveHeight(1),
    },
  });

export default memo(ImageCard);
