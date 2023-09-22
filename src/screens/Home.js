/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, Pressable, Platform, Image, ScrollView, Dimensions } from 'react-native';
import { RoundButton_Clear, RoundButton_Color, RoundButton_Image, LoginButton, LongButton, PromotionButton, NotificationButton, LongButton_Icon } from '../utils/CustomButton';
import { useNavigation } from '@react-navigation/native';



const Home = (props) => {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.home}>
            <View style={styles.header}>
                <View style={styles.top_header}>
                    <View style={styles.sub_header_left}>
                        <RoundButton_Image
                            image_uri={require('../assets/icons/red-flower-icon.png')}
                            bgColor={'#f7f0af'}
                            iconStyle={styles.icon_image}
                        />
                        <Text style={styles.text_small_center}>Hello friend</Text>
                        <RoundButton_Image
                            image_uri={require('../assets/icons/hello-icon.png')}
                            bgColor={'#f7f0af'}
                            iconStyle={styles.icon_image}
                        />
                    </View>

                    <View style={styles.sub_header_right}>
                        <PromotionButton />
                        <NotificationButton />
                    </View>
                </View>

                <View style={styles.bottom_header}>
                    <Text style={styles.text_subtitle}>Log In</Text>
                    <Text style={styles.text_small}>Use the app to gain points and redeem offers exclusively for Dalat Hasfarm member!</Text>
                    <LoginButton
                        onPressFunction={() => navigation.navigate('Login')}
                    />

                    <View style={styles.row_wrapper}>
                        <Text style={styles.text_small}>Not registered?</Text>
                        <Text style={styles.text_hyperlink}>Register here</Text>
                    </View>
                </View>
            </View>

            <View style={styles.body1}>
                {/* <Text style={styles.text_large}>Home</Text> */}
                <View style={styles.body1_top}>
                    <View style={styles.body1_top_left}>
                        <RoundButton_Image
                            image_uri={require('../assets/icons/scooter-icon.png')}
                            bgColor={'#f7f0af'}
                            iconStyle={styles.icon_image_large}
                            buttonStyle={styles.roundbutton_large}
                        />
                        <Text>Home Delivery</Text>
                    </View>
                    <View style={styles.body1_top_right}>
                        <RoundButton_Image
                            image_uri={require('../assets/icons/shop-icon.png')}
                            bgColor={'#f7f0af'}
                            iconStyle={styles.icon_image_large}
                            buttonStyle={styles.roundbutton_large}
                        />
                        <Text>Store Pickup</Text>
                    </View>
                </View>

                <ScrollView style={styles.body1_bottom} horizontal>
                    <Image
                        source={require('../assets/super-sale.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/super-sale.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/super-sale.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/super-sale.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/super-sale.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/super-sale.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/super-sale.png')}
                        style={styles.image}
                    />
                </ScrollView>
            </View>

            <View>
                <Text style={styles.text_large}>Explore</Text>
                <View style={styles.row_wrapper}>
                    <LongButton
                        buttonColor={'#f7f0af'}
                        text={'Special Offer'}
                    />
                    <LongButton
                        buttonColor={'#f7f0af'}
                        text={'#FlowerCare'}
                    />
                    <LongButton
                        buttonColor={'#f7f0af'}
                        text={'#FlowerLover'}
                    />
                </View>

                <View style={styles.grid}>
                    <View style={styles.subgrid}>
                        <Image
                            source={require('../assets/vouchers/voucher1-large.png')}
                            style={styles.image_grid}
                        />
                        <Text style={styles.text_grid}>DISCOUNT 20,000D FOR ORDERS OVER 450,000D </Text>
                        <LongButton_Icon
                            iconName={'calendar'}
                            iconSize={20}
                            bgColor={'#fff'}
                            text={'20/9'}
                            buttonStyle={styles.voucher_expiration_btn}
                            textStyle={styles.voucher_expiration_text}
                        />
                    </View>
                    <View style={styles.subgrid}>
                        <Image
                            source={require('../assets/vouchers/voucher3-large.png')}
                            style={styles.image_grid}
                        />
                        <Text style={styles.text_grid}>DISCOUNT 50,000D FOR ORDERS OVER 950,000D </Text>
                        <LongButton_Icon
                            iconName={'calendar'}
                            iconSize={20}
                            bgColor={'#fff'}
                            text={'30/9'}
                            buttonStyle={styles.voucher_expiration_btn}
                            textStyle={styles.voucher_expiration_text}
                        />
                    </View>
                    <View style={styles.subgrid}>
                        <Image
                            source={require('../assets/vouchers/voucher2-large.png')}
                            style={styles.image_grid}
                        />
                        <Text style={styles.text_grid}>DISCOUNT 20,000D FOR ORDERS OVER 450,000D </Text>
                        <LongButton_Icon
                            iconName={'calendar'}
                            iconSize={20}
                            bgColor={'#fff'}
                            text={'20/9'}
                            buttonStyle={styles.voucher_expiration_btn}
                            textStyle={styles.voucher_expiration_text}
                        />
                    </View>
                    <View style={styles.subgrid}>
                        <Image
                            source={require('../assets/vouchers/voucher4-large.png')}
                            style={styles.image_grid}
                        />
                        <Text style={styles.text_grid}>DISCOUNT 50,000D FOR ORDERS OVER 950,000D </Text>
                        <LongButton_Icon
                            iconName={'calendar'}
                            iconSize={20}
                            bgColor={'#fff'}
                            text={'30/9'}
                            buttonStyle={styles.voucher_expiration_btn}
                            textStyle={styles.voucher_expiration_text}
                        />
                    </View>

                </View>
            </View>



        </ScrollView>
    );
}

export default Home;

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    home: {
        flex: 1,
    },
    body1: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'column',
        backgroundColor: '#f7f0af',
        paddingTop: Platform.OS == 'ios' ? 56 : 0,
    },
    bottom_header: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        borderRadius: 10,
    },
    top_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 5,
    },
    subgrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: ((width - 50) / 2),
        margin: 5,
        marginBottom: -10,
    },
    sub_header_right: {
        flexDirection: 'row',
        marginRight: 10,
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
        margin: 15,
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
        marginLeft: -10,
        marginRight: -6,
    },
    text_small: {
        fontSize: 15,
        margin: 5,
        padding: 10,
        textAlign: 'center',
    },
    text_hyperlink: {
        fontSize: 15,
        margin: 5,
        padding: 10,
        textAlign: 'center',
        color: '#eb9f1c',
    },
    text_grid: {
        paddingLeft: 18,
    },
    image: {
        borderRadius: 10,
        margin: 10
    },
    icon_image: {
        height: 25,
        width: 25,
    },
    icon_image_large: {
        height: 45,
        width: 45,
    },
    roundbutton_large: {
        height: 80,
        width: 80,
        borderRadius: 50,
    },
    image_grid: {
        width: ((width - 50) / 2),
        borderRadius: 10,
        margin: 10,
    },
    voucher_expiration_btn: {
        marginLeft: -15,
    },
    voucher_expiration_text: {
        color: 'gray',
        fontWeight: '400',
    }
});

