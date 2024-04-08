import React, { memo } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '../../../utlis/colors';

const WhatsOnYourMindCard = ({ title, imageUrl }) => {
console.log("Re render WhatsOnYourMindCard")
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="contain"
        onError={() => console.log('Image loading error')}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 18,
    width: responsiveWidth(34),
    height: responsiveHeight(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1 / 0.9,
    borderRadius: 8,
  },
  title: {
    fontSize: responsiveFontSize(1.90),
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
    color: colors.gray,
    maxWidth: '75%',
    textTransform: 'capitalize',
  },
});

export default memo(WhatsOnYourMindCard);
