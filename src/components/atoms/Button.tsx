import React, {FC, ReactNode} from "react";
import {Button, NativeSyntheticEvent, NativeTouchEvent, StyleSheet} from "react-native";


interface Props {
    children?: ReactNode;
    title: "string",
    onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void
}

export const Buttons: FC<Props> = ({children,onPress,title}) => {
    return (
        <Button onPress={onPress} title={title}  style={styles.container}>{children}</Button>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:60
    }
});