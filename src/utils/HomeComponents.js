import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, ScrollView, Dimensions, TextInput } from 'react-native';
import { RoundButton_Image, LoginButton, PromotionButton, NotificationButton, RadioHeaderCustom } from './CustomButton';
import { useNavigation } from '@react-navigation/native';

const TopHeader = () => {
    return (
        <View style={styles.top_header}>
            <View style={styles.sub_header_left}>
                <RoundButton_Image
                    image_uri={require('../assets/images/icons/red-flower-icon.png')}
                    bgColor={'#FEF7E5'}
                    iconStyle={styles.icon_image}
                />
                <Text style={styles.text_small_center}>Hello friend</Text>
                <RoundButton_Image
                    image_uri={require('../assets/images/icons/hello-icon.png')}
                    bgColor={'#FEF7E5'}
                    iconStyle={styles.icon_image}
                />
            </View>

            <View style={styles.sub_header_right}>
                <PromotionButton />
                <NotificationButton />
            </View>
        </View>

    )
}

const BottomHeader = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.bottom_header}>
            <Text style={styles.text_subtitle}>Log In</Text>
            <Text style={styles.text_description}>Use the app to gain points and redeem offers exclusively for Dalat Hasfarm member!</Text>
            <LoginButton
                bgColor={'#eb9f1c'}
                textColor={'#fff'}
                style
                onPressFunction={() => navigation.navigate('Auth', { screen: 'Login' })}
            />

            <View style={styles.row_wrapper}>
                <Text style={styles.text_small}>Not registered?</Text>
                <Text style={styles.text_hyperlink} onPress={() => navigation.navigate('Auth', { screen: 'Register' })}>Register here</Text>
            </View>
        </View>
    )
}


const TopHeader_LoggedIn = () => {
    return (
        <View style={styles.top_header}>
            <View style={styles.sub_header_left}>
                <RoundButton_Image
                    image_uri={require('../assets/images/icons/red-flower-icon.png')}
                    bgColor={'#FEF7E5'}
                    iconStyle={styles.icon_image}
                />
                <View style={styles.welcome_title_container}>
                    <Text style={styles.text_small_center}>Welcome back, Mr. Dong Nguyen!</Text>
                </View>
            </View>

            <View style={styles.sub_header_right}>
                <PromotionButton />
                <NotificationButton />
            </View>
        </View>
    )
}

const BottomHeader_LoggedIn = () => {
    return (
        <View style={styles.bottom_header}>
            <Image style={styles.member_card_background} source={require('../assets/images/background/bg.png')} />
            <View style={styles.member_card_container}>
                <Image style={styles.member_card} source={require('../assets/images/extras/member-card.png')} />
            </View>
        </View>
    )
}

export const HomeHeader_LoggedIn = () => {
    return (
        <View style={styles.header}>

            <TopHeader_LoggedIn />
        </View>
    )
}

export const HomeHeader = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>

            <TopHeader />

        </View>
    )
}


export const HomeBody = (props) => {

    return (

        <View style={styles.home}>
            <View style={styles.header}>
                {props.loggedIn ? <BottomHeader_LoggedIn /> : < BottomHeader />}
            </View>

            <View style={styles.body}>
                {/* <Text style={styles.text_large}>Home</Text> */}
                <View style={styles.body_top}>
                    <View style={styles.body_top_left}>
                        <RoundButton_Image
                            image_uri={require('../assets/images/icons/scooter-icon.png')}
                            bgColor={'#FEF7E5'}
                            iconStyle={styles.icon_image_large}
                            buttonStyle={styles.roundbutton_large}
                        />
                        <Text>Home Delivery</Text>
                    </View>
                    <View style={{ height: 100, width: 2, backgroundColor: 'lightgray' }} />
                    <View style={styles.body_top_right}>
                        <RoundButton_Image
                            image_uri={require('../assets/images/icons/shop-icon.png')}
                            bgColor={'#FEF7E5'}
                            iconStyle={styles.icon_image_large}
                            buttonStyle={styles.roundbutton_large}
                        />
                        <Text>Store Pickup</Text>
                    </View>
                </View>

                <ScrollView contentContainerStyle={styles.scrollViewContainerStyle} horizontal pagingEnabled showsHorizontalScrollIndicator>
                    <View style={{ width: screenWidth }}>
                        <Image
                            source={require('../assets/images/extras/super-sale.png')}
                            style={styles.image}
                        />
                    </View>
                    <View style={{ width: screenWidth }}>
                        <Image
                            source={require('../assets/images/extras/super-sale.png')}
                            style={styles.image}
                        />
                    </View>
                    <View style={{ width: screenWidth }}>
                        <Image
                            source={require('../assets/images/extras/super-sale.png')}
                            style={styles.image}
                        />
                    </View>
                    <View style={{ width: screenWidth }}>
                        <Image
                            source={require('../assets/images/extras/super-sale.png')}
                            style={styles.image}
                        />
                    </View>
                    <View style={{ width: screenWidth }}>
                        <Image
                            source={require('../assets/images/extras/super-sale.png')}
                            style={styles.image}
                        />
                    </View>
                    <View style={{ width: screenWidth }}>
                        <Image
                            source={require('../assets/images/extras/super-sale.png')}
                            style={styles.image}
                        />
                    </View>
                    <View style={{ width: screenWidth }}>
                        <Image
                            source={require('../assets/images/extras/super-sale.png')}
                            style={styles.image}
                        />
                    </View>

                </ScrollView>
            </View>

            <View>
                <Text style={styles.text_large}>Explore</Text>
                <RadioHeaderCustom />
            </View>
        </View>
    )
}



