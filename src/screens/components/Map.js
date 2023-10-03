import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { LongButton_Icon, PromotionButton, NotificationButton } from '../../utils/CustomButton';
import MapView, { Marker } from 'react-native-maps';
import { DATA } from '../../db/Database';
import SearchBar from './SearchBar';

export default function Map({ route, navigation }) {

    const [clicked, setClicked] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState('');

    return (
        <SafeAreaView style={styles.home}>

            <View style={styles.top_header}>
                <View style={styles.sub_header_left}>
                    <Text style={styles.text_large}>Store</Text>
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
                    clicked={clicked}
                    setClicked={setClicked}
                    containerStyle={styles.search_container}
                    closeBtnStyle={styles.search_close}
                />

                <LongButton_Icon
                    iconName={'bars'}
                    iconSize={23}
                    buttonColor={'#f8f8f6'}
                    buttonStyle={styles.map_btn}
                    textStyle={styles.text_map}
                    text={'List'}
                    onPressFunction={() => navigation.navigate('Store')}
                />
            </View>

            <View style={styles.body}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 10.769671,
                        longitude: 106.678000,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    zoomEnabled
                    minZoomLevel={0}
                >
                    {DATA.map((item, index) =>
                        <Marker
                            coordinate={{ latitude: item.lat, longitude: item.long }}
                            pinColor={"purple"} // any color
                            title={item.location}
                            description={item.address}
                            key={index}
                        />)}
                </MapView>
            </View>

        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#f8f8f6'
    },
    body: {
        backgroundColor: '#d8d8d8',
        flex: 1,
    },
    header: {
        flexDirection: 'column',
        backgroundColor: '#f7f0af',
        paddingTop: Platform.OS == 'ios' ? 56 : 0,
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
        marginLeft: -25,
        margin: 10,
    },
    search_close: {
        position: 'absolute',
        left: 252,
        top: 8,
    },
});
