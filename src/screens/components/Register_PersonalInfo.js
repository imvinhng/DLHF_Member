import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Modal, View, Text, Image, TextInput, ScrollView, Platform, Button } from 'react-native';
import { LongButton, RadioButton, RoundButton } from '../../utils/CustomButton';
import { dataGender, dataPaperwork, dataCitizenship } from '../../db/Database';
import Dropdown from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import { BlackLine_Full, OrangeLine } from '../../utils/CustomComponents';
import Register_Address from './Register_Address';

function Register_PersonalInfo(props) {

    const inputEmail = useRef(null)

    const [openGender, setOpenGender] = useState(false);
    const [openBirthDate, setOpenBirthDate] = useState(false);
    const [openPaperwork, setOpenPaperwork] = useState(false);
    const [openCitizenship, setOpenCitizenship] = useState(false);

    const [valueGender, setValueGender] = useState('');
    const [valueBirthDate, setValueBirthDate] = useState(new Date());
    const [valueEmail, setValueEmail] = useState('');
    const [valuePaperwork, setValuePaperwork] = useState('');
    const [valueCitizenship, setValueCitizenship] = useState('');

    const [modalRegisterAddressVisible, setModalRegisterAddressVisible] = useState(false);

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
            <View style={styles.home}>
                <View style={styles.header}>
                    <Text style={styles.header_title}>Register new member</Text>
                </View>

                <View style={styles.body}>
                    <Text style={styles.text1}>Personal Info</Text>
                    <Text style={styles.text2}>To protect your personal right's, please enter the following fields accurately to your best knowledge</Text>
                    <Text style={styles.page_number}>1/2</Text>
                    <OrangeLine />

                    <Text style={styles.title}>Full Name</Text>
                    <TextInput style={styles.input} placeholder={'Enter your full name'} editable />

                    <BlackLine_Full />

                    <View style={{ zIndex: 7 }}>
                        <Text style={styles.title}>Identification Document</Text>

                        <Dropdown
                            style={[styles.dropdown_long, { zIndex: 2 }]}
                            placeholderStyle={[styles.placeholder, { paddingLeft: -10 }]}
                            listItemLabelStyle={[styles.input, { paddingLeft: -10, zIndex: 2 }]}
                            labelStyle={[styles.input, { paddingLeft: -10 }]}
                            open={openPaperwork}
                            value={valuePaperwork}
                            items={dataPaperwork}
                            setOpen={setOpenPaperwork}
                            setValue={setValuePaperwork}
                            placeholder={'Select the paperwork'}
                            containerProps={{
                                width: '90%',
                                backgroundColor: '#fff'

                            }}
                        />
                        <BlackLine_Full />
                    </View>
                    <View style={{ zIndex: 6 }}>
                        <Text style={styles.title}>Citizenship</Text>
                        <Dropdown
                            style={styles.dropdown_long}
                            placeholderStyle={[styles.placeholder, { paddingLeft: -10 }]}
                            listItemLabelStyle={[styles.input, { paddingLeft: -10 }]}
                            labelStyle={[styles.input, { paddingLeft: -10 }]}
                            open={openCitizenship}
                            value={valueCitizenship}
                            items={dataCitizenship}
                            setOpen={setOpenCitizenship}
                            setValue={setValueCitizenship}
                            placeholder={'Select your citizenship'}
                            containerProps={{
                                width: '90%',
                            }}
                        />
                        <BlackLine_Full />
                    </View>

                    <Text style={styles.title}>Phone number</Text>
                    <TextInput style={styles.input} value={props.phoneNumber} editable={false} />
                    <BlackLine_Full />

                    <Text style={styles.title}>Email</Text>
                    <View style={styles.row_wrapper}>
                        <TextInput
                            style={styles.input}
                            ref={inputEmail}
                            placeholder={'Add email address'}
                            value={valueEmail}
                            editable
                            autoCorrect={false}
                            onChangeText={(text) => setValueEmail(text.toLowerCase())}
                        />
                    </View>
                    <BlackLine_Full />

                    <Text style={styles.title}>Date of Birth</Text>
                    <View style={styles.row_wrapper}>
                        <TextInput
                            style={styles.input}
                            value={valueBirthDate.toLocaleDateString('vi')}
                            ref={e => this.birthDateInput = e}
                            editable
                            onFocus={() => {
                                setOpenBirthDate(true)
                                this.birthDateInput.blur();
                            }}

                        />

                        <DatePicker
                            modal
                            locale={'vi'}
                            mode={'date'}
                            title={'Select your birthdate'}
                            open={openBirthDate}
                            date={valueBirthDate}
                            onConfirm={(date) => {
                                setValueBirthDate(date)
                                setOpenBirthDate(false)
                            }}
                            onCancel={() => {
                                setOpenBirthDate(false)
                            }}
                        />
                    </View>
                    <BlackLine_Full />

                    <View style={[styles.row_wrapper, styles.gender_radio]}>
                        <Text style={[styles.title, { marginRight: 20, paddingBottom: 8, }]}>Gender</Text>
                        <View style={styles.radio_group}>
                            <RadioButton />
                            <Text style={styles.radio_text}>Male</Text>
                        </View>

                        <View style={styles.radio_group}>
                            <RadioButton />
                            <Text style={styles.radio_text}>Female</Text>
                        </View>
                    </View>



                </View>

                <View style={styles.footer}>
                    <LongButton
                        text={'Continue'}
                        textStyle={{ color: '#fff' }}
                        buttonColor={'#F58831'}
                        buttonStyle={styles.button}
                        onPressFunction={() => setModalRegisterAddressVisible(true)}
                    />
                </View>

                <Register_Address
                    modalVisible={modalRegisterAddressVisible}
                    setModalVisible={setModalRegisterAddressVisible}
                />
            </View>
        </Modal>
    );
}

export default Register_PersonalInfo;

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
        width: '95%',
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
    },
    page_number: {
        position: 'absolute',
        top: 12,
        left: Platform.OS == 'ios' ? 335 : 350,
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS == 'ios' ? 70 : 90,
        height: 100,
        width: '100%',
        backgroundColor: '#fff',

        //ios
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: 1, height: -7 },

        //android
        elevation: 7,
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
    gender_radio: { marginTop: 15, marginBottom: 50, zIndex: 20, alignItems: 'center' }
})