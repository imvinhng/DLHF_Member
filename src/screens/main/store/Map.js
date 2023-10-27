import React, { useRef, useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { LongButton_Icon5, PromotionButton, NotificationButton, LongButton_Icon } from '../../../utils/CustomButton';
import MapView, { Marker } from 'react-native-maps';
import { DATA } from '../../../db/Database';
import { WAREHOUSE_REPORT } from '../../../db/ttp_report_warehouse';
import SearchBar from '../../../utils/SearchBar';
import GlobalStyle from '../../../assets/style/GlobalStyle';
import { white } from '../../../assets/style/Colors';
import { HeaderPN } from '../../../utils/Header';

export default function Map({ route, navigation }) {

    const [clicked, setClicked] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState('');
    const mapRef = useRef(null);

    const MIN_ZOOM_LEVEL = 3;
    const MAX_ZOOM_LEVEL = 20;
    const LATITUDE = 10.769671;
    const LONGITUDE = 106.678000;

    const [favoriteAdded, setFavoriteAdded] = useState(false);
    const [zoom, setZoom] = useState(15);

    const [selectedRegion, setSelectedRegion] = useState({
        latitude: LATITUDE,
        longitude: LONGITUDE,
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

            <HeaderPN title={'Store'} style={{ paddingBottom: -10 }} />

            <View style={styles.bottom_header}>
                <SearchBar
                    searchPhrase={searchPhrase}
                    setSearchPhrase={setSearchPhrase}
                    clicked={clicked}
                    setClicked={setClicked}
                    containerStyle={styles.search_container}
                    closeBtnStyle={styles.search_close}
                />

                <LongButton_Icon5
                    iconName={'bars'}
                    iconSize={23}
                    buttonColor={white}
                    buttonStyle={styles.map_btn}
                    textStyle={[styles.text_map, GlobalStyle.text]}
                    text={'List'}
                    onPressFunction={() => navigation.navigate('Store', { screen: 'StoreScreen' })}
                />
            </View>

            <View style={styles.body}>
                <MapView
                    style={styles.map}
                    ref={mapRef}
                    initialRegion={{
                        latitude: LATITUDE,
                        longitude: LONGITUDE,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    zoomEnabled
                    minZoomLevel={0}
                >
                    {WAREHOUSE_REPORT.map((item, index) =>
                        <Marker
                            coordinate={{ latitude: parseFloat(item.Lat), longitude: parseFloat(item.Long) }}
                            pinColor={item.Color} // any color
                            title={item.Title}
                            description={item.Address}
                            key={index}
                        />)}
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

    );
}

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');
const mapHeight = 300; const mapWidth = ScreenWidth * 0.9;
const zoomControlContainerHeight = mapHeight * 0.1;
const zoomControlContainerWidth = mapWidth * 0.2;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: white
    },
    body: {
        backgroundColor: '#d8d8d8',
        flex: 1,
    },
    header: {
        flexDirection: 'column',
        paddingTop: Platform.OS == 'ios' ? 56 : 0,
    },
    top_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottom_header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
    },
    sub_header_right: {
        flexDirection: 'row',
        marginRight: 15,
    },
    sub_header_left: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    text_large: {
        fontSize: 24,
        fontWeight: '600',
        marginLeft: 20,
    },
    text_subtitle: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
    },
    text_small: {
        fontSize: 15,
        margin: 5,
        padding: 10,
    },
    text_smaller: {
        fontSize: 13,
        fontWeight: '300',
    },
    text_small_bold: {
        fontSize: 13,
        fontWeight: '600',
    },
    text_light: {
        fontSize: 13,
        fontWeight: '200',
        marginTop: 25,
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
    },
    map: {
        width: '100%',
        height: '100%',
    },
    map_btn: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: -10,
        width: 100,
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
});
