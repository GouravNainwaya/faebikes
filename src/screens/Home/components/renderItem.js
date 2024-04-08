import React, { useRef, useMemo, Suspense } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';
import ImageCard from './ImageCard';

const renderItem = ({ item }) => {
  const translateY = useRef(new Animated.Value(500)).current;

  const startAnimation = useMemo(
    () =>
      Animated.timing(translateY, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    [translateY]
  );

  startAnimation.start();

  return (
    <View style={[styles.cardContainer, { transform: [{ translateY }] }]}>
      <Suspense
        fallback={
          <Text style={{ color: colors.black }}>Loading ImageCard...</Text>
        }>
        <ImageCard item={item} />
      </Suspense>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 10,
    transform: [{ translateY: 500 }], // Initial position off-screen
  },
});

export default renderItem;
