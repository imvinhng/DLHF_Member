import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TextInput } from 'react-native';
import { LoginButton, LongButton_Icon } from '../utils/CustomButton';


function Login(props) {
    const [loginBtnColor, setLoginBtnColor] = useState('gray');
    const [loginBtnBorderColor, setLoginBtnBorderColor] = useState('#000');

    const login = (value) => {
        if (value != '') {
            setLoginBtnColor('#eb9f1c');
            setLoginBtnBorderColor('#eb9f1c');
        } else {
            setLoginBtnColor('gray');
            setLoginBtnBorderColor('#000');
        }
    }

    return (
        <View style={styles.background}>
            <Image
                style={styles.image}
                source={require('../assets/dutch-windmill.jpeg')}
            />
            <View style={styles.body}>
                <Text style={styles.title}>Welcome to</Text>
                <Text style={styles.logo}>Dalat Hasfarm</Text>

                <TextInput
                    style={[
                        styles.text_input,
                        { borderColor: loginBtnBorderColor }
                    ]}
                    keyboardType='number-pad'
                    placeholder={'Enter your phone number'}
                    onChangeText={login}
                />
                <LoginButton
                    style={[
                        styles.login_btn,
                        { backgroundColor: loginBtnColor }
                    ]}
                    textColor={'#fff'}
                />

                <View style={styles.row_wrapper}>
                    <View style={styles.line} />
                    <Text style={styles.text}>OR</Text>
                    <View style={styles.line} />
                </View>

                <LongButton_Icon style={styles.apple_btn} iconName={'apple'} iconSize={20} iconColor={'#fff'} textColor={'#fff'} buttonColor={'#000'} text={'Continue with Apple '} />
                <LongButton_Icon style={styles.facebook_btn} iconName={'facebook'} iconSize={20} textColor={'#fff'} buttonColor={'#3856c2'} text={'Continue with Facebook'} />
                <LongButton_Icon style={styles.google_btn} iconName={'google'} iconSize={20} textColor={'#000'} buttonColor={'#fff'} text={'Continue with Google'} />

                <Text style={styles.subtext}>Vietnamese</Text>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: '40%',
    },
    title: {
        fontSize: 25,
        margin: 10,
    },
    text: {
        fontSize: 15,
        margin: 20,
    },
    subtext: {
        fontSize: 15,
        marginTop: 40,
    },
    logo: {
        fontSize: 40,
        color: 'green',
    },
    row_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '100%',
        height: '70%',
        borderRadius: 20,
        marginTop: -40,
    },
    text_input: {
        width: "90%",
        height: 60,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 6,
        fontSize: 18,
        padding: 15,
    },
    login_btn: {
        width: '90%',

    },
    apple_btn: {
        width: '90%',
    },
    facebook_btn: {
        width: '90%',
    },
    google_btn: {
        width: '90%',
        borderWidth: 1,
    },

    line: {
        borderBottomColor: 'black',
        width: '35%',
        borderWidth: 1,
        borderColor: 'grey',
    },
})

export default Login;