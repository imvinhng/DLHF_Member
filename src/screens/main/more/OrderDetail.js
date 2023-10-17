/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, TextInput, Image } from 'react-native';
import { PromotionButton, SquareButton_ImageIcon_Text, LongButton_Icon, NotificationButton, LongButton, TouchableOpacity } from '../../../utils/CustomButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import GlobalStyle from '../../../assets/style/GlobalStyle';
import { darkorange, white, backgroundGray } from '../../../assets/style/Colors';
import { GrayLine_Full, GrayLine_Full_Thick } from '../../../utils/CustomComponents';
import { RoundButton } from '../../../utils/CustomButton';
import DatePicker from 'react-native-date-picker';
import { DATA_ORDER_HISTORY, DATA_ORDER_DETAIL } from '../../../db/Database';



function OrderDetail(props) {
    const navigation = useNavigation();
    const route = useRoute();

    const { id } = route.params;
    const orderIndex = id - 1;

    const subtotal = DATA_ORDER_HISTORY[orderIndex].subtotal;
    const discount = DATA_ORDER_HISTORY[orderIndex].discount;
    const deliveryFee = DATA_ORDER_HISTORY[orderIndex].delivery_fee;
    const total = DATA_ORDER_HISTORY[orderIndex].total;
    const status = DATA_ORDER_HISTORY[orderIndex].status;

    const Item = ({ image, product_name, product_code, product_price, quantity, amount }) => {
        return (
            // <TouchableOpacity>
            //     <View style={[GlobalStyle.row_wrapper, { justifyContent: 'space-evenly', marginVertical: 10 }]}>
            //         {/* <Image style={styles.item} source={image} /> */}

            //         <View style={[GlobalStyle.column_wrapper, styles.item]}>
            //             <Text style={styles.item}>{product_name}</Text>
            //             <Text style={styles.item}>{product_code}</Text>
            //         </View>

            //         <View style={[GlobalStyle.column_wrapper, styles.item]}>
            //             <Text>{product_price}</Text>
            //             <Text> SL: {quantity}</Text>
            //         </View>

            //         <Text style={styles.item}>{amount}</Text>
            //     </View>
            //     <GrayLine_Full />
            // </TouchableOpacity>
            <View style={[GlobalStyle.row_wrapper, { justifyContent: 'space-between', marginVertical: 5 }]}>
                <View style={[styles.item, { borderWidth: 0.5, borderRadius: 5, width: columnOneWidth, alignItems: 'center' }]}>
                    <Image
                        style={[styles.flower_img]}
                        source={require('../../../assets/images/icons/red-flower-icon.png')}
                    />
                </View>

                <View style={[GlobalStyle.column_wrapper, styles.item, { width: columnTwoWidth, alignItems: 'flex-start' }]}>
                    <Text style={styles.item_text}>{product_name}</Text>
                    <Text style={styles.item_text}>{product_code}</Text>
                </View>

                <View style={[GlobalStyle.column_wrapper, styles.item, { width: columnThreeWidth, alignItems: 'center' }]}>
                    <Text style={styles.item_text}>{product_price}</Text>
                    <Text style={styles.item_text}>SL: {quantity}</Text>
                </View>

                <View style={[styles.item, { width: columnFourWidth, alignItems: 'flex-end' }]}>
                    <Text style={styles.item_text}>{amount}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.home} >
            <View style={styles.header}>
                <RoundButton
                    bgColor={'#fff'}
                    iconName={'angle-left'}
                    iconSize={25}
                    onPressFunction={() => navigation.navigate('More', { screen: 'OrderHistoryScreen' })}
                />

                <View style={styles.sub_header_right}>
                    <PromotionButton />
                    <NotificationButton />
                </View>
            </View>

            <ScrollView horizontal={false}>
                <ScrollView horizontal={true}>
                    <View style={styles.body}>
                        <Text style={styles.title}>Order Detail</Text>

                        <View style={[GlobalStyle.row_wrapper, { marginVertical: 5 }]}>
                            <Text style={styles.text}>Order ID: </Text>
                            <TextInput value={DATA_ORDER_HISTORY[orderIndex].order_id} style={styles.input} />
                        </View>
                        <View style={[GlobalStyle.row_wrapper, { marginVertical: 5 }]}>
                            <Text style={styles.text}>Purchase Location: </Text>
                            <TextInput value={DATA_ORDER_HISTORY[orderIndex].store} style={styles.input} />
                        </View>
                        <View style={[GlobalStyle.row_wrapper, { marginVertical: 5 }]}>
                            <Text style={styles.text}>Delivery Address: </Text>
                            <TextInput value={DATA_ORDER_HISTORY[orderIndex].delivery_address} style={styles.input} />
                        </View>
                        <View style={[GlobalStyle.row_wrapper, { marginVertical: 5 }]}>
                            <Text style={styles.text}>Receiver Name: </Text>
                            <TextInput value={DATA_ORDER_HISTORY[orderIndex].receiver_name} style={styles.input} />
                        </View>
                        <View style={[GlobalStyle.row_wrapper, { marginVertical: 5 }]}>
                            <Text style={styles.text}>Delivery Date: </Text>
                            <TextInput value={DATA_ORDER_HISTORY[orderIndex].delivery_date.toLocaleString('utc')} style={styles.input} />
                        </View>
                        <View style={[GlobalStyle.row_wrapper, { marginVertical: 5 }]}>
                            <Text style={styles.text}>Note: </Text>
                            <TextInput value={DATA_ORDER_HISTORY[orderIndex].note} style={styles.input} />
                        </View>

                        <View style={styles.status_container}>
                            <View style={{ marginHorizontal: 10 }}>
                                <Text style={styles.text}>Status:</Text>
                                <GrayLine_Full_Thick />

                                {/* Insert order status updates */}
                                <View style={styles.status_textbox}>
                                    <Text>02-09-2023</Text>
                                    <Text>Delivery successful</Text>
                                </View>

                                <View style={styles.status_textbox}>
                                    <Text>01-10-2023</Text>
                                    <Text>Order is being delivered</Text>
                                </View>

                                <View style={styles.status_textbox}>
                                    <Text>30-09-2023</Text>
                                    <Text>Delivery pending</Text>
                                </View>

                                <View style={styles.status_textbox}>
                                    <Text>29-09-2023</Text>
                                    <Text>Order verified</Text>
                                </View>
                            </View>
                        </View>

                        <View style={[GlobalStyle.column_wrapper, styles.order_detail_container]}>
                            <View style={{ marginHorizontal: 10 }}>
                                {/* header */}
                                <View style={[GlobalStyle.row_wrapper, { justifyContent: 'space-between', marginVertical: 10 }]}>
                                    <Text style={[styles.heading, { width: columnOneWidth }]}>Image</Text>
                                    <Text style={[styles.heading, { width: columnTwoWidth }]}>Product Name / Product ID</Text>
                                    <Text style={[styles.heading, { width: columnThreeWidth }]}>Product Price (VND) / Quantity</Text>
                                    <Text style={[styles.heading, { width: columnFourWidth }]}>Amount (VND)</Text>
                                </View>
                                <GrayLine_Full_Thick />

                                {/* item list */}
                                <FlatList
                                    data={DATA_ORDER_DETAIL[orderIndex]}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item }) => {

                                        return (
                                            <Item
                                                image={item.image}
                                                product_name={item.product_name}
                                                product_code={item.product_code}
                                                product_price={item.product_price}
                                                quantity={item.quantity}
                                                amount={item.amount}
                                            />
                                        )
                                    }}
                                />

                            </View>

                            <View style={styles.summary_container}>
                                <GrayLine_Full_Thick />
                                <View style={[GlobalStyle.row_wrapper, { marginVertical: 5 }]}>
                                    <View style={{ alignItems: 'flex-end', marginRight: 30 }}>

                                        <Text style={styles.summary_text}>Subtotal: </Text>
                                        <Text style={styles.summary_text}>Total Discount: </Text>
                                        <Text style={styles.summary_text}>Delivery Fee: </Text>
                                        <Text style={styles.summary_text}>Total: </Text>
                                        <Text style={styles.summary_text}>Status: </Text>

                                    </View>

                                    <View style={{ alignItems: 'flex-end', marginRight: 10 }}>

                                        <Text style={styles.summary_text}>{subtotal}</Text>
                                        <Text style={styles.summary_text}>{discount}</Text>
                                        <Text style={styles.summary_text}>{deliveryFee} </Text>
                                        <Text style={styles.summary_text}>{total}</Text>
                                        <Text style={styles.summary_text}>{status}</Text>

                                    </View>

                                </View>
                                <GrayLine_Full_Thick />
                            </View>
                        </View>


                    </View>
                </ScrollView>
            </ScrollView>
        </View>

    );
}

