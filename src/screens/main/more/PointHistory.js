import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import GlobalStyle from '../../../assets/style/GlobalStyle';
import { NotificationButton, PromotionButton, RoundButton } from '../../../utils/CustomButton';
import { useNavigation } from '@react-navigation/native';

const RANKING_MESSAGES = [
    {
        line1: 'Your current rank is "Bronze"',
        line2: 'To rank up to "Silver", you need an extra 20 level points',
        line3: 'Your next evaluation date is 24/11/2022',
    },
    {
        line1: 'Your current rank is "Silver"',
        line2: 'To rank up to "Gold", you need an extra 244 level points',
        line3: 'Your next evaluation date is 24/11/2022',
    },
    {
        line1: 'Your current rank is "Gold"',
        line2: 'To stay in "Gold", you need an extra 244 level points on your next evaluation date',
        line3: 'Your next evaluation date is 24/11/2022',
    }
]

function PointHistory(props) {
    const navigation = useNavigation();

    return (
        <View style={styles.home}>
            <View style={styles.header}>
                <RoundButton
                    bgColor={'#fff'}
                    iconName={'angle-left'}
                    iconSize={25}
                    onPressFunction={() => navigation.goBack()}
                />
                <Text style={[styles.title, GlobalStyle.screen_title]}>Point History</Text>

                <View style={[GlobalStyle.row_wrapper, { position: 'absolute', top: headerPaddingTop, left: ScreenWidth - 130 }]}>
                    <PromotionButton />
                    <NotificationButton />
                </View>
            </View>

            <View style={styles.body}>
                <Image source={require('../../../assets/images/extras/ranking.png')} style={{ margin: 10 }} />
                <Text style={[GlobalStyle.textCenter, { marginTop: 30 }]}>{RANKING_MESSAGES[1].line1}</Text>
                <Text style={[GlobalStyle.textCenter, { width: '90%', margin: 10 }]}>{RANKING_MESSAGES[1].line2}</Text>
                <Text style={GlobalStyle.textCenter}>{RANKING_MESSAGES[1].line3}</Text>
            </View>
        </View>
    );
}

export default PointHistory;

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');
const headerPaddingTop = Platform.OS == 'ios' ? 56 : 10;

const styles = StyleSheet.create({
    home: {
        flex: 1,
    },
    header: {
        paddingTop: headerPaddingTop,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 15,
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_margin: {
        marginTop: 30,
        marginHorizontal: 12,
        marginBottom: 10,
        textAlign: 'center',
    },
})