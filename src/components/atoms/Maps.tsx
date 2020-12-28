import MapView from 'react-native-maps';
import React, {FC} from "react";
import {Dimensions, View, StyleSheet} from "react-native";

export const Maps: FC = () => {
    return(
        <View>
        <MapView style={styles.map} />
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});