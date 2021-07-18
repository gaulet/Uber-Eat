import React from 'react';
// import 'react-devtools'
import { Provider } from 'react-redux'

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

import { Restaurant, OrderDelivery, MapViews } from './src/components/screens'
import Tabs from './src/navigation/tabs'

import configureStore from './src/store'
const store = configureStore();
const Stack = createStackNavigator();

import { useFonts } from 'expo-font';

const App = () => {

  const [loaded] = useFonts({
    "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
    "Roboto-Black": require('./assets/fonts/Roboto-Black.ttf'),
    "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={'Home'}
        >
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
          <Stack.Screen name="MapViews" component={MapViews} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;