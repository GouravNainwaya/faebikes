import React, {useRef, lazy, Suspense} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ActivityIndicator, View} from 'react-native';
import Home from '../screens/Home/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import History from '../screens/History/History';
import Money from '../screens/Money/Money';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Stack = createNativeStackNavigator();

// Lazy load screen components
const LazyHome = lazy(() => import('../screens/Home/Home'));
const Tab = createBottomTabNavigator();

// Fallback component for Suspense
const SuspenseFallback = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    }}>
    <ActivityIndicator
      size="large"
      color="orange"
      style={{backgroundColor: 'transparent'}}
    />
  </View>
);
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Payment">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
const Navigation = () => {
  const navigationRef = useRef();

  return (
    <NavigationContainer
      ref={navigationRef}
      fallback={<ActivityIndicator size="large" color="orange" />}>
      <Tab.Navigator
      initialRouteName='History'
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let IconComponent;
            let iconName;

            if (route.name === 'Delivery') {
              IconComponent = MaterialIcons;
              iconName = focused ? 'delivery-dining' : 'delivery-dining';
            } else if (route.name === 'History') {
              IconComponent = Foundation;
              iconName = focused ? 'clipboard-notes' : 'clipboard-notes';
            } else if (route.name === 'Money') {
              IconComponent = SimpleLineIcons;
              iconName = focused ? 'wallet' : 'wallet';
            }

            return <IconComponent name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray'
        })}
        >
        <Tab.Screen
          name="Delivery"
          options={{headerShown: false}}
          component={HomeStack}
        />
        <Tab.Screen name="History" component={History} />
        <Tab.Screen
          options={{headerShown: false}}
          name="Money"
          component={Money}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
