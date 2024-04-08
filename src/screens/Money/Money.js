import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'; // Assuming you have FontAwesome icons installed
import EvilIcons from 'react-native-vector-icons/EvilIcons'; // Assuming you have FontAwesome icons installed
import Ionicons from 'react-native-vector-icons/Ionicons'; // Assuming you have FontAwesome icons installed
import colors from '../../utlis/colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {SectionTitle} from '../Home/Home';
import MoneyCard from './components.MoneyCard';

const Money = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <ScreenWrapper
        extraStyles={{paddingHorizontal: 0, backgroundColor: '#F2F1FE'}}>
        <View
          style={{
            alignItems: 'center',
            padding: responsiveWidth(3),
            paddingBottom: 0,
            backgroundColor: '#17163A',
            width: '100%',
            borderBottomLeftRadius: responsiveWidth(5),
            borderBottomRightRadius: responsiveWidth(5),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <EvilIcons
                name="location"
                size={responsiveFontSize(4)}
                color={colors.background}
              />
              <View style={{}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: colors.background,
                      fontSize: responsiveFontSize(2.3),
                      fontWeight: '700',
                    }}>
                    Home
                  </Text>
                  <AntDesign
                    name="down"
                    size={responsiveFontSize(2)}
                    color={colors.background}
                    style={{marginLeft: responsiveWidth(1)}}
                  />
                </View>
                <Text
                  style={{
                    color: colors.background,
                    fontSize: responsiveFontSize(1.7),
                    fontWeight: '500',
                    marginTop: responsiveHeight(0.5),
                  }}>
                  chorsiya press neemuch ...
                </Text>
              </View>
            </View>

            <View style={{marginLeft: 'auto'}}>
              <Image
                source={{
                  uri: 'https://www.bing.com/th?id=OIP.dozEvAlhTqQRy_QO0M9H8AHaE8&w=156&h=110&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2',
                }}
                style={{
                  width: responsiveWidth(12),
                  height: responsiveWidth(12),
                  borderRadius: responsiveWidth(12),
                }}
              />
            </View>
          </View>
          <Text
            style={{
              color: colors.background,
              fontSize: responsiveFontSize(3),
              fontWeight: '700',
              marginVertical: responsiveHeight(4),
              letterSpacing: 4,
            }}>
            MONEY
          </Text>
        </View>

        <View
          style={{
            backgroundColor: colors.background,
            borderRadius: responsiveWidth(3),
            padding: responsiveWidth(3),
            margin: responsiveWidth(4),
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 2,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
              <View
                style={{
                  backgroundColor: '#ccc',
                  borderRadius: responsiveWidth(13),
                  width: responsiveWidth(13),
                  height: responsiveWidth(13),
                  padding: responsiveWidth(2),
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <Ionicons
                  name="wallet-outline"
                  size={responsiveFontSize(3)}
                  color="tomato"
                  style={{transform: [{rotate: '-10deg'}]}}
                />
              </View>
              <Text
                style={{
                  color: colors.fullColorInverse,
                  fontSize: responsiveFontSize(2.1),
                  fontWeight: '600',
                }}>
                Zomato Money
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: colors.fullColorInverse,
                  fontSize: responsiveFontSize(2.1),
                  fontWeight: '600',
                  marginRight: responsiveWidth(3),
                }}>
                $0
              </Text>
              <TouchableOpacity>
                <AntDesign
                  name="up"
                  size={responsiveFontSize(2)}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: responsiveHeight(2),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
              <Text
                style={{
                  color: colors.fullColorInverse,
                  fontSize: responsiveFontSize(2.1),
                  fontWeight: '600',
                }}>
                Gift Card Blanace
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: colors.fullColorInverse,
                  fontSize: responsiveFontSize(2.1),
                  fontWeight: '600',
                  marginRight: responsiveWidth(3),
                }}>
                $0
              </Text>
              <TouchableOpacity>
                <AntDesign
                  name="pluscircleo"
                  size={responsiveFontSize(2)}
                  color={colors.orange}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: responsiveHeight(2),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
              <Text
                style={{
                  color: colors.fullColorInverse,
                  fontSize: responsiveFontSize(2.1),
                  fontWeight: '600',
                }}>
                Zomato Credits
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: colors.fullColorInverse,
                  fontSize: responsiveFontSize(2.1),
                  fontWeight: '600',
                  marginRight: responsiveWidth(3),
                }}>
                $0
              </Text>
            </View>
          </View>
        </View>

        <SectionTitle
          title="wallet"
          textStyle={{fontSize: responsiveFontSize(2.5)}}
        />
        <MoneyCard
          title="Create Wallet"
          imageUrl="https://th.bing.com/th/id/OIP._24QFY1Z276_pJwv3m5lDwHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7"
          onPress={null}
        />
        <SectionTitle
          title="gift cards"
          textStyle={{fontSize: responsiveFontSize(2.5)}}
        />
        <MoneyCard
          title="Create Wallet"
          imageUrl="https://th.bing.com/th/id/OIP._24QFY1Z276_pJwv3m5lDwHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7"
          onPress={null}
        />
      </ScreenWrapper>
    </ScrollView>
  );
};

export default Money;

const styles = StyleSheet.create({});
