/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GlobalStyle from '../../assets/style/GlobalStyle';

function Order(props) {
    return (
        <View style={styles.body}>

            <Text style={[styles.text, GlobalStyle.screen_title]}>Orders</Text>
            <Text style={[{ marginTop: 50 }]}>(Coming Soon)</Text>

        </View>
    );
}

export default Order;

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

