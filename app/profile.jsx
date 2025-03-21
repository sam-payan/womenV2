import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Card, Avatar } from "react-native-paper";
import { Link } from "expo-router";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        {/* Profile Avatar */}
        <Avatar.Image 
          size={100} 
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }} 
          style={styles.avatar}
        />

        {/* Name & Rank */}
        <Text style={styles.name}>Sumit Payan</Text>
        <Text style={styles.title}>3 - STAR OFFICER</Text>

        {/* Personal Information */}
          <Text style={styles.infoText}>📧 Email: sumitpayan@example.com</Text>
          <Text style={styles.infoText}>📞 Phone: +91 9876543210</Text>
          <Text style={styles.infoText}>🏠 Address: Mumbai, India</Text>

        
        {/* Buttons */}
        <Button mode="contained" style={styles.editButton}>
          Edit Profile
        </Button>

        <Button mode="contained" style={styles.logoutButton}>
          Logout
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
    width: "85%",
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  avatar: {
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  infoText: {
    fontSize: 14,
    marginVertical: 3,
    marginBottom: 5,
  },
  statCard: {
    width: "90%",
    padding: 10,
    marginVertical: 5,
  },
  editButton: {
    marginTop: 15,
    backgroundColor: "#3498db",
  },
  logoutButton: {
    marginTop: 10,
    backgroundColor: "#e74c3c",
  },
  backLink: {
    marginTop: 10,
    color: "blue",
  },
});

export default ProfileScreen;
