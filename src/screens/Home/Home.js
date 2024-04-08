import React, {
  useCallback,
  useState,
  lazy,
  Suspense,
  useRef,
  useMemo,
  useEffect,
} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import SearchBar from '../../components/SearchBar';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import SegmentedButton from './SegmentedButton';
import colors from '../../utlis/colors';

const optionsForSegmentBtns = ['Recommend', 'Favourites'];
const ImageCard = lazy(() => import('./components/ImageCard'));
const ExploreCard = lazy(() => import('./components/ExploreCard'));
const WhatsOnYourMindCard = lazy(() =>
  import('./components/WhatsOnYourMindCard'),
);
import * as Animatable from 'react-native-animatable';
import Carousel from 'react-native-snap-carousel';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AllRestaurantCard from './components/AllRestaurantCard';
import {itemWidth, sliderWidth} from '../../utlis/helper';
import AntDesign from 'react-native-vector-icons/AntDesign';

const images = [
  'https://th.bing.com/th?id=OIP.KgxeEvBgot5UZ4RRPy5OTwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2', // Your image
  'https://th.bing.com/th?id=OIP.KgxeEvBgot5UZ4RRPy5OTwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2', // Your image
  'https://th.bing.com/th?id=OIP.KgxeEvBgot5UZ4RRPy5OTwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2', // Your image
  'https://th.bing.com/th?id=OIP.KgxeEvBgot5UZ4RRPy5OTwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2', // Your image
];
const cardData = {
  images: images,
  restaurantName: 'Sample Restaurant',
  rating: '4.5',
  cuisine: 'Indian Cuisine',
  price: '₹200',
  deliveryTime: '48mins',
  distance: '4.5 km',
  discount: '50% OFF up to ₹100',
};

const renderAllRestaurantItems = ({item}) => (
  <Suspense
    fallback={
      <Text style={{color: colors.black}}>Loading AllRestaurantCard...</Text>
    }>
    <AllRestaurantCard {...cardData} />
  </Suspense>
);

export const data = [
  {key: '1', title: 'Item 1', description: 'Description for Item 1'},
  {key: '2', title: 'Item 2', description: 'Description for Item 2'},
  {key: '3', title: 'Item 3', description: 'Description for Item 3'},
  {key: '1', title: 'Item 1', description: 'Description for Item 1'},
  {key: '2', title: 'Item 2', description: 'Description for Item 2'},
  {key: '3', title: 'Item 3', description: 'Description for Item 3'},
  {key: '1', title: 'Item 1', description: 'Description for Item 1'},
  {key: '2', title: 'Item 2', description: 'Description for Item 2'},
  {key: '3', title: 'Item 3', description: 'Description for Item 3'},
  {key: '3', title: 'Item 3', description: 'Description for Item 3'},
];

export const SectionTitle = ({title, textStyle}) => {
  return (
    <Text
      style={{
        textAlign: 'center',
        fontSize: responsiveFontSize(2),
        color: colors.gray,
        fontWeight: '500',
        marginVertical: responsiveHeight(2.2),
        textTransform: 'uppercase',
        ...textStyle
      }}>{title}</Text>
  );
};

const renderItemExplore = ({item, index}) => (
  <Suspense
    fallback={
      <Text style={{color: colors.black}}>Loading ExploreCard...</Text>
    }>
    <ExploreCard
      imageUrl="https://th.bing.com/th/id/OIP.smXKeuA5n-s8yqXFsUCE_AHaHv?w=185&h=193&c=7&r=0&o=5&dpr=1.6&pid=1.7"
      title="Offers"
      description="& More"
    />
  </Suspense>
);
const numColumns = Math.ceil(data.length / 2);
const carouselItems = Array.from({length: 5}, (_, index) => ({
  id: index.toString(),
  imageUrl:
    'https://th.bing.com/th?id=OIP.kTvs-fiEdCw7rldk41rhKwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2',
}));

