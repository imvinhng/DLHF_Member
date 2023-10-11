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
    }
})

export default GlobalStyle;