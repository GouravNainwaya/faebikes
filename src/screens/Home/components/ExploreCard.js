import {
    Image,
    Text,
    View,
  } from 'react-native';
  import React, { memo } from 'react';
  import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';

const ExploreCard = ({imageUrl, title, description}) => {
console.log("Re render ExploreCard")

    return (
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: responsiveWidth(2),
          elevation: 5,
          width: responsiveWidth(25),
          marginBottom: responsiveHeight(1),
          padding: responsiveWidth(1)
        }}>
        <View style={{alignItems: 'center',alignSelf: 'center', height: responsiveWidth(13)}}>
          <Image
            source={{uri: imageUrl}}
            style={{
              width: "100%",
              aspectRatio: 1/0.40,
              resizeMode: 'contain',
              height: "100%",
              marginTop: 10,
            }}
          />
        </View>
        <View style={{marginTop:  responsiveHeight(3), alignSelf: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              fontWeight: 'bold',
              marginBottom: responsiveHeight(0.50),
              color: 'black',
            }}>
            {title}
          </Text>
          <Text style={{fontSize: responsiveFontSize(1.30),fontWeight: '500', color: 'blue'}}>{description}</Text>
        </View>
      </View>
    );
  };

export default memo(ExploreCard)  