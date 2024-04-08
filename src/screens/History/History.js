import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import SearchBar from '../../components/SearchBar';
import ScreenWrapper from '../../components/ScreenWrapper';
import colors from '../../utlis/colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {data} from '../Home/Home';
import HistoryCard from './components/HistoryCard';

const renderCardItem = ({item}) => <HistoryCard item={item} />;
const History = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = useCallback(text => {
    console.log('🚀 ~ file: Home.js:14 ~ handleSearchChange ~ text:', text);
    setSearchValue(text);
  }, []);

  return (
    <View style={{flex: 1}}>
      <ScreenWrapper>
        <SearchBar
          placeholder="Restaurant Name or dish"
          value={searchValue}
          onChangeText={handleSearchChange}
          iconColor={'green'}
        />
        <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: responsiveHeight(1.50)}}>
          <Text
            style={[
              {
                color: '#586425',
                fontWeight: '500',
                fontSize: responsiveFontSize(3),
              },
            ]}>
            history
          </Text>
          <Text
            style={[
              {
                color: colors.gray,
                fontWeight: '500',
                fontSize: responsiveFontSize(3),
                marginLeft: responsiveHeight(3.5),
              },
            ]}>
            favourite
          </Text>
        </View>

        <FlatList
          data={data}
          renderItem={renderCardItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{paddingBottom: responsiveHeight(2)}}
          showsVerticalScrollIndicator={false}
        />
      </ScreenWrapper>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({});
