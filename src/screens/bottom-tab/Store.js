/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { LongButton_Icon, PromotionButton, NotificationButton } from '../../utils/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { convertViToEn } from '../../utils/functions';
import SearchBar from '../../utils/SearchBar';
import { WAREHOUSE_REPORT } from '../../db/ttp_report_warehouse';
import GlobalStyle from '../../assets/style/GlobalStyle';

function Store(props) {
    const navigation = useNavigation();
    const [searchPhrase, setSearchPhrase] = useState('');


    const Item = ({ id, location, address }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => {
                navigation.navigate('Store', { screen: 'ShopDetailScreen', params: { clicked_id: id } })
            }}>
            <Image style={styles.image} source={require('../../assets/images/extras/storefront.png')} />

            <View style={styles.column_wrapper_custom}>
                <Text style={GlobalStyle.item_subtitle}>Dalat Hasfarm {location}</Text>
                <Text style={[GlobalStyle.item_title, { width: 250, fontSize: 12 }]}>{address}</Text>
                <Text style={[GlobalStyle.item_footer, { position: 'absolute', top: 70 }]}>0.2 km away</Text>
            </View>
        </TouchableOpacity>
    );


    return (
        <SafeAreaView style={styles.home}>
            <View style={styles.header}>
                <View style={styles.top_header}>
                    <View style={styles.sub_header_left}>
                        <Text style={[styles.title_margin, GlobalStyle.screen_title]}>Store</Text>
                    </View>
                    <View style={styles.sub_header_right}>
                        <PromotionButton />
                        <NotificationButton />
                    </View>
                </View>

                <View style={styles.bottom_header}>
                    <SearchBar
                        searchPhrase={searchPhrase}
                        setSearchPhrase={setSearchPhrase}
                        containerStyle={styles.search_container}
                        closeBtnStyle={styles.search_close}
                    />

                    <LongButton_Icon
                        iconName={'map'}
                        iconSize={23}
                        textColor={'#000'}
                        buttonColor={'#f8f8f6'}
                        buttonStyle={styles.map_btn}
                        textStyle={[styles.text_map, GlobalStyle.text]}
                        text={'Map'}
                        onPressFunction={() => navigation.navigate('Store', { screen: 'MapScreen' })}
                    />
                </View>
            </View>

            <View style={styles.body}>
                <Text style={[GlobalStyle.heading, styles.text_small]}>Dalat Hasfarm's Flower Shop Locations</Text>

                <FlatList
                    data={WAREHOUSE_REPORT}
                    renderItem={({ item }) => {
                        // if no input, show all
                        if (searchPhrase === '') {
                            return <Item id={item.ID} location={item.Title} address={item.Address} />
                        } else if (convertViToEn(item.name_nps, true).includes(convertViToEn(searchPhrase, true))) {
                            return <Item id={item.ID} location={item.Title} address={item.Address} />
                        } else if (convertViToEn(item.Address, true).includes(convertViToEn(searchPhrase, true))) {
                            return <Item id={item.ID} location={item.Title} address={item.Address} />
                        }
                    }}
                    keyExtractor={item => item.ID}
                />
            </View>
        </SafeAreaView>
    );
}

export default Store;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#f8f8f6'
    },
    body: {
        backgroundColor: '#efefef',
        flex: 1,
    },
    top_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottom_header: {
        backgroundColor: '#f8f8f6',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
    },
    header: {
        paddingTop: Platform.OS == 'ios' ? 0 : 10,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 5,
    },
    sub_header_left: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    sub_header_right: {
        flexDirection: 'row',
        marginRight: 15,
    },
    body1_top: {
        height: 150,
        width: 350,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#bfbaba',
        margin: 20,
    },
    body1_top_left: {
        alignItems: 'center',
    },
    body1_top_right: {
        alignItems: 'center',
    },
    column_wrapper_custom: {
        flexDirection: 'column',
        marginLeft: 20,
        marginTop: -15,
    },
    title_margin: {
        marginLeft: 20,
    },
    text_subtitle: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
    },
    text_small: {
        fontSize: 16,
        margin: 5,
        padding: 10,
    },
    text_smaller: {
        fontSize: 12,
        fontWeight: '300',
    },
    text_small_bold: {
        fontSize: 11,
        fontWeight: '600',
        marginTop: 5,
        width: 250,
    },
    text_light: {
        fontSize: 13,
        fontWeight: '200',
        position: 'absolute',
        top: 60,
    },
    text_map: {
        marginLeft: 10,
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 10,
        margin: -10,
    },
    item: {
        backgroundColor: '#f8f8f6',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        height: 100,
        flexDirection: 'row',
        borderRadius: 10,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    map_btn: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: -10,
        width: 100,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    search_container: {
        // position: 'absolute',
        margin: 10,
        marginLeft: -80,
    },
    search_close: {
        position: 'absolute',
        left: 252,
        top: 8,
    },
});

