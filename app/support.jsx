import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text, Button, Avatar } from "react-native-paper";
import { useRouter } from "expo-router";

export default function SupportScreen(){
  const { back } = useRouter();

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Need Help?</Text>
      <Text style={styles.subtitle}>
        We're here to assist you. Choose an option below.
      </Text>

      
      <Card style={styles.card} onPress={() => alert("Calling Helpline...")}>
        <View style={styles.row}>
          <Avatar.Icon size={40} icon="phone" style={styles.icon} />
          <Text style={styles.cardText}>Helpline: 1800-123-456</Text>
        </View>
      </Card>

      <Card style={styles.card} onPress={() => alert("Opening Email...")}>
        <View style={styles.row}>
          <Avatar.Icon size={40} icon="email" style={styles.icon} />
          <Text style={styles.cardText}>Email: support@example.com</Text>
        </View>
      </Card>

      <Card style={styles.card} onPress={() => alert("Opening FAQs...")}>
        <View style={styles.row}>
          <Avatar.Icon size={40} icon="help-circle" style={styles.icon} />
          <Text style={styles.cardText}>FAQs & Guides</Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    padding: 20,
    justifyContent: "center",
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 20,

    
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#666",
    
  },
  card: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    backgroundColor: "#FFD700",
    marginRight: 15,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

