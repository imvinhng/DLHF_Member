import { StyleSheet, View, Text, Image, Modal, TouchableOpacity, Platform } from 'react-native';
import { PromotionButton, NotificationButton, RoundButton } from '../../utils/CustomButton';
import { LongButton_Icon } from '../../utils/CustomButton';
import { DATA } from '../../db/Database';

import React from 'react';
function Shop_Detail(props) {
    const id = props.id - 1;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                props.setModalVisible(false);
            }}
        >
            <TouchableOpacity style={styles.backdrop_top} onPress={() => props.setModalVisible(false)} />
            <View style={styles.home}>
                {/* Make sure to not include header so user can click outside the View to close the Modal */}

                <View style={styles.body}>
                    <Image source={require('../../assets/storefront-large.png')} />
                    <RoundButton
                        buttonStyle={styles.roundbutton}
                        iconName={'times-circle'}
                        iconSize={25}
                        onPressFunction={() => props.setModalVisible(!props.modalVisible)}
                    />

                    <Text style={styles.location}>Dalat Hasfarm {DATA[id].location}</Text>
                    <Text style={styles.address}>{DATA[id].address}</Text>
                    <Text style={styles.hours}>Operation Hours: {DATA[id].hours}</Text>

                    <View style={styles.center_wrapper_custom}>
                        <LongButton_Icon
                            iconName='location-arrow'
                            iconSize={15}
                            text={DATA[id].full_address}
                            buttonStyle={styles.longbutton}
                            textStyle={styles.text_button}
                        />
                        <LongButton_Icon
                            iconName='heart'
                            iconSize={15}
                            text='Add to favorites'
                            buttonStyle={styles.longbutton}
                            textStyle={styles.text_button}
                        />
                        <LongButton_Icon
                            iconName='phone-alt'
                            iconSize={15}
                            text='Call Us'
                            buttonStyle={styles.longbutton}
                            textStyle={styles.text_button}
                        />
                        <LongButton_Icon
                            iconName='share-alt'
                            iconSize={15}
                            text='Share with friends'
                            buttonStyle={styles.longbutton}
                            textStyle={styles.text_button}
                        />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.backdrop_bottom} onPress={() => props.setModalVisible(false)} />
        </Modal>
    );
}

const styles = StyleSheet.create({
    home: {
        // flex: 1,
        // marginTop: Platform.OS == 'ios' ? '30%' : '16%',
        height: Platform.OS == 'ios' ? '78.5%' : '86.2%',
        backgroundColor: '#fff',
    },
    body: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    backdrop_top: {
        height: Platform.OS == 'ios' ? '13%' : '8%',
        // backgroundColor: 'rgba(0,0,0,0.2)',
        margin: 0,
    },
    backdrop_bottom: {
        height: Platform.OS == 'ios' ? '28%' : '8%',
        // backgroundColor: 'rgba(0,0,0,0.2)',
        margin: 0,
    },
    sub_header_left: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    sub_header_right: {
        flexDirection: 'row',
    },
    center_wrapper_custom: {
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: -20,
        marginLeft: -30,
    },
    title: {
        fontSize: 25,
        marginLeft: '7%',
    },
    location: {
        fontWeight: '500',
        margin: 10,
    },
    address: {
        fontWeight: 'bold',
        margin: 10,
    },
    hours: {
        fontWeight: '300',
        // color: 'gray',
        margin: 10,
        marginBottom: 35,
    },

    text_button: {
        marginLeft: 20,
        fontSize: 13,
    },
    longbutton: {
        height: 43,
        width: 250,
        marginBottom: Platform.OS == 'ios' ? 0 : 15,
        alignItems: 'center',
        // backgroundColor: 'yellow'
    },
    roundbutton: {
        position: 'absolute',
        top: -10,
        left: Platform.OS == 'ios' ? 370 : 360,
    },
})

export default Shop_Detail;
