/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { PromotionButton, SquareButton_ImageIcon_Text, LongButton_Icon, NotificationButton, LongButton } from '../../../utils/CustomButton';
import { useNavigation } from '@react-navigation/native';
import PersonalInfo from './PersonalInfo';
import GlobalStyle from '../../../assets/style/GlobalStyle';
import { darkorange, white, backgroundGray } from '../../../assets/style/Colors';
import { GrayLine_Full, GrayLine_Full_Thick } from '../../../utils/CustomComponents';
import { DATA_ORDER_HISTORY } from '../../../db/Database';
import DatePicker from 'react-native-date-picker';


function OrderHistory(props) {
    const navigation = useNavigation();

    const today = new Date();
    const lastYear = today.getFullYear() - 1;
    const thisMonth = today.getMonth();
    const thisDay = today.getDate();

    const [valueStartDate, setValueStartDate] = useState(new Date(lastYear, thisMonth, thisDay));
    const [valueEndDate, setValueEndDate] = useState(today);
    const [openStartDate, setOpenStartDate] = useState(false);
    const [openEndDate, setOpenEndDate] = useState(false);

    const [data, setData] = useState(DATA_ORDER_HISTORY);

    function filterItems() {
        setData(DATA_ORDER_HISTORY.filter(item => item.delivery_date >= valueStartDate && item.delivery_date <= valueEndDate))
    }

    const Item = ({ id, store, delivery_date, order_id, amount }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('More', { screen: 'OrderDetailScreen', params: { id: id } })}>
                <View style={[GlobalStyle.row_wrapper, { justifyContent: 'space-evenly', marginVertical: 10 }]}>
                    <Text style={styles.item}>{store}</Text>
                    <Text style={styles.item}>{delivery_date}</Text>
                    <Text style={styles.item}>{order_id}</Text>
                    <Text style={[styles.item, { paddingLeft: 20 }]}>{amount}</Text>
                </View>
                <GrayLine_Full />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.home}>

            <View style={styles.header}>
                <View style={styles.sub_header_left}>
                    <Text style={styles.title}>Order History</Text>
                </View>

                <View style={styles.sub_header_right}>
                    <PromotionButton />
                    <NotificationButton />
                </View>
            </View>

            <View style={styles.body}>
                <View style={[GlobalStyle.row_wrapper, { justifyContent: 'space-evenly', marginTop: 15 }]}>
                    <LongButton_Icon
                        text={valueStartDate.toLocaleDateString('vi')}
                        iconSize={18}
                        iconName={'calendar'}
                        buttonColor={white}
                        buttonStyle={[styles.calendar_btn, GlobalStyle.box_shadow]}
                        iconStyle={styles.calendar_btn_icon}
                        textStyle={{ marginLeft: -20 }}
                        onPressFunction={() => setOpenStartDate(!openStartDate)}
                    />
                    <DatePicker
                        modal
                        locale={'vi'}
                        mode={'date'}
                        title={'Select your start date'}
                        open={openStartDate}
                        date={valueStartDate}
                        minimumDate={new Date(lastYear, thisMonth, thisDay)}
                        maximumDate={today}
                        onConfirm={(date) => {
                            setOpenStartDate(false)
                            setValueStartDate(date)
                        }}
                        onCancel={() => {
                            setOpenStartDate(false)
                        }}
                    />

                    <LongButton_Icon
                        text={valueEndDate.toLocaleDateString('vi')}
                        iconSize={18}
                        iconName={'calendar'}
                        buttonColor={white}
                        buttonStyle={[styles.calendar_btn, GlobalStyle.box_shadow]}
                        iconStyle={styles.calendar_btn_icon}
                        textStyle={{ marginLeft: -20 }}
                        onPressFunction={() => setOpenEndDate(!openEndDate)}
                    />
                    <DatePicker
                        modal
                        locale={'vi'}
                        mode={'date'}
                        title={'Select your end date'}
                        open={openEndDate}
                        date={valueEndDate}
                        minimumDate={new Date(lastYear, thisMonth, thisDay)}
                        maximumDate={today}
                        onConfirm={(date) => {
                            setOpenEndDate(false)
                            setValueEndDate(date)
                        }}
                        onCancel={() => {
                            setOpenEndDate(false)
                        }}
                    />
                </View>

                <Text style={{ margin: 12 }}>Attention: You can view your transaction history up to 1 year from today</Text>
                <LongButton
                    text={'Search'}
                    buttonColor={darkorange}
                    textColor={white}
                    buttonStyle={styles.search_btn}
                    textStyle={{ fontWeight: '400' }}
                    onPressFunction={filterItems}
                />

                <View style={GlobalStyle.column_wrapper}>
                    {/* header */}
                    <View style={[GlobalStyle.row_wrapper, { justifyContent: 'space-evenly', marginVertical: 10 }]}>
                        <Text style={styles.heading}>Store</Text>
                        <Text style={styles.heading}>Delivery Date</Text>
                        <Text style={styles.heading}>Order ID</Text>
                        <Text style={[styles.heading, { paddingLeft: 20 }]}>Amount</Text>
                    </View>
                    <GrayLine_Full_Thick />

                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => `generateExtractorOrder${index}`}
                        renderItem={({ item }) => {
                            return (
                                <Item
                                    id={item.id}
                                    store={item.store}
                                    delivery_date={item.delivery_date.toLocaleDateString('vi')}
                                    order_id={item.order_id}
                                    amount={item.total}
                                />
                            )
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

export default OrderHistory;

const { width: ScreenWidth } = Dimensions.get('screen');
const calendarBtnWidth = (ScreenWidth / 2) - 20;
const headingWidth = (ScreenWidth / 4) - 10;

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
        fontSize: 25,
        marginLeft: '7%',
    },
    subtitle: {
        fontSize: 22,
        fontWeight: '500',
        margin: 15,
        marginLeft: '5%',
        marginBottom: 10,
    },
    heading: {
        fontSize: 15,
        fontWeight: '500',
        width: headingWidth,
        // backgroundColor: 'yellow',
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
    }
});
