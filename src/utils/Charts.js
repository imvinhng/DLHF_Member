import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import GlobalStyle from '../assets/style/GlobalStyle';
import { red, tan } from '../assets/style/Colors';

export const MemberRankingChart = () => {
    return (
        <View style={{ backgroundColor: 'lightgray', width: ScreenWidth, height: memberRankingContainerHeight }}>
            <View style={[GlobalStyle.row_wrapper, { backgroundColor: 'lightgray', width: ScreenWidth, height: memberRankingRowHeight + 10, alignItems: 'center' }]}>
                <Text style={[{ width: ScreenWidth / 3 * 1.5 }, styles.center_padding]}>Member rank and level point</Text>
                <Text style={[styles.center_padding, { width: ScreenWidth / 3 * 0.5 }]}>Direct discount</Text>
                <Text style={[styles.center_padding, { width: ScreenWidth / 3 }]}>Redeeming reward points on purchase</Text>
            </View>

            <View style={[GlobalStyle.row_wrapper, { backgroundColor: tan, width: ScreenWidth, alignItems: 'center', height: memberRankingRowHeight }]}>
                <View style={[{ width: ScreenWidth / 3 * 0.7, textAlign: 'center', padding: 5, alignItems: 'center' }, GlobalStyle.row_wrapper]}>
                    <Image source={require('../assets/images/icons/bronze.png')} />
                    <Text style={{ marginLeft: 5 }}>Bronze*</Text>
                </View>
                <View style={{ width: ScreenWidth / 3 * 0.8, color: red }}>
                    <Text style={[styles.left_padding, { color: red }]}>Under 60 pts</Text>
                </View>
                <View style={{ width: ScreenWidth / 3 * 0.5 }}>
                    <Text style={[styles.center_padding, { color: red }]}>0%</Text>
                </View>
                <View style={{ width: ScreenWidth / 3, height: memberRankingRowHeight, justifyContent: 'center', marginTop: 10 }}>
                    <Text style={[styles.center_padding, { paddingHorizontal: 10 }]}>1 point equates to 1,000 VND</Text>
                </View>
            </View>

            <View style={[GlobalStyle.row_wrapper, { backgroundColor: tan, width: ScreenWidth, alignItems: 'center', height: memberRankingRowHeight * 2 }]}>
                <View style={GlobalStyle.column_wrapper}>
                    <View style={[styles.center_padding, , GlobalStyle.row_wrapper, { width: ScreenWidth / 3 * 0.7, height: memberRankingRowHeight, alignItems: 'center' }]}>
                        <Image source={require('../assets/images/icons/silver.png')} />
                        <Text style={{ marginLeft: 5 }}>Silver</Text>
                    </View>
                    <View style={[styles.center_padding, , GlobalStyle.row_wrapper, { width: ScreenWidth / 3 * 0.7, height: memberRankingRowHeight, alignItems: 'center' }]}>
                        <Image source={require('../assets/images/icons/gold.png')} />
                        <Text style={{ marginLeft: 5 }}>Gold</Text>
                    </View>

                </View>
                <View style={[GlobalStyle.column_wrapper]}>
                    <View style={[styles.item_standard, { width: ScreenWidth / 3 * 0.8 }]}>
                        <Text style={styles.left_padding}>From 60 to 400</Text>
                    </View>
                    <View style={[styles.item_standard, { width: ScreenWidth / 3 * 0.8 }]}>
                        <Text style={styles.left_padding}>Above 400</Text>
                    </View>
                </View>
                <View style={GlobalStyle.column_wrapper}>
                    <View style={[styles.item_standard, { width: ScreenWidth / 3 * 0.5 }]}>
                        <Text style={styles.center_padding}>5%</Text>
                    </View>
                    <View style={[styles.item_standard, { width: ScreenWidth / 3 * 0.5 }]}>
                        <Text style={styles.center_padding}>7%</Text>
                    </View>
                </View>

                <View style={{ width: ScreenWidth / 3, height: memberRankingRowHeight * 2, justifyContent: 'center' }}>
                    <Text style={[styles.center_padding, { color: red }]}>No longer earn or redeem reward points at this level</Text>
                </View>
            </View>
        </View>
    )
}
export const RankUpChart = () => {
    return (
        <View style={{ width: ScreenWidth, height: rankUpContainerHeight }}>
            <View style={[GlobalStyle.row_wrapper, { backgroundColor: 'lightgray', width: ScreenWidth, height: rankUpRowHeight, alignItems: 'center' }]}>
                <View style={styles.rank_up_item}><Text style={GlobalStyle.textCenter}>Current Rank</Text></View>
                <View style={styles.rank_up_item}><Text style={GlobalStyle.textCenter}>Level Points</Text></View>
                <View style={styles.rank_up_item}><Text style={GlobalStyle.textCenter}>Next Rank</Text></View>
                <View style={styles.rank_up_item}><Text style={GlobalStyle.textCenter}>Active Period</Text></View>
            </View>
            <View style={[GlobalStyle.row_wrapper, { backgroundColor: tan, width: ScreenWidth, height: rankUpRowHeight, alignItems: 'center' }]}>
                <View style={styles.rank_up_item_x2}>
                    <Image source={require('../assets/images/icons/bronze.png')} />
                    <Text style={{ marginLeft: 5 }}>Bronze</Text>
                </View>
                <View style={styles.rank_up_item}><Text style={GlobalStyle.textCenter}>{` >= 60 and < 400`}</Text></View>
                <View style={styles.rank_up_item}>
                    <Image source={require('../assets/images/icons/silver.png')} />
                    <Text style={{ marginLeft: 5 }}>Silver</Text>
                </View>
                <View style={styles.rank_up_item}><Text style={GlobalStyle.textCenter}>12 months</Text></View>
            </View>
            <View style={[GlobalStyle.row_wrapper, { backgroundColor: tan, width: ScreenWidth, height: rankUpRowHeight, alignItems: 'center', marginLeft: rankUpColWidth }]}>
                <View style={styles.rank_up_item}><Text style={GlobalStyle.textCenter}>{`>= 400`}</Text></View>
                <View style={styles.rank_up_item}>
                    <Image source={require('../assets/images/icons/gold.png')} />
                    <Text style={{ marginLeft: 5 }}>Gold</Text>
                </View>
                <View style={styles.rank_up_item}><Text style={GlobalStyle.textCenter}>12 months</Text></View>
            </View>
            <View style={[GlobalStyle.row_wrapper, { backgroundColor: tan, width: ScreenWidth, height: rankUpRowHeight, alignItems: 'center' }]}>
                <View style={styles.rank_up_item}>
                    <Image source={require('../assets/images/icons/silver.png')} />
                    <Text style={{ marginLeft: 5 }}>Silver</Text>
                </View>
                <View style={styles.rank_up_item}><Text style={GlobalStyle.textCenter}>{`>= 340`}</Text></View>
                <View style={styles.rank_up_item}>
                    <Image source={require('../assets/images/icons/gold.png')} />
                    <Text style={{ marginLeft: 5 }}>Gold</Text>
                </View>
                <View style={styles.rank_up_item}><Text style={GlobalStyle.textCenter}>12 months</Text></View>
            </View>

        </View>
    )
}
export const RankEvaluationChart = () => {
    return (
        <View style={{ width: ScreenWidth, height: rankEvaluationContainerHeight }}>
            <View style={[GlobalStyle.row_wrapper, { backgroundColor: 'lightgray', width: ScreenWidth, height: rankEvaluationRowHeight, alignItems: 'center' }]}>
                <View style={styles.rank_evaluation_item_short}><Text style={GlobalStyle.textCenter}>Level Points</Text></View>
                <View style={styles.rank_evaluation_item_long}><Text style={GlobalStyle.textCenter}>New Ranking</Text></View>
                <View style={styles.rank_evaluation_item_long}><Text style={GlobalStyle.textCenter}>Active Period</Text></View>
            </View>
            <View style={[GlobalStyle.row_wrapper, { backgroundColor: tan, width: ScreenWidth, height: rankEvaluationRowHeight, alignItems: 'center' }]}>
                <View style={styles.rank_evaluation_item_short}><Text style={GlobalStyle.textCenter}>{`< 60`}</Text></View>
                <View style={styles.rank_evaluation_item_long}>
                    <Image source={require('../assets/images/icons/bronze.png')} />
                    <Text style={{ marginLeft: 5 }}>Bronze</Text>
                </View>
                <View style={styles.rank_evaluation_item_long}><Text style={GlobalStyle.textCenter}>12 months</Text></View>
            </View>
            <View style={[GlobalStyle.row_wrapper, { backgroundColor: tan, width: ScreenWidth, height: rankEvaluationRowHeight, alignItems: 'center' }]}>
                <View style={styles.rank_evaluation_item_short}><Text style={GlobalStyle.textCenter}>{`>= 60 and < 400`}</Text></View>
                <View style={styles.rank_evaluation_item_long}>
                    <Image source={require('../assets/images/icons/silver.png')} />
                    <Text style={{ marginLeft: 5 }}>Silver</Text>
                </View>
                <View style={styles.rank_evaluation_item_long}><Text style={GlobalStyle.textCenter}>12 months</Text></View>
            </View>
            <View style={[GlobalStyle.row_wrapper, { backgroundColor: tan, width: ScreenWidth, height: rankEvaluationRowHeight, alignItems: 'center' }]}>
                <View style={styles.rank_evaluation_item_short}><Text style={GlobalStyle.textCenter}>{`>= 400`}</Text></View>
                <View style={styles.rank_evaluation_item_long}>
                    <Image source={require('../assets/images/icons/gold.png')} />
                    <Text style={{ marginLeft: 5 }}>Gold</Text>
                </View>
                <View style={styles.rank_evaluation_item_long}><Text style={GlobalStyle.textCenter}>12 months</Text></View>
            </View>

        </View>
    )
}

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');

