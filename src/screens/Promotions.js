/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, FlatList, Image } from 'react-native';
import { RoundButton_Clear } from '../utils/CustomButton';

function Promotions(props) {
    return (

        <SafeAreaView style={styles.home}>

            <View style={styles.header}>
                <RoundButton_Clear bgColor={'#fff'} iconName={'angle-left'} iconSize={25} />
                <Text style={styles.title}>Your Promotions</Text>
            </View>

            <View style={styles.body}>
                <Text style={styles.subtitle}>Ready-to-use</Text>

            </View>

        </SafeAreaView>
    );
}

export default Promotions;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#f8f8f6'
    },
    body: {
        backgroundColor: '#d8d8d8',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: Platform.OS == 'ios' ? 56 : 0,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        marginLeft: '15%',
    },
    subtitle: {
        fontSize: 22,
        fontWeight: '500',
        margin: 15,
        // marginLeft: '15%',
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 10,
        margin: -10,
    },
    item: {
        backgroundColor: '#f8f8f6',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        height: 100,
        flexDirection: 'row',
        borderRadius: 10,
    },
});

