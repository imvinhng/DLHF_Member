/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';
import { LongButton_Icon5, PromotionButton, NotificationButton } from '../../utils/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { convertViToEn } from '../../utils/functions';
import SearchBar from '../../utils/SearchBar';
import { WAREHOUSE_REPORT } from '../../db/ttp_report_warehouse';
import GlobalStyle from '../../assets/style/GlobalStyle';
import { backgroundGray, white } from '../../assets/style/Colors';
import { HeaderPN } from '../../utils/Header';

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

            <View style={styles.item_textbox}>
                <Text style={GlobalStyle.item_subtitle}>DALAT HASFARM </Text>
                <Text style={[GlobalStyle.item_title, styles.item_title]}>{location}</Text>
                <Text style={[GlobalStyle.item_footer, styles.item_footer]}>0.2 km away</Text>
            </View>
        </TouchableOpacity>
    );


    return (
        <View style={styles.home}>
            <View style={styles.header}>
                <HeaderPN title={'Store'} style={{ paddingBottom: -10 }} />

                <View style={styles.bottom_header}>
                    <SearchBar
                        searchPhrase={searchPhrase}
                        setSearchPhrase={setSearchPhrase}
                        containerStyle={styles.search_container}
                        closeBtnStyle={styles.search_close}
                    />

                    <LongButton_Icon5
                        iconName={'map'}
                        iconSize={23}
                        textColor={'#000'}
                        buttonColor={white}
                        buttonStyle={styles.map_btn}
                        textStyle={[styles.text_map, GlobalStyle.text]}
                        text={'Map'}
                        onPressFunction={() => navigation.navigate('Store', { screen: 'MapScreen' })}
                    />
                </View>
            </View>

            <View style={styles.body}>
                <Text style={[GlobalStyle.heading, styles.flatlist_heading]}>Dalat Hasfarm's Flower Shop Locations</Text>

                <FlatList
                    data={WAREHOUSE_REPORT}
                    renderItem={({ item }) => {
                        if (!item.Title.includes('ONLINE')) {
                            if (searchPhrase === '') {
                                return <Item id={item.ID} location={item.Title} address={item.Address} />
                            } else if (convertViToEn(item.name_nps, true).includes(convertViToEn(searchPhrase, true))) {
                                return <Item id={item.ID} location={item.Title} address={item.Address} />
                            } else if (convertViToEn(item.Address, true).includes(convertViToEn(searchPhrase, true))) {
                                return <Item id={item.ID} location={item.Title} address={item.Address} />
                            }
                        }
                    }}
                    keyExtractor={item => item.ID}
                />
            </View>
        </View>
    );
}

export default Store;

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');
const imageWidth = 80; const imageHeight = 80;
const imageMargin = 10;
const itemMargin = 10
const itemHeight = 100; const itemWidth = ScreenWidth - (itemMargin * 2);
const textboxWidth = itemWidth - (imageWidth + imageMargin * 2) - 20;
const textBoxHeight = imageHeight;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: white,
    },
    body: {
        backgroundColor: backgroundGray,
        flex: 1,
    },
    top_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottom_header: {
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 5,
    },
    text_map: {
        marginLeft: 10,
    },
    image: {
        height: imageHeight,
        width: imageWidth,
        borderRadius: 5,
        margin: -10,
    },
    flatlist_heading: {
        margin: 15,
        fontSize: 15,
    },
    item: {
        backgroundColor: white,
        padding: 20,
        marginVertical: 7,
        marginHorizontal: 10,
        height: itemHeight,
        flexDirection: 'row',
        borderRadius: 10,

        ...GlobalStyle.box_shadow,
    },
    item_textbox: {
        flexDirection: 'column',
        width: textboxWidth,
        height: textBoxHeight,
        position: 'absolute',
        left: imageWidth + imageMargin * 2,
        top: imageMargin,
        // backgroundColor: 'yellow'
    },
    item_title: {
        fontSize: 16,
        marginVertical: 5
    },
    item_footer: {
        position: 'absolute',
        top: imageHeight - imageMargin - 3,  // not sure why it's 3, but it matches the image size
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

