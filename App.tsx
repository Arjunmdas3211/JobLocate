import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Buttons } from "./src/components/atoms";
import {Maps} from "./src/components/atoms/Maps";

export default function App() {
  return (
    <View style={styles.container}>
        <Maps />
      <Buttons title='Search This Location' onPress={() => alert("hello")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 0 : 24
  },
});