const memberRankingContainerHeight = 180;
const memberRankingRowHeight = memberRankingContainerHeight / 4;

const rankUpContainerHeight = 200;
const rankUpRowHeight = rankUpContainerHeight / 4;
const rankUpColWidth = ScreenWidth / 4;

const rankEvaluationContainerHeight = 200;
const rankEvaluationRowHeight = rankEvaluationContainerHeight / 4;
const rankEvaluationColWidth = ScreenWidth / 3;

const styles = StyleSheet.create({
    center_padding: {
        textAlign: 'center',
        padding: 5
    },
    left_padding: {
        textAlign: 'left',
        padding: 5
    },
    item_standard: {
        height: memberRankingRowHeight,
        justifyContent: 'center'
    },
    rank_up_item: {
        borderWidth: 0.5,
        borderColor: 'lightgray',
        width: rankUpColWidth,
        height: rankUpRowHeight,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        ...GlobalStyle.row_wrapper,
    },
    rank_up_item_x2: {
        borderWidth: 0.5,
        borderColor: 'lightgray',
        width: rankUpColWidth,
        height: rankUpRowHeight * 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: tan,
        marginTop: rankEvaluationRowHeight,
        ...GlobalStyle.row_wrapper,
    },
    rank_evaluation_item_short: {
        borderWidth: 0.5,
        borderColor: 'lightgray',
        width: rankEvaluationColWidth - 36,
        height: rankEvaluationRowHeight,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        ...GlobalStyle.row_wrapper,
    },
    rank_evaluation_item_long: {
        borderWidth: 0.5,
        borderColor: 'lightgray',
        width: rankEvaluationColWidth + 18,
        height: rankEvaluationRowHeight,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        ...GlobalStyle.row_wrapper,
    },
})