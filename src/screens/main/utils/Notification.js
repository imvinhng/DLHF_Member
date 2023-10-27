/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, FlatList, Image, Dimensions } from 'react-native';
import { RoundButton } from '../../../utils/CustomButton';
import { useNavigation } from '@react-navigation/native';
import GlobalStyle from '../../../assets/style/GlobalStyle';
import { backgroundGray } from '../../../assets/style/Colors';
import { HeaderBack } from '../../../utils/Header';
import { GrayLine_Full } from '../../../utils/Line';

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
            <View style={styles.iconContainer}>
                <RoundButton iconName={'bell'} bgColor={'lightgray'} iconSize={25} buttonStyle={styles.bell_btn} />
            </View>

            <View style={styles.textboxContainer}>
                <View style={styles.row_wrapper}>
                    <Text style={[GlobalStyle.item_title, styles.noti_title]}>{title}</Text>
                    <Text style={[GlobalStyle.item_footer, styles.noti_date]}>{date}</Text>
                </View>

                <Text style={[GlobalStyle.item_subtitle, styles.noti_message]} numberOfLines={2}>{message}</Text>
            </View>
        </View>
    )
};

function Notification(props) {
    const navigation = useNavigation();

    return (

        <View style={styles.home}>

            <HeaderBack title={'Notifications'} navDest={'Home'} />

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

        </View>
    );
}

export default Notification;

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');
const itemHeight = 100; const itemWidth = ScreenWidth;
const iconContainerWidth = itemWidth * 0.2;
const iconContainerHeight = itemHeight;
const textboxContainerWidth = itemWidth * 0.8;
const textboxContainerHeight = itemHeight;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#fff'
    },
    body: {
        backgroundColor: backgroundGray,
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 25,
        marginLeft: '5%',
        // marginTop: -5,
    },
    noti_title: {
        fontSize: 14,
        fontWeight: '700',
        position: 'absolute',
        top: textboxContainerHeight * 0.18,
    },
    noti_message: {
        fontSize: 13,
        fontWeight: '500',
        position: 'absolute',
        bottom: textboxContainerHeight * 0.18,
        width: textboxContainerWidth * 0.9,
        lineHeight: 19,
    },
    noti_date: {
        fontSize: 13,
        fontWeight: '500',
        position: 'absolute',
        right: 10,
        top: 10,
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 10,
        margin: -10,
    },
    item: {
        backgroundColor: '#fff',
        height: itemHeight,
        width: itemWidth,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: 'lightgray',
        justifyContent: 'left',
        alignItems: 'center',
    },
    iconContainer: {
        height: iconContainerHeight,
        width: iconContainerWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textboxContainer: {
        width: textboxContainerWidth,
        height: textboxContainerHeight,
        // backgroundColor: 'yellow'
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

