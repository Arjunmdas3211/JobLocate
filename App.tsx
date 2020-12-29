import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {Home,Jobs} from "./src/pages";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Jobs" component={Jobs} />
          </Tab.Navigator>
      </NavigationContainer>
  );
}


