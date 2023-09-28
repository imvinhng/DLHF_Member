import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { RoundButton_Image, LoginButton, PromotionButton, NotificationButton } from './CustomButton';
import { useNavigation } from '@react-navigation/native';

export const BottomHeader = () => {
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

export const BottomHeader_LoggedIn = () => {
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
    }

})