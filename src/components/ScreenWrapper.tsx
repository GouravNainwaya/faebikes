import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '../utlis/colors';

const ScreenWrapper = ({children, extraStyles}) => {

  return (
    // <View style={{flex: 1, backgroundColor: colors.secondary}}>
    <SafeAreaView style={[{flex: 1,backgroundColor: colors.fullColor,paddingHorizontal: responsiveWidth(3)}, extraStyles]}> 
        {children}
    </SafeAreaView>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({})