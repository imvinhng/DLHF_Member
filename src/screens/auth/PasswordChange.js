import React, { useState } from 'react';
import { Modal, StyleSheet, View, Text, TextInput, Alert } from 'react-native';
import { LongButton } from '../../utils/CustomButton';

function PasswordChange(props) {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    return (
        <Modal visible={props.modalVisible}>
            <View style={styles.home}>
                <View style={styles.body}>
                    <Text style={styles.title}>Password</Text>

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
                        buttonColor={'green'}
                        buttonStyle={styles.button}
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

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#000',
        opacity: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        height: 300,
        width: 300,
        backgroundColor: 'lightgray',
        alignItems: 'center',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'yellow',
        height: 200,
        width: '80%',
        borderWidth: 0.2,
        margin: 10,
    },
    title: {
        alignSelf: 'center',
    },
    button: {
        position: 'absolute',
        justifyContent: 'center',
        paddingLeft: -5,
        top: 250,
        left: 100,
        width: 100,
    },
    input: {
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: 3,
        borderWidth: 0.5,
        width: 200,
        height: 35,
        margin: 10,
        padding: 10,
    },
})