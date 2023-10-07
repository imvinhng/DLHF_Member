import React from 'react';
import { View } from 'react-native';

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