const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const imageWidth = screenWidth - 20;

const styles = StyleSheet.create({
    home: {
        flex: 1,
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingTop: 5,
        marginTop: -30,
        borderWidth: 0.2,
        borderColor: 'lightgray',

        //ios
        shadowColor: 'lightgray',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: -10 },

        //android
        elevation: 10,
    },
    header: {
        flexDirection: 'column',
        backgroundColor: '#FEF7E5',
        paddingTop: Platform.OS == 'ios' ? 56 : 0,
    },
    top_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    bottom_header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 15,
        marginTop: Platform.OS == 'ios' ? - 40 : 10,
        backgroundColor: '#F8F8F8',
        borderWidth: 0.5,
        borderColor: 'lightgray',
        borderRadius: 15,
        paddingVertical: Platform.OS == 'ios' ? 25 : 20,

        //ios
        shadowColor: 'lightgray',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },

        //android
        elevation: 10,
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
    text_subtitle: {
        fontSize: 20,
        fontWeight: '600',
        margin: 10,
        marginTop: -5,
        marginBottom: -7,
        textAlign: 'center',
    },
    text_small_center: {
        fontSize: 15,
        fontWeight: '600',
        marginLeft: -10,
        marginRight: -6,
    },
    text_description: {
        fontSize: 15,
        margin: 10,
        paddingTop: 10,
        textAlign: 'center',
    },
    text_small: {
        fontSize: 15,
        margin: 5,
        paddingTop: 10,
        textAlign: 'center',
    },
    text_hyperlink: {
        fontSize: 15,
        margin: 5,
        paddingTop: 10,
        textAlign: 'center',
        color: '#eb9f1c',
        textDecorationLine: 'underline',
    },
    icon_image: {
        height: 25,
        width: 25,
    },
    member_card: {
        marginTop: -35,
        width: screenWidth - 20
    },
    member_card_container: {
        margin: 10,
        marginBottom: 83,
        // backgroundColor: '#FEF7E5',
    },
    member_card_background: {
        marginTop: 50,
        position: 'absolute',
        top: 130,
    },
    welcome_title_container: {
        height: 50,
        width: 110,
        position: 'absolute',
        top: 15,
        left: 60,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 5,
    },
    subgrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: ((screenWidth - 50) / 2),
        margin: 5,
        marginBottom: -10,
    },

    body_top: {
        height: 130,
        width: 350,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'lightgray',
        margin: 20,
    },
    body_top_left: {
        alignItems: 'center',
    },
    body_top_right: {
        alignItems: 'center',
    },
    row_wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text_large: {
        fontSize: 24,
        fontWeight: '600',
        margin: 15,
    },
    text_grid: {
        paddingLeft: 18,
    },
    grid_btn_txt: {
        fontSize: Platform.OS == 'ios' ? 12 : 14,
    },
    image: {
        borderRadius: 10,
        marginHorizontal: 10,
        width: imageWidth,
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
        width: ((screenWidth - 50) / 2),
        borderRadius: 10,
        margin: 10,
    },
    voucher_expiration_btn: {
        marginLeft: 20,
        marginTop: 10,
        marginBottom: -2,
    },
    voucher_expiration_text: {
        color: 'gray',
        fontWeight: '400',
        marginLeft: 7,
    },
    grid_button: {
        width: '30%',
        justifyContent: 'center',
        margin: 5,
    },
    scrollViewContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    }

})