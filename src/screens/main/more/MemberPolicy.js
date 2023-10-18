import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NotificationButton, PromotionButton, RoundButton, RoundButton_Ionicons } from '../../../utils/CustomButton';
import GlobalStyle from '../../../assets/style/GlobalStyle';
import { backgroundGray, darkorange, green, tan, yellow } from '../../../assets/style/Colors';
import { LevelTwoMembers } from '../../../db/Users';
import { OrangeLine, Triangle } from '../../../utils/CustomComponents';

function MemberPolicy({ props, navigation }) {


    const USER_PROFILE = LevelTwoMembers[0];
    const [showLevelPointInfo, setShowLevelPointInfo] = useState(false);
    const [showRewardPointInfo, setShowRewardPointInfo] = useState(false);

    return (

        <ScrollView style={styles.home}>

            <View style={styles.header}>
                <RoundButton
                    bgColor={'#fff'}
                    iconName={'angle-left'}
                    iconSize={25}
                    onPressFunction={() => navigation.navigate('Home')}
                />
                <Text style={[styles.title, GlobalStyle.screen_title]}>Member Policy</Text>

                <View style={[GlobalStyle.row_wrapper, { position: 'absolute', top: headerPaddingTop, left: ScreenWidth - 130 }]}>
                    <PromotionButton />
                    <NotificationButton />
                </View>
            </View>

            <View style={styles.body}>
                {/* TODO: Fill in the body */}
                <View style={{ margin: 10 }}>
                    <Text style={styles.full_name}>{USER_PROFILE.full_name}</Text>
                    <Text style={{ fontSize: 15, marginVertical: 5 }}>Ranking: {USER_PROFILE.ranking} - Member ID: {USER_PROFILE.member_id}</Text>
                    <Image source={require('../../../assets/images/extras/barcode_personal_info.png')} />
                    <Text style={{ textAlign: 'center', margin: 10 }}>Your next ranking date is on 24/12/2023</Text>
                </View>

                <View style={GlobalStyle.row_wrapper}>
                    <View style={styles.item_container}>
                        <View style={GlobalStyle.row_wrapper}>
                            <Text style={styles.item_title}>Level Point</Text>
                            <RoundButton_Ionicons
                                iconName={'information-circle-outline'}
                                iconSize={20}
                                buttonStyle={{ position: 'absolute', left: 95, top: -3, height: 20, width: 20 }}
                                onPressFunction={() => {
                                    if (showRewardPointInfo) { setShowLevelPointInfo(!showLevelPointInfo) }
                                    setShowLevelPointInfo(!showLevelPointInfo)
                                }}
                            />
                        </View>
                        <Text style={styles.point}>{USER_PROFILE.level_point}</Text>
                        <Text>Point History</Text>
                    </View>

                    <View style={styles.item_container}>
                        <View style={GlobalStyle.row_wrapper}>
                            <Text style={styles.item_title}>Reward Point</Text>
                            <RoundButton_Ionicons
                                iconName={'information-circle-outline'}
                                iconSize={20}
                                buttonStyle={{ position: 'absolute', left: 110, top: -3, height: 20, width: 20 }}
                                onPressFunction={() => {
                                    if (showLevelPointInfo) { setShowLevelPointInfo(!showLevelPointInfo) }
                                    setShowRewardPointInfo(!showRewardPointInfo)
                                }}
                            />
                        </View>
                        <Text style={styles.point}>{USER_PROFILE.reward_point}</Text>
                        <Text>Valid until: 24/12/2023</Text>
                    </View>
                </View>
                {showLevelPointInfo && <View style={styles.hiddenLPInfo}>
                    <Triangle style={{ borderBottomColor: yellow, position: 'absolute', top: -10, left: 150 }} />
                    <View style={{ padding: 7, alignItems: 'center' }}>
                        <Text > Level Point (LP): </Text>
                        <Text style={{ margin: 3, marginBottom: 7, textAlign: 'center' }}>Use to evaluate member's ranking every year</Text>
                        <Text style={{ textAlign: 'center' }}>Every successful transaction worth 50K VND earns you 1 Level Point</Text>
                    </View>

                </View>}
                {showRewardPointInfo && <View style={styles.hiddenRPInfo}>
                    <Triangle style={{ borderBottomColor: yellow, position: 'absolute', top: -10, left: 170 }} />
                    <View style={{ padding: 7, alignItems: 'center' }}>
                        <Text > Reward Point (RP): </Text>
                        <Text style={{ marginBottom: 7, textAlign: 'center' }}>They're points that customer can redeem as real cash on purchase. The left-over points will be zeroed out if member do not make any purchase within 1 year period. </Text>
                        <Text style={{ textAlign: 'center' }}>Every successful transaction worth 50K VND earns you 1 Reward Point (only apply for Bronze member. Silver member or higher do not accumulate Reward Points)</Text>
                    </View>

                </View>}

                <Text style={{ textAlign: 'center' }}>To rank up to Gold, you need an additional 244 points</Text>

                <Text style={styles.title}>Member Ranking & Exclusives</Text>
                {/* TODO: Insert ranking chart */}
                <View style={{ backgroundColor: 'lightgray', width: ScreenWidth, height: memberRankingContainerHeight }}>
                    <View style={[GlobalStyle.row_wrapper, { backgroundColor: 'lightgray', width: ScreenWidth, height: memberRankingContainerRowHeight + 10, alignItems: 'center' }]}>
                        <Text style={{ width: ScreenWidth / 3 + 70, textAlign: 'center', padding: 5 }}>Member rank and level point</Text>
                        <Text style={{ width: ScreenWidth / 3 - 70, textAlign: 'center', padding: 5 }}>Direct discount</Text>
                        <Text style={{ width: ScreenWidth / 3, textAlign: 'center', padding: 5 }}>Redeeming reward points on purchase</Text>
                    </View>
                    <View style={[GlobalStyle.row_wrapper, { backgroundColor: tan, width: ScreenWidth, alignItems: 'center', height: memberRankingContainerRowHeight }]}>
                        <View style={[{ width: ScreenWidth / 3 - 50, textAlign: 'center', padding: 5, alignItems: 'center' }, GlobalStyle.row_wrapper]}>
                            <Image source={require('../../../assets/images/icons/bronze.png')} />
                            <Text style={{ marginLeft: 5 }}>Bronze*</Text>
                        </View>
                        <Text style={{ width: ScreenWidth / 3 - 20, textAlign: 'left', padding: 5, color: 'red' }}>Under 60 pts</Text>
                        <Text style={{ width: ScreenWidth / 3 - 70, textAlign: 'center', padding: 5, color: 'red' }}>0%</Text>
                        <Text style={{ width: ScreenWidth / 3, textAlign: 'center', paddingRight: 5 }}>1 point equates to 1,000 VND</Text>
                    </View>
                    <View style={[GlobalStyle.row_wrapper, { backgroundColor: tan, width: ScreenWidth, alignItems: 'center', height: memberRankingContainerRowHeight * 2 }]}>
                        <View style={GlobalStyle.column_wrapper}>
                            <View style={[{ width: ScreenWidth / 3 - 50, textAlign: 'center', padding: 5, alignItems: 'center' }, GlobalStyle.row_wrapper]}>
                                <Image source={require('../../../assets/images/icons/silver.png')} />
                                <Text style={{ marginLeft: 5 }}>Silver</Text>
                            </View>
                            <View style={[{ width: ScreenWidth / 3 - 50, textAlign: 'center', padding: 5, alignItems: 'center' }, GlobalStyle.row_wrapper]}>
                                <Image source={require('../../../assets/images/icons/gold.png')} />
                                <Text style={{ marginLeft: 5 }}>Gold</Text>
                            </View>

                        </View>
                        <View style={[GlobalStyle.column_wrapper, { alignItems: 'center' }]}>
                            <Text style={{ width: ScreenWidth / 3 - 20, textAlign: 'left', padding: 5 }}>From 60 to 400</Text>
                            <Text style={{ width: ScreenWidth / 3 - 20, textAlign: 'left', padding: 5 }}>Above 400 pt</Text>
                        </View>
                        <View style={GlobalStyle.column_wrapper}>
                            <Text style={{ width: ScreenWidth / 3 - 70, textAlign: 'center', padding: 5 }}>5%</Text>
                            <Text style={{ width: ScreenWidth / 3 - 70, textAlign: 'center', padding: 5 }}>7%</Text>
                        </View>

                        <Text style={{ width: ScreenWidth / 3 - 10, textAlign: 'center', padding: 5, color: 'red' }}>Cannot earn or redeem reward points at this level</Text>
                    </View>
                </View>

                <Text style={styles.title}>Level Point & Reward Point</Text>
                <Text>Level Point: ...</Text>

                <Text>Reward Point: ...</Text>

                <Text style={styles.title}>Rank Up</Text>
                <Text>After your level point reach a new milestone, system will automatically rank you up according to this chart</Text>
                {/* TODO: Insert ranking chart */}

                <Text style={styles.title}>Rank Evaluation</Text>
                <Text>...</Text>
                {/* Insert ranking chart */}

            </View>

        </ScrollView>
    );
}

