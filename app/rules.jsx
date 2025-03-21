import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text, Card, Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const RulesTab = () => {
  const { back } = useRouter();

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <Text style={styles.heading}>Community Guidelines & Rules</Text>

      {/* Rules List */}
      <ScrollView contentContainerStyle={styles.rulesContainer}>
        <Card style={styles.ruleCard}>
          <View style={styles.ruleRow}>
            <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
            <Text style={styles.ruleText}>Respect all members and maintain a friendly environment.</Text>
          </View>
        </Card>

        <Card style={styles.ruleCard}>
          <View style={styles.ruleRow}>
            <Ionicons name="shield-checkmark" size={24} color="#FF9800" />
            <Text style={styles.ruleText}>Follow all safety protocols and report suspicious activities.</Text>
          </View>
        </Card>

        <Card style={styles.ruleCard}>
          <View style={styles.ruleRow}>
            <Ionicons name="alert-circle" size={24} color="#E53935" />
            <Text style={styles.ruleText}>Harassment, discrimination, or abuse will not be tolerated.</Text>
          </View>
        </Card>

        <Card style={styles.ruleCard}>
          <View style={styles.ruleRow}>
            <Ionicons name="chatbubble-ellipses" size={24} color="#2196F3" />
            <Text style={styles.ruleText}>Use appropriate language in all communications.</Text>
          </View>
        </Card>

        <Card style={styles.ruleCard}>
          <View style={styles.ruleRow}>
            <Ionicons name="lock-closed" size={24} color="#673AB7" />
            <Text style={styles.ruleText}>Do not share personal or confidential information.</Text>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
    width: "100%",
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 15,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#333",
  },
  rulesContainer: {
    paddingBottom: 20,
  },
  ruleCard: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
    width: "100%",
  },
  ruleRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
  },
  ruleText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#444",
    width: "fit-content",
  },
});

export default RulesTab;
