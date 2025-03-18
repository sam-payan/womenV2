import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Text, Card } from "react-native-paper";
import MapView, { Marker } from "react-native-maps";
import {Link} from "expo-router";
const TrackScreen = () => {
  return (
    <View style={styles.container}>
      
      <Card style={styles.locationCard}>
        <Text>📍 Your current location</Text>
      </Card>
      <Card style={styles.locationCard}>
        <Text>📍 Your selected location</Text>
      </Card>

      
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 22.5726, 
          longitude: 88.3639, 
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker coordinate={{ latitude: 22.5726, longitude: 88.3639 }}>
          
        </Marker>
      </MapView>

      
      <View style={styles.statusContainer}>
        <Button mode="contained" style={styles.sosButton}>
          🚨 Automatic SOS: ON
        </Button>
        <Button mode="contained" style={styles.confirmedButton}>
          ✅ Confirmed
        </Button>
        <Button mode="contained" style={styles.backButton}>
            <Link href="help">Back</Link>
          
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", padding: 10 },
  locationCard: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  map: { width: "100%", height: 300, marginVertical: 10 },
  markerImage: { width: 50, height: 50, borderRadius: 25 },
  statusContainer: { alignItems: "center", marginTop: 10 },
  sosButton: { backgroundColor: "red", width: "90%", marginBottom: 5 },
  confirmedButton: { backgroundColor: "green", width: "90%", marginBottom: 5 },
  backButton: { backgroundColor: "black", width: "90%" },
});

export default TrackScreen;