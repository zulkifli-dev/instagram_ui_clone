// In App.js in a new project

import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FirstScreen, HomeScreen, LoginScreen, ProfileScreen } from './src/screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigation from './src/Component/TabNavigation';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="TabApp" component={TabApp} />
          <Stack.Screen name="FirstScreen" component={FirstScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const Home = () => {
  return (
    <View>

    </View>
  )
}

function TabApp() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <TabNavigation {...props} />} >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Plus" component={Home} />
      <Tab.Screen name="Favorite" component={Home} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}



export default App;