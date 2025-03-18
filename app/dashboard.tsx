import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Card, Avatar, Text, Button } from "react-native-paper";
import {Link} from "expo-router";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.header}>
          <Avatar.Image 
            size={60} 
            source={{ uri: "https://your-image-url.com/profile.jpg" }} 
          />
          <Text style={styles.name}>sumit payan</Text>
        </View>

        <Text style={styles.title}>3 - STAR OFFICER</Text>

        <View style={styles.starsContainer}>
                </View>

        <Card style={styles.statCard}>
          <Text>⭐ Total Saves: 4</Text>
        </Card>
        <Card style={styles.statCard}>
          <Text>⭐ Total Assists: 2</Text>
        </Card>

        <Button mode="contained" style={styles.backButton}>
            <Link href="/welcome">Back</Link>
          
        </Button>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "80%",
    padding: 20,
    backgroundColor: "#FAD776",
    alignItems: "center",
    borderRadius: 10,
  },
  header: {
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  starsContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  star: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
  statCard: {
    width: "90%",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#FFF",
    borderRadius: 10,
    alignItems: "center",
  },
  backButton: {
    marginTop: 10,
    backgroundColor: "#000",
  },
});

export default ProfileScreen;