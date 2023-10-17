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
import GlobalStyle from '../../assets/style/GlobalStyle';

function More(props) {
    const navigation = useNavigation();


    return (
        <ScrollView style={styles.home}>

            <View style={styles.header}>
                <View style={styles.sub_header_left}>
                    <Text style={[styles.title_margin, GlobalStyle.screen_title]}>More</Text>
                </View>

                <View style={styles.sub_header_right}>
                    <PromotionButton />
                    <NotificationButton />
                </View>
            </View>

            <View style={styles.body}>
                <Text style={[styles.heading_margin, GlobalStyle.heading]}>Utilities</Text>

                <View style={styles.grid}>
                    <SquareButton_ImageIcon_Text
                        image_uri={require('../../assets/images/icons/checklist-icon.png')}
                        text={'Order History'}
                        buttonStyle={styles.image_grid}
                        bgColor={'#fff'}
                        onPressFunction={() => navigation.navigate('More', { screen: 'OrderHistoryScreen' })}
                    />
                    <SquareButton_ImageIcon_Text
                        image_uri={require('../../assets/images/icons/piechart-icon.png')}
                        text={'Analytics'}
                        buttonStyle={styles.image_grid}
                        bgColor={'#fff'}
                        onPressFunction={() => navigation.navigate('More', { screen: 'AnalyticsScreen' })}
                    />
                    <SquareButton_ImageIcon_Text
                        image_uri={require('../../assets/images/icons/policy-icon.png')}
                        text={'Member Policy'}
                        buttonStyle={styles.image_grid}
                        bgColor={'#fff'}
                    />
                    <SquareButton_ImageIcon_Text
                        image_uri={require('../../assets/images/icons/red-flower-icon.png')}
                        text={"DLHF News"}
                        buttonStyle={styles.image_grid}
                        bgColor={'#fff'}
                    />
                </View>

                <Text style={[styles.heading_margin, GlobalStyle.heading]}>Support</Text>
                <LongButton_Icon
                    iconName={'star'}
                    iconSize={20}
                    iconColor={'#000'}
                    buttonColor={'#fff'}
                    text={'Order Review'}
                    buttonStyle={[styles.longbutton_icon, GlobalStyle.box_shadow]}
                    textStyle={styles.text_longbutton_icon}
                    iconStyle={styles.icon_longbutton}
                />
                <LongButton_Icon
                    iconName={'comment-alt'}
                    iconSize={20}
                    iconColor={'#000'}
                    buttonColor={'#fff'}
                    text={'Contact Us'}
                    buttonStyle={[styles.longbutton_icon, GlobalStyle.box_shadow]}
                    textStyle={styles.text_longbutton_icon}
                    iconStyle={styles.icon_longbutton}
                />

                <Text style={[styles.heading_margin, GlobalStyle.heading]}>Account</Text>
                <LongButton_Icon
                    iconName={'user'}
                    iconSize={20}
                    iconColor={'#000'}
                    buttonColor={'#fff'}
                    text={'Personal Information'}
                    buttonStyle={[styles.longbutton_icon, GlobalStyle.box_shadow]}
                    textStyle={styles.text_longbutton_icon}
                    iconStyle={styles.icon_longbutton}
                    onPressFunction={() => navigation.navigate('More', { screen: 'PersonalInfoScreen' })}
                />
                <LongButton_Icon
                    iconName={'map-marker-alt'}
                    iconSize={20}
                    iconColor={'#000'}
                    buttonColor={'#fff'}
                    text={'Saved Address'}
                    buttonStyle={[styles.longbutton_icon, GlobalStyle.box_shadow]}
                    textStyle={styles.text_longbutton_icon}
                    iconStyle={styles.icon_longbutton}
                />
                <LongButton_Icon
                    iconName={'cog'}
                    iconSize={20}
                    iconColor={'#000'}
                    buttonColor={'#fff'}
                    text={'Settings'}
                    buttonStyle={[styles.longbutton_icon, GlobalStyle.box_shadow]}
                    textStyle={styles.text_longbutton_icon}
                    iconStyle={styles.icon_longbutton}
                />
                <LongButton_Icon
                    iconName={'door-open'}
                    iconSize={20}
                    iconColor={'#000'}
                    buttonColor={'#fff'}
                    text={'Logout'}
                    buttonStyle={[styles.longbutton_icon, GlobalStyle.box_shadow]}
                    textStyle={styles.text_longbutton_icon}
                    iconStyle={styles.icon_longbutton}
                    onPressFunction={() =>
                        navigation.navigate('Home', { screen: 'HomeScreen', params: { loggedIn: false } })
                    }
                />

            </View>

        </ScrollView>
    );
}

export default More;

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#f8f8f6'
    },
    body: {
        backgroundColor: '#efefef',
        height: '100%',
    },
    title_margin: {
        marginLeft: '7%',
    },
    heading_margin: {
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
        backgroundColor: '#f8f8f6',
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

    },
    text_longbutton_icon: {
        fontSize: 16,
        marginLeft: 5,
        fontWeight: '600'
    },
    icon_longbutton: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
