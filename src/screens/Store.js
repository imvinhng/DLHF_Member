/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

function Store(props) {
    return (
        <SafeAreaView style={styles.body}>

            <Text style={styles.text}>Store</Text>

        </SafeAreaView>
    );
}

export default Store;

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

