import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Modal, View, Text, Image, TextInput, ScrollView, Platform, Button } from 'react-native';
import { RoundButton } from '../../utils/CustomButton';
import { dataCity, dataWard, dataDistrict, dataGender, dataPaperwork, dataCitizenship } from '../../db/Database';
import Dropdown from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import { BlackLine, OrangeLine } from '../../utils/CustomComponents';
import PasswordChange from './PasswordChange';


function Register_PersonalInfo(props) {

    const showPassword = false;

    const inputEmail = useRef(null)


    const [showAdditionalAddress, setShowAdditionalAddress] = useState(false);
    const [editAddressIcon, setEditAddressIcon] = useState('pen');
    const [editAddressIconColor, setEditAddressIconColor] = useState('#F58831');
    const [editAddressBtnColor, setEditAddressBtnColor] = useState('#fff')

    const [editableEmailInput, setEditableEmailInput] = useState(false);
    const [editEmailIcon, setEditEmailIcon] = useState('pen');
    const [editEmailIconColor, setEditEmailIconColor] = useState('#F58831');
    const [editEmailBtnColor, setEditEmailBtnColor] = useState('#fff')

    const [addressIsFocus, setAddressIsFocus] = useState(false);

    const [openCity, setOpenCity] = useState(false);
    const [openDistrict, setOpenDistrict] = useState(false);
    const [openWard, setOpenWard] = useState(false);
    const [openGender, setOpenGender] = useState(false);
    const [openBirthDate, setOpenBirthDate] = useState(false);
    const [openPaperwork, setOpenPaperwork] = useState(false);
    const [openCitizenship, setOpenCitizenship] = useState(false);

    const [valueCity, setValueCity] = useState('');
    const [valueStreet, setValueStreet] = useState('21 Nguyễn Văn Tráng');
    const [valueDistrict, setValueDistrict] = useState('01');
    const [valueWard, setValueWard] = useState('Bến Thành');
    const [valueGender, setValueGender] = useState('');
    const [valueBirthDate, setValueBirthDate] = useState(new Date());
    const [valueEmail, setValueEmail] = useState('');
    const [valuePassword, setValuePassword] = useState(props.password);
    const [valuePaperwork, setValuePaperwork] = useState('');
    const [valueCitizenship, setValueCitizenship] = useState('');

    const [modalPWChangeVisible, setModalPWChangeVisible] = useState(false);

    const editAddress = () => {
        if (!showAdditionalAddress) {
            setShowAdditionalAddress(true)
            setEditAddressIcon('check')
            setEditAddressIconColor('#fff')
            setEditAddressBtnColor('#F58831')
        } else {
            setShowAdditionalAddress(false)
            setEditAddressIcon('pen')
            setEditAddressIconColor('#F58831')
            setEditAddressBtnColor('#fff')

            setValueCity(valueCity)
            setValueStreet(valueStreet)
            setValueDistrict(valueDistrict)
            setValueWard(valueWard)
        }
    }

    const editEmail = async () => {
        setEditEmailIcon(!editableEmailInput ? 'check' : 'pen')
        setEditEmailIconColor(!editableEmailInput ? '#fff' : '#F58831')
        setEditEmailBtnColor(!editableEmailInput ? '#F58831' : '#fff')
        setEditableEmailInput(!editableEmailInput)
        console.log(props.password);
    }

    useEffect(() => {
        if (editableEmailInput) {
            inputEmail.current.focus()
        }
    }, [editableEmailInput])



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
                    <OrangeLine />

                    <Text style={styles.title}>Full Name</Text>
                    <TextInput style={styles.input} placeholder={'Enter your full name'} editable />

                    <BlackLine />

                    {/* TODO: fix the overlay */}
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
                        <BlackLine />
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
                        <BlackLine />
                    </View>

                    <Text style={styles.title}>Phone number</Text>
                    <TextInput style={styles.input} value={props.phoneNumber} editable={false} />
                    <BlackLine />

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
                    <BlackLine />

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
                    <BlackLine />

                    <View style={[styles.row_wrapper, { marginTop: 15, marginBottom: 50, zIndex: 10, alignItems: 'center' }]}>
                        <Text style={[styles.title, { marginRight: 20 }]}>Gender</Text>
                        <Dropdown
                            style={styles.dropdown}
                            textStyle={styles.input}
                            open={openGender}
                            value={valueGender}
                            items={dataGender}
                            setOpen={setOpenGender}
                            setValue={setValueGender}
                            placeholder={'Select.'}
                            containerProps={{
                                width: 200,
                            }}
                        />

                    </View>



                </View>
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
    },
    icon_user: {
        height: 70,
        width: 70,
        margin: 10,
        borderRadius: 50,
    },
    profile_edit: {
        height: 20,
        width: 20,
        borderRadius: 50,
        position: 'absolute',
        top: 45,
        left: 60,
    },
    icon_edit: {
        height: 20,
        width: 20,
        borderRadius: 50,
    },
    modal_close_btn: {
        position: 'absolute',
        left: Platform.OS == 'ios' ? 350 : 370,
        top: Platform.OS == 'ios' ? 45 : 15,
        height: 20,
        width: 20,
    },
    barcode: {
        width: '92%',
        alignSelf: 'center',
    },
    row_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    column_wrapper_left: {
        flexDirection: 'column',
        width: '50%',

    },
    column_wrapper_right: {
        flexDirection: 'column',
        width: '45%',
    },
    column_wrapper_custom: {
        flexDirection: 'column',
        paddingLeft: 20,
    },
    gray_screen: {
        backgroundColor: 'lightgray',
        width: '95%',
        height: 188,
        position: 'absolute',
        top: 7,
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
    membership: {
        margin: 5,
    },
    footnote: {
        margin: 10,
        marginLeft: 15,
    },
})