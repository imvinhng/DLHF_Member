/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { RoundButton } from '../../utils/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Dash from 'react-native-dash';
import LinearGradient from 'react-native-linear-gradient';
import { DATA_VOUCHERS } from '../../db/Database';
import GlobalStyle from '../../assets/style/GlobalStyle';
import { Header, HeaderBack, HeaderPN, HeaderPNBack } from '../../utils/Header';
import { backgroundGray, white } from '../../assets/style/Colors';

const Item = ({ description, expiration_date, image_uri }) => {
    return (

        <TouchableOpacity style={styles.item}>
            <View style={{ height: 20, width: 15, borderRadius: 20, backgroundColor: '#efefef', position: 'absolute', top: -12, left: 95 }} />
            <Image style={styles.image} source={image_uri} />
            <Dash
                style={styles.vertical_dashed_line}
                dashGap={3}
                dashColor={'#efefef'}
                dashThickness={4}
                dashStyle={{ borderRadius: 100 }}
            />

            <View style={styles.column_wrapper_custom}>
                <Text style={[GlobalStyle.item_title, { width: 270 }]}>{description}</Text>
                <Text style={[GlobalStyle.item_footer, { marginTop: 30 }]}>Expires on {expiration_date}</Text>
            </View>
            <View style={{ height: 20, width: 15, borderRadius: 20, backgroundColor: '#efefef', position: 'absolute', top: 95, left: 95 }} />
        </TouchableOpacity>
    )
};

export function Promotions_Main(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.home}>

            <Header title={'Your Vouchers'} />

            <View style={styles.body}>
                <Text style={[styles.heading_margin, GlobalStyle.heading]}>Ready-to-use</Text>

                <FlatList
                    data={DATA_VOUCHERS}
                    renderItem={({ item }) =>
                        <Item
                            description={item.description}
                            expiration_date={item.expiration_date}
                            image_uri={item.image_uri}
                        />
                    }
                    keyExtractor={item => item.id}
                />
            </View>

        </View>
    );
}
export function Promotions_Popup(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.home}>

            <HeaderBack title={'Your Vouchers'} navDest={'Home'} />

            <View style={styles.body}>
                <Text style={[styles.heading_margin, GlobalStyle.heading]}>Ready-to-use</Text>

                <FlatList
                    data={DATA_VOUCHERS}
                    renderItem={({ item }) =>
                        <Item
                            description={item.description}
                            expiration_date={item.expiration_date}
                            image_uri={item.image_uri}
                        />
                    }
                    keyExtractor={item => item.id}
                />
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: white
    },
    body: {
        backgroundColor: backgroundGray,
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: white,
        paddingBottom: 5,
    },
    heading_margin: {
        margin: 15,
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 10,
        margin: -10,
    },
    item: {
        backgroundColor: white,
        padding: 20,
        marginVertical: 3,
        marginHorizontal: 12,
        height: 100,
        flexDirection: 'row',
        borderRadius: 13,
    },
    column_wrapper_custom: {
        flexDirection: 'column',
        // backgroundColor: 'red',
        width: 250,
        marginLeft: 35,
        marginTop: -10,
    },
    vertical_dashed_line: {
        width: 5,
        height: 80,
        flexDirection: 'column',
        position: 'absolute',
        left: 100,
        alignSelf: 'center',
    },
    vertical_dashed_line_inner: {
        width: 2,
        height: 79,
        flexDirection: 'column',
        position: 'absolute',
        left: 101,
        alignSelf: 'center',
    },
});

