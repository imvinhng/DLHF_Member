/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

function Promotions(props) {
    return (
        <SafeAreaView style={styles.body}>

            <Text style={styles.text}>Promotions</Text>

        </SafeAreaView>
    );
}

export default Promotions;

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

