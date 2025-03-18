import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import {Link} from "expo-router";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.profileCard}>
        <View style={styles.profileContent}>
          <Image

            style={styles.profileImage}
          />
          <Text style={styles.profileText}>Welcome, sumit payan</Text>
        </View>
      </Card>

           <Card style={styles.optionsCard}>
        <Button mode="contained" icon="view-dashboard" style={styles.button}>
          <Link href="/dashboard">Dashboard</Link>
        </Button>
        <Button mode="contained" icon="help-circle" style={styles.button}>
        <Link href="/help">Check for help</Link> 
        </Button>
        <Button mode="contained" icon="book-open" style={styles.button}>
          Rules & Regulations
        </Button>
        <Button mode="contained" icon="headset" style={styles.button}>
            help & support
        </Button>

        
        <Button mode="contained" style={styles.backButton} color="black">
          <Link href="signin">Back</Link>
        </Button>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  profileCard: {
    width: "90%",
    backgroundColor: "#D3D3D3",
    padding: 50,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  profileContent: {
    alignItems: "center",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  profileText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  optionsCard: {
    width: "90%",
    backgroundColor: "white",
    padding: 40,
    margin: 40,
    borderRadius: 10,
    elevation: 3,
  },
  button: {
    marginVertical: 5,
    borderRadius: 20,
    margin:10,
  },
  backButton: {
    marginTop: 10,
    borderRadius: 10,
  },
});

export default HomeScreen;