import React from 'react';
import { StyleSheet, View } from 'react-native';

export const BlackLine = () => {
    return (
        <View style={{ width: '90%', height: 0.7, backgroundColor: '#000' }} />
    )
}
export const OrangeLine = () => {
    return (
        <View style={{ width: '90%', height: 1, backgroundColor: '#F58831' }} />
    )
}
export const BlackLine_Full = () => {
    return (
        <View style={{ width: '100%', height: 0.7, backgroundColor: '#000' }} />
    )
}
export const OrangeLine_Full = () => {
    return (
        <View style={{ width: '100%', height: 1, backgroundColor: '#F58831' }} />
    )
}
export const GrayLine_Full = () => {
    return (
        <View style={{ width: '100%', height: 1, backgroundColor: 'lightgray' }} />
    )
}

export const Triangle = (props) => {
    return (
        <View style={[styles.triangle, props.style]} />
    )
}

const styles = StyleSheet.create({
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 20,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "red",
    },
})