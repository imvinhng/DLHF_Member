/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import { PromotionButton, SquareButton_ImageIcon_Text, LongButton_Icon, NotificationButton, LongButton, RadioPeriodCustom } from '../../utils/CustomButton';
import { useNavigation } from '@react-navigation/native';
import PersonalInfo from '../main/PersonalInfo';
import GlobalStyle from '../../assets/style/GlobalStyle';
import { darkorange, white, backgroundGray } from '../../assets/style/Colors';
import { GrayLine_Full, GrayLine_Full_Thick } from '../../utils/CustomComponents';
import { DATA_ORDER_HISTORY } from '../../db/Database';
import DatePicker from 'react-native-date-picker';
import { BarChart, PieChart } from 'react-native-chart-kit';


function Analytics(props) {
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

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.1,
        // height: 500,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 1,
        useShadowColorFromDataset: false // optional
    };

    const barChartData = {
        labels: ["2020", '2021', '2022', '2023'],
        datasets: [
            {
                data: [1.5, 2, 3, 0]
            }
        ]
    };

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
        <ScrollView style={styles.home}>

            <View style={styles.header}>
                <View style={styles.sub_header_left}>
                    <Text style={styles.title}>Analytics</Text>
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

                {/* insert 4 rectangles statistics */}
                <View style={styles.summary_container}>
                    <View style={styles.summary_item}>
                        <Text style={styles.summary_text}>10</Text>
                        <Text style={styles.summary_subtext}>Orders</Text>
                    </View>
                    <View style={styles.summary_item}>
                        <Text style={styles.summary_text}>4.3 mil</Text>
                        <Text style={styles.summary_subtext}>Total spent</Text>
                    </View>
                    <View style={styles.summary_item}>
                        <Text style={styles.summary_text}>431K</Text>
                        <Text style={styles.summary_subtext}>Average price / order</Text>
                    </View>
                    <View style={styles.summary_item}>
                        <Text style={styles.summary_text}>5%</Text>
                        <Text style={styles.summary_subtext}>Average discount rate</Text>
                    </View>
                </View>

                {/* insert pie chart */}
                <View style={styles.piechart_container}>
                    <Text style={styles.container_title}>Products purchased</Text>


                    {/* need to change this to dynamic image */}
                    <Image style={styles.piechart} source={require('../../assets/images/extras/piechart.png')} />

                    {/* pie chart details */}
                    <View style={styles.piechart_description}>
                        <View style={[GlobalStyle.row_wrapper, styles.piechart_description_item]}>
                            <View style={[styles.piechart_square, { backgroundColor: 'blue' }]} />
                            <Text style={{ fontSize: 15 }}>ARR</Text>
                        </View>
                        <View style={[GlobalStyle.row_wrapper, styles.piechart_description_item]}>
                            <View style={[styles.piechart_square, { backgroundColor: 'yellow' }]} />
                            <Text style={{ fontSize: 15 }}>Cut Flower</Text>
                        </View>
                        <View style={[GlobalStyle.row_wrapper, styles.piechart_description_item]}>
                            <View style={[styles.piechart_square, { backgroundColor: 'green' }]} />
                            <Text style={{ fontSize: 15 }}>Pot Plant</Text>
                        </View>
                    </View>
                </View>

                {/* insert graphs */}
                <View style={styles.graph_container}>
                    <Text style={styles.container_title}>Spending Analytics</Text>
                    <RadioPeriodCustom />

                    <BarChart
                        style={styles.graphStyle}
                        data={barChartData}
                        width={graphContainerWidth}
                        height={170}
                        yAxisLabel="$"
                        chartConfig={chartConfig}
                    // verticalLabelRotation={30}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

export default Analytics;

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');
const calendarBtnWidth = (ScreenWidth / 2) - 20;
const headingWidth = (ScreenWidth / 4) - 10;
const summaryContainerHeight = 240;
const piechartContainerHeight = 240;
const graphContainerHeight = 240;
const graphContainerWidth = ScreenWidth - 10;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        // backgroundColor: white
    },
    body: {
        backgroundColor: backgroundGray,
        flex: 1,
        height: ScreenHeight + 20,
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
    summary_text: {
        color: 'green',
        fontSize: 30,
        fontWeight: '500',
    },
    summary_subtext: {
        position: 'absolute',
        top: 80,
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
    summary_container: {
        width: ScreenWidth,
        height: summaryContainerHeight,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10,
    },
    piechart_container: {
        width: ScreenWidth - 10,
        height: piechartContainerHeight,
        marginVertical: 10,
        backgroundColor: 'lightgray',
        margin: 5,
    },
    graph_container: {
        width: ScreenWidth - 10,
        height: graphContainerHeight,
        marginVertical: 10,
        backgroundColor: 'lightgray',
        margin: 5,
    },
    summary_item: {
        width: (ScreenWidth / 2) - 10,
        height: (summaryContainerHeight / 2) - 10,
        backgroundColor: 'lightgray',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    piechart: {
        height: ScreenWidth / 2 - 20,
        width: ScreenWidth / 2 - 20,
        position: 'absolute',
        top: 30,
        left: 30,
    },
    piechart_description: {
        position: 'absolute',
        left: ScreenWidth - 150,
        top: '30%',
        height: piechartContainerHeight / 2,
        justifyContent: 'space-between'
    },
    piechart_description_item: {
        alignItems: 'center',
    },
    piechart_square: {
        width: 15,
        height: 15,
        marginRight: 10,
        borderWidth: 0.5,
        borderColor: '#fff',
    },
    container_title: {
        color: 'green', fontWeight: '500', textAlign: 'center', marginTop: 5,
    }
});
