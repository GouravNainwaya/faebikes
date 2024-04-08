import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../utlis/colors';

const MoneyCard = ({ title, imageUrl, onPress }) => {
  const handlePress = () => {
    // Handle onPress logic here
    if (onPress) {
      onPress();
    }
  };

  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: imageUrl }} style={styles.imageStyle} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={handlePress}>
          <Icon name="arrowright" size={responsiveFontSize(2.5)} color={colors.orange} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  cardContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    padding: responsiveWidth(1.5),
    margin: responsiveWidth(4),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
    backgroundColor: colors.background,
  },
  imageStyle: {
    width: '100%',
    height: responsiveHeight(25),
    borderRadius: 10,
  },
  contentContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: responsiveHeight(2),
  },
  title: {
    color: colors.green,
    fontSize: responsiveFontSize(2.5),
    fontWeight: '600',
    marginRight: responsiveWidth(1),
  },
};

export default MoneyCard;