const renderCarouselItem = ({item}) => {
  return (
    <ImageBackground
      source={{uri: item.imageUrl}}
      style={{
        width: responsiveWidth(80),
        height: responsiveHeight(25),
        overflow: 'hidden',
        alignSelf: 'center',
        alignItems: 'flex-start',
        borderRadius: responsiveWidth(3),
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        padding: responsiveWidth(4),
      }}>
      <FontAwesome
        name="heart-o"
        size={responsiveFontSize(3.5)}
        color={colors.fullColor}
        style={{
          position: 'absolute',
          top: responsiveHeight(1.6),
          right: responsiveWidth(2.2),
        }}
      />
      <View style={{alignSelf: 'flex-end',flexDirection: 'row', width: '100%',justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
        <Text
          style={[
            styles.cardTitle,
            {
              color: colors.background,
              fontWeight: '600',
              fontSize: responsiveFontSize(2.50),
            },
          ]}>
          10% OFF up to $100
        </Text>
        <Text
          style={[
            styles.cardText,
            {color: colors.background, fontWeight: '700', fontSize: responsiveFontSize(3)},
          ]}>
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
            alignSelf: 'flex-end',
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
    </ImageBackground>
  );
};
const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const translateY = useRef(new Animated.Value(500)).current;
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleSnapToItem = index => {
    setActiveIndex(index);
  };

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, [translateY, activeTab]);

  const handleSearchChange = useCallback(text => {
    console.log('🚀 ~ file: Home.js:14 ~ handleSearchChange ~ text:', text);
    setSearchValue(text);
    // You can perform any additional search-related actions here
  }, []);

  const handleTabSelect = useCallback(index => {
    setActiveTab(index);
    Animated.timing(translateY, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const CustomFlatList = useCallback(
    ({data, numColumns, renderItem}) => {
      return (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
          alwaysBounceVertical={false}>
          <FlatList
            contentContainerStyle={{alignSelf: 'flex-start'}}
            numColumns={numColumns}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            removeClippedSubviews={true}
            initialNumToRender={5}
            maxToRenderPerBatch={10}
            windowSize={10}
            updateCellsBatchingPeriod={50}
          />
        </ScrollView>
      );
    },
    [activeTab],
  );

  const renderWhatsOnYourMindItem = useCallback(({item, index}) => {
    return (
      <View style={[styles.cardContainer, {marginRight: 0}]}>
        <Suspense
          fallback={
            <Text style={{color: colors.black}}>
              Loading WhatsOnYourMindCard...
            </Text>
          }>
          <Animatable.View
            animation={'fadeInUp'}
            duration={100}
            delay={index * 300}
            style={{transform: [{translateY}]}}>
            <WhatsOnYourMindCard
              title="Ramadan Specials"
              imageUrl="https://th.bing.com/th/id/OIP.mLg2psW5bI6LnmK9HB-byQHaE6?w=280&h=186&c=7&r=0&o=5&dpr=1.6&pid=1.7"
            />
          </Animatable.View>
        </Suspense>
      </View>
    );
  }, []);

  const renderItem = useCallback(({item, index}) => {
    return (
      <View style={styles.cardContainer}>
        <Suspense
          fallback={
            <Text style={{color: colors.black}}>Loading ImageCard...</Text>
          }>
          <Animatable.View
            animation={'fadeInUp'}
            duration={100}
            delay={index * 300}
            style={{transform: [{translateY}]}}>
            <ImageCard item={item} />
          </Animatable.View>
        </Suspense>
      </View>
    );
  }, []);

  return (
    <ScrollView style={{flex: 1}}>
      <ScreenWrapper>
        <SearchBar
          placeholder="Restaurant Name or dish"
          value={searchValue}
          onChangeText={handleSearchChange}
          iconColor={'green'}
        />

        <SectionTitle title="FOR YOU" />
        <SegmentedButton
          options={optionsForSegmentBtns}
          onSelect={handleTabSelect}
          activeIndex={activeTab}
          activeColor={colors.green}
          inactiveColor={colors.lightGray}
        />

        <CustomFlatList
          data={data}
          numColumns={numColumns}
          renderItem={renderItem}
        />

        <SectionTitle title="explore" />

        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{gap: responsiveWidth(3)}}
          renderItem={renderItemExplore}
          horizontal
        />

        <SectionTitle title="what's on your mind" />

        <CustomFlatList
          data={data}
          numColumns={numColumns}
          renderItem={renderWhatsOnYourMindItem}
        />

        <SectionTitle title="in this spotlight" />
        <Carousel
          layout="default"
          ref={carouselRef}
          data={carouselItems}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          renderItem={renderCarouselItem}
          onSnapToItem={handleSnapToItem}
        />
        <SectionTitle title="all restaurants" />
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{gap: responsiveWidth(3)}}
          renderItem={renderAllRestaurantItems}
        />
      </ScreenWrapper>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: responsiveWidth(1), // Adjust spacing between cards as needed
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
});
