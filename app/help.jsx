
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Avatar, Button, Text, Card } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';    
import {Link} from "expo-router";

const HelpTab = () => {
  return (
    <View style={styles.container}>
    
      <View style={styles.profileContainer}>
        <Avatar.Image source={{ uri: "../assets/sumit.png" }} size={50} />
        <Avatar.Icon icon="account" size={50} style={styles.icon} />
      </View>

      <Text style={styles.helpText}>Help, user</Text>

      
      <Card style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 12.9716, 
            longitude: 77.5946,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        >
          <Marker coordinate={{ latitude: 12.9716, longitude: 77.5946 }} title="Ali Akbar Khan" />
        </MapView>
      </Card>

      
      <Button mode="contained" style={styles.confirmButton}>
        <Link href="/track">Tap to confirm</Link>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginLeft: -10,
    backgroundColor: 'white',
  },
  helpText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  mapContainer: {
    width: '90%',
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: 'black',
    paddingVertical: 10,
    padding: 30,
    
  },
});

export default HelpTab;