export default MemberPolicy;

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');
const headerPaddingTop = Platform.OS == 'ios' ? 56 : 10;
const memberRankingContainerHeight = 180;
const memberRankingContainerRowHeight = memberRankingContainerHeight / 4;
const pointItemWidth = (ScreenWidth / 2) - 4;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#fff'
    },
    body: {
        backgroundColor: backgroundGray,
        flex: 1,
    },
    header: {
        paddingTop: headerPaddingTop,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 15,
    },
    full_name: {
        fontSize: 40,
        color: green,
    },
    item_container: {
        backgroundColor: 'lightgray',
        width: pointItemWidth,
        margin: 2,
        alignItems: 'center',
        padding: 10,
    },
    item_title: {
        color: green,
        fontSize: 18,
        fontWeight: '600'
    },
    point: {
        color: darkorange,
        fontSize: 50,
    },
    title: {
        color: green,
        fontSize: 25,
        margin: 10,
    },
    hiddenLPInfo: {
        backgroundColor: yellow,
        position: 'absolute',
        top: 230,
        left: 10,
        width: pointItemWidth,
        zIndex: 999,
    },
    hiddenRPInfo: {
        backgroundColor: yellow,
        position: 'absolute',
        top: 230,
        left: 210,
        width: pointItemWidth,
        zIndex: 999,
    },
});