import React, { useState } from 'react';
import { StyleSheet, Pressable, Text, Image, View, TouchableOpacity, Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { black, darkgray, darkorange, lightgray, lightorange, offwhite, tan, white } from '../assets/style/Colors';
import GlobalStyle from '../assets/style/GlobalStyle';


export const RoundButton = (props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.round_button,
                { backgroundColor: pressed ? '#ddd' : props.bgColor },
                props.buttonStyle,
            ]}
            onPress={props.onPressFunction}
        >
            <FontAwesome5 name={props.iconName} size={props.iconSize} color={props.iconColor} />
        </Pressable>
    );
}
export const RoundButton_Octicons = (props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.round_button,
                { backgroundColor: pressed ? '#ddd' : props.bgColor },
                props.buttonStyle,
            ]}
            onPress={props.onPressFunction}
        >
            <Octicons name={props.iconName} size={props.iconSize} color={props.iconColor} />
        </Pressable>
    );
}
export const RoundButton_Ionicons = (props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.round_button,
                { backgroundColor: pressed ? '#ddd' : props.bgColor },
                props.buttonStyle,
            ]}
            onPress={props.onPressFunction}
        >
            <Ionicons name={props.iconName} size={props.iconSize} color={props.iconColor} />
        </Pressable>
    );
}

export const RoundButton_Image = (props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.round_button,
                { backgroundColor: pressed ? '#ddd' : props.bgColor },
                props.buttonStyle,
            ]}
        // onPress={() => console.log('Round Button clicked')}
        >
            <Image source={props.image_uri} style={props.iconStyle} />
        </Pressable>
    );
}

export const SquareButton = (props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.square_button,
                { backgroundColor: pressed ? '#ddd' : props.bgColor },
                props.style,
            ]}
        // onPress={() => console.log('Round Button clicked')}
        >
            <FontAwesome5 name={props.iconName} size={props.iconSize} color={props.iconColor} />
        </Pressable>
    );
}
export const SquareButton_ImageIcon_Text = (props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                // styles.square_button,
                { backgroundColor: pressed ? '#ddd' : props.bgColor },
                props.buttonStyle,
            ]}
            onPress={props.onPressFunction}
        >
            <View style={styles.image_icon_wrapper}>
                <Image source={props.image_uri} style={props.imageStyle} />
            </View>
            <Text style={[styles.text_square_button_image_icon, GlobalStyle.text]}>{props.text}</Text>
        </Pressable>
    );
}

export const LoginButton = (props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.login_button,
                props.style,
                {
                    backgroundColor: pressed ? '#ddd' : props.bgColor,
                    // borderRadius: 20,
                },
            ]}
            onPress={props.onPressFunction}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            android_ripple={{ color: '#e5ed8a' }}
        >
            <Text style={[styles.text, { color: props.textColor, fontSize: 20 }]}>
                Log In
            </Text>
        </Pressable>
    );
}
export const LongButton = (props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.long_button,
                { backgroundColor: pressed ? '#ddd' : props.buttonColor },
                props.buttonStyle
            ]}
            onPress={props.onPressFunction}
            onFocus={props.onFocusFunction}
        >
            <Text style={[styles.text_long_button, props.textStyle, { color: props.textColor }]}>
                {props.text}
            </Text>
        </Pressable>
    );
}

export const LongButton_Icon = (props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.long_button_icon,
                { backgroundColor: pressed ? '#ddd' : props.buttonColor },
                props.buttonStyle
            ]}
            onPress={props.onPressFunction}
        >
            <View style={props.iconStyle}>
                <FontAwesome name={props.iconName} size={props.iconSize} color={props.iconColor} />
            </View>
            <Text style={[{ color: props.textColor }, props.textStyle]}>{props.text}</Text>
        </Pressable>
    );
}
export const LongButton_Icon5 = (props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.long_button_icon,
                { backgroundColor: pressed ? '#ddd' : props.buttonColor },
                props.buttonStyle
            ]}
            onPress={props.onPressFunction}
        >
            <View style={props.iconStyle}>
                <FontAwesome5 name={props.iconName} size={props.iconSize} color={props.iconColor} />
            </View>
            <Text style={[{ color: props.textColor }, props.textStyle]}>{props.text}</Text>
        </Pressable>
    );
}

