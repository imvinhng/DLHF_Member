import React from "react"
import { StyleSheet } from "react-native"
import { darkgray, lightgray } from "./Colors";

const GlobalStyle = StyleSheet.create({
    box_shadow: {
        shadowColor: darkgray,
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,

        elevation: 5,
    },
    row_wrapper: {
        flexDirection: 'row',
    },
    column_wrapper: {
        flexDirection: 'column',
    },
    screen_title: {
        fontSize: 25,
        fontWeight: '500',
        fontFamily: 'PlayfairDisplay-SemiBold',
    },
    heading: {
        fontSize: 22,
        fontFamily: 'Ubuntu-Regular',
    },
    item_title: {
        fontSize: 16,
        fontFamily: 'Merriweather-Bold'
    },
    item_subtitle: {
        fontSize: 12,
        fontFamily: 'Roboto-Light',
    },
    item_footer: {
        fontSize: 11,
        fontWeight: '300',
        fontFamily: 'Merriweather-Light',
    },
    text: {
        // fontFamily: 'Merriweather-Regular'
    },
    textCenter: {
        textAlign: 'center',
    }
})

export default GlobalStyle;