/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, FlatList, Image } from 'react-native';
import { RoundButton } from '../utils/CustomButton';
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: 1,
        description: '40% Discount for the first order over 500K',
        expiration_date: '24/10/2023',
        image_uri: require('../assets/vouchers/voucher1.png'),
    },
    {
        id: 2,
        description: '40% Discount for the first order over 500K',
        expiration_date: '24/10/2023',
        image_uri: require('../assets/vouchers/voucher2.png'),
    },
    {
        id: 3,
        description: '40% Discount for the first order over 500K',
        expiration_date: '24/10/2023',
        image_uri: require('../assets/vouchers/voucher3.png'),
    },
    {
        id: 4,
        description: '40% Discount for the first order over 500K',
        expiration_date: '24/10/2023',
        image_uri: require('../assets/vouchers/voucher4.png'),
    },
];

const Item = ({ description, expiration_date, image_uri }) => {
    return (

        <View style={styles.item}>
            <Image style={styles.image} source={image_uri} />

            <View style={styles.column_wrapper_custom}>
                <Text style={styles.text_above}>{description}</Text>
                <Text style={styles.text_below}>Expires on {expiration_date}</Text>
            </View>
        </View>
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
        backgroundColor: '#d8d8d8',
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
});

