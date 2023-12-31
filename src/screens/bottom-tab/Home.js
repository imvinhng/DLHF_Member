/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef } from 'react';
import { View, StyleSheet, Text, Platform, Image, Dimensions, FlatList, TouchableOpacity, Animated } from 'react-native';
import { LongButton_Icon5 } from '../../utils/CustomButton';
import { HomeHeader, HomeHeader_LoggedIn, HomeBody } from '../../utils/HomeComponents';
import { DATA_SPECIAL_OFFER } from '../../db/Database';
import GlobalStyle from '../../assets/style/GlobalStyle';


const Item = ({ msg, image_uri, exp_date }) => {
    return (
        <View style={styles.grid}>
            <View style={styles.subgrid}>
                <TouchableOpacity style={{ marginTop: 10 }}>
                    <Image
                        source={image_uri}
                        style={styles.image_grid}
                    />
                </TouchableOpacity>

                <Text style={[GlobalStyle.item_title, styles.text_grid]}>{msg}</Text>
                <LongButton_Icon5
                    iconName={'calendar'}
                    iconSize={20}
                    bgColor={'#fff'}
                    text={exp_date}
                    buttonStyle={styles.voucher_expiration_btn}
                    textStyle={[GlobalStyle.item_footer, styles.voucher_expiration_text]}
                />
            </View>
        </View>
    )
};




const Home = ({ route }) => {

    const { loggedIn } = route.params;
    // console.log('loggedIn: ', loggedIn)

    return (
        <View style={styles.home}>
            {loggedIn ? <HomeHeader_LoggedIn /> : <HomeHeader />}
            <FlatList
                data={DATA_SPECIAL_OFFER}
                numColumns={2}

                ListHeaderComponent={<HomeBody loggedIn={loggedIn} />}
                renderItem={({ item }) => {
                    return <Item
                        msg={item.msg}
                        image_uri={item.image_uri}
                        exp_date={item.exp_date}
                    />
                }
                }
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default Home;

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',

    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width / 2,
        paddingHorizontal: 5,
        marginTop: 10,

    },
    subgrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    text_grid: {
        fontSize: 13,
        paddingLeft: 10,
        marginTop: 5,
    },
    grid_btn_txt: {
        fontSize: Platform.OS == 'ios' ? 12 : 14,
    },
    image: {
        borderRadius: 10,
        margin: 10,
        width: Platform.OS == 'ios' ? 375 : 390,
    },
    image_grid: {
        width: ((width) / 2) - 10,
        height: ((width) / 2) - 10,
        borderRadius: 10,
        // margin: 10,
    },
    voucher_expiration_btn: {
        marginLeft: 10,
        marginTop: 10,
        marginBottom: -2,
    },
    voucher_expiration_text: {
        color: 'gray',
        fontWeight: '400',
        fontSize: 13,
        // textAlignVertical: 'center',
        paddingTop: 2,
        marginLeft: 7,
    },
    grid_button: {
        width: '30%',
        margin: 5,
    }
});

