import React from 'react';
import { StyleSheet, Pressable, Text, Image, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export const RoundButton_Clear = (props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.round_button,
                { backgroundColor: pressed ? '#ddd' : props.bgColor },
            ]}
            onPress={props.onPressFunction}
        >
            <FontAwesome5 name={props.iconName} size={props.iconSize} color={props.iconColor} />
        </Pressable>
    );
}
export const RoundButton_Color = (props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.round_button,
                { backgroundColor: pressed ? '#ddd' : props.bgColor },
                props.style,
            ]}
        // onPress={() => console.log('Round Button clicked')}
        >
            <FontAwesome5 name={props.iconName} size={props.iconSize} color={props.iconColor} />
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
            onPress={() => navigation.navigate('Notification')}
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
                { backgroundColor: pressed ? '#ddd' : '#eb9f1c' },
                props.style,
            ]}
            onPress={props.onPressFunction}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            android_ripple={{ color: '#e5ed8a' }}
        >
            <Text style={[styles.text, { color: props.textColor }]}>
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
                props.style
            ]}
            onPress={props.onPressFunction}
        >
            <Text style={styles.text_long_button}>
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
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: 1, height: 7 },
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

})