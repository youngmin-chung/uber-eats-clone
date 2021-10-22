import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail'
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './redux/store'

const store = configureStore()

export default function RootNavigation() {
  const Stack = createStackNavigator()

  const screenOption = {
    headerShown: false,
  }

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={screenOption}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  )
}
