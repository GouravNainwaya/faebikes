import React, { memo } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import ListCard from './ListCard'; // Assuming ListCard is a component defined elsewhere
import colors from '../../../utlis/colors';

const HistoryCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Image
          source={{ uri: 'https://th.bing.com/th/id/OIP.Qh-elTcLORTqAHMYaiiKnwHaE6?w=244&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7' }}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text numberOfLines={1} style={styles.cardTitle}>sanwaliya paav bhaji</Text>
          <Text numberOfLines={1} style={styles.cardSubtitle}>Neemuch Locality, Neemuch</Text>
          <Text numberOfLines={1} style={styles.cardSubtitle}>19 mins</Text>
        </View>
        <View style={styles.statusContainer}>
          <TouchableOpacity style={styles.statusButton}>
            <Text style={styles.statusButtonText}>Delivered</Text>
          </TouchableOpacity>
          <View style={styles.viewMenuContainer}>
            <Text style={styles.viewMenuText}>View menu</Text>
            <AntDesign name="caretright" size={responsiveFontSize(1.5)} color={'tomato'} />
          </View>
        </View>
      </View>
      <View style={styles.cardBody}>
        <ListCard number="1" title="Noodles Manchurian with paneer chilli" />
        <ListCard number="1" title="Manchurian Rice" />
        <ListCard number="1" title="Noodles" />
      </View>
      <View style={styles.separator} />
      <View style={styles.cardFooter}>
        <Text style={styles.footerText}>13 dec 23 2024 at 4.42pm</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>$451</Text>
          <AntDesign name={'right'} size={responsiveFontSize(1.5)} color="black" />
        </View>
      </View>
      <TouchableOpacity style={styles.reloadButton}>
        <View style={styles.reloadButtonContent}>
          <FontAwesome name="refresh" type="material" size={responsiveFontSize(2)} color={colors.background} />
          <Text style={styles.reloadButtonText}>Reorder</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    marginTop: responsiveWidth(5),
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ECFBFC',
    padding: responsiveWidth(3),
  },
  cardImage: {
    width: responsiveWidth(15),
    height: responsiveHeight(8.5),
    marginRight: responsiveWidth(3),
    borderRadius: responsiveWidth(3),
  },
  cardContent: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  cardTitle: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '500',
    color: 'black',
    textTransform: 'capitalize',
  },
  cardSubtitle: {
    fontSize: responsiveFontSize(1.9),
    color: 'gray',
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  statusContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusButton: {
    backgroundColor: '#B9F0F3', paddingVertical: responsiveHeight(1), paddingHorizontal: responsiveWidth(1.3), borderRadius: 5, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end'
  },
  statusButtonText: {
    color: 'gray',
    fontSize: responsiveFontSize(1.5),
    fontWeight: 'bold',
  },
  viewMenuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(2),
    right: responsiveWidth(0.5),
  },
  viewMenuText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
    color: colors.green,
  },
  cardBody: {
    flex: 1,
  },
  separator: {
    width: '100%',
    borderBottomWidth: 1.50,
    borderBottomColor: colors.border,
    borderStyle: 'dashed',
    marginHorizontal: responsiveWidth(2),
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1.50,
    borderBottomColor: colors.border,
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(3),
    width: '100%',
  },
  footerText: {
    fontSize: responsiveFontSize(1.9),
    color: 'gray',
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountText: {
    fontSize: responsiveFontSize(1.9),
    color: 'gray',
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  reloadButton: {
    backgroundColor: '#D66E69',
    borderRadius: 5,
    paddingVertical: responsiveHeight(1.20),
    paddingHorizontal: responsiveWidth(8),
    alignSelf: 'flex-end',
    marginHorizontal: responsiveWidth(2),
    marginVertical: responsiveHeight(2),
  },
  reloadButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reloadButtonText: {
    marginLeft: 10,
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
    color: colors.background,
  },
});

export default memo(HistoryCard);
