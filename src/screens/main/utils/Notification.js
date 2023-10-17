/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, FlatList, Image } from 'react-native';
import { RoundButton } from '../../../utils/CustomButton';
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: 1,
        title: 'Enjoy your flowers!',
        message: 'Check your Reward wallet to receive gifts. Hope Dong have a happy day!',
        date: '11/12',
    },
    {
        id: 2,
        title: 'Congrats on your new ranking - Silver',
        // need to find a replacement word for members (instead of florist)
        message: 'Hey Dong! Every successful order accrue reward points. You can use it to upgrade your membership ranking.',
        date: '11/12',
    },
    {
        id: 3,
        title: 'Your order has been delivered',
        message: 'Hey Dong! Your order has been delivered to your Dalat Hasfarm office in Ho Chi Minh City Binh Thanh District',
        date: '08/03',
    },
    {
        id: 4,
        title: 'Need a special gift for her on March 8?',
        message: "Hey Dong! Only another week until International Women's Day. Have you picked out the perfect bouquet for her?",
        date: '01/03',
    },
    {
        id: 5,
        title: 'Sweet Feburary 14',
        message: 'Only a few more days until Valentine. Have Dong prepared Chocolate and flowers for that special someone?',
        date: '07/02',
    },
    {
        id: 6,
        title: 'Enjoy your flowers!',
        message: 'Check your Reward wallet to receive gifts. Hope Dong have a happy day!',
        date: '01/02',
    },
    {
        id: 7,
        title: 'Enjoy your flowers!',
        message: 'Check your Reward wallet to receive gifts. Hope Dong have a happy day!',
        date: '12/01',
    },
];

const Item = ({ title, message, date }) => {
    return (

        <View style={styles.item}>
            <RoundButton iconName={'bell'} bgColor={'lightgray'} iconSize={25} buttonStyle={styles.bell_btn} />

            <View style={styles.column_wrapper_custom}>
                <View style={styles.row_wrapper}>
                    <Text style={styles.noti_title}>{title}</Text>
                    <Text style={styles.noti_date}>{date}</Text>
                </View>

                <Text style={styles.noti_message}>{message}</Text>
            </View>
        </View>
    )
};

function Notification(props) {
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
                <Text style={styles.title}>Notifications</Text>
            </View>

            <View style={styles.body}>

                <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                        <Item
                            title={item.title}
                            message={item.message}
                            date={item.date}
                        />
                    }
                    keyExtractor={item => item.id}
                />
            </View>

        </SafeAreaView>
    );
}

export default Notification;

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
    noti_title: {
        fontSize: 14,
        fontWeight: '700',
    },
    noti_message: {
        fontSize: 13,
        fontWeight: '500',
        marginTop: 22,
        lineHeight: 19,
    },
    noti_date: {
        fontSize: 13,
        fontWeight: '500',
        position: 'absolute',
        right: -25,
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
        height: 100,
        width: '100%',
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: 'lightgray',
        justifyContent: 'left',
        alignItems: 'center',
    },
    column_wrapper_custom: {
        flexDirection: 'column',
        width: 280,
        marginLeft: 20,
        marginTop: -5,
    },
    row_wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bell_btn: {
        margin: -6,
    }
});

