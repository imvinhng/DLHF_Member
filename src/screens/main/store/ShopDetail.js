import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, Modal, TouchableOpacity, Platform, Dimensions, ScrollView } from 'react-native';
import { PromotionButton, NotificationButton, RoundButton, LongButton_Icon } from '../../../utils/CustomButton';
import { LongButton_Icon5 } from '../../../utils/CustomButton';
import { DATA } from '../../../db/Database';
import { WAREHOUSE_REPORT } from '../../../db/ttp_report_warehouse';
import GlobalStyle from '../../../assets/style/GlobalStyle';
import { backgroundGray, black, lightgray, offwhite, tan, white } from '../../../assets/style/Colors';
import { HeaderPN } from '../../../utils/Header';
import MapView, { Marker } from 'react-native-maps';


function Shop_Detail(props) {
    const route = useRoute();
    const navigation = useNavigation();

    const { clicked_id } = route.params;

    const store_index = clicked_id - 1;
    const [favoriteAdded, setFavoriteAdded] = useState(false);


    return (
        <View style={styles.home}>
            <HeaderPN title={'Store'} />

            {/* Need to add paddingBottom when using ScrollView with dynamic height */}
            <ScrollView contentContainerStyle={{ height: bodyHeight, paddingBottom: 100 }}>
                <View style={styles.body}>
                    <Image source={require('../../../assets/images/extras/storefront-large.png')} />
                    <RoundButton
                        buttonStyle={styles.close_btn}
                        iconName={'times-circle'}
                        iconSize={25}
                        onPressFunction={() => navigation.goBack()}
                    />
                    <View style={styles.info_textbox}>
                        <Text style={styles.location}>DALAT HASFARM</Text>
                        <Text style={styles.address}>{WAREHOUSE_REPORT[store_index].Title}</Text>
                        <Text style={styles.hours}>Operation Hours: {WAREHOUSE_REPORT[store_index].OpenStart} - {WAREHOUSE_REPORT[store_index].OpenEnd} </Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <LongButton_Icon5
                            iconName='location-arrow'
                            iconSize={iconSize}
                            text={WAREHOUSE_REPORT[store_index].Address}
                            buttonStyle={styles.longbutton}
                            buttonColor={white}
                            textStyle={styles.text_button}
                        />
                        <LongButton_Icon
                            iconName={favoriteAdded ? 'heart' : 'heart-o'}
                            iconSize={iconSize}
                            iconColor={black}
                            text='Add to favorites'
                            buttonStyle={styles.longbutton}
                            textStyle={styles.text_button}
                            buttonColor={white}
                            onPressFunction={() => { setFavoriteAdded(!favoriteAdded) }}
                        />
                        <LongButton_Icon5
                            iconName='phone-alt'
                            iconSize={iconSize}
                            text='Call Us'
                            buttonStyle={styles.longbutton}
                            buttonColor={white}
                            textStyle={styles.text_button}
                        />
                        <LongButton_Icon5
                            iconName='share-alt'
                            iconSize={iconSize}
                            text='Share with friends'
                            buttonStyle={styles.longbutton}
                            buttonColor={white}
                            textStyle={styles.text_button}
                        />
                    </View>

                    {/* TODO: Need to add marker and set correct location */}
                    <View style={styles.mapContainer}>
                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: WAREHOUSE_REPORT[store_index].Lat,
                                longitude: WAREHOUSE_REPORT[store_index].Long,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                            zoomEnabled
                            minZoomLevel={5}
                        >
                            <Marker
                                coordinate={{ latitude: parseFloat(WAREHOUSE_REPORT[store_index].Lat), longitude: parseFloat(WAREHOUSE_REPORT[store_index].Long) }}
                                pinColor={WAREHOUSE_REPORT[store_index].Color} // any color
                                title={WAREHOUSE_REPORT[store_index].Title}
                                description={WAREHOUSE_REPORT[store_index].Address}
                                key={store_index}
                            />
                        </MapView>
                    </View>
                </View>
            </ScrollView>
        </View>

    );
}

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');
const bodyHeight = 'auto';
const iconSize = 16;
const buttonWidth = ScreenWidth - 40;
const mapHeight = 300; const mapWidth = ScreenWidth * 0.9;
const bodyMarginTop = 0.03 * ScreenHeight;

const styles = StyleSheet.create({
    home: {
        backgroundColor: '#fff',
    },
    body: {
        height: bodyHeight,
        marginTop: bodyMarginTop,
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
    title: {
        fontSize: 25,
        marginLeft: '7%',
    },
    location: {
        ...GlobalStyle.item_subtitle,
        fontSize: 15,
    },
    address: {
        ...GlobalStyle.item_title,
        fontSize: 18,
        marginVertical: 5,
    },
    hours: {
        ...GlobalStyle.item_footer,
        fontSize: 13,
    },
    info_textbox: {
        padding: 20,
    },
    text_button: {
        marginLeft: 30,
        width: (buttonWidth - iconSize) * 0.8,
        fontSize: 15,
        fontFamily: 'Ubuntu-Regular'
    },
    buttonContainer: {
        alignItems: 'center',
    },
    longbutton: {
        height: 'auto',
        width: buttonWidth,
        paddingVertical: 20,
        paddingHorizontal: 5,
        borderRadius: 5,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        alignItems: 'center',
        ...GlobalStyle.box_shadow,
    },
    close_btn: {
        position: 'absolute',
        top: -10,
        left: Platform.OS == 'ios' ? 370 : 360,
    },
    top_header: {
        marginTop: Platform.OS == 'ios' ? 40 : 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    text_large: {
        fontSize: 24,
        fontWeight: '600',
        marginLeft: 20,
    },
    map: {
        width: mapWidth,
        height: mapHeight,
        borderRadius: 10
    },
    mapContainer: {
        alignSelf: 'center',
        height: mapHeight,
        margin: 10,
        marginVertical: 20,
    },
})

export default Shop_Detail;
