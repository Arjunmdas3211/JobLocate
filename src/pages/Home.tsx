import {Buttons, Maps} from "../components/atoms";
import {StatusBar} from "expo-status-bar";
import {Platform, StyleSheet, View} from "react-native";
import React, {FC} from "react";

export const Home: FC = () => {
    return(
        <View style={styles.container}>
            <Maps />
            <Buttons title='Search This Location' onPress={() => alert("hello")}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 0 : 24
    },
});