import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NotificationButton, PromotionButton, RoundButton, RoundButton_Ionicons } from '../../../utils/CustomButton';
import GlobalStyle from '../../../assets/style/GlobalStyle';
import { backgroundGray, black, blue, darkorange, green, lightorange, red, tan, white, yellow } from '../../../assets/style/Colors';
import { LevelTwoMembers } from '../../../db/Users';
import { OrangeLine, Triangle } from '../../../utils/CustomComponents';
import { MemberRankingChart, RankUpChart, RankEvaluationChart } from '../../../utils/Charts';
import { HeaderPNBack } from '../../../utils/Header';

function MemberPolicy({ navigation }) {

    const USER_PROFILE = LevelTwoMembers[0];
    const [showLevelPointInfo, setShowLevelPointInfo] = useState(false);
    const [showRewardPointInfo, setShowRewardPointInfo] = useState(false);

    return (

        <View style={styles.home}>

            <HeaderPNBack title={'Member Policy'} />

            <ScrollView style={styles.body}>
                <View style={[{ margin: 10, alignItems: 'center' }]}>
                    <Text style={styles.full_name}>{USER_PROFILE.full_name}</Text>
                    <Text style={{ fontSize: 15, marginVertical: 5 }}>Ranking: {USER_PROFILE.ranking} - Member ID: {USER_PROFILE.member_id}</Text>
                    <Image source={require('../../../assets/images/extras/barcode_personal_info.png')} />
                    <Text style={{ margin: 10 }}>Your next ranking date is on 24/12/2023</Text>
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
                        <Text
                            style={styles.text_hyperlink}
                            onPress={() => navigation.navigate('More', { screen: 'PointHistoryScreen' })}
                        >
                            {`Point History >>`}
                        </Text>
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
                <MemberRankingChart />

                <View style={styles.black_textbox}>
                    <View style={[GlobalStyle.row_wrapper, { width: ScreenWidth - 40 }]}>

                        <Text style={{ color: white }}>
                            <Text style={{ color: red, paddingLeft: 5, paddingTop: 5 }}>*</Text>
                            Bronze members do not get direct discount on purchase (like Silver and Gold members),
                            but are able to accumulate reward points and redeem them as cash for their orders.
                            Every reward point has the value of <Text style={{ fontWeight: '700' }}>1.000 VND.</Text></Text>
                    </View>
                </View>

                <Text style={styles.title}>Level Points & Reward Points</Text>
                <View style={[GlobalStyle.row_wrapper, { paddingHorizontal: 10, marginBottom: 10 }]}>
                    <Image source={require('../../../assets/images/icons/ribbons.png')} />
                    <Text style={{ width: ScreenWidth - 50, marginHorizontal: 7 }}>
                        <Text style={{ fontWeight: '700' }}>Level Points (LP): </Text>
                        Used for evaluating DLHF member's ranking annually. {'\n'}{'\n'}
                        With every <Text style={{ fontWeight: '700' }}>50.000 VND</Text> spent (via POS of our shop), you will be rewarded 1 level point.
                    </Text>
                </View>
                <View style={[GlobalStyle.row_wrapper, { paddingHorizontal: 10, marginVertical: 10 }]}>
                    <Image source={require('../../../assets/images/icons/giftbox.png')} />
                    <Text style={{ width: ScreenWidth - 50, marginHorizontal: 7 }}>
                        <Text style={{ fontWeight: '700' }}>Reward Points (RP): </Text>
                        Are points that DLHF members can convert to cash on purchase.
                        The reward point balance will be zeroed out if members do not make any purchase within a yearly period. {'\n'}{'\n'}
                        With every <Text style={{ fontWeight: '700' }}>50.000 VND</Text> spent (via POS of our shop), you will be rewarded 1 reward point.
                        <Text style={{ color: red }}>(only apply for level 1 members. Level 2 and above no longer allow accumulating reward points)</Text>
                    </Text>
                </View>

                <Text style={styles.title}>Rank Up!</Text>
                <Text style={{ margin: 10, marginTop: 0 }}>After your level point reach a new milestone, system will automatically rank you up according to this chart:</Text>
                <RankUpChart />

                <Text style={styles.title}>Rank Evaluation</Text>
                <Text style={{ margin: 10, marginTop: 0 }}>On the evaluation date for member's ranking (each member will have unique evaluation date), system will calculate your next rank based on your current ranking. What's next?</Text>
                {/* TODO: Insert ranking chart */}
                <RankEvaluationChart />
            </ScrollView>

        </View >
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

    black_textbox: {
        backgroundColor: '#303030',
        height: 90,
        width: ScreenWidth - 20,
        borderRadius: 10,
        alignSelf: 'center',
        margin: 15,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_hyperlink: {
        textDecorationLine: 'underline',
    },
});