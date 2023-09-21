/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, FlatList, Image } from 'react-native';
import { RoundButton_Color, LongButton_Icon, SquareButton } from '../utils/CustomButton';
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: 1,
        location: 'Nơ Trang Long',
        address: '56 Nơ Trang Long, Phường 14, Bình Thạnh'
    },
    {
        id: 2,
        location: 'Nơ Trang Long',
        address: '56 Nơ Trang Long, Phường 14, Bình Thạnh'
    },
    {
        id: 3,
        location: 'Nơ Trang Long',
        address: '56 Nơ Trang Long, Phường 14, Bình Thạnh'
    },
    {
        id: 4,
        location: 'Nơ Trang Long',
        address: '56 Nơ Trang Long, Phường 14, Bình Thạnh'
    },
    {
        id: 5,
        location: 'Nơ Trang Long',
        address: '56 Nơ Trang Long, Phường 14, Bình Thạnh'
    },
    {
        id: 6,
        location: 'Nơ Trang Long',
        address: '56 Nơ Trang Long, Phường 14, Bình Thạnh'
    },
    {
        id: 7,
        location: 'Nơ Trang Long',
        address: '56 Nơ Trang Long, Phường 14, Bình Thạnh'
    },
];

const Item = ({ location, address }) => (
    <View style={styles.item}>
        <Image style={styles.image} source={require('../assets/storefront.png')} />

        <View style={styles.column_wrapper_custom}>
            <Text style={styles.text_smaller}>Dalat Hasfarm {location}</Text>
            <Text style={styles.text_small_bold}>{address}</Text>
            <Text style={styles.text_light}>0.2 km away</Text>
        </View>
    </View>
);

function Store(props) {
    const navigation = useNavigation();

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
                <LongButton_Icon
                    iconName={'map'}
                    iconSize={23}
                    textColor={'#000'}
                    buttonColor={'#f8f8f6'}
                    text={'Map'}
                    onPressFunction={() => navigation.navigate('Map')}
                />
            </View>

            <View style={styles.body}>
                <Text style={styles.text_small}>Dalat Hasfarm's Flower Shop Locations</Text>

                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item location={item.location} address={item.address} />}
                    keyExtractor={item => item.id}
                />
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
    column_wrapper_custom: {
        flexDirection: 'column',
        marginLeft: 20,
        marginTop: -5,
    },
    text_large: {
        fontSize: 24,
        fontWeight: '600',
        marginLeft: 20,
    },
    text_subtitle: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
    },
    text_small: {
        fontSize: 15,
        margin: 5,
        padding: 10,
    },
    text_smaller: {
        fontSize: 13,
        fontWeight: '300',
    },
    text_small_bold: {
        fontSize: 13,
        fontWeight: '600',
    },
    text_light: {
        fontSize: 13,
        fontWeight: '200',
        marginTop: 25,
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 10,
        margin: -10,
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

