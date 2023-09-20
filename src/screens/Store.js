/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';
import { RoundButton_Color, LongButton_Icon, SquareButton } from '../utils/CustomButton';

function Store(props) {
    return (
        <SafeAreaView style={styles.home}>

            <View style={styles.top_header}>
                <View style={styles.sub_header_left}>
                    <Text style={styles.text_large}>Store</Text>
                </View>
                <View style={styles.sub_header_right}>
                    <RoundButton_Color
                        iconName={'gift'}
                        iconSize={25}
                        iconColor={'#eb9f1c'}
                        bgColor={'#fff'}
                    />
                    <RoundButton_Color
                        iconName={'bell'}
                        iconSize={25}
                        bgColor={'#fff'}
                    />
                </View>
            </View>

            <View style={styles.bottom_header}>
                <SquareButton iconName='search' style={styles.searchbar_icon} />
                <TextInput style={styles.searchbar} placeholder={'Search'} />
                <LongButton_Icon iconName={'map'} iconSize={23} textColor={'#000'} buttonColor={'#f8f8f6'} text={'Map'} />
            </View>

            <View style={styles.body}>
                <Text style={styles.text_small}>Dalat Hasfarm's Flower Shop Locations</Text>
            </View>

        </SafeAreaView>
    );
}

export default Store;

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
        flexDirection: 'column',
        backgroundColor: '#f7f0af',
        paddingTop: Platform.OS == 'ios' ? 56 : 0,
    },
    top_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottom_header: {
        backgroundColor: '#f8f8f6',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 5,
    },
    sub_header_right: {
        flexDirection: 'row',
        marginRight: 15,
    },
    sub_header_left: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    body1_top: {
        height: 150,
        width: 350,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#bfbaba',
        margin: 20,
    },
    body1_top_left: {
        alignItems: 'center',
    },
    body1_top_right: {
        alignItems: 'center',
    },
    row_wrapper: {
        flexDirection: 'row',
    },
    text_large: {
        fontSize: 24,
        fontWeight: '600',
        marginLeft: 20,
    },
    text_subtitle: {
        fontSize: 20,
        fontWeight: '600',
        margin: 10,
        marginBottom: -7,
        textAlign: 'center',
    },
    text_small_center: {
        fontSize: 15,
        fontWeight: '600',
        marginLeft: 20,
    },
    text_small: {
        fontSize: 15,
        margin: 5,
        padding: 10,
    },
    text_hyperlink: {
        fontSize: 15,
        margin: 5,
        padding: 10,
        textAlign: 'center',
        color: '#eb9f1c',

    },
    image: {
        height: 250,
        width: 390,
        borderRadius: 10,
        margin: 10
    },
    map_btn: {

    },
    searchbar: {
        backgroundColor: '#f1f1f0',
        width: '60%',
        height: 40,
        // margin: 10,
        marginLeft: -10,
        borderRadius: 10,
        padding: 10,
    },
    searchbar_icon: {
        backgroundColor: '#f1f1f0',
        width: 40,
        height: 40,
        // margin: 10,
        marginLeft: 40,
    }
});