export default OrderDetail;

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');
const calendarBtnWidth = (ScreenWidth / 2) - 20;
const headingWidth = (ScreenWidth / 4) - 20;
const flowerWidth = 30; const flowerHeight = 30;

const columnOneWidth = flowerWidth + 40;
const columnTwoWidth = (ScreenWidth / 4) + 10;
const columnThreeWidth = (ScreenWidth / 4) - 10;
const columnFourWidth = flowerWidth + 40;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        // backgroundColor: white
    },
    body: {
        backgroundColor: backgroundGray,
        height: ScreenHeight * 1.5,  // to be changed
        width: ScreenWidth,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: white,
        paddingTop: Platform.OS == 'ios' ? 56 : 10,
        paddingBottom: 10,
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
    item: {
        width: headingWidth,
        height: flowerHeight + 20,
        // alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
    },
    text: {
        fontSize: 15,
        margin: 10,
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
        height: '20%',
        width: '95%',
        backgroundColor: '#fff',
        alignSelf: 'center',
    },
    item_text: {
        fontSize: 12,
        fontWeight: '300',
        paddingHorizontal: 10,
        marginLeft: 10,
        textAlign: 'left'
    },
    order_detail_container: {
        marginVertical: 10,
        height: '38%', // original: '60%'
        width: '95%',
        backgroundColor: '#fff',
        alignSelf: 'center',
    },
    flower_img: {
        height: flowerWidth,
        width: flowerHeight,
    },
    status_textbox: {
        marginVertical: 10,
        marginLeft: 15,
    },
    summary_text: {
        marginVertical: 5,
        fontSize: 13,
        fontWeight: '300',
    },
    summary_container: {
        width: ScreenWidth * .5,
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        marginTop: 10,
    }
});
