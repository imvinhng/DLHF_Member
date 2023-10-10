/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { PromotionButton, SquareButton_ImageIcon_Text, LongButton_Icon, NotificationButton } from '../../utils/CustomButton';
import { useNavigation } from '@react-navigation/native';
import PersonalInfo from '../main/PersonalInfo';

function OrderHistory(props) {
    const navigation = useNavigation();


    return (
        <ScrollView style={styles.home}>

            <View style={styles.header}>
                <View style={styles.sub_header_left}>
                    <Text style={styles.title}>Order History</Text>
                </View>

                <View style={styles.sub_header_right}>
                    <PromotionButton />
                    <NotificationButton />
                </View>
            </View>

            <View style={styles.body}>
                <Text>40/10/2022</Text>
                <Text>40/10/2023</Text>
                <Text>Attention: You can view your Order History within 1 year from today</Text>
                <Text>Search</Text>

                {/* Insert chart */}

            </View>

        </ScrollView>
    );
}

export default OrderHistory;

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    home: {
        flex: 1,
        // backgroundColor: '#fff'
    },
    body: {
        backgroundColor: '#efefef',
        flex: 1,
        height: '100%',
    },
    title: {
        fontSize: 25,
        marginLeft: '7%',
    },
    subtitle: {
        fontSize: 22,
        fontWeight: '500',
        margin: 15,
        marginLeft: '5%',
        marginBottom: 10,
    },
    text_above: {
        fontSize: 16,
        fontWeight: '500',
    },
    text_below: {
        fontSize: 13,
        fontWeight: '500',
        marginTop: 22,
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
    column_wrapper_custom: {
        flexDirection: 'column',
        // backgroundColor: 'red',
        width: 280,
        marginLeft: 20,
        marginTop: -5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingTop: Platform.OS == 'ios' ? 56 : 10,
        paddingBottom: 10,
    },
    sub_header_left: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    sub_header_right: {
        flexDirection: 'row',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 5,
    },
    image_grid: {
        height: 100,
        width: ((width - 50) / 2),
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    },
    longbutton_icon: {
        marginLeft: 20,
        margin: 0,
        height: 50,
        width: '90%',
        alignItems: 'center',
        paddingLeft: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'lightgray',

        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    text_longbutton_icon: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 5,
    },
    icon_longbutton: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