export const PromotionButton = (props) => {
    const navigation = useNavigation();
    return (
        <Pressable
            style={({ pressed }) => [
                styles.shadow_round_button,
                { backgroundColor: pressed ? '#ddd' : '#fff' },
                props.style,
            ]}
            onPress={() => navigation.navigate('Promotion', { screen: 'PromotionPopup' })}
        >

            <FontAwesome5 name={'gift'} size={25} color={'#eb9f1c'} />
        </Pressable>
    );
}
export const NotificationButton = (props) => {
    const navigation = useNavigation();
    return (
        <Pressable
            style={({ pressed }) => [
                styles.shadow_round_button,
                { backgroundColor: pressed ? '#ddd' : '#fff' },
                props.style,
            ]}
            onPress={() => navigation.navigate('More', { screen: 'NotificationScreen' })}
        >
            <FontAwesome5 name={'bell'} size={25} />
        </Pressable>
    );
}

export const GenderRadioButton = (props) => {
    const [maleSelected, setMaleSelected] = useState(false);
    const [femaleSelected, setFemaleSelected] = useState(false);
    return (
        <View style={styles.radio_group}>
            <TouchableOpacity
                style={[{
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: lightorange,
                    alignItems: 'center',
                    justifyContent: 'center',
                }, props.style]}
                onPress={() => {
                    setMaleSelected(true)
                    setFemaleSelected(false)
                }}>
                {
                    maleSelected ?
                        <View style={{
                            height: 12,
                            width: 12,
                            borderRadius: 6,
                            backgroundColor: lightorange,
                        }} />
                        : null
                }
            </TouchableOpacity>
            <Text style={styles.radio_text}>Male</Text>

            <TouchableOpacity
                style={[{
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: lightorange,
                    alignItems: 'center',
                    justifyContent: 'center',
                }, props.style]}
                onPress={() => {
                    setMaleSelected(false)
                    setFemaleSelected(true)
                }}>
                {
                    femaleSelected ?
                        <View style={{
                            height: 12,
                            width: 12,
                            borderRadius: 6,
                            backgroundColor: lightorange,
                        }} />
                        : null
                }
            </TouchableOpacity>
            <Text style={styles.radio_text}>Female</Text>
        </View>
    );
}

export const RadioHeaderCustom = () => {
    const [focusedOne, setFocusedOne] = useState(true);
    const [focusedTwo, setFocusedTwo] = useState(false);
    const [focusedThree, setFocusedThree] = useState(false);

    const [textOneColor, setTextOneColor] = useState(lightorange);
    const [textTwoColor, setTextTwoColor] = useState('#000');
    const [textThreeColor, setTextThreeColor] = useState('#000');

    const onFocusRadio = (focusedID) => {
        if (focusedID == '1') {
            setFocusedOne(true)
            setFocusedTwo(false)
            setFocusedThree(false)

            setTextOneColor(lightorange)
            setTextTwoColor(black)
            setTextThreeColor(black)
        }
        if (focusedID == '2') {
            setFocusedOne(false)
            setFocusedTwo(true)
            setFocusedThree(false)

            setTextOneColor(black)
            setTextTwoColor(lightorange)
            setTextThreeColor(black)
        }
        if (focusedID == '3') {
            setFocusedOne(false)
            setFocusedTwo(false)
            setFocusedThree(true)

            setTextOneColor(black)
            setTextTwoColor(black)
            setTextThreeColor(lightorange)
        }
    }

    return (
        <View style={[GlobalStyle.row_wrapper, { justifyContent: 'center' }]}>
            <LongButton
                buttonColor={focusedOne ? '#FEF7E5' : '#fff'}
                textColor={textOneColor}
                text={'Special Offer'}
                buttonStyle={styles.grid3_button}
                textStyle={styles.grid_btn_txt}
                onPressFunction={() => onFocusRadio('1')}
            />
            <LongButton
                buttonColor={focusedTwo ? '#FEF7E5' : '#fff'}
                textColor={textTwoColor}
                text={'#FlowerCare'}
                buttonStyle={styles.grid3_button}
                textStyle={styles.grid_btn_txt}
                onPressFunction={() => onFocusRadio('2')}
            />
            <LongButton
                buttonColor={focusedThree ? '#FEF7E5' : '#fff'}
                textColor={textThreeColor}
                text={'#FlowerLover'}
                buttonStyle={styles.grid3_button}
                textStyle={styles.grid_btn_txt}
                onPressFunction={() => onFocusRadio('3')}
            />
        </View>
    )
}

