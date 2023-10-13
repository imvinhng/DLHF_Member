import { StyleSheet, View, Text, Image, Modal, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { PromotionButton, NotificationButton, RoundButton } from '../../utils/CustomButton';
import { LongButton_Icon } from '../../utils/CustomButton';
import { DATA } from '../../db/Database';
import { WAREHOUSE_REPORT } from '../../db/ttp_report_warehouse';

import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
function Shop_Detail(props) {
    const route = useRoute();
    const navigation = useNavigation();

    const { clicked_id } = route.params;

    const store_index = clicked_id - 1;

    return (
        <View style={styles.home}>
            <View style={styles.top_header}>
                <View style={styles.sub_header_left}>
                    <Text style={styles.text_large}>Store</Text>
                </View>
                <View style={styles.sub_header_right}>
                    <PromotionButton />
                    <NotificationButton />
                </View>
            </View>

            <View style={styles.body}>
                <Image source={require('../../assets/images/extras/storefront-large.png')} />
                <RoundButton
                    buttonStyle={styles.roundbutton}
                    iconName={'times-circle'}
                    iconSize={25}
                    onPressFunction={() => navigation.navigate('Store', { screen: 'StoreScreen' })}
                />

                <Text style={styles.location}>Dalat Hasfarm {WAREHOUSE_REPORT[store_index].Title}</Text>
                <Text style={styles.address}>{WAREHOUSE_REPORT[store_index].Address}</Text>
                <Text style={styles.hours}>Operation Hours: {WAREHOUSE_REPORT[store_index].Open}</Text>

                <View style={styles.center_wrapper_custom}>
                    <LongButton_Icon
                        iconName='location-arrow'
                        iconSize={15}
                        text={WAREHOUSE_REPORT[store_index].Address}
                        buttonStyle={styles.longbutton}
                        textStyle={styles.text_button}
                    />
                    <LongButton_Icon
                        iconName='heart'
                        iconSize={15}
                        text='Add to favorites'
                        buttonStyle={styles.longbutton}
                        textStyle={styles.text_button}
                    />
                    <LongButton_Icon
                        iconName='phone-alt'
                        iconSize={15}
                        text='Call Us'
                        buttonStyle={styles.longbutton}
                        textStyle={styles.text_button}
                    />
                    <LongButton_Icon
                        iconName='share-alt'
                        iconSize={15}
                        text='Share with friends'
                        buttonStyle={styles.longbutton}
                        textStyle={styles.text_button}
                    />
                </View>
            </View>
        </View>

    );
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const bodyHeight = .97 * screenHeight;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#fff',
    },
    body: {
        flex: 1,
        marginTop: screenHeight - bodyHeight,
        // backgroundColor: 'red'
    },
    backdrop_top: {
        height: Platform.OS == 'ios' ? '13%' : '8%',
        // backgroundColor: 'rgba(0,0,0,0.2)',
        margin: 0,
    },
    backdrop_bottom: {
        height: Platform.OS == 'ios' ? '28%' : '8%',
        // backgroundColor: 'rgba(0,0,0,0.2)',
        margin: 0,
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
    center_wrapper_custom: {
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: -20,
        marginLeft: -30,
    },
    title: {
        fontSize: 25,
        marginLeft: '7%',
    },
    location: {
        fontWeight: '500',
        margin: 10,
    },
    address: {
        fontWeight: 'bold',
        margin: 10,
    },
    hours: {
        fontWeight: '300',
        // color: 'gray',
        margin: 10,
        marginBottom: 35,
    },

    text_button: {
        marginLeft: 20,
        fontSize: 13,
    },
    longbutton: {
        height: 'auto',
        width: 250,
        paddingVertical: 12,
        paddingHorizontal: 5,
        // marginBottom: Platform.OS == 'ios' ? 0 : 15,
        alignItems: 'center',
        // backgroundColor: 'yellow'
    },
    roundbutton: {
        position: 'absolute',
        top: -10,
        left: Platform.OS == 'ios' ? 370 : 360,
    },
    top_header: {
        marginTop: Platform.OS == 'ios' ? 40 : 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sub_header_left: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    sub_header_right: {
        flexDirection: 'row',
        marginRight: 15,
    },
    text_large: {
        fontSize: 24,
        fontWeight: '600',
        marginLeft: 20,
    },
})

export default Shop_Detail;
