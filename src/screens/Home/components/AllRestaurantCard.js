import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import colors from '../../../utlis/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const AllRestaurantCard = ({ images, restaurantName, rating, cuisine, price, deliveryTime, distance, discount }) => {
console.log("Re render AllRestaurantCard")
  return (
    <View
    style={{
      backgroundColor: '#fff',
      borderRadius: 10,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      margin: 10,
      overflow: 'hidden', // Ensure the image doesn't overflow
    }}>
    <SliderBox
      images={images}
      ImageComponentStyle={{marginBottom: responsiveHeight(1),}}
      dotColor="orange"
      inactiveDotColor="gray"
      circleLoop={true}
      dotStyle={{
        height: 0,
        width: 0,
        borderRadius: responsiveWidth(5),
        // marginBottom: responsiveHeight(2.5),
      }}
      imageLoadingColor="black"
    />
    {/* Heart icon container */}
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // paddingHorizontal: responsiveWidth(4),
        marginVertical: responsiveWidth(2),
        borderRadius: 5,
        width: '100%',
        position: 'absolute',
        right: responsiveWidth(1),
        top: responsiveHeight(1),
      }}>
      <Text
        style={{
          color: colors.background,
          backgroundColor: 'grey',
          marginLeft: responsiveHeight(2),
          paddingHorizontal: responsiveWidth(2),
          paddingVertical: responsiveHeight(0.7),
          borderRadius: responsiveWidth(2),
        }}>
        Tandoori Pan Masala... #.220
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 'auto',
        }}>
        <Entypo
          name="heart-outlined"
          size={responsiveFontSize(4.5)}
          color={colors.background}
        />
        <Entypo
          name="dots-three-vertical"
          size={responsiveFontSize(3)}
          color={colors.background}
          style={{marginLeft: responsiveWidth(3)}}
        />
      </View>
    </View>
    {/* Text content */}
    <View style={{paddingHorizontal: responsiveWidth(3)}}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: responsiveWidth(31),
            height: responsiveHeight(3.8),
            backgroundColor: colors.background,
            position: 'absolute',
            bottom: 41.50,
            left: responsiveWidth(3),
            alignSelf: 'center',
            borderTopLeftRadius: responsiveWidth(5),
            borderTopRightRadius: responsiveWidth(5),
            borderBottomLeftRadius: responsiveWidth(1),
            borderBottomRightRadius: responsiveWidth(1),
            justifyContent: 'center',
            alignItems: 'center',
            // borderRightWidth: 100,
            // borderTopWidth: 100,
          }}>
          <Text style={{color: colors.black}}>100% Veg only</Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: responsiveFontSize(3.5),
              fontWeight: 'bold',
              color: colors.black,
            }}>
            Minute Meals
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.green,
            padding: responsiveWidth(1.5),
            borderRadius: responsiveWidth(2),
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(1.9),
              fontWeight: 'bold',
              color: colors.background,
            }}>
            4.0
          </Text>
          <AntDesign
            name="star"
            size={responsiveFontSize(2)}
            color={colors.background}
            style={{marginLeft: responsiveWidth(1)}}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          marginTop: responsiveHeight(1),
        }}>
        <Text
          style={{
            fontSize: responsiveFontSize(1.95),
            textAlignVertical: 'center',
            color: colors.gray,
            fontWeight: '500',
          }}>
          South indian {'\u2022'} Fast Food {'\u2022'} ₹200 for one
        </Text>
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            color: colors.gray,
            fontWeight: '500',
            marginTop: responsiveHeight(1),
          }}>
          <Entypo
            name="time-slot"
            size={responsiveFontSize(2.2)}
            color={colors.orange}
          />{' '}
          48mins {'\u2022'} 4.5 km
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
          borderStyle: 'dashed',
          marginVertical: responsiveHeight(1.5),
          marginHorizontal: responsiveWidth(2),
        }}
      />
      <View style={{alignItems: 'center', flexDirection: 'row', marginBottom: responsiveHeight(1)}}>
        <MaterialCommunityIcons
          name="brightness-percent"
          size={responsiveFontSize(2.40)}
          color="blue"
        />
        <Text
          style={{
            fontSize: responsiveFontSize(2.30),
            color: 'blue',
            fontWeight: '600',
            marginLeft: responsiveWidth(1)
          }}>
          50% OFF <Text> up to</Text> ₹100
        </Text>
      </View>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: 10,
    overflow: 'hidden',
  },
  imageComponent: {
    marginBottom: responsiveHeight(1),
  },
  heartIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: responsiveWidth(2),
    borderRadius: 5,
    paddingHorizontal: responsiveWidth(3),
  },
  restaurantName: {
    color: 'white',
    backgroundColor: 'grey',
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(0.7),
    borderRadius: responsiveWidth(2),
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconMargin: {
    marginLeft: responsiveWidth(3),
  },
  textContent: {
    paddingHorizontal: responsiveWidth(3),
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tag: {
    backgroundColor: 'black',
    color: 'white',
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(0.5),
    borderRadius: responsiveWidth(2),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    marginRight: responsiveWidth(1),
  },
  starIcon: {
    marginLeft: responsiveWidth(1),
  },
  title: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: 'bold',
  },
  details: {
    fontSize: responsiveFontSize(2),
    color: 'grey',
    fontWeight: '500',
    marginTop: responsiveHeight(1),
  },
  discountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(1),
  },
  discountText: {
    fontSize: responsiveFontSize(2.30),
    color: 'blue',
    fontWeight: '600',
    marginLeft: responsiveWidth(1),
  },
});

export default memo(AllRestaurantCard);
