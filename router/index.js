import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import InitialScreen from '../pages/InitialScreen';
import Categories from '../pages/Categories';
import List from '../pages/List';
import Detail from '../pages/Detail';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={InitialScreen} name="InitialScreen" />
        <Stack.Screen component={Categories} name="Categories" />
        <Stack.Screen component={List} name="List" />
        <Stack.Screen component={Detail} name="Detail" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
