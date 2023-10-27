import React, { useRef, useState } from 'react';
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
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';


function Shop_Detail(props) {
    const route = useRoute();
    const navigation = useNavigation();
    const mapRef = useRef(null);

    const { clicked_id } = route.params;

    const store_index = clicked_id - 1;
    const MIN_ZOOM_LEVEL = 3;
    const MAX_ZOOM_LEVEL = 20;

    const [favoriteAdded, setFavoriteAdded] = useState(false);
    const [zoom, setZoom] = useState(15);

    const [selectedRegion, setSelectedRegion] = useState({
        latitude: parseFloat(WAREHOUSE_REPORT[store_index].Lat),
        longitude: parseFloat(WAREHOUSE_REPORT[store_index].Long),
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    const handleZoom = (isZoomIn = false) => {
        let currentZoomLevel = zoom;
        // if zoomlevel set to max value and user click on minus icon, first decrement the level before checking threshold value
        if (!isZoomIn && currentZoomLevel === MAX_ZOOM_LEVEL) {
            currentZoomLevel -= 1;
        }
        // if zoomlevel set to min value and user click on plus icon, first increment the level before checking threshold value
        else if (isZoomIn && currentZoomLevel === MIN_ZOOM_LEVEL) {
            currentZoomLevel += 1;
        }
        if (
            currentZoomLevel >= MAX_ZOOM_LEVEL ||
            currentZoomLevel <= MIN_ZOOM_LEVEL
        ) {
            return;
        }

        currentZoomLevel = isZoomIn ? currentZoomLevel + 1 : currentZoomLevel - 1;
        const zoomedInRegion = {
            ...selectedRegion,
            latitudeDelta: getLatLongDelta(
                currentZoomLevel,
                selectedRegion.latitude
            )[1],
            longitudeDelta: getLatLongDelta(
                currentZoomLevel,
                selectedRegion.latitude
            )[0]
        };

        setSelectedRegion(zoomedInRegion);
        setZoom(currentZoomLevel);
        mapRef?.current?.animateToRegion(zoomedInRegion, 100);
    };

    const getLatLongDelta = (zoom, latitude) => {
        const LONGITUDE_DELTA = Math.exp(Math.log(360) - zoom * Math.LN2);
        const ONE_LATITUDE_DEGREE_IN_METERS = 111.32 * 1000;
        const accurateRegion =
            LONGITUDE_DELTA *
            (ONE_LATITUDE_DEGREE_IN_METERS * Math.cos(latitude * (Math.PI / 180)));
        const LATITUDE_DELTA = accurateRegion / ONE_LATITUDE_DEGREE_IN_METERS;

        return [LONGITUDE_DELTA, LATITUDE_DELTA];
    };


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

                    <View style={styles.mapContainer}>
                        <MapView
                            style={styles.map}
                            ref={mapRef}
                            initialRegion={selectedRegion}
                            onRegionChangeComplete={region => {
                                setSelectedRegion(region);
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


                        <View style={styles.zoomControlContainer}>
                            <LongButton_Icon
                                iconName={'plus'}
                                iconSize={15}
                                buttonColor={white}
                                buttonStyle={[styles.zoomControlButton, { opacity: zoom === MAX_ZOOM_LEVEL ? 0.2 : 1 }]}
                                onPressFunction={() => handleZoom(true)}
                            />
                            <LongButton_Icon
                                iconName={'minus'}
                                iconSize={15}
                                buttonColor={white}
                                buttonStyle={[styles.zoomControlButton, { opacity: zoom === MIN_ZOOM_LEVEL ? 0.2 : 1 }]}
                                onPressFunction={() => handleZoom(false)}
                            />
                        </View>
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
const zoomControlContainerHeight = mapHeight * 0.1;
const zoomControlContainerWidth = mapWidth * 0.2;

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
    zoomControlContainer: {
        // ...GlobalStyle.row_wrapper,
        width: zoomControlContainerWidth,
        height: zoomControlContainerHeight,
        position: 'absolute',
        bottom: zoomControlContainerHeight + 10,
        right: -30,

    },
    zoomControlButton: {
        margin: 0,
        width: zoomControlContainerWidth / 2,
        height: zoomControlContainerHeight,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
    }
})

export default Shop_Detail;
