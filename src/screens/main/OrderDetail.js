/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, TextInput, Image } from 'react-native';
import { PromotionButton, SquareButton_ImageIcon_Text, LongButton_Icon, NotificationButton, LongButton, TouchableOpacity } from '../../utils/CustomButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import GlobalStyle from '../../assets/style/GlobalStyle';
import { darkorange, white, backgroundGray } from '../../assets/style/Colors';
import { GrayLine_Full, GrayLine_Full_Thick } from '../../utils/CustomComponents';
import { RoundButton } from '../../utils/CustomButton';
import DatePicker from 'react-native-date-picker';
import { DATA_ORDER_HISTORY, DATA_ORDER_DETAIL } from '../../db/Database';



function OrderDetail(props) {
    const navigation = useNavigation();
    const route = useRoute();

    const { id } = route.params;
    const storeIndex = id - 1;
    const orderIndex = 1 - 1;

    const Item = ({ image, product_name, product_code, product_price, quantity, amount }) => {
        return (
            <TouchableOpacity>
                <View style={[GlobalStyle.row_wrapper, { justifyContent: 'space-evenly', marginVertical: 10 }]}>
                    <Image style={styles.item} source={image} />

                    <View style={[GlobalStyle.column_wrapper, styles.item]}>
                        <Text style={styles.item}>{product_name}</Text>
                        <Text style={styles.item}>{product_code}</Text>
                    </View>

                    <View style={[GlobalStyle.column_wrapper, styles.item]}>
                        <Text>{product_price}</Text>
                        <Text> SL: {quantity}</Text>
                    </View>

                    <Text style={styles.item}>{amount}</Text>
                </View>
                <GrayLine_Full />
            </TouchableOpacity>
        )
    }
    const ItemMock = ({ id, image, product_name, product_code, product_price, quantity, amount }) => {
        console.log(image)
        console.log(product_name)
        console.log(product_code)
        console.log(product_price)
        console.log(quantity)
        console.log(amount)
        console.log('=======================')

        return (
            <View style={GlobalStyle.row_wrapper}>
                <Text>{id}</Text>
                <Text>{product_name}</Text>
                <Text>{product_code}</Text>
                <Text>{product_name}</Text>
                <Text>{product_price}</Text>
                <Text>{quantity}</Text>
                <Text>{amount}</Text>

            </View>
        )
    }

    return (
        <View style={styles.home}>

            <View style={styles.header}>
                <RoundButton
                    bgColor={'#fff'}
                    iconName={'angle-left'}
                    iconSize={25}
                    onPressFunction={() => navigation.navigate('OrderHistory')}
                />

                <View style={styles.sub_header_right}>
                    <PromotionButton />
                    <NotificationButton />
                </View>
            </View>

            <View style={styles.body}>
                <Text style={styles.title}>Order Detail</Text>

                <View style={[GlobalStyle.row_wrapper, { marginVertical: 5 }]}>
                    <Text style={styles.text}>Order ID: </Text>
                    <TextInput value={DATA_ORDER_HISTORY[storeIndex].order_id} style={styles.input} />
                </View>
                <View style={[GlobalStyle.row_wrapper, { marginVertical: 5 }]}>
                    <Text style={styles.text}>Purchase Location: </Text>
                    <TextInput value={DATA_ORDER_HISTORY[storeIndex].store} style={styles.input} />
                </View>
                <View style={[GlobalStyle.row_wrapper, { marginVertical: 5 }]}>
                    <Text style={styles.text}>Delivery Address: </Text>
                    <TextInput value={DATA_ORDER_HISTORY[storeIndex].delivery_address} style={styles.input} />
                </View>
                <View style={[GlobalStyle.row_wrapper, { marginVertical: 5 }]}>
                    <Text style={styles.text}>Receiver Name: </Text>
                    <TextInput value={DATA_ORDER_HISTORY[storeIndex].receiver_name} style={styles.input} />
                </View>
                <View style={[GlobalStyle.row_wrapper, { marginVertical: 5 }]}>
                    <Text style={styles.text}>Delivery Date: </Text>
                    <TextInput value={DATA_ORDER_HISTORY[storeIndex].delivery_date.toLocaleString('utc')} style={styles.input} />
                </View>
                <View style={[GlobalStyle.row_wrapper, { marginVertical: 5 }]}>
                    <Text style={styles.text}>Note: </Text>
                    <TextInput value={DATA_ORDER_HISTORY[storeIndex].note} style={styles.input} />
                </View>

                <View style={styles.status_container}>
                    <View style={{ marginHorizontal: 10 }}>
                        <Text style={styles.text}>Status:</Text>
                        <GrayLine_Full_Thick />

                        {/* Insert order status updates */}
                    </View>

                </View>

                <View style={[GlobalStyle.column_wrapper, styles.order_detail_container]}>
                    <View style={{ marginHorizontal: 10 }}>
                        {/* header */}
                        <View style={[GlobalStyle.row_wrapper, { justifyContent: 'space-between', marginVertical: 10 }]}>
                            <Text style={styles.heading}>Image</Text>
                            <Text style={styles.heading}>Product Name / Product ID</Text>
                            <Text style={styles.heading}>Product Price (VND) / Quantity</Text>
                            <Text style={styles.heading}>Amount (VND)</Text>
                        </View>
                        <GrayLine_Full_Thick />

                        {/* item list */}
                        {/* <FlatList
                            data={DATA_ORDER_DETAIL}
                            keyExtractor={item => item[orderIndex].order_id}
                            renderItem={({ item }) => {
                                // console.log("List length", item.length);
                                // for (let i = 0; i < item.length; i++) {
                                console.log(item[0])
                                console.log('============================================')
                                // }
                                // return <ItemMock
                                //     id={item[2].id}
                                //     image={item[2].image}
                                //     product_name={item[2].product_name}
                                //     product_code={item[2].product_code}
                                //     product_price={item[2].product_price}
                                //     quantity={item[2].quantity}
                                //     amount={item[2].amount}
                                // />

                                // }
                            }}
                        /> */}


                    </View>
                </View>

            </View>

        </View>
    );
}

