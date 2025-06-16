import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    Alert,
} from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";


export default function Map() {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [initialRegion, setInitialRegion] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                Alert.alert("Permission denied", "Location access is required to use this feature.");
                setLoading(false);
                return;
            }

            try {
                let location = await Location.getCurrentPositionAsync({});
                setCurrentLocation(location.coords);
                setInitialRegion({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                });
            } catch (error) {
                Alert.alert("Error", "Failed to fetch location.");
            } finally {
                setLoading(false);
            }
        };

        getLocation();
    }, []);

    return (
        <View style={styles.container}>
            {loading ? (
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size="large" color="#007AFF" /></View>
            ) : initialRegion ? (
                <MapView
                    style={styles.map}
                    initialRegion={initialRegion}
                    showsUserLocation={true}
                >
                    {currentLocation && (
                        <Marker
                            coordinate={{
                                latitude: currentLocation.latitude,
                                longitude: currentLocation.longitude,
                            }}
                            title="Your Location"
                        />
                    )}
                </MapView>
            ) : (
                <Text>Location not available</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    map: {
        width: '100%',
        height: '95%',
    },
});
