import React, { useState } from 'react';
import { Modal, StyleSheet, View, Text, TextInput, Alert, Dimensions } from 'react-native';
import { LongButton, RoundButton } from '../../utils/CustomButton';
import { backgroundGray, darkorange, tan, white } from '../../assets/style/Colors';
import GlobalStyle from '../../assets/style/GlobalStyle';
import { useNavigation } from '@react-navigation/native';
import { CloseButton } from '../../utils/CustomComponents';

function PasswordChange(props) {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    return (
        <Modal visible={props.modalVisible}>
            <View style={styles.home}>
                <View style={styles.body}>
                    <Text style={styles.title}>Password</Text>
                    <CloseButton buttonStyle={styles.close_btn} buttonColor={tan} onPressFunction={() => props.setModalVisible(false)} />


                    <View style={styles.container}>

                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setOldPassword(text)}
                            secureTextEntry
                            placeholder={'Old password'}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setNewPassword(text)}
                            secureTextEntry
                            placeholder={'New password'}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => {
                                if (text == newPassword) {
                                    setConfirmNewPassword(text)
                                }
                            }}
                            secureTextEntry
                            placeholder={'Confirm new password'}
                        />
                    </View>

                    <LongButton
                        text={'Submit'}
                        buttonColor={darkorange}
                        buttonStyle={styles.submit_button}
                        onPressFunction={() => {
                            if (oldPassword == '' || newPassword == '' || confirmNewPassword == '') {
                                Alert.alert('You cannot leave any field blank!')
                            } else if (oldPassword == newPassword) {
                                Alert.alert('You cannot reuse the same password!')
                            } else if (oldPassword != props.currentPassword) {
                                Alert.alert('You did not enter the correct current password!')
                            } else {
                                props.setNewPassword(newPassword)
                                Alert.alert('Your password change was successful!')
                                props.setModalVisible(false)
                            }
                        }} />
                </View>
            </View>
        </Modal>
    );
}

export default PasswordChange;

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');
const modalWidth = 400; const modalHeight = 400;
const inputWidth = 350; const inputHeight = 50;
const submitButtonWidth = 150; const submitButtonHeight = 50;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: white,
        opacity: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        height: modalHeight,
        width: modalWidth,
        backgroundColor: tan,
        alignItems: 'center',
        ...GlobalStyle.box_shadow,
        paddingVertical: 20,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'yellow',
        height: 'auto',
        width: '80%',
        margin: 10,
    },
    title: {
        alignSelf: 'center',
        fontSize: 25,
        fontFamily: 'DancingScript-Regular'
    },
    submit_button: {
        width: submitButtonWidth,
        height: submitButtonHeight,
        position: 'absolute',
        bottom: 10,
    },
    input: {
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: 3,
        borderWidth: 0.5,
        width: inputWidth,
        height: inputHeight,
        margin: 20,
        padding: 10,
    },
    close_btn: {
        position: 'absolute',
        right: 10,
        top: 10,
        height: 20,
        width: 20,
    }
})