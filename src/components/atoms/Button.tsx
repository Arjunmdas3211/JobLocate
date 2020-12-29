import React, {FC, ReactNode} from "react";
import {Button, NativeSyntheticEvent, NativeTouchEvent, Platform, StyleSheet, View} from "react-native";


interface Props {
    children?: ReactNode;
    title: "string",
    onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void
}

export const Buttons: FC<Props> = ({children,onPress,title}) => {
    return (
        <View  style={styles.container}>
        <Button onPress={onPress} title={title} >{children}</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        position: "absolute",
        bottom: 140,
        marginLeft:100
    }
});