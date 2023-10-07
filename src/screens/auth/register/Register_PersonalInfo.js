import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Modal, View, Text, Image, TextInput, ScrollView, Platform, Button } from 'react-native';
import { LongButton, RadioButton, RoundButton, RoundButton_Ionicons } from '../../../utils/CustomButton';
import { dataGender, dataPaperwork, dataCitizenship } from '../../../db/Database';
import { GrayLine_Full, OrangeLine_Full, Triangle } from '../../../utils/CustomComponents';
import Register_Address from './Register_Address';
import Dropdown from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const Register_PersonalInfo = (props) => {

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

    const [hiddenInfo, setHiddenInfo] = useState(false);

    return (
        <View style={styles.home}>
            <View style={styles.header}>
                <Text style={styles.header_title}>Register new member</Text>
            </View>

            <View style={styles.body}>
                <Text style={styles.text1}>Personal Info</Text>
                <Text style={styles.text2}>To protect your personal right's, please enter the following fields accurately to your best knowledge</Text>
                <Text style={styles.page_number}>1/2</Text>
                <OrangeLine_Full />

                <View style={[styles.row_wrapper, { alignItems: 'center' }]}>
                    <Text style={styles.title}>Full Name</Text>
                    <Text style={{ color: 'red' }}>*</Text>
                </View>
                <TextInput style={styles.input} placeholder={'Enter your full name'} editable autoCorrect={false} />

                <GrayLine_Full />

                <View style={{ zIndex: 51 }}>
                    <View style={[styles.row_wrapper, { alignItems: 'flex-end' }]}>
                        <View style={styles.column_wrapper}>

                            <View style={[styles.row_wrapper, { alignItems: 'center', zIndex: 999 }]}>
                                <Text style={styles.title}>Identification Document</Text>
                                <Text style={{ color: 'red' }}>*</Text>
                                <RoundButton_Ionicons
                                    iconName={'information-circle-outline'}
                                    iconSize={15}
                                    buttonStyle={{ position: 'absolute', left: 155, height: 20, width: 20 }}
                                    // TODO: Add in onPressFunction
                                    onPressFunction={() => setHiddenInfo(!hiddenInfo)}
                                />
                            </View>

                            <Dropdown
                                style={[styles.dropdown, { zIndex: 2 }]}
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
                                    width: '100%',
                                    backgroundColor: '#fff'

                                }}
                            />
                            <GrayLine_Full />
                        </View>

                        {hiddenInfo && <View style={styles.hidden_info}>
                            <Triangle style={{ borderBottomColor: 'lightgray', position: 'absolute', top: -10, left: 160 }} />
                            <Text
                                style={{ padding: 7 }}
                            >
                                Identification Document help us identify you when you need to change your personal information later.
                            </Text>
                        </View>}

                        <View style={[styles.column_wrapper, { marginLeft: Platform.OS == 'ios' ? 15 : 35, width: 145 }]}>

                            <View style={[styles.row_wrapper, { alignItems: 'center' }]}>
                                <Text style={styles.title}>Paperwork Number</Text>
                                <Text style={{ color: 'red' }}>*</Text>
                            </View>

                            <TextInput style={[styles.input, { height: Platform.OS == 'ios' ? 23 : 56 }]} placeholder='No.' />
                            <GrayLine_Full />
                        </View>
                    </View>
                </View>
                <View style={{ zIndex: 50 }}>
                    <View style={[styles.row_wrapper, { alignItems: 'center' }]}>
                        <Text style={styles.title}>Citizenship</Text>
                        <Text style={{ color: 'red' }}>*</Text>
                    </View>
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
                    <GrayLine_Full />
                </View>

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
                <GrayLine_Full />

                <Text style={styles.title}>Date of Birth</Text>
                <View style={styles.row_wrapper}>
                    <TextInput
                        style={styles.input}
                        value={valueBirthDate.toLocaleDateString('vi')}
                        placeholder={'Enter your birthdate'}
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
                <GrayLine_Full />

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
                    onPressFunction={() => {
                        // props.setModalVisible(false)
                        // console.log('Register_PersonalInfo visible: ' + props.modalVisible)
                        // setModalRegisterAddressVisible(true)
                    }}
                />
            </View>
        </View>
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
    column_wrapper: {
        flexDirection: 'column'
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
        marginTop: Platform.OS == 'ios' ? 120 : 135,
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
    gender_radio: {
        marginTop: 15,
        marginBottom: 50,
        zIndex: 20,
        alignItems: 'center'
    },
    hidden_info: {
        backgroundColor: 'lightgray',
        position: 'absolute',
        top: 35,
        width: 200,
        zIndex: 999,

    },


})