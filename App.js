import React from 'react';
import {NavigationContainer}from '@react-navigation/native';
import {CardStyleInterpolators,createStackNavigator}from '@react-navigation/stack';
import { Image,StyleSheet,TouchableOpacity,View } from 'react-native';

import HomeScreen from './screen/HomeScreen';
import MessageScreen from './screen/MessageScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
        <Stack.Screen 
        name=" " 
        component={HomeScreen}
        options={{ 
          headerStyle: {
            height:0,
          },
          
        }}
        /> 
      
        <Stack.Screen
          name="MessageScreen"
          component={MessageScreen}
          options={{ 
            title:" ",
            headerStyle: {
              height:0,
              backgroundColor:'#fafafa',
            },
            headerLeft: null
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerLeft:{
    marginLeft: 10,
    width: 356,
    height: 35
  },
  headerRight:{
    marginRight: 10,
    width: 30,
    height: 35
  },
});

export default App;