/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

function More(props) {
    return (
        <SafeAreaView style={styles.body}>

            <Text style={styles.text}>More</Text>

        </SafeAreaView>
    );
}

export default More;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: '600',
    },
});