export const RadioPeriodCustom = (props) => {
    const [focusedOne, setFocusedOne] = useState(true);
    const [focusedTwo, setFocusedTwo] = useState(false);
    const [focusedThree, setFocusedThree] = useState(false);
    const [focusedFour, setFocusedFour] = useState(false);


    const onFocusRadio = (focusedID) => {
        if (focusedID == '1') {
            setFocusedOne(true)
            setFocusedTwo(false)
            setFocusedThree(false)
            setFocusedFour(false)
        } else if (focusedID == '2') {
            setFocusedOne(false)
            setFocusedTwo(true)
            setFocusedThree(false)
            setFocusedFour(false)
        } else if (focusedID == '3') {
            setFocusedOne(false)
            setFocusedTwo(false)
            setFocusedThree(true)
            setFocusedFour(false)
        } else if (focusedID == '4') {
            setFocusedOne(false)
            setFocusedTwo(false)
            setFocusedThree(false)
            setFocusedFour(true)
        }
    }

    return (
        <View style={[GlobalStyle.row_wrapper, styles.periodButtonContainer]}>
            <LongButton
                buttonColor={focusedOne ? darkorange : offwhite}
                text={'Year'}
                buttonStyle={styles.grid4_button}
                textColor={focusedOne ? white : darkgray}
                textStyle={styles.grid_btn_txt}
                onPressFunction={() => { onFocusRadio('1'), props.onPressFunctionYear() }}
            />
            <LongButton
                buttonColor={focusedTwo ? darkorange : offwhite}
                text={'Month'}
                buttonStyle={styles.grid4_button}
                textColor={focusedTwo ? white : darkgray}
                textStyle={styles.grid_btn_txt}
                onPressFunction={() => { onFocusRadio('2'), props.onPressFunctionMonth() }}
            />
            <LongButton
                buttonColor={focusedThree ? darkorange : offwhite}
                text={'Week'}
                buttonStyle={styles.grid4_button}
                textColor={focusedThree ? white : darkgray}
                textStyle={styles.grid_btn_txt}
                onPressFunction={() => { onFocusRadio('3'), props.onPressFunctionWeek() }}
            />
            <LongButton
                buttonColor={focusedFour ? darkorange : offwhite}
                text={'Day'}
                buttonStyle={styles.grid4_button}
                textColor={focusedFour ? white : darkgray}
                textStyle={styles.grid_btn_txt}
                onPressFunction={() => { onFocusRadio('4'), props.onPressFunctionDay() }}
            />
        </View>
    )
}

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');
const periodButtonHeight = 30;

const styles = StyleSheet.create({
    round_button: {
        height: 50,
        width: 50,
        borderRadius: 25,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadow_round_button: {
        height: 50,
        width: 50,
        borderRadius: 25,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',

        //ios
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: 1, height: 7 },

        //android
        elevation: 7,
    },
    square_button: {
        height: 50,
        width: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontFamily: 'Roboto-Bold'
    },
    text_long_button: {
        fontSize: 15,
        color: '#eb9f1c',
        fontWeight: '600',
        margin: 10,
    },
    text_square_button_image_icon: {
        fontSize: 13,
        fontWeight: '500',
        marginTop: 12,
        // fontFamily: 'Mukta-Bold',
    },
    login_button: {
        height: 50,
        width: 170,
        backgroundColor: '#68ede9',
        borderRadius: 5,
        margin: 10,
    },
    long_button: {
        height: 40,
        width: 130,
        backgroundColor: '#68ede9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 5,
        flexDirection: 'row',
    },
    long_button_icon: {
        height: 40,
        width: 130,
        // backgroundColor: '#68ede9',
        // alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: 5,
        margin: 5,
        flexDirection: 'row',
    },
    image_icon_wrapper: {
        paddingTop: 10,
    },
    row_wrapper: {
        flexDirection: 'row',
    },
    radio_group: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    radio_text: {
        marginLeft: 10,
        marginRight: 30,
    },
    grid4_button: {
        width: (ScreenWidth - 10) / 4 - 20,
        borderRadius: 10,
        margin: 0,
    },
    grid_btn_txt: {
        fontFamily: 'Merriweather-Light',
        fontSize: 14,
    },
    grid3_button: {
        margin: 0,
        width: ScreenWidth / 3 - 4,
    },
    periodButtonContainer: {
        justifyContent: 'space-between',
        borderColor: tan,
        borderWidth: 0.5,
        backgroundColor: offwhite,
        borderRadius: 10,
        margin: 10
    }

})