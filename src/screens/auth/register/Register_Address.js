import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, ScrollView, Platform, Button, Dimensions } from 'react-native';
import { LongButton, RoundButton } from '../../../utils/CustomButton';
import { dataCity, dataDistrict, dataWard, dataStreet, dataCountry } from '../../../db/Database';
import { BlackLine_Full, OrangeLine_Full } from '../../../utils/Line';
import Dropdown from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import { useNavigation } from '@react-navigation/native';

function Register_Address(props) {

    const navigation = useNavigation();

    const [openCity, setOpenCity] = useState(false);
    const [openDistrict, setOpenDistrict] = useState(false);
    const [openWard, setOpenWard] = useState(false);
    const [openStreet, setOpenStreet] = useState(false);
    const [openCountry, setOpenCountry] = useState(false);

    const [valueCity, setValueCity] = useState('');
    const [valueStreet, setValueStreet] = useState('');
    const [valueDistrict, setValueDistrict] = useState('');
    const [valueWard, setValueWard] = useState('');
    const [valueHouseNumber, setValueHouseNumber] = useState('');
    const [valueCountry, setValueCountry] = useState('Vietnam');

    const [showAddressInfo, setShowAddressInfo] = useState(true);

    const valueHomeAddress = valueHouseNumber + ' ' + 'Đường ' + valueStreet + ', ' + 'Phường ' + valueWard + ', ' + 'Quận ' + valueDistrict + ', ' + valueCity;


    return (
        <View style={styles.home}>
            <View style={styles.header}>
                <Text style={styles.header_title}>Register new member</Text>
            </View>

            <View style={styles.body}>
                <Text style={styles.text1}>Home Address</Text>
                <Text style={styles.text2}>To receive our promotions based on your area, we are going to need your current location.</Text>
                <Text style={styles.page_number}>2/2</Text>
                <OrangeLine_Full />

                <View style={{ zIndex: 8 }}>
                    <Text style={styles.title}>Country</Text>

                    <Dropdown
                        style={[styles.dropdown_long, { zIndex: 2 }]}
                        placeholderStyle={[styles.placeholder, { paddingLeft: -10 }]}
                        listItemLabelStyle={[styles.input, { paddingLeft: -10, zIndex: 2 }]}
                        labelStyle={[styles.input, { paddingLeft: -10 }]}
                        open={openCountry}
                        value={valueCountry}
                        items={dataCountry}
                        setOpen={setOpenCountry}
                        setValue={setValueCountry}
                        placeholder={'Select the country'}
                        containerProps={{ width: '100%' }}
                        onChangeValue={(value) => {
                            // console.log(value);
                            if (value != 'Vietnam') {
                                setShowAddressInfo(false);
                            } else {
                                setShowAddressInfo(true);
                            }
                        }}
                    />
                    <BlackLine_Full />
                </View>

                {/* fix this to hide address info when choose out-of-country */}
                {showAddressInfo &&
                    <View>

                        <View style={{ zIndex: 7 }}>
                            <Text style={styles.title}>City</Text>

                            <Dropdown
                                style={[styles.dropdown_long, { zIndex: 2 }]}
                                placeholderStyle={[styles.placeholder, { paddingLeft: -10 }]}
                                listItemLabelStyle={[styles.input, { paddingLeft: -10, zIndex: 2 }]}
                                labelStyle={[styles.input, { paddingLeft: -10 }]}
                                open={openCity}
                                value={valueCity}
                                items={dataCity}
                                setOpen={setOpenCity}
                                setValue={setValueCity}
                                placeholder={'Select the city'}
                                containerProps={{ width: '100%' }}
                            />
                            <BlackLine_Full />
                        </View>
                        <View style={{ zIndex: 6 }}>
                            <Text style={styles.title}>District</Text>
                            <Dropdown
                                style={styles.dropdown_long}
                                placeholderStyle={[styles.placeholder, { paddingLeft: -10 }]}
                                listItemLabelStyle={[styles.input, { paddingLeft: -10 }]}
                                labelStyle={[styles.input, { paddingLeft: -10 }]}
                                open={openDistrict}
                                value={valueDistrict}
                                items={dataDistrict}
                                setOpen={setOpenDistrict}
                                setValue={setValueDistrict}
                                placeholder={'Select your district'}
                                containerProps={{ width: '100%' }}
                            />
                            <BlackLine_Full />
                        </View>
                        <View style={{ zIndex: 5 }}>
                            <Text style={styles.title}>Ward</Text>
                            <Dropdown
                                style={styles.dropdown_long}
                                placeholderStyle={[styles.placeholder, { paddingLeft: -10 }]}
                                listItemLabelStyle={[styles.input, { paddingLeft: -10 }]}
                                labelStyle={[styles.input, { paddingLeft: -10 }]}
                                open={openWard}
                                value={valueWard}
                                items={dataWard}
                                setOpen={setOpenWard}
                                setValue={setValueWard}
                                placeholder={'Select your ward'}
                                containerProps={{ width: '100%' }}
                            />
                            <BlackLine_Full />
                        </View>

                        <View style={{ zIndex: 4 }}>
                            <Text style={styles.title}>Street</Text>
                            <Dropdown
                                style={styles.dropdown_long}
                                placeholderStyle={[styles.placeholder, { paddingLeft: -10 }]}
                                listItemLabelStyle={[styles.input, { paddingLeft: -10 }]}
                                labelStyle={[styles.input, { paddingLeft: -10 }]}
                                open={openStreet}
                                value={valueStreet}
                                items={dataStreet}
                                setOpen={setOpenStreet}
                                setValue={setValueStreet}
                                placeholder={'Select your street'}
                                containerProps={{ width: '100%' }}
                            />
                            <BlackLine_Full />
                        </View>

                        <Text style={styles.title}>House Number</Text>
                        <TextInput style={styles.input} placeholder={'Enter your house no.'} value={valueHouseNumber} onChangeText={(text) => setValueHouseNumber(text)} editable />
                        <BlackLine_Full />

                        <Text style={styles.title}>Home Address</Text>
                        <TextInput style={styles.input} value={valueHomeAddress} editable multiline numberOfLines={2} />
                        <BlackLine_Full />
                    </View>
                }

                <View style={styles.footer}>
                    <LongButton
                        text={'Continue'}
                        textStyle={{ color: '#fff' }}
                        buttonColor={'#F58831'}
                        buttonStyle={styles.button}
                        onPressFunction={() => {
                            navigation.navigate('RegisterCompleteScreen')
                        }}
                    />
                </View>

            </View>
        </View>
    )
}

