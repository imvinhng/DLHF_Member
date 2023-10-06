import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { SquareButton, RoundButton } from './CustomButton';

function SearchBar(props) {
    return (
        <View style={[styles.row_wrapper, props.containerStyle]}>
            <SquareButton
                iconName='search'
                style={[styles.searchbar_icon, props.searchIconStyle]}
            />
            <TextInput
                style={[styles.searchbar, props.searchInputStyle]}
                placeholder={'Search'}
                value={props.searchPhrase}
                onChangeText={props.setSearchPhrase}
                onFocus={() => { props.setClicked(true) }}
                onBlur={() => { props.setClicked(false) }}
            />
            {props.clicked
                && (<RoundButton
                    iconName='times'
                    bgColor='#f1f1f0'
                    buttonStyle={[styles.close_btn, props.closeBtnStyle]}
                    onPressFunction={() => { props.setSearchPhrase('') }}
                />)
            }
        </View>
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    searchbar: {
        backgroundColor: '#f1f1f0',
        width: '75%',
        height: 40,
        borderRadius: 10,
        padding: 10,
        marginLeft: -12,
    },
    searchbar_icon: {
        backgroundColor: '#f1f1f0',
        width: 40,
        height: 40,
    },
    close_btn: {
        height: 10,
        width: 10,
    },
    row_wrapper: {
        flexDirection: 'row',
    }
})