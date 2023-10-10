import React, { useState } from 'react';
import { StyleSheet, Pressable, Text, Image, View, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

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
export const PromotionButton = (props) => {
    const navigation = useNavigation();
    return (
        <Pressable
            style={({ pressed }) => [
                styles.shadow_round_button,
                { backgroundColor: pressed ? '#ddd' : '#fff' },
                props.style,
            ]}
            onPress={() => navigation.navigate('Promotions')}
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
            onPress={() => navigation.navigate('Main', { screen: 'Notification' })}
        >
            <FontAwesome5 name={'bell'} size={25} />
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
            <Text style={styles.text_square_button_image_icon}>{props.text}</Text>
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
            <Text style={[styles.text, { color: props.textColor, fontWeight: 'bold', fontSize: 20 }]}>
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
            <Text style={[styles.text_long_button, props.textStyle]}>
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
                <FontAwesome5 name={props.iconName} size={props.iconSize} color={props.iconColor} />
            </View>
            <Text style={[{ color: props.textColor }, props.textStyle]}>{props.text}</Text>
        </Pressable>
    );
}

export function RadioButton(props) {
    const [selected, setSelected] = useState(false);
    return (
        <TouchableOpacity
            style={[{
                height: 24,
                width: 24,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: '#eb9f1c',
                alignItems: 'center',
                justifyContent: 'center',
            }, props.style]}
            onPress={() => {
                setSelected(!selected)
                console.log('Gender selected!')
            }}>
            {
                selected ?
                    <View style={{
                        height: 12,
                        width: 12,
                        borderRadius: 6,
                        backgroundColor: '#eb9f1c',
                    }} />
                    : null
            }
        </TouchableOpacity>
    );
}

export const RadioHeaderCustom = () => {
    const [focusedOne, setFocusedOne] = useState(true);
    const [focusedTwo, setFocusedTwo] = useState(false);
    const [focusedThree, setFocusedThree] = useState(false);

    const onFocusRadio = (focusedID) => {
        if (focusedID == '1') {
            setFocusedOne(true)
            setFocusedTwo(false)
            setFocusedThree(false)
        }
        if (focusedID == '2') {
            setFocusedOne(false)
            setFocusedTwo(true)
            setFocusedThree(false)
        }
        if (focusedID == '3') {
            setFocusedOne(false)
            setFocusedTwo(false)
            setFocusedThree(true)
        }
    }

    return (
        <View style={styles.row_wrapper}>
            <LongButton
                buttonColor={focusedOne ? '#FEF7E5' : '#fff'}
                text={'Special Offer'}
                buttonStyle={styles.grid_button}
                textStyle={styles.grid_btn_txt}
                onPressFunction={() => onFocusRadio('1')}
            />
            <LongButton
                buttonColor={focusedTwo ? '#FEF7E5' : '#fff'}
                text={'#FlowerCare'}
                buttonStyle={styles.grid_button}
                textStyle={styles.grid_btn_txt}
                onPressFunction={() => onFocusRadio('2')}
            />
            <LongButton
                buttonColor={focusedThree ? '#FEF7E5' : '#fff'}
                text={'#FlowerLover'}
                buttonStyle={styles.grid_button}
                textStyle={styles.grid_btn_txt}
                onPressFunction={() => onFocusRadio('3')}
            />
        </View>
    )
}



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
    },
    text_long_button: {
        fontSize: 15,
        color: '#eb9f1c',
        fontWeight: '600',
        margin: 10,
    },
    text_square_button_image_icon: {
        fontSize: 15,
        color: '#000',
        fontWeight: '600',
        marginTop: 12,
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
        justifyContent: 'left',
        borderRadius: 5,
        margin: 5,
        paddingLeft: 10,
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

})