export default Register_Address;

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const bodyWidth = .95 * screenWidth;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        // marginTop: Platform.OS == 'ios' ? '30%' : '16%',
        // height: '100%',
        backgroundColor: 'lightgray',
        alignItems: 'center',
    },
    header: {
        height: Platform.OS == 'ios' ? '30%' : '28%',
        width: '100%',
        backgroundColor: '#F58831',
        paddingTop: Platform.OS == 'ios' ? 50 : 20,
        alignItems: 'center',

        //ios
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: { width: 1, height: 10 },

        //android
        elevation: 7,
    },
    body: {
        paddingLeft: 10,
        marginTop: -150,
        width: bodyWidth,
        height: '65%',
        backgroundColor: '#fff',
        borderRadius: 10,

        //ios
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: 1, height: 7 },

        //android
        elevation: 7,
    },
    row_wrapper: {
        flexDirection: 'row',
    },
    dropdown: {
        minHeight: 35,
        width: 200,
        backgroundColor: '#fff',
        borderWidth: 0,
    },
    dropdown_long: {
        minHeight: 35,
        width: '100%',
        backgroundColor: '#fff',
        borderWidth: 0,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: '60%',
    },
    input: {
        marginVertical: Platform.OS == 'ios' ? 7 : -10,
        marginRight: -11,
        paddingLeft: 10,
        width: '90%',
        fontWeight: 'bold',
        color: 'black',
    },
    placeholder: {
        marginVertical: Platform.OS == 'ios' ? 7 : -10,
        marginRight: -11,
        paddingLeft: 10,
        width: '90%',
        fontWeight: 'bold',
        color: 'lightgray',
    },
    header_title: {
        fontWeight: '400',
        fontSize: 20,
        marginTop: 10,
        color: '#fff',
    },
    title: {
        fontWeight: '300',
        marginTop: 10,
    },
    name: {
        fontWeight: '500',
        fontSize: 22,
        margin: 5,
    },
    text1: {
        fontWeight: '500',
        marginVertical: 15,
    },
    text2: {
        fontWeight: '300',
        marginVertical: 10,
        width: 370,
    },
    page_number: {
        position: 'absolute',
        top: 12,
        left: bodyWidth - 40,
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: Platform.OS == 'ios' ? 155 : 110,
        position: 'absolute',
        top: screenHeight - 230,
        marginLeft: -10,

        height: 100,
        width: screenWidth,
        backgroundColor: '#fff',

        //ios
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: 1, height: -7 },

        //android
        elevation: 7,
    }
})