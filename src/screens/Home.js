/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, Pressable, Platform, Image, ScrollView, Dimensions } from 'react-native';
import { RoundButton_Clear, RoundButton_Color, LoginButton, LongButton, PromotionButton } from '../utils/CustomButton';
import { useNavigation } from '@react-navigation/native';



const Home = (props) => {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.home}>
            <View style={styles.header}>
                <View style={styles.top_header}>
                    <View style={styles.sub_header_left}>
                        <RoundButton_Clear
                            iconName={'atom'}
                            iconSize={25}
                            iconColor={'#eb341c'}
                        />
                        <Text style={styles.text_small_center}>Hello friend</Text>
                        <RoundButton_Clear
                            iconName={'bus-alt'}
                            iconSize={25}
                            iconColor={'#eb341c'}
                        />
                    </View>
                    <View style={styles.sub_header_right}>
                        <PromotionButton />
                        <RoundButton_Color
                            iconName={'bell'}
                            iconSize={25}
                            bgColor={'#fff'}
                        />
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
                        <RoundButton_Color
                            iconName={'motorcycle'}
                            iconSize={40}
                            iconColor={'#eb341c'}
                            bgColor={'#f7f0af'}
                            style={{ height: 80, width: 80, borderRadius: 50 }}
                        />
                        <Text>Home Delivery</Text>
                    </View>
                    <View style={styles.body1_top_right}>
                        <RoundButton_Color
                            iconName={'store'}
                            iconSize={40}
                            iconColor={'#eb341c'}
                            bgColor={'#f7f0af'}
                            style={{ height: 80, width: 80, borderRadius: 50 }}
                        />
                        <Text>Store Pickup</Text>
                    </View>
                </View>

                <ScrollView style={styles.body1_bottom} horizontal>
                    <Image
                        source={require('../assets/super-sale.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/super-sale.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/super-sale.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/super-sale.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/super-sale.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/super-sale.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/super-sale.jpg')}
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
                    <Image
                        source={require('../assets/crocus-flowers.jpeg')}
                        style={styles.image_grid}
                    />
                    <Image
                        source={require('../assets/white-flower.jpeg')}
                        style={styles.image_grid}
                    />
                    <Image
                        source={require('../assets/blue-flower.jpeg')}
                        style={styles.image_grid}
                    />
                    <Image
                        source={require('../assets/roses.jpeg')}
                        style={styles.image_grid}
                    />
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
    sub_header_right: {
        flexDirection: 'row',
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
        margin: 10,
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
        marginRight: -10,
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
    image: {
        height: 250,
        width: 390,
        borderRadius: 10,
        margin: 10
    },
    image_grid: {
        height: 100,
        width: ((width - 50) / 2),
        borderRadius: 10,
        margin: 10,
        borderColor: '#bfbaba',
        borderWidth: 5,
    }
});

