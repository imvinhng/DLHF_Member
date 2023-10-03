import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, ScrollView, Dimensions, TextInput } from 'react-native';
import { RoundButton_Image, LoginButton, PromotionButton, NotificationButton, LongButton, SquareButton } from './CustomButton';
import { useNavigation } from '@react-navigation/native';

const BottomHeader = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>

            <View style={styles.top_header}>
                <View style={styles.sub_header_left}>
                    <RoundButton_Image
                        image_uri={require('../assets/icons/red-flower-icon.png')}
                        bgColor={'#FEF7E5'}
                        iconStyle={styles.icon_image}
                    />
                    <Text style={styles.text_small_center}>Hello friend</Text>
                    <RoundButton_Image
                        image_uri={require('../assets/icons/hello-icon.png')}
                        bgColor={'#FEF7E5'}
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
                    bgColor={'#eb9f1c'}
                    onPressFunction={() => navigation.navigate('Login')}
                />

                <View style={styles.row_wrapper}>
                    <Text style={styles.text_small}>Not registered?</Text>
                    <Text style={styles.text_hyperlink}>Register here</Text>
                </View>
            </View>
        </View>
    )
}

const BottomHeader_LoggedIn = () => {
    return (
        <View style={styles.header}>

            <View style={styles.top_header}>
                <View style={styles.sub_header_left}>
                    <RoundButton_Image
                        image_uri={require('../assets/icons/red-flower-icon.png')}
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

            <View style={styles.bottom_header}>
                <Image style={styles.member_card_background} source={require('../assets/background/bg.png')} />
                <View style={styles.member_card_container}>
                    <Image style={styles.member_card} source={require('../assets/member-card.png')} />
                </View>
            </View>
        </View>
    )
}

export const HomeBody = () => {
    const token = true;

    return (
        <View style={styles.home}>

            {token ? <BottomHeader_LoggedIn /> : <BottomHeader />}

            <View style={styles.body}>
                {/* <Text style={styles.text_large}>Home</Text> */}
                <View style={styles.body_top}>
                    <View style={styles.body_top_left}>
                        <RoundButton_Image
                            image_uri={require('../assets/icons/scooter-icon.png')}
                            bgColor={'#FEF7E5'}
                            iconStyle={styles.icon_image_large}
                            buttonStyle={styles.roundbutton_large}
                        />
                        <Text>Home Delivery</Text>
                    </View>
                    <View style={styles.body_top_right}>
                        <RoundButton_Image
                            image_uri={require('../assets/icons/shop-icon.png')}
                            bgColor={'#FEF7E5'}
                            iconStyle={styles.icon_image_large}
                            buttonStyle={styles.roundbutton_large}
                        />
                        <Text>Store Pickup</Text>
                    </View>
                </View>

                <ScrollView style={styles.body_bottom} horizontal >
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
                        buttonColor={'#FEF7E5'}
                        text={'Special Offer'}
                        buttonStyle={styles.grid_button}
                        textStyle={styles.grid_btn_txt}
                    />
                    <LongButton
                        buttonColor={'#FEF7E5'}
                        text={'#FlowerCare'}
                        buttonStyle={styles.grid_button}
                        textStyle={styles.grid_btn_txt}
                    />
                    <LongButton
                        buttonColor={'#FEF7E5'}
                        text={'#FlowerLover'}
                        buttonStyle={styles.grid_button}
                        textStyle={styles.grid_btn_txt}
                    />
                </View>
            </View>
        </View>
    )
}

export const BlackLine = () => {
    return (
        <View style={{ width: '90%', height: 0.5, backgroundColor: '#000' }} />
    )
}



const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    header: {
        flexDirection: 'column',
        backgroundColor: '#FEF7E5',
        paddingTop: Platform.OS == 'ios' ? 56 : 0,
    },
    top_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottom_header: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        borderRadius: 10,
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
    icon_image: {
        height: 25,
        width: 25,
    },
    member_card: {
        margin: -5,
    },
    member_card_container: {
        margin: 10,
        marginBottom: 83,
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
    home: {
        flex: 1,
        backgroundColor: '#fff'
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
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

    body_top: {
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
        margin: 10,
        width: Platform.OS == 'ios' ? 375 : 390,
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
        margin: 5,
    },

})