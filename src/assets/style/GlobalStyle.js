import React from "react"
import { StyleSheet } from "react-native"

const GlobalStyle = StyleSheet.create({
    box_shadow: {
        shadowColor: '#000',
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
        fontFamily: 'Mohave-Light'
    },
    item_title: {
        fontSize: 16,
        fontWeight: '600',
        // fontFamily: 'Mukta-Bold'
    },
    item_subtitle: {
        fontSize: 12,
        fontWeight: '300',
        // fontFamily: 'Mukta-Light',
    },
    item_footer: {
        fontSize: 12,
        fontWeight: '300',
        // fontFamily: 'Mukta-Light'
    },
    text: {
        fontFamily: 'Merriweather-Regular'
    }
})

export default GlobalStyle;