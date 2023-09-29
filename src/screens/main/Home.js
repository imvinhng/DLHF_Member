/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, StyleSheet, Text, Platform, Image, ScrollView, Dimensions } from 'react-native';
import { RoundButton_Image, LoginButton, LongButton, PromotionButton, NotificationButton, LongButton_Icon } from '../../utils/CustomButton';
import { BottomHeader, BottomHeader_LoggedIn } from '../../utils/CustomComponents';


const Home = (props) => {

    const token = true;

    return (
        <ScrollView style={styles.home}>

            {token ? <BottomHeader_LoggedIn /> : <BottomHeader />}


            <View style={styles.body}>
                {/* <Text style={styles.text_large}>Home</Text> */}
                <View style={styles.body_top}>
                    <View style={styles.body_top_left}>
                        <RoundButton_Image
                            image_uri={require('../../assets/icons/scooter-icon.png')}
                            bgColor={'#FEF7E5'}
                            iconStyle={styles.icon_image_large}
                            buttonStyle={styles.roundbutton_large}
                        />
                        <Text>Home Delivery</Text>
                    </View>
                    <View style={styles.body_top_right}>
                        <RoundButton_Image
                            image_uri={require('../../assets/icons/shop-icon.png')}
                            bgColor={'#FEF7E5'}
                            iconStyle={styles.icon_image_large}
                            buttonStyle={styles.roundbutton_large}
                        />
                        <Text>Store Pickup</Text>
                    </View>
                </View>

                <ScrollView style={styles.body_bottom} horizontal >
                    <Image
                        source={require('../../assets/super-sale.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/super-sale.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/super-sale.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/super-sale.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/super-sale.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/super-sale.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/super-sale.png')}
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
                        style={styles.grid_button}
                    />
                    <LongButton
                        buttonColor={'#FEF7E5'}
                        text={'#FlowerCare'}
                        style={styles.grid_button}
                    />
                    <LongButton
                        buttonColor={'#FEF7E5'}
                        text={'#FlowerLover'}
                        style={styles.grid_button}
                    />
                </View>

                <View style={styles.grid}>
                    <View style={styles.subgrid}>
                        <Image
                            source={require('../../assets/vouchers/voucher1-large.png')}
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
                            source={require('../../assets/vouchers/voucher3-large.png')}
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
                            source={require('../../assets/vouchers/voucher2-large.png')}
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
                            source={require('../../assets/vouchers/voucher4-large.png')}
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
    },
    text_large: {
        fontSize: 24,
        fontWeight: '600',
        margin: 15,
    },

    text_grid: {
        paddingLeft: 18,
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
    }
});

