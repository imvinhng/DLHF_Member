/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { RoundButton } from '../../utils/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Dash from 'react-native-dash';
import LinearGradient from 'react-native-linear-gradient';


const DATA = [
    {
        id: 1,
        description: '40% Discount for the first order over 500K',
        expiration_date: '24/10/2023',
        image_uri: require('../../assets/images/vouchers/voucher1.png'),
    },
    {
        id: 2,
        description: '40% Discount for the first order over 500K',
        expiration_date: '24/10/2023',
        image_uri: require('../../assets/images/vouchers/voucher2.png'),
    },
    {
        id: 3,
        description: '40% Discount for the first order over 500K',
        expiration_date: '24/10/2023',
        image_uri: require('../../assets/images/vouchers/voucher3.png'),
    },
    {
        id: 4,
        description: '40% Discount for the first order over 500K',
        expiration_date: '24/10/2023',
        image_uri: require('../../assets/images/vouchers/voucher4.png'),
    },
];

const Item = ({ description, expiration_date, image_uri }) => {
    return (

        <TouchableOpacity style={styles.item}>
            <View style={{ height: 20, width: 15, borderRadius: 20, backgroundColor: '#efefef', position: 'absolute', top: -12, left: 95 }} />
            <Image style={styles.image} source={image_uri} />
            <Dash
                style={styles.vertical_dashed_line}
                dashGap={3}
                dashColor={'#ccc'}
                dashThickness={4}
                dashStyle={{ borderRadius: 100, overflow: 'hidden' }}
            />
            <Dash
                style={styles.vertical_dashed_line_inner}
                dashGap={4}
                dashColor={'#f0f0f0'}
                dashThickness={3}
                dashLength={2}
                dashStyle={{ borderRadius: 100, overflow: 'hidden' }}
            />

            <View style={styles.column_wrapper_custom}>
                <Text style={styles.text_above}>{description}</Text>
                <Text style={styles.text_below}>Expires on {expiration_date}</Text>
            </View>
            <View style={{ height: 20, width: 15, borderRadius: 20, backgroundColor: '#efefef', position: 'absolute', top: 95, left: 95 }} />
        </TouchableOpacity>
    )
};

function Promotions(props) {
    const navigation = useNavigation();

    return (

        <SafeAreaView style={styles.home}>

            <View style={styles.header}>
                <RoundButton
                    bgColor={'#fff'}
                    iconName={'angle-left'}
                    iconSize={25}
                    onPressFunction={() => navigation.navigate('Home')}
                />
                <Text style={styles.title}>Your Vouchers</Text>
            </View>

            <View style={styles.body}>
                <Text style={styles.subtitle}>Ready-to-use</Text>

                <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                        <Item
                            description={item.description}
                            expiration_date={item.expiration_date}
                            image_uri={item.image_uri}
                        />
                    }
                    keyExtractor={item => item.id}
                />
            </View>

        </SafeAreaView>
    );
}

export default Promotions;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#fff'
    },
    body: {
        backgroundColor: '#efefef',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
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
    text_above: {
        fontSize: 15,
        fontWeight: '500',
    },
    text_below: {
        fontSize: 12,
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
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 3,
        marginHorizontal: 12,
        height: 100,
        flexDirection: 'row',
        borderRadius: 13,
    },
    column_wrapper_custom: {
        flexDirection: 'column',
        // backgroundColor: 'red',
        width: 250,
        marginLeft: 35,
        marginTop: -5,
    },
    vertical_dashed_line: {
        width: 5,
        height: 80,
        flexDirection: 'column',
        position: 'absolute',
        left: 100,
        alignSelf: 'center',
    },
    vertical_dashed_line_inner: {
        width: 2,
        height: 79,
        flexDirection: 'column',
        position: 'absolute',
        left: 101,
        alignSelf: 'center',
    },
});

