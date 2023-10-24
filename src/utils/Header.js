import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { white } from '../assets/style/Colors';
import { useNavigation } from '@react-navigation/native';
import { NotificationButton, PromotionButton, RoundButton } from './CustomButton';
import GlobalStyle from '../assets/style/GlobalStyle';

export const Header = (props) => {
    return (
        <View style={[styles.header, props.style]}>
            <Text style={[styles.title, GlobalStyle.screen_title]}>{props.title}</Text>
        </View>
    )

}
export const HeaderBack = (props) => {
    const navigation = useNavigation();

    return (
        <View style={[styles.header, props.style]}>
            <RoundButton
                bgColor={'#fff'}
                iconName={'angle-left'}
                iconSize={25}
                onPressFunction={() => props.navDest ? navigation.navigate(props.navDest) : navigation.goBack()}
            />
            <Text style={[styles.title_no_margin, GlobalStyle.screen_title]}>{props.title}</Text>
        </View>
    )

}

export const HeaderPN = (props) => {
    return (
        <View style={[styles.header_with_buttons, props.style]}>
            <View style={styles.sub_header_left}>
                <Text style={[styles.title, GlobalStyle.screen_title]}>{props.title}</Text>
            </View>

            <View style={styles.sub_header_right}>
                <PromotionButton />
                <NotificationButton />
            </View>
        </View>
    )

}
export const HeaderPNBack = (props) => {
    const navigation = useNavigation();

    return (
        <View style={[styles.header_with_buttons, props.style]}>
            <View style={styles.sub_header_left}>
                <RoundButton
                    bgColor={'#fff'}
                    iconName={'angle-left'}
                    iconSize={25}
                    onPressFunction={() => props.navDest ? navigation.navigate(props.navDest) : navigation.goBack()}
                />
                <Text style={[styles.title_no_margin, GlobalStyle.screen_title]}>{props.title}</Text>
            </View>

            <View style={styles.sub_header_right}>
                <PromotionButton />
                <NotificationButton />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    header: {
        ...GlobalStyle.row_wrapper,
        alignItems: 'center',
        backgroundColor: white,
        paddingTop: Platform.OS == 'ios' ? 56 : 10,
        padding: 10,
    },
    header_with_buttons: {
        ...GlobalStyle.row_wrapper,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: white,
        paddingTop: Platform.OS == 'ios' ? 56 : 10,
        padding: 10,
    },
    sub_header_left: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sub_header_right: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 25,
        marginLeft: '7%',
    },
    title_no_margin: {
        fontSize: 25,
    },

})