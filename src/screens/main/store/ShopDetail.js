import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, Modal, TouchableOpacity, Platform, Dimensions, ScrollView } from 'react-native';
import { PromotionButton, NotificationButton, RoundButton } from '../../../utils/CustomButton';
import { LongButton_Icon } from '../../../utils/CustomButton';
import { DATA } from '../../../db/Database';
import { WAREHOUSE_REPORT } from '../../../db/ttp_report_warehouse';
import GlobalStyle from '../../../assets/style/GlobalStyle';
import { backgroundGray } from '../../../assets/style/Colors';
import { HeaderPN } from '../../../utils/Header';


function Shop_Detail(props) {
    const route = useRoute();
    const navigation = useNavigation();

    const { clicked_id } = route.params;

    const store_index = clicked_id - 1;

    return (
        <View style={styles.home}>
            <HeaderPN title={'Store'} />

            <ScrollView style={styles.body}>
                <Image source={require('../../../assets/images/extras/storefront-large.png')} />
                <RoundButton
                    buttonStyle={styles.close_btn}
                    iconName={'times-circle'}
                    iconSize={25}
                    onPressFunction={() => navigation.goBack()}
                />
                <View style={styles.info_textbox}>
                    <Text style={styles.location}>DALAT HASFARM</Text>
                    <Text style={styles.address}>{WAREHOUSE_REPORT[store_index].Title}</Text>
                    <Text style={styles.hours}>Operation Hours: {WAREHOUSE_REPORT[store_index].Open}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <LongButton_Icon
                        iconName='location-arrow'
                        iconSize={iconSize}
                        text={WAREHOUSE_REPORT[store_index].Address}
                        buttonStyle={styles.longbutton}
                        textStyle={styles.text_button}
                    />
                    <LongButton_Icon
                        iconName='heart'
                        iconSize={iconSize}
                        text='Add to favorites'
                        buttonStyle={styles.longbutton}
                        textStyle={styles.text_button}
                    />
                    <LongButton_Icon
                        iconName='phone-alt'
                        iconSize={iconSize}
                        text='Call Us'
                        buttonStyle={styles.longbutton}
                        textStyle={styles.text_button}
                    />
                    <LongButton_Icon
                        iconName='share-alt'
                        iconSize={iconSize}
                        text='Share with friends'
                        buttonStyle={styles.longbutton}
                        textStyle={styles.text_button}
                    />
                </View>
            </ScrollView>
        </View>

    );
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const bodyHeight = .97 * screenHeight;
const iconSize = 16;

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
    sub_header_left: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    sub_header_right: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 25,
        marginLeft: '7%',
    },
    location: {
        // color: 'gray',
        fontWeight: '400',
    },
    address: {
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 5,
    },
    hours: {
        fontWeight: '300',
    },
    info_textbox: {
        padding: 20,
    },
    text_button: {
        marginLeft: 30,
        width: screenWidth * 0.75,
        fontSize: 15,
    },
    buttonContainer: {
        alignItems: 'center',
    },
    longbutton: {
        height: 'auto',
        width: screenWidth - 20,
        paddingVertical: 15,
        paddingHorizontal: 5,
        borderColor: 'lightgray',
        borderWidth: 0.5,
        paddingHorizontal: 20,
        margin: 5,
        alignItems: 'center',
    },
    close_btn: {
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
