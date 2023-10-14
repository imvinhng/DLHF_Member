import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Dimensions } from 'react-native';
import { SquareButton, RoundButton } from './CustomButton';

function SearchBar(props) {
    const [clicked, setClicked] = useState(false);

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
                onFocus={() => setClicked(true)}
                onBlur={() => {
                    console.log('User clicked outside of the textbox')
                    setClicked(false)
                }}

            />
            {clicked
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

const { width: screenWidth } = Dimensions.get('screen');
const searchbarWidth = .60 * screenWidth;

const styles = StyleSheet.create({
    searchbar: {
        backgroundColor: '#f1f1f0',
        width: searchbarWidth,
        height: 40,
        borderRadius: 10,
        padding: 10,
        // position: 'absolute',
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