export default OrderDetail;

const { width: ScreenWidth } = Dimensions.get('screen');
const calendarBtnWidth = (ScreenWidth / 2) - 20;
const headingWidth = (ScreenWidth / 4) - 20;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        // backgroundColor: white
    },
    body: {
        backgroundColor: backgroundGray,
        flex: 1,
        height: '100%',
    },
    title: {
        fontSize: 20,
        margin: 10,
        fontWeight: '500',
    },
    subtitle: {
        fontSize: 22,
        fontWeight: '500',
        margin: 15,
        marginLeft: '5%',
        marginBottom: 10,
    },
    heading: {
        fontSize: 12,
        fontWeight: '500',
        width: headingWidth,
        // backgroundColor: 'yellow',
        textAlign: 'center'
    },
    text: {
        fontSize: 15,
        margin: 10,
    },
    item: {
        fontSize: 15,
        fontWeight: '300',
        width: headingWidth,
        paddingRight: 5,
        // backgroundColor: 'red',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: white,
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

    calendar_btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: calendarBtnWidth,
        elevation: 10,
        borderWidth: 0.5,
    },
    calendar_btn_icon: {
        position: 'absolute',
        left: calendarBtnWidth - 30,
    },
    search_btn: {
        width: ScreenWidth - 20,  // 10 margin each side
        justifyContent: 'center',
    },
    input: {
        backgroundColor: 'white',
        marginLeft: 10,
        fontSize: 15,
        position: 'absolute',
        left: '35%',
        height: 40,
        width: '60%',
        borderRadius: 5,
        borderWidth: 0.2,
        borderColor: 'gray',
        paddingLeft: 10,
    },
    status_container: {
        marginVertical: 10,
        height: '30%',
        width: '90%',
        backgroundColor: '#fff',
        alignSelf: 'center',
    },
    item: {
        fontSize: 15,
        fontWeight: '300',
        width: headingWidth,
        paddingRight: 5,
        // backgroundColor: 'red',
    },
    order_detail_container: {
        marginVertical: 10,
        height: '30%',
        width: '90%',
        backgroundColor: '#fff',
        alignSelf: 'center',
    },
});
