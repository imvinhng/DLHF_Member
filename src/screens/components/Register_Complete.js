import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Modal, Image } from 'react-native';
import { LongButton } from '../../utils/CustomButton';
import React from 'react';

function Register_Complete(props) {
    const navigation = useNavigation();

    return (
        <Modal visible={props.modalVisible}>
            <View style={styles.home}>
                <View style={{ justifyContent: 'flex-start', alignItems: 'center', position: 'absolute' }}>
                    <Image source={require('../../assets/icons/Top_Orange_Ellipse.png')} />
                    <Image style={{ position: 'absolute' }} source={require('../../assets/icons/Party_Confettis.png')} />
                    <Image source={require('../../assets/icons/Party_Illustration.png')} />
                </View>

                <View style={{ flex: 1, marginTop: 100, justifyContent: 'center' }}>
                    <Text style={styles.text}>Congratulations on being a new member of Dalat Hasfarm!</Text>
                </View>
                <LongButton
                    text={'Back to Home'}
                    textStyle={{ color: '#fff' }}
                    buttonColor={'#F58831'}
                    buttonStyle={styles.button}
                    onPressFunction={() => navigation.navigate('Home')}
                />
            </View>

        </Modal>
    );
}

export default Register_Complete;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00833E'
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        color: '#fff',
        width: 300,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 380,
        height: 50,
        position: 'absolute',
        top: 750,
    },
})