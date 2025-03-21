import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card, Avatar, Text, DataTable } from "react-native-paper";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const DashboardScreen = () => {
  const screenWidth = Dimensions.get("window").width;

  // Sample Data for Pie Chart
  const requestData = [
    { name: "Accepted", count: 40, color: "#4CAF50", legendFontColor: "#000", legendFontSize: 14 },
    { name: "Pending", count: 25, color: "#FFC107", legendFontColor: "#000", legendFontSize: 14 },
    { name: "Denied", count: 15, color: "#F44336", legendFontColor: "#000", legendFontSize: 14 },
  ];

  // Sample Data for Table
  const requestList = [
    { id: 1, user: "John Doe", status: "Accepted" },
    { id: 2, user: "Jane Smith", status: "Pending" },
    { id: 3, user: "Mike Johnson", status: "Denied" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Section (1/4 Screen) */}
      <Card style={styles.profileCard}>
        <View style={styles.profileHeader}>
          <Avatar.Image size={60} source={{ uri: "https://your-image-url.com/profile.jpg" }} />
          <Text style={styles.profileName}>Sumit Payan</Text>
        </View>
        <Text style={styles.rank}>🌟 3 - STAR OFFICER 🌟</Text>
        <View style={styles.stats}>
          <Text>⭐ Total Saves: 4</Text>
          <Text>⚡ Total Assists: 2</Text>
        </View>
      </Card>

      {/* Circular Graph (Requests Data) */}
      <View style={styles.chartContainer}>
        <Text style={styles.sectionTitle}>Requests Overview</Text>
        <PieChart
          data={requestData}
          width={screenWidth * 0.9}
          height={220}
          chartConfig={{
            backgroundColor: "#f5f5f5",
            backgroundGradientFrom: "#f5f5f5",
            backgroundGradientTo: "#f5f5f5",
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor={"count"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          absolute
        />
      </View>

      {/* Requests Table */}
      <View style={styles.tableContainer}>
        <Text style={styles.sectionTitle}>Requests List</Text>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>User</DataTable.Title>
            <DataTable.Title>Status</DataTable.Title>
          </DataTable.Header>

          {requestList.map((item) => (
            <DataTable.Row key={item.id}>
              <DataTable.Cell>{item.user}</DataTable.Cell>
              <DataTable.Cell>
                {item.status === "Accepted" ? (
                  <MaterialIcons name="check-circle" size={20} color="green" />
                ) : item.status === "Pending" ? (
                  <MaterialIcons name="hourglass-empty" size={20} color="orange" />
                ) : (
                  <MaterialIcons name="cancel" size={20} color="red" />
                )}
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  profileCard: {
    width: "90%",
    backgroundColor: "#FFD700",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  rank: {
    marginVertical: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: "#DAA520",
  },
  stats: {
    marginTop: 5,
    alignItems: "center",
  },
  chartContainer: {
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tableContainer: {
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
  },
});

export default DashboardScreen;
